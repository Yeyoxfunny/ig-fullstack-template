const repository = require('./entidad.repository');

function getAll(req, res) {
  repository.get()
    .then(entities => {
      res.json(entities);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then(entity => {
      if (!entity) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(entity);
    })
    .catch(handleError(res));
}

function insertEntity(req, res) {
  const _entity = {
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    price: req.body.price,
    picture: req.body.picture
  }

  repository.add(_entity)
    .then(entity => {
      res.status(201).json(entity);
    })
    .catch(handleError(res));
}

function updateEntity(req, res) {
  const id = req.params.id;
  const _entity = {
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    price: req.body.price,
    picture: req.body.picture
  }
  repository.update(id, _entity)
    .then(entity => {
      if (!entity) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(entity);
    })
    .catch(handleError(res));
}

function deleteEntity(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then(entity => {
      if (!entity) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.status(204).json();
    })
    .catch(handleError(res));
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function (err) {
    res.status(statusCode).json({ msg: `Error al realizar la petición ${err}` });
  };
}

module.exports = {
  getAll,
  getById,
  insertEntity,
  updateEntity,
  deleteEntity
}
