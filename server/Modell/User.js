import mongoose from 'mongoose';
import validator from 'validator';
//struktur av data som skal inn

const {Schema} = mongoose;

const UserSchema = new Schema(
    {
        email: {
            type: String,
            required: [true, 'Fyll ut epost'],
            unique: true, // unique index and value
            validate: [validator.isEmail, 'Eposten er ikke gyldig'],
        }
        
    }
)

const User = mongoose.model('User', UserSchema);

export default User;
