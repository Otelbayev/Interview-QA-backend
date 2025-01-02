import mongoose from "mongoose";

const techDetailModel = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
  },
  tech_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tech",
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
});

const TechDetail = mongoose.model("TechDetail", techDetailModel);

export default TechDetail;
