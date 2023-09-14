const { Schema, model, models } = require("mongoose");

const customerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    minLength: 1,
  },
  phone: {
    type: Number,
    required: true,
  },
  address: String,
  postalcode: Number,
  date: {
    type: Date,
  },
  products: {
    type: Array,
    default: [],
  },

  CreateAt: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
  UpdateAt: {
    type: Date,
    default: Date.now,
  },
});

const Customers = models.Customers || new model("Customers", customerSchema);
export default Customers;
