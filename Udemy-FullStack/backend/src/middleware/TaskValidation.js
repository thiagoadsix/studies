const TaskModel = require('../model/TaskModel')
const { isPast } = require('date-fns')

const TaskValidation = async (req, res, next) => {
  const { macAddress, type, title, description, when } = req.body

  if (!macAddress)
    return res.status(400).json({ error: 'O campo macAddress é obrigatório' })
  else if (!type)
    return res.status(400).json({ error: 'O campo tipo é obrigatório' })
  else if (!title)
    return res.status(400).json({ error: 'O campo título é obrigatório' })
  else if (!description)
    return res.status(400).json({ error: 'O campo descrição é obrigatório' })
  else if (!when)
    return res
      .status(400)
      .json({ error: 'O campo data e hora são obrigatórios' })
  else {
    let exists

    if (req.params.id) {
      exists = await TaskModel.findOne({
        _id: { $ne: req.params.id },
        when: { $eq: new Date(when) },
        macAddress: { $in: macAddress },
      })
    } else {
      if (isPast(new Date(when)))
        return res
          .status(400)
          .json({ error: 'Escolha uma data e hora válida (futura)' })
      exists = await TaskModel.findOne({
        when: { $eq: new Date(when) },
        macAddress: { $in: macAddress },
      })
    }

    if (exists) {
      return res
        .status(400)
        .json({ error: 'Já existe uma tarefa nesse dia e horário' })
    }
    next()
  }
}

module.exports = TaskValidation
