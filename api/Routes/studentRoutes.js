var express = require('express');
var router = express.Router();
var controller = require('../Controllers/StudentController');

router.post('/', function (req, res) {
    console.log("aaaa");
    controller.addStudent(req.body).then(function (data) {
        res.status(data.status).send(data.message);
    }).catch(function (err) {
        res.status(500).send(err.message);
    });
});

router.get('/', function (req, res) {
    if (req.query.ITNo) {
        controller.getByITNo(req.query.ITNo).then(function (data) {
            res.status(data.status).send(data.data);
        }).catch(function (err) {
            res.status(500).send(err.message);
        });
    }
    else {
        controller.getStudents().then(function (data) {
            res.status(data.status).send(data.data);
        }).catch(function (err) {
            res.status(500).send(err.message);
        });
    }
});

router.get('/:id', function (req, res) {
    controller.getStudent(req.params.id).then(function (data) {
        res.status(data.status).send(data.data);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    });
});

router.put('/:id', function (req, res) {
    controller.updateStudent(req.params.id, req.body).then(function (data) {
        res.status(data.status).send(data.message);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    });
});

router.delete('/:id', function (req, res) {
    controller.deleteStudent(req.params.id).then(function (data) {
        res.status(data.status).send(data.message);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    });
});

module.exports = router;