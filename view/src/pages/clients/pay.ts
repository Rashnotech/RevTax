import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { putRequest } from "../../utils/GetRequest"

export function makePayment(mobile: any, email: any, name: any, amount: any, type: any, paymentId: any) {
    FlutterwaveCheckout({
      public_key: "FLWPUBK_TEST-15269720fbb3b2e0b22ae2cd1a57d4f4-X",
      tx_ref: `revtax-${paymentId}`,
      amount: amount,
      currency: "NGN",
      payment_options: `${type}, mobilemoneynigeria, nigeria`,
      callback: (payment) => {
	  const url = `${import.meta.env.VITE_API_URL}/payments/${paymentId}`
          const res = putRequest(url, { status: 'completed' })
      },
      customer: {
        email: email,
        phone_number: mobile,
        name: name,
      },
      customizations: {
        title: "RevTax",
        description: "Revenue online payment",
        logo: "https://assets.piedpiper.com/logo.png",
      },
    });
    const handle = useFlutterwave(FlutterwaveCheckout)
    handle()

}

/*function FlutterwaveCheckout(arg0: { public_key: string; tx_ref: string; amount: any; currency: string; payment_options: string; redirect_url: string; customer: { email: any; phone_number: any; name: any; }; customizations: { title: string; description: string; logo: string; }; }) {
  throw new Error("Function not implemented.");
}*/
