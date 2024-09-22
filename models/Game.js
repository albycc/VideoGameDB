import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    genre: [String],
    platform: [
      {
        type: Schema.Types.ObjectId,
        ref: "System",
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

const Game = model("Game", schema);

export default Game;
