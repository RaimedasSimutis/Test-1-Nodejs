//import { get } from "http";

// 
const checkifLoggedIn = () => {
    let token = localStorage.getItem('x-auth');

    if (!token) {
        alert('baaam');
        window.location.href = "/login.html";

    }
}

checkifLoggedIn()

const createItem = () => {

    let token = localStorage.getItem('x-auth');
    let item = document.getElementById('newItem').value

    let body = {
        item: item
    }

    fetch('http://localhost:3000/api/v1/todo/register', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'x-auth': token
            }
        }) 
        .then(header => {
            if (!header.ok) {
                throw Error(header)
            }

            //console.log(token);
            return header.json();
        })
        .then(response => {

            //console.log(response)
            alert('Item added');
            // window.location.href = '/index.html'
            getItems();


        })
        .catch(e => {
            console.log(e)
            alert('Item failed')
        })
}

const getItems = () => {

    let token = localStorage.getItem('x-auth');

    // let body = {
    //     item: item
    // }

    fetch('http://localhost:3000/api/v1/user/getAllToDoItems', {
            method: 'GET',
            //body: JSON.stringify(body),
            headers: {
                // 'Content-Type': 'application/json',
                'x-auth': token
            }
        }) 
        .then(header => {
            if (!header.ok) {
                throw Error(header)
            }

            //console.log(token);
            return header.json();
        })
        .then(response => {


            //console.log(response)
            //alert('I GOT THEM!!');
            // window.location.href = '/index.html'
            const unordereList = document.getElementById('list');
            unordereList.textContent = null;

            response.forEach(element => {
                const listItem = document.createElement('li');

                listItem.textContent = element.item;

                unordereList.appendChild(listItem);
            });

        })
        .catch(e => {
            console.log(e)
            //alert('FUCK ! WE FAILLED')
        })
}

getItems();