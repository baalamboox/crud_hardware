import { Schema, model } from 'mongoose'

const hardware_schema = Schema({
    hardware_photo: {
        type: String,
        require: true
    },
    hardware_name: {
        type: String,
        require: true
    },
    hardware_brand: {
        type: String,
        require: true
    },
    hardware_model: {
        type: String,
        require: true
    },
    hardware_year: {
        type: String,
        require: true
    },
    hardware_description: {
        type: String,
        require: true
    },
})

export const Hardware = model('Hardware', hardware_schema)