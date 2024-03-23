
import Payment from '../models/payment.js'


class PaymentController {
  static async makePayment(req, res) {
    const { amount, payment_method } = req.body
    const user = req.user

    if (!amount) return res.status(400).json({error: "Missing amount"})

    const data = {
      amount,
      userId: user._id
    }

    if (payment_method) {
      data.payment_method = payment_method
    }

    const payment = new Payment({...data})
    await payment.save()
    return res.status(201).json(payment)
  }

  static async updatePayment(req, res) {
    const { paymentId } = req.params

    if (!paymentId) return res.status(400).json({error: "Missing paymentId"})

    if (typeof paymentId !== 'string') return res.status(400).json({error: "paymentId must be a string"})

    const data = req.body || {}

    const payment = await Payment.findByIdAndUpdate(paymentId, { status: data.status }, { new: true })
    if (!payment) return res.status(404).json({error: "Not Found"})

    //await Payment.updateOne({ _id: paymentId }, { status: data.status })
    return res.json(payment)
  }

  /**
   * get a payment by id
   */

  static async getPayment(req, res) {
    const { paymentId } = req.params
    

    if (typeof paymentId !== 'string') return res.status(400).json({error: "paymentId must be a string"})
    
    const payment = await Payment.findOne({_id: paymentId })
    
    if (!payment) return res.status(404).json({error: "Not Found"})
    return res.json(payment)
  }

  /**
   * get all payments related to a user
   * returns empty list if no payment found
   */

  static async getPaymentByUser(req, res) {
    const { userId } = req.params

    if (!userId) return res.status(400).json({error: "Missing userId"})
    if (typeof userId !== 'string') return res.status(400).json({error: "userId must be a string"})

    const payment = await Payment.find({ userId })

    res.json(payment || [])
  }

  static async getAllPayment(req, res) {
    const payment = await Payment.find({})
    res.json(payment || [])
  }
}

export default PaymentController;
