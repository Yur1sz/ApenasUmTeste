 import express from 'express'
 import cors from 'cors'
 import jogosRoutes from '../backend/routes/jogos_jogadosroutes.js'

 const app = express()

app.use(express.json())
app.use(cors())

 app.use("/", jogosRoutes)


 const  PORT = 3000 
 app.listen(PORT)

 console.log(`o servidor foi iniciado na porta ${PORT}`)


 
