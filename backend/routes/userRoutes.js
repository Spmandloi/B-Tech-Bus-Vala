// // const express = require('express');
// // const router = express.Router();
// // const bcrypt = require('bcrypt');
// // const User = require('./Models/user');

// // // Signup route
// // router.post('/signup', async (req, res) => {
// //   try {
// //     const { username, password } = req.body;
// //     const hashedPassword = await bcrypt.hash(password, 10);
// //     const user = await User.create({ username, password: hashedPassword });
// //     req.session.userId = user._id;
// //     res.status(201).json({ message: 'Signup successful', user });
// //   } catch (err) {
// //     res.status(500).json({ error: 'Signup failed' });
// //   }
// // });

// // // Login route
// // router.post('/login', async (req, res) => {
// //   try {
// //     const { username, password } = req.body;
// //     const user = await User.findOne({ username });

// //     if (!user) {
// //       return res.status(401).json({ error: 'Invalid credentials' });
// //     }

// //     const isPasswordValid = await bcrypt.compare(password, user.password);

// //     if (!isPasswordValid) {
// //       return res.status(401).json({ error: 'Invalid credentials' });
// //     }

// //     req.session.userId = user._id;
// //     res.json({ message: 'Login successful', user });
// //   } catch (err) {
// //     res.status(500).json({ error: 'Login failed' });
// //   }
// // });

// // module.exports = router;

// let mongoose = require('mongoose'),
//   express = require('express'),
//   router = express.Router()

// // Student Model
// let userSchema = require('../Models/User')

// // CREATE User
// router.route('/signup').post((req, res, next) => {
//   userSchema.create(req.body, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       console.log(data)
//       res.json(data)
//     }
//   })
// })

// // // READ Students
// // router.route('/').get((req, res) => {
// //   studentSchema.find((error, data) => {
// //     if (error) {
// //       return next(error)
// //     } else {
// //       res.json(data)
// //     }
// //   })
// // })

// // // Get Single Student
// // router.route('/edit-student/:id').get((req, res) => {
// //   studentSchema.findById(req.params.id, (error, data) => {
// //     if (error) {
// //       return next(error)
// //     } else {
// //       res.json(data)
// //     }
// //   })
// // })

// // // Update Student
// // router.route('/update-student/:id').put((req, res, next) => {
// //   studentSchema.findByIdAndUpdate(
// //     req.params.id,
// //     {
// //       $set: req.body,
// //     },
// //     (error, data) => {
// //       if (error) {
// //         return next(error)
// //         console.log(error)
// //       } else {
// //         res.json(data)
// //         console.log('Student updated successfully !')
// //       }
// //     },
// //   )
// // })

// // // Delete Student
// // router.route('/delete-student/:id').delete((req, res, next) => {
// //   studentSchema.findByIdAndRemove(req.params.id, (error, data) => {
// //     if (error) {
// //       return next(error)
// //     } else {
// //       res.status(200).json({
// //         msg: data,
// //       })
// //     }
// //   })
// // })

// module.exports = router


