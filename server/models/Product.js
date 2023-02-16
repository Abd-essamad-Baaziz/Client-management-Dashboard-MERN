import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    price: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      max: 320,
    },
    category: {
        type: String,
        required: true,
    },
    rating: Number,
    supply: Number,
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);
export default Product;
