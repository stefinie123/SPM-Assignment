var express = require('express');
var router = express.Router();
var controller = require('../Controllers/StudentController');

//HTTP method: POST  inputs: Student object
router.post('/', function (req, res) {
    console.log("aaaa");
    controller.addStudent(req.body).then(function (data) {
        res.status(data.status).send(data.message);
    }).catch(function (err) {
        res.status(500).send(err.message);
    });
});

//HTTP method: GET inputs: NON
router.get('/', function (req, res) {
    //checking whether query parameter of IT number exists
    if (req.query.ITNo) {
        controller.getByITNo(req.query.ITNo).then(function (data) {
            res.status(data.status).send(data.data);
        }).catch(function (err) {
            res.status(500).send(err.message);
        });
    }//if not get all students , return: student details
    else {
        controller.getStudents().then(function (data) {
            res.status(data.status).send(data.data);
        }).catch(function (err) {
            res.status(500).send(err.message);
        });
    }
});

//HTTP method: GET , inputs: @query_param id
router.get('/:id', function (req, res) {
    controller.getStudent(req.params.id).then(function (data) {
        res.status(data.status).send(data.data);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    });
});

//HTTP method: PUT , inputs: @query_param id, student json object(@req_body)
router.put('/:id', function (req, res) {
    controller.updateStudent(req.params.id, req.body).then(function (data) {
        res.status(data.status).send(data.message);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    });
});

//HTTP method: DELETE , inputs: @query_param id
router.delete('/:id', function (req, res) {
    controller.deleteStudent(req.params.id).then(function (data) {
        res.status(data.status).send(data.message);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    });
});

module.exports = router;