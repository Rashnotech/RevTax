import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';


export function makePayment(mobile: any, email: any, name: any, amount: any, type: any) {
    FlutterwaveCheckout({
      public_key: "FLWPUBK_TEST-15269720fbb3b2e0b22ae2cd1a57d4f4-X",
      tx_ref: "revtax-48981487343MDI0NzMx",
      amount: amount,
      currency: "NGN",
      payment_options: `${type}, mobilemoneynigeria, nigeria`,
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
    handle({
	callback: (response) => {
	    alert(response.status)
           console.log(response);
            closePaymentModal() // this will close the modal programmatically
            },
         onClose: () => {},
    })

}

/*function FlutterwaveCheckout(arg0: { public_key: string; tx_ref: string; amount: any; currency: string; payment_options: string; redirect_url: string; customer: { email: any; phone_number: any; name: any; }; customizations: { title: string; description: string; logo: string; }; }) {
  throw new Error("Function not implemented.");
}*/
