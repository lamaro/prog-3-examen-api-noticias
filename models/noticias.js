const mongoose = require('mongoose'),
	Schema = mongoose.Schema;

const leadSchema = new Schema({
    id:{ type: String },
    titulo:{ type: String },
    contenido:{ type: String },
    imagen:{ type: String },
    autor:{ type: String }
});

module.exports = mongoose.model('Noticia', leadSchema,'noticias');
