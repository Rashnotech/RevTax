import User from '../models/users.js'
import Business from '../models/business.js'
import BusinessType from '../models/businessType.js'

class BusinessController {
  static async createBusiness(req, res) {
    const { name, type, isregistered, state, LGA } = req.body
    const user = req.user

    const data = req.body
    data.userId = user._id
    const required = ['name', 'type', 'state', 'LGA']

    for (const key of required) {
      if (!Object.keys(data).includes(key)) {
        return res.status(400).json({ error: `Missing ${key}` })
      }
    }

    try {
      const business = new Business({...data})
      await business.validate()
      await business.save()
      return res.status(201).json(business)
    } catch (err) {
      return res.status(400).json({error: err.message })
    }
  }


  static async getBusiness(req, res) {
    const { businessId } = req.params

    if (typeof businessId !== 'string') return res.status(400).json({error: "businessId must be a string"})

    const business = await Business.findOne({_id: businessId })

    if (!business) return res.status(404).json({error: "Not Found"})
	  console.log(business.type)
    const businessType = await BusinessType.findOne({ name: business.type })
    const response = {
      ...business.toObject(),
      fee: businessType.fee
    };
    return res.json(response)
  }

  static async getBusinessByUser(req, res) {
    const { userId } = req.params
    if (!userId) return res.status(400).json({error: "Missing userId"})
    if (typeof userId !== 'string') return res.status(400).json({error: "userId must be a string"})

    const businesses = await Business.find({ userId })
    return res.json(businesses)
  }

  static async getAllBusiness(req, res) {
    const businesses = await Business.find({});

    return res.json(businesses || [])
  }

  static async updateBusiness(req, res) {
    const { businessId } = req.params;

    if (!businessId) return res.status(400).json({error: "Missing businessId"})

    if (typeof businessId !== 'string') return res.status(400).json({error: "businessId must be a string"})
    
    const data = req.body || {}

    const business = await Business.findByIdAndUpdate(businessId, {...data }, {new: true})
    if (!business) return res.status(404).json({error: "Not Found"})
    return res.json(business)
  }

  static async deleteBusiness(req, res) {
    const { businessId } = req.params;

    const business = await Business.findById(businessId);
    if (!business) return res.status(404).json({error: "Not Found"})
    
    await Business.deleteOne({_id: businessId})
    return res.json({})
  }
}

export default BusinessController
