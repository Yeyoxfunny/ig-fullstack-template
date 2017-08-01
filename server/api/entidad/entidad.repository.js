'use strict';
const Entidad = require('./entidad.model');

module.exports = {
  get: function() {
    return Entidad.find();
  },
  getById: function(id) {
    return Entidad.findById(id);
  },
  add: function(entidad) {
    let _entidad = new Entidad(entidad);
    return _entidad.save();
  },
  update: function(id, entity) {
    return Entidad.findByIdAndUpdate(id, entity, { new: true });
  },
  remove: function(id) {
    return Entidad.findByIdAndRemove(id);
  }
};
