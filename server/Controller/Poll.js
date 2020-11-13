import {pollService} from '../Service/index.js';

import catchAsyncErrors from '../middleware/catchAsync.js';

export const createPoll = catchAsyncErrors(async (req, res, next) => {
    const poll = await pollService.createPoll(req.body);
    res.status(201).json(poll);
});
export const list = catchAsyncErrors(async (req, res, next) => {
  const result = await pollService.listPolls();
  res.status(200).json(result);
});
export const getPollById = catchAsyncErrors(async (req, res, next) => {
    const poll = await pollService.getPollById(req.params.id);
    if (!poll) {
      return next(
        new ErrorHandler(`Finner ikke Poll med ${req.params.id}`, 404)
      );
    }
    res.status(200).json(poll);
});
export const updatePoll = catchAsyncErrors(async (req, res, next) => {
    let poll = await pollService.getPollById(req.params.id);
    if (!poll) {
      return next(
        new ErrorHandler(`Finner ikke event med ${req.params.id}`, 404)
      );
    }
    poll = await pollService.updatePoll(req.params.id, req.body);
    res.status(200).json(poll);
});