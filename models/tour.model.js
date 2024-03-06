const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Tour name must have a value"],
    unique: [true, "Tour name must have a unique value"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Tour price must have a value"],
  },
  duration: {
    type: Number,
    required: [true, "Tour must have a duration"],
  },
  maxGroupSize: {
    type: Number,
    required: [true, "Tour must have a group size"],
  },

  difficulty: {
    type: String,
    required: [true, "Tour must have a difficulty"],
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  priceDiscount: Number,
  summary: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  imageCover: {
    type: String,
    required: [true, "Tour must have image cover"],
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
    // select: false,
  },
  startDates: [Date],
});

const Tour = mongoose.model("Tour", tourSchema);
module.exports = Tour;
