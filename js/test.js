let logInContainer=document.querySelector("main")
let userInputElem=document.getElementById("usernameinput")
let form=document.querySelector("form")
let passwordInputElem=document.getElementById("passwordinput")
let animatedElemrRight=document.getElementById("animatedCircleright")
let animatedElemrLeft=document.getElementById("animatedCircleleft")
let uservalue=passwordInputElem.value
console.log(uservalue);

function postUser(event){
    event.preventDefault()
    let newUser={
        username:userInputElem.value,
        passwoed:passwordInputElem.value
    }

    fetch('https://sabzlearn-exersize-default-rtdb.firebaseio.com/users.json',{
        method:'POST',
        headers:{
            'Content-type': 'application/json'
        },
        body:JSON.stringify(newUser)
    }).then(responce=>{
        console.log(responce);
        console.log(lastname.value);
        clearData()
    }) .catch(err => console.log(err))
}

function clearData () {
    userInputElem.value=""
    passwordInputElem.value=""
}
function link(){
    console.log(location.search);
    window.location.assign("https://amirhossein-mirzaei23.github.io/Advanced-Todo-List/")
}

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let newUser={
        username:userInputElem.value,
        passwoed:passwordInputElem.value
    }

    fetch('https://sabzlearn-exersize-default-rtdb.firebaseio.com/users.json',{
        method:'POST',
        headers:{
            'Content-type': 'application/json'
        },
        body:JSON.stringify(newUser)
    }).then(responce=>{
        console.log(responce);
        console.log(newUser);
        clearData()
        link()
    }) .catch(err => console.log(err))
}
)