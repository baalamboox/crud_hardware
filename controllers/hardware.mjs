import { Hardware } from '../models/Hardware.mjs'

export const index = (_, res) => {
    res.render('index', { title: 'Inicio' })
}
export const createOne = async (req, res) => {
    let hardware_photo = req.files.hardware_photo
    await hardware_photo.mv(`./public/img/items/${hardware_photo.name}`)
    let item = new Hardware({ ...req.body, hardware_photo: `/static/img/items/${hardware_photo.name}` })
    item.save()
    res.redirect('/registered')
}
export const registered = async (_, res) => {
    let data = await Hardware.find({})
    if(data.length >= 1) {
        res.render('pages/hardware_registered', { status: true, data })
    } else {
        res.render('pages/hardware_registered', { status: false, data })
    }
}
export const show = async (req, res) => {
    let data = await Hardware.findById(req.params.id)
    res.render('pages/show_hardware', { data })
}
export const edit = async (req, res) => {
    let data = await Hardware.findById(req.params.id)
    res.render('pages/edit_hardware', { data })
}
export const update = async (req, res) => {
    let hardware_photo = req.files.hardware_photo
    await hardware_photo.mv(`./public/img/items/${hardware_photo.name}`)
    await Hardware.findByIdAndUpdate(req.params.id, { ...req.body, hardware_photo: `/static/img/items/${hardware_photo.name}` })
    res.redirect('/registered')
}
export const erase = async (req, res) => {
    let data = await Hardware.findById(req.params.id)
    res.render('pages/delete_hardware', { data })
}
export const deleteOne = async (req, res) => {
    await Hardware.findByIdAndDelete(req.params.id)
    res.redirect('/registered')
}