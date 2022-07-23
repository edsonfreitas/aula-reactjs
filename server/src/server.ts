import express from 'express'
import cors from 'cors'
import { routes } from './routes'
 

//GET, POST, PUT, PATCH, DELETE
//GET = Buscar informações
//POST = Enviar informações
//PUT = Atualização de  informações de uma entidade
//PATCH = Atualizar informação única de uma entidade
// DELETE = Deletar uma informação
const  app = express()

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333, () =>{
    console.log("Hello World na porta 3333")
})