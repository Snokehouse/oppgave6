//se leksjon 11 ep 09
import Poll from '../Modell/Poll.js';

export const listPolls = async () => Poll.find();
export const getPollById = async (id) => Poll.findById(id);
export const createPoll = async (data) => Poll.create(data);
export const updatePoll = async (id, data) =>
  Poll.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
});
