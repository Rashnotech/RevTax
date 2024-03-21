import Queue from 'bull';
import Mailer from '../services/MailService.js';


const mailQueue = new Queue('emailQueue');

mailQueue.process(async (job) => {
    const { email, message } = job.data;
    try {
        await Mailer.mail(email, message);
    } catch (error) {
        throw error;
    }
});

export default mailQueue;