class PaymentController {
  static async makePayment(req, res) {
    const data = req.body
    const requiredField = ['userId', 'amount']

    if (!('userId' in Object.keys(data))) return res.status(400).json({error: "Missing userId"})

    if (!('amount' in Object.keys(data))) return res.status(400).json({error: "Missing amount"})

    const payment = await Payment({...data})
    return res.status(201).json(payment)
  }

  static async updatePayment(req, res) {
    const { paymentId } = req.params

    if (!paymentId) return res.status(400).json({error: "Missing paymentId"})

    if (!(paymentId instanceof 'string')) return res.status(400).json({error: "paymentId must be a string"})

    const data = req.body || {}

    payment = await Payment.findOne({_id: paymentId })
    if (!payment) return res.status(404).json({error: "Not Found"})
    payment.status = data.status
    return res.json(payment)
  }

  /**
   * get a payment by id
   */

  static async getPayment(req, res) {
    const { paymentId } = req.params
    
    if (!paymentId) return res.status(400).json({error: "Missing paymentId"})

    if (!(paymentId instanceof 'string')) return res.status(400).json({error: "paymentId must be a string"})
    
    payment = await Payment.findOne({_id: paymentId })
    
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
    if (!(userId instanceof 'string')) return res.status(400).json({error: "userId must be a string"})

    const payment = await Payment.findMany({ userId })

    res.json(payment || [])
  }

  static async getAllPayment(req, res) {
    const payment = await Payment.findMany({})
    res.json(payment || [])
  }
}

export default PaymentController;
