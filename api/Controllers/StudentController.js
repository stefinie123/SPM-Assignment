var mongoose = require('../DBConfig/DBConfig');
var StudentSchema = mongoose.model('Student');

var studentController = function () {
    //add student details function, inputs: JSON object of student type
    this.addStudent = function (studentInstance) {
        // console.log(studentInstance);
        return new Promise(function(resolve, reject){
            var student = new  StudentSchema({
                ITNo: studentInstance.ITNo,
                name: studentInstance.name,
                address: studentInstance.address,
                homeNo: studentInstance.homeNo,
                mobileNo:studentInstance.mobileNo,
                email: studentInstance.email,
                semester: studentInstance.semester,
                year:studentInstance.year
            });
            student.save().then(function () {
                resolve({status: 201, message: 'Student details registered'});
            }).catch(function (reason) {
                reject({status: 500, message:'Error occured'+ reason});
            });
        });
    }

    //get all registered students from the db
    this.getStudents = function () {
        return new Promise(function (resolve, reject) {
            StudentSchema.find().exec().then(function (studentData) {
                resolve({status: 200, data: studentData});
            }).catch(function (reason) {
                reject({status: 500, message:'Error occured'+ reason});
            });
        });
    }

    //getting a single student by id
    this.getStudent = function (id) {
        return new Promise(function (resolve, reject) {
            StudentSchema.find({_id: id}).exec().then(function (student) {
                resolve({status: 200, data: student});
            }).catch(function (reason) {
                reject({status: 500, message:'Error occured'+ reason});
            });
        });
    }

    //search students by IT number
    this.getByITNo = function (ITNo) {
        return new Promise(function (resolve, reject) {
            StudentSchema.find({ITNo: ITNo}).exec().then(function (student) {
                resolve({status: 200, data: student});
            }).catch(function (reason) {
                reject({status: 500, message:'Error occured'+ reason});
            });
        });
    }

    //update student details
    this.updateStudent = function (id, student) {
        return new Promise(function (resolve, reject) {
            StudentSchema.update({_id: id}, student).then(function () {
                resolve({status: 200, message: 'Student details updated'});
            }).catch(function (reason) {
                reject({status: 500, message:'Error occured'+ reason});
            });
        });
    }

    //deleting students
    this.deleteStudent = function (id) {
        return new Promise(function (resolve, reject) {
            StudentSchema.remove({_id: id}).then(function () {
                resolve({status: 200, message: 'Student deleted'});
            }).catch(function (reason) {
                reject({status: 500, message:'Error occured'+ reason});
            });
        })

    }
}

module.exports = new studentController();