let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router()

// Student Model
let busSchema = require('../Models/Student')

// const busList = [
//   {
//     _id: '64cca63b2b99c772491fa4b5',
//     date: '2023-08-10',
//     source: 'City A',
//     destination: 'City B',
//     totalSeat: 50,
//     category: 'AC',
//     fare: 500,
//     boardingPoint: 'Point A',
//     boardingTime: '10:00 AM',
//     droppingPoint: 'Point B',
//     droppingTime: '5:00 PM'
//   },
//   // Add more bus data here...
// ];

// GET Bus Booking
router.get('/booking', (req, res) => {
  const { date, source, destination } = req.query;

  busSchema.findOne(
    {
      date: date,
      source: source,
      destination: destination
    },
    (error, matchingBus) => {
      if (error) {
        return res.status(500).json({ error: 'An error occurred' });
      }

      if (matchingBus) {
        res.json({ match: true, bus: matchingBus });
      } else {
        res.json({ match: false });
      }
    }
  );
});


// CREATE Student
router.route('/create-bus').post((req, res, next) => {
  busSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
})

// READ Students
router.route('/').get((req, res) => {
  busSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Student
router.route('/edit-bus/:id').get((req, res) => {
  busSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update Student
router.route('/update-bus/:id').put((req, res, next) => {
  busSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error)
        console.log(error)
      } else {
        res.json(data)
        console.log('Student updated successfully !')
      }
    },
  )
})

// Delete Student
router.route('/delete-bus/:id').delete((req, res, next) => {
  busSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data,
      })
    }
  })
})

module.exports = router
