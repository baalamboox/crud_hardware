import { Router } from 'express'
import { index, createOne, registered, show, edit, update, erase, deleteOne } from '../controllers/hardware.mjs'

const router = Router()

router.get('/', index)
router.post('/create', createOne)
router.get('/registered', registered)
router.get('/show/:id', show)
router.get('/edit/:id', edit)
router.post('/update/:id', update)
router.get('/erase/:id', erase)
router.get('/delete/:id', deleteOne)

export default router
