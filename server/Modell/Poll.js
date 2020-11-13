import mongoose from 'mongoose';
//struktur av data som skal inn

const {Schema} = mongoose;

const PollSchema = new Schema(
    {
        sporsmal: {
            type: String,
            required: [true, 'Fyll ut Spørsmål'],
            unique: true, // unique index and value
        },
        author: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: true,
        },
        answer: [
            {
                user: {
                    type: mongoose.Schema.ObjectId,
                    ref: 'User',
                    required: true,
                },
                text: {
                    type: String,
                    required: true,
                }
            }, 
        ]
    }
)

const Poll = mongoose.model('Poll', PollSchema);

export default Poll;