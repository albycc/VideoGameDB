import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    developer: [String],
    manufacturer: [String],
    unitsSold: Number,
    games: [
      {
        type: Schema.Types.ObjectId,
        ref: "Game",
      },
    ],
    dateReleased: {
      type: {
        year: Number,
        month: Number,
        day: Number,
      },
    },
  },
  { timestamps: true }
);

const System = model("System", schema);

export default System;
