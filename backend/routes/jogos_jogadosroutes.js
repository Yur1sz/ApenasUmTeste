import express from 'express'
import {getJogos, addJogos, UpdateJogos, deleteJogos} from '../controllers/jogos_jogados.js'
const router = express.Router()

router.get("/", getJogos)
router.post("/", addJogos)
router.put("/:id", UpdateJogos)
router.delete("/:id", deleteJogos)


export default router