const express = require('express');
const router = express.Router();
const subject = require('./subject');
const auth = require('./auth');
const plan = require('./plan');
const user = require('./user');
const student = require('./student');
const semester = require('./semester');
const student_subject = require('./student_subject');
const academic_year = require('./academic_year');

router.use('/subject',subject);
router.use('/auth',auth);
router.use('/plan',plan);
router.use('/student',student);
router.use('/user',user);
router.use('/semester',semester);
router.use('/student_subject',student_subject);
router.use('/academic_year',academic_year);


module.exports = router