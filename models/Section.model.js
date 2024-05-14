const { Schema, model } = require("mongoose");

const sectionSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Name for Section required"],
        },
        position: {
            latitude: {
                type: Number,
                required: [true]
            },
            longitude: {
                type: Number,
                required: [true]
            },
        },
        boulders: [{
            type: Schema.Types.ObjectId,
            ref: "Boulder"
        }],
        images: [
            {
                type: String,
            }
        ],
        type: {
            type: String,
            enum: ["Section"],
            default: "Section"
        }
    },
    {
        timestamps: true,
    }
);

const Section = model("Section", sectionSchema);
module.exports = Section;
