import express from 'express' 
import morgan from 'morgan' 
import ViteExpress from 'vite-express' 

const app = express()
const PORT = 8000

app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))


ViteExpress.listen(app, PORT, () => console.log(`Take us to warp ${PORT}`))