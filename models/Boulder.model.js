const { Schema, model } = require("mongoose");

const boulderSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Name for Boulder required"],
        },
        grade: {
            type: String,
            required: [true, "Grade for Boulder required"]
        },
        description: {
            type: String,
            required: [true, "Description for Boulder required"]
        },
        path: {
            type: [
                {
                    x: Number,
                    y: Number,
                },
            ],
            required: [true, "Path for Boulder required"],
        },
        type: {
            type: String,
            enum: ["Boulder"],
            default: "Boulder"
        },
        imageRef: {
            type: Number,
            default: 0,
        }
    },
    {
        timestamps: true,
    }
);

const Boulder = model("Boulder", boulderSchema);
module.exports = Boulder;
