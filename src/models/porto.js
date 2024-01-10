import mongoose, { Schema } from "mongoose";

// const imageSchema = new Schema({
//   url: String,
// });

// const iconSchema = new Schema({
//   text: mongoose.Schema.Types.Mixed,
// });

const portoSchema = new Schema(
  {
    title: String,
    description: String,
    // images: [imageSchema],
    gitLink: String,
    webLink: String,
    // icon: iconSchema,
  },
  {
    timestamps: true,
  }
);

const Porto = mongoose.model("Porto", portoSchema);

export default Porto;