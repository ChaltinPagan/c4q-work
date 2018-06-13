var express = require('express');
var router = express.Router();

var pgp = require('pg-promise')({});

var conStr = 'postgres://localhost/chaltin';
//conStr += '@localhost:5432/teachersandschools';

var db = pgp(conStr);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Teachers Database');
});

router.get('/teachers/all', function(req, res, next) {
  db.any(`SELECT teachers.id, teachers.name AS teacher, teachers.subject, schools.name AS school
  FROM teachers
  FULL OUTER JOIN schools 
  ON (teachers.schoolid=schools.id)
  `)
  .then(data => {
    res.json(data);
  })
  .catch(err => console.log(err));
});

router.post('/teachers/schools', function(req, res, next) {
  db.any('select * from teachers where schoolid = ${school}',
  req.params)
  .then(function (data) {
    res.status(200)
      .json({
        status: 'success',
        data: data,
        message: 'Fetched teachers'
      });
  })
  .catch(err => console.log(err));
});

// router.post('/teachers/subjects', function(req, res, next) {
//   console.log("req subj:", req)
//   db.any('select * from teachers where subject = ${subj}',
//   req.params)
//   .then(function (data) {
//     res.status(200)
//       .json({
//         status: 'success',
//         data: data,
//         message: 'Fetched teachers'
//       });
//   })
//   .catch(err => console.log(err));
// });

module.exports = router;
