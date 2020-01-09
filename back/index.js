const express = require('express');
const bodyParser = require('body-parser');

const router = require('./routes/routes.js');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb://localhost:27017/MyUsers', {
    useCreateIndex:true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const corsOptions = {
    exposedHeaders: ['x-auth']
}

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json());

app.use('/api/v1', router);


// app.get('/', (request, response) => {
//     response.json('testas')
// })
// app.post('/postMethod', (request, response) => {
//     let errorMsg = '';

//     if (request.body.Username && request.body.Password) {
//         if (request.body.Username.length<3) {
//             //response.json('Username is too short');
//             console.log('Username is too short.');
//             errorMsg+='Username is too short. '
//         }
//         if (request.body.Password.length<6) {
//             //response.json('Pasword is too short');
//             console.log('Password is too short') 
//             errorMsg+='Password is too short. '
//         }
//         if (!request.body.Password.match(/[A-Z]/)){
//             console.log('Password does not contain a capital letter')
//             errorMsg+='Password does not contain a capital letter. '
//         }
//         if (!request.body.Password.match(/[0-9]/)){
//             console.log('Password does not contain a number')
//             errorMsg+='Password does not contain a number. '
//         }
//         console.log('input-true')
//         //response.json('No password or username')
        
//     } else {
//         console.log('There is no passwor/username. ') 
//         errorMsg+='There is no passwor/username. '
//     }
    
//     console.log(request.body);
//     //console.log(request.body.Username.length);
//     response.status(400).json(errorMsg);
// })

app.listen(3000);

console.log('VIENS DU TRYS VAZIOOOOJAM') 