import Business from "../models/business.js";
import IsRegistered from "../models/isRegistered.js";
import BusinessType from "../models/businessType.js";


export default class TaxController {

    static async business (req, res) {
        const data = req.body;
        const {
            userId,
            name,
            type, cac, tin,
            isRegistered, state, LGA
        } = data;
        const filtered = {
            userId, name, type, isRegistered,
            state, LGA}
	
	for (const field of Object.keys(filtered)) {
	    if (!Object.keys(data).includes(field)) {
		return res.status(400).json({ error: `Missing ${field}` })
	    }
	}
        
	if (isRegistered === 'true') isRegistered = true;
        if (isRegistered === true) {
            if (!cac || !tin) return res.status(400).json({error: 'Missing cac or tin'})
        }
        const business = await Business.findOne({ 'userId': userId  })
        if (business) {
	  if (data.business === "existing" ) {
	    return res.json(business)
	  } else {
	     return res.status(400).json({error: 'You already own a business'})
	  }
	}

	if (data.business === "existing" ) return res.status(400).json({error: 'You dont have a budiness yet'})
	const busType = await BusinessType.findOne({code: filtered.type })
	    console.log(type)
	filtered.code = busType.code;
	filtered.type = busType.name;
        const newBiz = new Business({ ...filtered });
        await newBiz.save()

        if (isRegistered === true) {
            const ref = {
                business: newBiz._id,
                cac,
                tin
            }
            const registered = new IsRegistered(...ref)
            registered.save()
        }
        return res.status(201).json(newBiz)
    }

    static async updateBusiness (req, res) {

    }
}
