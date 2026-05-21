const naslovForme = document.querySelector('#naslov-forme')
const formName = document.querySelector('#form-name')
const formPrice = document.querySelector('#form-price')
const formDesc = document.querySelector('#form-description')
const formCategory = document.querySelector('#form-category')
const formQty = document.querySelector('#form-qty')
const formImage = document.querySelector('#form-image')
const labelImage = document.querySelector('#label-image')
const addBtn = document.querySelector('#add-btn')
const proizvodiTabela = document.querySelector('#proizvodiTabela')


const sacuvajBtn = document.querySelector('#save-btn')
const odustaniBtn = document.querySelector('#cancel-btn')

let editingId = null;

window.addEventListener('load', () => {
    renderProizvoda()
})
window.addEventListener('load', () => {
    renderProizvoda()
})

const renderProizvoda = () => {
    fetch('http://localhost:3000/')
        .then(response => response.json())
        .then(responseJson => {
            proizvodiTabela.innerHTML = '';
            responseJson.forEach((proizvod) => { // OVO JE BITNO
                proizvodiTabela.innerHTML += `
                 <tr>
                    <th scope="row">${proizvod.id + 1}</th>
                    <td><img src="http://localhost:3000/${proizvod.img}" alt="" height="30px"></td>
                    <td>${proizvod.name}</td>
                    <td>${proizvod.qty}</td>
                    <td>$${proizvod.price}</td>
                    <td><button class="btn btn-info" onClick="vidiProizvod(${proizvod.id})" >View</button></td>
                    <td><button class="btn btn-warning" onClick="urediProizvod(${proizvod.id})">Edit</button></td>
                    <td><button class="btn btn-danger" onClick="ukloniProizvod(${proizvod.id})">Delete</button></td>
                </tr>   
                
                
                `
            });
        })
        .catch(error => console.log(error));
}
// const sacuvajItem=()