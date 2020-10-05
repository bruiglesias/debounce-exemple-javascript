let time = null;

const filterUsers = async (name) => {
    return fetch(`https://jsonplaceholder.typicode.com/users?name_like=${name}`)
    .then(res => res.json())
}

function debounceEvent(value){
    clearTimeout(time);
    time = setTimeout((time) => {
        filterUsers(value).then(users => console.log(users.map(user => user.name)));
    }, 2000);
}

function handleKeyUp(event){
    debounceEvent(event.target.value);
}


document.querySelector("input").addEventListener("keyup", handleKeyUp);