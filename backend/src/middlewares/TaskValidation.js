const TaskModel = require('../models/TaskModel');
const { isPast } = require('date-fns');

const TaskValidation = async (req, res, next) => {
  const { macaddress, type, title, description, when } = req.body;

  if (!macaddress)
    return res.status(400).json({ error: 'O macaddress é obrigatório' });
  else if (!type)
    return res.status(400).json({ error: 'O tipo é obrigatório' });
  else if (!title)
    return res.status(400).json({ error: 'O título é obrigatório' });
  else if (!description)
    return res.status(400).json({ error: 'A descrição é obrigatória' });
  else if (!when)
    return res.status(400).json({ error: 'A data e hora são obrigatórios' });
  else if (isPast(new Date(when)))
    return res.status(400).json({ error: 'Escolha uma data e hora futura' });
  else {
    let exists;

    if (req.params.id) {
      exists = await TaskModel.findOne({
        'when': { '$eq': new Date(when) },
        'macaddress': { '$in': macaddress },
        '_id': { '$ne': req.params.id }
      });
    } else {
      exists = await TaskModel.findOne({
        'when': { '$eq': new Date(when) },
        'macaddress': { '$in': macaddress }
      });
    }

    if (exists)
      return res.status(400).json({ error: 'Já existe uma atividade nessa data' });

    next();
  }
};

module.exports = TaskValidation;