export function makePayment(mobile: any, email: any, name: any, amount: any, type: any) {
    FlutterwaveCheckout({
      public_key: "FLWPUBK_TEST-SANDBOXDEMOKEY-X",
      tx_ref: "revtax-48981487343MDI0NzMx",
      amount: amount,
      currency: "NGN",
      payment_options: `${type}, mobilemoneynigeria, nigeria`,
      redirect_url: "https://glaciers.titanic.com/handle-flutterwave-payment",
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
  }

function FlutterwaveCheckout(arg0: { public_key: string; tx_ref: string; amount: any; currency: string; payment_options: string; redirect_url: string; customer: { email: any; phone_number: any; name: any; }; customizations: { title: string; description: string; logo: string; }; }) {
  throw new Error("Function not implemented.");
}
