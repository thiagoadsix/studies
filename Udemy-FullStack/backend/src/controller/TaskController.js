const TaskModel = require('../model/TaskModel')

const current = new Date()
const {
  startOfDay,
  endOfDay,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  startOfYear,
  endOfYear,
} = require('date-fns')

module.exports = new (class TaskController {
  async create(req, res) {
    const task = new TaskModel(req.body)
    await task
      .save()
      .then(resp => {
        return res.status(200).json(resp)
      })
      .catch(error => {
        return res.status(500).json({ error: error })
      })
  }

  async update(req, res) {
    await TaskModel.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    })
      .then(resp => {
        return res.status(200).json(resp)
      })
      .catch(error => {
        return res.status(500).json({ error: error })
      })
  }

  async all(req, res) {
    await TaskModel.find({ macAddress: { $in: req.params.macAddress } })
      .sort('when')
      .then(resp => {
        return res.status(200).json(resp)
      })
      .catch(error => {
        return res.status(500).json({ error: error })
      })
  }

  async show(req, res) {
    await TaskModel.findById(req.params.id)
      .then(resp => {
        if (resp) {
          return res.status(200).json(resp)
        } else {
          return res.status(404).json({ error: 'Tarefa não encontrada' })
        }
      })
      .catch(error => {
        return res.status(500).json(error)
      })
  }

  async delete(req, res) {
    await TaskModel.deleteOne({ _id: req.params.id })
      .then(resp => {
        return res.status(200).json(resp)
      })
      .catch(error => {
        return res.status(500).json({ error: error })
      })
  }

  async done(req, res) {
    await TaskModel.findByIdAndUpdate(
      { _id: req.params.id },
      { done: req.params.done },
      { new: true }
    )
      .then(resp => {
        return res.status(200).json(resp)
      })
      .catch(error => {
        return res.status(500).json({ error: error })
      })
  }

  async late(req, res) {
    await TaskModel.find({
      when: { $lt: current },
      macAddress: { $in: req.params.macAddress },
    })
      .sort('when')
      .then(resp => {
        return res.status(200).json(resp)
      })
      .catch(error => {
        return res.status(500).json({ error: error })
      })
  }

  async today(req, res) {
    await TaskModel.find({
      macAddress: { $in: req.params.macAddress },
      when: { $gte: startOfDay(current), $lte: endOfDay(current) },
    })
      .sort('when')
      .then(resp => {
        return res.status(200).json(resp)
      })
      .catch(error => {
        return res.status(500).json(error)
      })
  }

  async weekly(req, res) {
    await TaskModel.find({
      macAddress: { $in: req.params.macAddress },
      when: { $gte: startOfWeek(current), $lte: endOfWeek(current) },
    })
      .sort('when')
      .then(resp => {
        return res.status(200).json(resp)
      })
      .catch(error => {
        return res.status(500).json(error)
      })
  }

  async monthly(req, res) {
    await TaskModel.find({
      macAddress: { $in: req.params.macAddress },
      when: { $gte: startOfMonth(current), $lte: endOfMonth(current) },
    })
      .sort('when')
      .then(resp => {
        return res.status(200).json(resp)
      })
      .catch(error => {
        return res.status(500).json(error)
      })
  }

  async annually(req, res) {
    await TaskModel.find({
      macAddress: { $in: req.params.macAddress },
      when: { $gte: startOfYear(current), $lte: endOfYear(current) },
    })
      .sort('when')
      .then(resp => {
        return res.status(200).json(resp)
      })
      .catch(error => {
        return res.status(500).json(error)
      })
  }
})()
