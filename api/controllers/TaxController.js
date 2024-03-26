import Business from "../models/business";
import IsRegistered from "../models/isRegistered";

export default class TaxController {

    static async business (req, res) {
        const data = req.body;
        const {
            user_id,
            name,
            type, cac, tin,
            isregistered, state, LGA
        } = data;
        const filtered = {
            user_id, name, type, isregistered,
            state, LGA}
        if (!user_id || !name || !type || !isregistered || !state || !LGA) {
            return res.status(400).json({ error: 'Missing field' })
        }
        if (isregistered === 'true') isregistered = true;
        if (isregistered) {
            if (!cac || !tin) return res.status(400).json({error: 'Missing cac or tin'})
        }
        const business = await Business.findOne({ user_id: data.user  })
        if (business) return res.status(400).json({error: 'You already own a business'})
        const newBiz = new Business({ ...filtered });
        await newBiz.save()

        if (isregistered) {
            const ref = {
                business: newBiz._id,
                cac,
                tin
            }
            const registered = new IsRegistered(...ref)
            registered.save()
        }
        return res.status(201).json('Account created successfully')
    }

    static async updateBusiness (req, res) {

    }
}