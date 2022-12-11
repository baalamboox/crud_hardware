import mongoose from 'mongoose'
export const connection_db = async () => {
    try {
        await mongoose.connect(process.env.URI_MONGO)
        console.log('Conexion exitosa a la base de datos!')
    } catch (error) {
        console.log(error)
    }
}