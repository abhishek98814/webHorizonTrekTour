import mongoose, { Schema } from "mongoose";
import { Category } from "./category.model.js";

const overViewSchema = new Schema({
  banner: {
    type: String,
  },
  title:{
    type:String
  },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  shortDesc: {
    duration: {
      type: String,
    },
    MaxAltitude: {
      type: String,
    },
    memberGroup: {
      type: String,
    },
    startEndpoint: {
      type: String,
    },
    tripDifficulty: {
      type: String,
    },
    bestSeason: {
      type: String,
    },
  },
  overView: {
    type: String,
  },
  included: {
    type: String,
  },
  excluded: {
    type: String,
  },
  importantInformation: {
    type: String,
  },
  departureAndAvailability: {
    type: Date, 
  },
  equipment: {
    type: [String],  
  },
  review: [{
    userName: {
      type: String,
    },
    country: {
      type: String,
    },
    desc: {
      type: String,
    },
    review: {
      type: String,
    },
  }],
  faq: [{
    question: {
      type: String,
    },
    answer: {
      type: String,
    },
  }],
  itinerary: [{
    day: {
      type: String,  
    },
    activities: {
      type: String, 
    },
  }],
  trekMap: {
    type: String, 
  },
});

const OverView = mongoose.model("OverView", overViewSchema);
export default OverView;
