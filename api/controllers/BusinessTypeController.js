import BusinessType from '../models/businessType.js'
//import Business from '../models/business.js'

class BusinessTypeController {
  static async createBusinessType(req, res) {
    const user = req.user

    const data = req.body

    const required = ['fee', 'name', 'code']

    for (const key of required) {
      if (!Object.keys(data).includes(key)) {
	return res.status(400).json({ error: `Missing ${key}` })
      }
    }

    try {
      const businessType = new BusinessType({...data})
      await businessType.save()
      return res.status(201).json(businessType)
    } catch (err) {
      return res.status(400).json({error: err.message})
    }
  }


  static async getBusinessType(req, res) {
    const { code } = req.params

    if (typeof code !== 'string') return res.status(400).json({error: "priceName must be a string"})

    const businessType = await BusinessType.findOne({ code: code })

    if (!businessType) return res.status(404).json({error: "Not Found"})
    return res.json(businessType)
  }

  static async getAllBusinessType(req, res) {
    const businessType = await BusinessType.find({});

    return res.json(businessType || [])
  }

  static async updateBusinessType(req, res) {
    const { code } = req.params;

    if (!code) return res.status(400).json({error: "Missing businessTypeName"})

    if (typeof code !== 'string') return res.status(400).json({error: "Business Type Name must be a string"})
    
    const data = req.body || {}

    console.log(code)
    const businessType = await BusinessType.findOneAndUpdate({ code }, {...data }, {new: true})
    if (!businessType) return res.status(404).json({error: "Not Found"})
    return res.json(businessType)
  }

  static async deleteBusinessType(req, res) {
    const { code } = req.params;

    const businessType = await BusinessType.findOneAndDelete({ code });
    if (!businessType) return res.status(404).json({error: "Not Found"})
    
    return res.json({})
  }
}

export default BusinessTypeController
