"use strict";

var mongoose = require('mongoose');
var Task = mongoose.model('Tasks');

exports.ListAllTasks = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
        res.send(err);
      res.json(task);
  });
};

exports.CreateTask = function(req, res) {
  var newTask = new Task(req.body);
  newTask.save(function(err, task) {
    if (err)
        res.send(err);
      res.json(task);
  });
};

exports.ReadTask = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.UpdateTask = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new:true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.DeleteTask = function(req, res) {
  Task.remove({_id: req.params.taskId}, req.body, {new:true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};
