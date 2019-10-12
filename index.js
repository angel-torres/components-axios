const cardContainer = document.querySelector(".card-container");

function renderUsers(data) {
    data.forEach(function (person) {
        const componentContainer = document.createElement('div');
        componentContainer.classList.add("component-container");
        componentContainer.addEventListener("click", (e) => {
            componentContainer.style.borderColor = "blue"
        })

        const name = document.createElement('h1');
        const email = document.createElement('p');
        const phone = document.createElement('p');

        componentContainer.appendChild(name);
        componentContainer.appendChild(email);
        componentContainer.appendChild(phone);

        name.textContent = person.name;
        email.textContent = person.email;
        phone.textContent = person.phone;

        cardContainer.appendChild(componentContainer)
    });
}

axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        renderUsers(response.data);
    })
    .catch(error => {
        console.log(error);
    })


// axios.get('https://jsonplaceholder.typicode.com/users')
//     .then(response => {
//         response.data.forEach(function (person) {
//             const componentContainer = document.createElement('div');
//             componentContainer.classList.add("component-container");
//             componentContainer.addEventListener("click", (e) => {
//                 componentContainer.style.borderColor = "blue"
//             })

//             const name = document.createElement('h1');
//             const email = document.createElement('p');
//             const phone = document.createElement('p');

//             componentContainer.appendChild(name);
//             componentContainer.appendChild(email);
//             componentContainer.appendChild(phone);

//             name.textContent = person.name;
//             email.textContent = person.email;
//             phone.textContent = person.phone;

//             cardContainer.appendChild(componentContainer)
//         });
//     })
//     .catch(error => {
//         console.log(error);
//     })