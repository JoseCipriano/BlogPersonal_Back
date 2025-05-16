import { Schema, model} from "mongoose";

const commentSchema = Schema({
    userName: {
        type: String,
        required: true,
        maxLength: [50, "El nombre del usuario no puede sobrepasar 50 caracteres"]
    }, 

    textComment:{
        type: String,
        required: true
    },

    dateComment: {
        type: Date,
        default: Date.now
    }, 
    publication: {
        type: Schema.Types.ObjectId,
        ref: 'Publication',
        required: true
    }
}, {
    timestamps: true, 
    versionKey: false
});

export default model('Comment', commentSchema);