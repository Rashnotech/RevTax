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
        if (data.business === 'new') {
            const business = await Business.findOne({ 'userId': userId  })
            if (business) return res.status(400).json({error: 'You already own a business'})
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
            const bizType = await BusinessType.findOne({ name: type })
            return res.status(201).json({message: 'Account created successfully', fee: bizType.fee})
        } else {
            const business = await Business.findOne({ 'userId': userId  })
            if (!business) return res.status(400).json({error: 'No existing business'})
            const bizType = await BusinessType.findOne({ name: business.type })
            return res.status(200).json({fee: bizType.fee})
        }

    }

}
