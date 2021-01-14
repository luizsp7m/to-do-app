const TaskModel = require('../models/TaskModel');
const { startOfDay, endOfDay, startOfWeek, endOfWeek, startOfMonth, endOfMonth, startOfYear, endOfYear } = require('date-fns');

const current = new Date();

class TaskController {
  async create(req, res) {
    const task = new TaskModel(req.body);
    await task.save().then(response => {
      return res.status(200).json(response);
    }).catch(err => {
      return res.status(500).json(err);
    });
  }

  async update(req, res) {
    await TaskModel.findByIdAndUpdate({
      '_id': req.params.id
    }, req.body, { new: true }).then(response => {
      return res.status(200).json(response);
    }).catch(err => {
      return res.status(500).json(err);
    });
  }

  async all(req, res) {
    await TaskModel.find({
      macaddress: { '$in': req.params.macaddress }
    }).sort('when').then(response => {
      return res.status(200).json(response);
    }).catch(err => {
      return res.status(500).json(err);
    });
  }

  async show(req, res) {
    await TaskModel.findById({
      _id: req.params.id
    }).then(response => {
      if (response)
        return res.status(200).json(response);
      else
        return res.status(404).json({ error: 'Tarefa não encontrada' });
    }).catch(err => {
      return res.status(500).json(err);
    });
  }

  async delete(req, res) {
    await TaskModel.findByIdAndDelete({
      _id: req.params.id
    }).then(response => {
      if (response)
        return res.status(200).json(response);
      else
        return res.status(404).json({ error: 'Tarefa não encontrada' });
    }).catch(err => {
      return res.status(500).json(err);
    });
  }

  async done(req, res) {
    await TaskModel.findByIdAndUpdate({ '_id': req.params.id }, { 'done': req.params.done }, { new: true }).then(response => {
      if (response)
        return res.status(200).json(response);
      else
        return res.status(404).json({ error: 'Tarefa não encontrada' });
    }).catch(err => {
      return res.status(500).json(err);
    });
  }

  async late(req, res) {
    await TaskModel.find({
      'when': { '$lt': current },
      'macaddress': { '$in': req.params.macaddress }
    }).sort('when').then(response => {
      return res.status(200).json(response);
    }).catch(err => {
      return res.status(500).json(err);
    });
  }

  async today(req, res) {
    await TaskModel.find({
      'when': { '$gte': startOfDay(current), '$lte': endOfDay(current) },
      'macaddress': { '$in': req.params.macaddress }
    }).sort('when').then(response => {
      return res.status(200).json(response);
    }).catch(err => {
      return err.status(500).json(err);
    });
  }

  async week(req, res) {
    await TaskModel.find({
      'when': { '$gte': startOfWeek(current), '$lte': endOfWeek(current) },
      'macaddress': { '$in': req.params.macaddress }
    }).sort('when').then(response => {
      return res.status(200).json(response);
    }).catch(err => {
      return err.status(500).json(err);
    });
  }

  async month(req, res) {
    await TaskModel.find({
      'when': { '$gte': startOfMonth(current), '$lte': endOfMonth(current) },
      'macaddress': { '$in': req.params.macaddress }
    }).sort('when').then(response => {
      return res.status(200).json(response);
    }).catch(err => {
      return err.status(500).json(err);
    });
  }

  async year(req, res) {
    await TaskModel.find({
      'when': { '$gte': startOfYear(current), '$lte': endOfYear(current) },
      'macaddress': { '$in': req.params.macaddress }
    }).sort('when').then(response => {
      return res.status(200).json(response);
    }).catch(err => {
      return err.status(500).json(err);
    });
  }
}

module.exports = new TaskController();