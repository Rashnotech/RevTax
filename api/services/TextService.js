import config from '../config/sms_config.js';
import twilio from 'twilio'

const accountSid = config.twilio.accountSID;
const authToken = config.twilio.authSID;
const client = twilio(accountSid, authToken);

export default class TextService {
  /**
   * a class that handles sms validation
   * SMS - static class method for sms
   */
  static async sms (mobile, message) {
    const response = await client.messages.create({
        body: message,
        from: '+19166340948',
        to: mobile,
    });
    return response;
  }

  static isMobile (number) {
    if (number.startsWith(0)) number = number.slice(1);
    const cty_code = '+234';
    const tel = `${cty_code}${number}`;
    const mobileRegex = /^\+\d{1,3}\d{10}$/;
    if (mobileRegex.test(tel)) {
        return tel;
    }
    return false;
  }
}
