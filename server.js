//Se llama librerias

const express = require('express')
const bodyParser = require ('body-parser');
const http = require('http')

//para manejar los metodos de peticiones
const app = express()


//Declaro las variables
const hostname = '127.0.0.1';
const port = 3000;

var users = ['oscar', 'juan', 'marcos']
var autores = [
	{id: 1, name: 'oscar'},
	{id: 2, name: 'juan'},
	{id: 3, name: 'marcos'}


];
var books = [
	{titulo: 'EL SEÑOR DE LOS ANILLOS',autor: 'TOLKIES'},
	{titulo: 'Cancion de hielo y fuego',autor: 'TOLKIES'}

];

//envio una peticion de tipo GET
// http://127.0.0.1:3000/
app.get('/',(req, res) => {
	res.status(200).send("Welcome to API REST")

})


// http://127.0.0.1:3000/users
app.get('/users', (req, res) => {
	res.send(users)
})

// http://127.0.0.1:3000/books
app.get('/books', (req, res) => {
	res.send(books)
})


// http://127.0.0.1:3000/users
//post sirve para crear registros
app.post('/users', (req, res) => {
	let data = req.query;
	users.push(data.user_name)
	res.send("New user add")
})

// http://127.0.0.1:3000/users/1
//metodo para actualizar
app.patch('/users/:id',(req, res)=>{
	let params = req.params;
	let data = req.query;
	users [params.id] = data.user_name
	res.send("User update")
})

// http://127.0.0.1:3000/users/1
//metodo para eliminar
app.delete('/users/:id',(req, res)=>{
	let params = req.params;
	users.splice(params.id,1);
	res.send("User delete")
})

//metodo de la libreria http, servidor
http.createServer(app).listen(port, () => {
	console.log(`Server running at http://${hostname}:$(port)/`);

})



// http://127.0.0.1:3000/

