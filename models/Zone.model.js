const { Schema, model } = require("mongoose");

const zoneSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Name for Zone required"],
        },
        sections: [{
            type: Schema.Types.ObjectId,
            ref: "Section"
        }],
        type: {
            type: String,
            enum: ["Zone"],
            default: "Zone"
        }
    },
    {
        timestamps: true,
    }
);

const Zone = model("Zone", zoneSchema);
module.exports = Zone;
