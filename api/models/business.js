import mongoose from '../utils/db.js';
const { Schema } = mongoose;

const businessSchema = new Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
  code: { type: String, required: true },
  isregistered: { type: Boolean, default: false },
  state: { type: String, required: true },
  LGA: { type: String, required: true }
}, { timestamps: true });

businessSchema.methods = {
  isValidate: async function(type) {
    const BusinessType = mongoose.model('BusinessType')
    const businessTypes = await BusinessType.find({})
    const typeList = businessTypes.map(obj => obj['name'])
    return typeList.includes(type)
  }
}

businessSchema.path('type').validate(function(type) {
  return this.isValidate(type);
}, "Invalid business type")
  

const Business = mongoose.model('Business', businessSchema);

export default Business;
