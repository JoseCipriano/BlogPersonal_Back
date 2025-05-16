import { Schema, model } from "mongoose";


const publicationSchema = new Schema({
    title: {
        type: String,
        required: [true, "El titulo de la publicacion es requerido"], 
        maxLenght: [100, "La publicacio no puede sobrepasarse de 100 carateres"],
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    course: {
        type: String,
        enum: ['Taller', 'Tecnologia', 'Practica Supervisada'],
        required: true
    },
    dateCreated: {
        type: Date, 
        default: Date.now
    }
},{
    timestamps: true, 
    versionKey: false
});

export default model('Publication', publicationSchema)