const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    brand: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      default: "Sports & Fitness",
      index: true,
    },

    description: {
      type: String,
      default: "",
    },

    price: {
      type: Number,
      required: true,
    },

    mrp: {
      type: Number,
      required: true,
    },

    discount: {
      type: String, 
      default: null,
    },

    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },

    reviews: {
      type: Number,
      default: 0,
    },

    image: {
      type: String,
      required: true,
    },

    images: [
      {
        type: String, 
      },
    ],

    colors: [
      {
        type: String,
      },
    ],

    sizes: [
      {
        type: String, 
      },
    ],

    flavours: [
      {
        type: String,
      },
    ],

    delivery: {
      type: String,
      default: "FREE delivery",
    },

    sponsored: {
      type: Boolean,
      default: false,
    },

    stock: {
      type: Number,
      default: 0,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, 
  }
);

module.exports = mongoose.model("Product", ProductSchema);
