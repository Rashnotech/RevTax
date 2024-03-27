import mailQueue from '../utils/queue.js';

// This is the worker that will process the queue
mailQueue
    .process()
    .then(() => {})
    .catch((error) => {
        return {error : "An error occured while sending otp"};
    });