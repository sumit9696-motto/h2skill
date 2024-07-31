import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter ai title"],
      minLength: [4, "Title must be at least 4 characters"],
      maxLength: [80, "Title can't exceed 80 characters"],
    },
    description: {
      type: String,
      required: [true, "Please enter ai description"],
      minLength: [20, "Title must be at least 20 characters"],
    },

    versions: [
      {
        title: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
      },
    ],

    poster: {
      public_id: {
        type: String,
        //   required: true,
      },
      url: {
        type: String,
        //   required: true,
      },
    },
    views: {
      type: Number,
      default: 0,
    },

    category: {
      type: String,
      // required: true,
    },
    createdBy: {
      type: String,
      required: [true, "Enter Ai Creator Name"],
    },
  },
  {
    timestamps: true,
  }
);

export const Ai = mongoose.model("Ai", schema);
