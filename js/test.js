let logInContainer=document.querySelector("main")
let login=`<form action="" id="Loginform" class="relative font-serif w-9/12 sm:w-6/12 lg:6/12 flex flex-col items-center gap-4 bg-stone-100 bg-opacity-20 pt-4 pb-10 mt-5 mx-auto rounded-xl border">
<div class="mx-auto"><h1 class="text-center text-stone-100 text-3xl font-medium hover:tracking-wider">Login Form</h1></div>
<div class="w-full mx-auto flex flex-col items-center">
    <label class="-translate-x-20" for="username">Username</label>
    <input id="usernameinput" class="w-9/12 h-8 mx-auto rounded-md" type="text" placeholder="username" name="username" /></div>
<div class="w-full mx-auto flex flex-col items-center">
    <label class="-translate-x-20" for="password">Password</label>
    <input id="passwordinput" class="w-9/12 h-8 mx-auto rounded-md" type="password" placeholder="PassWord" name="PassWord" />
    </div>
    <button id="submitbutton" class="w-7/12 py-2 mt-5 bg-cyan-300 rounded-lg transition-all border-red-950 hover:border hover:bg-zinc-200 hover:scale-95">Submit</button>
    <div class="text-xs"><button onclick="changeform(event)" id="singUPBtn" class="hover:text-cyan-300">Sing Up</button> / <button id="LoginBtn" onclick="changeform(event)" class="hover:text-cyan-300">Login</button></div>
</form>`
let singUp=`<form action="" onsubmit="api(event)" id="Singupform" class="relative font-serif w-9/12 sm:w-6/12 lg:6/12 flex flex-col items-center gap-4 bg-stone-100 bg-opacity-20 pt-4 pb-10 mt-5 mx-auto rounded-xl border">
<div class="mx-auto"><h1 class="text-center text-stone-100 text-3xl font-medium hover:tracking-wider">Login Form</h1></div>
<div class="w-full mx-auto flex flex-col items-center">
    <label class="-translate-x-20" for="username">Username</label>
    <input id="usernameinput" class="w-9/12 h-8 mx-auto rounded-md" type="text" placeholder="username" name="username" /></div>
<div class="w-full mx-auto flex flex-col items-center">
    <label class="-translate-x-20" for="password">Password</label>
    <input id="passwordinput" class="w-9/12 h-8 mx-auto rounded-md" type="password" placeholder="PassWord" name="PassWord" />
    </div>
    <div class="w-full mx-auto flex flex-col items-center">
        <label class="-translate-x-20" for="password">repeatPassword</label>
        <input id="repeatinput" class="w-9/12 h-8 mx-auto rounded-md" type="password" placeholder="PassWord" name="PassWord" />
        </div>
    <button id="submitbutton" class="w-7/12 py-2 mt-5 bg-cyan-300 rounded-lg transition-all border-red-950 hover:border hover:bg-zinc-200 hover:scale-95">Submit</button>
    <div class="text-xs"><button onclick="changeform(event)" id="singUPBtn" class="hover:text-cyan-300">Sing Up</button> / <button id="LoginBtn" onclick="changeform(event)" class="hover:text-cyan-300">Login</button></div>
</form>`
//
logInContainer.insertAdjacentHTML("beforeend",login)

let loginform=document.getElementById("Loginform")

let btn=document.getElementById("submitbutton")
let singUpBtn=document.getElementById("singUPBtn")
let loginBtn=document.getElementById("LoginBtn")

let animatedElemrRight=document.getElementById("animatedCircleright")
let animatedElemrLeft=document.getElementById("animatedCircleleft")

function clearData () {
    let passwordInputElem=document.getElementById("passwordinput")
    let userInputElem=document.getElementById("usernameinput")
    userInputElem.value=""
    passwordInputElem.value=""
}
function link(){
    console.log(location.search);
    window.location.assign("https://amirhossein-mirzaei23.github.io/Advanced-Todo-List/")
}
function define(){
    let passwordInputElem=document.getElementById("passwordinput")
let userInputElem=document.getElementById("usernameinput")
}
function api(e){{
    
        e.preventDefault()
//
let passwordInputElem=document.getElementById("passwordinput")
let userInputElem=document.getElementById("usernameinput")

console.log(userInputElem.value,"/",passwordInputElem.value);


    if(e.target.id=="Singupform"){
        let checkPasswordInput=document.getElementById("repeatinput")
        console.log(checkPasswordInput.value);
        console.log(passwordInputElem.value);
        if(checkPasswordInput.value===passwordInputElem.value){
        console.log("pass is ok");
        }else{
         return alert("password")
        }
    }
    ///////set loader to the button
            btn.innerHTML=""
            console.log("aa");
            btn.insertAdjacentHTML("afterbegin",`<img class="w-1/6 mx-auto" src="https://samherbert.net/svg-loaders/svg-loaders/bars.svg" alt="loader">`)
            //set err conction alert
            setTimeout(() => {
                alert("check your vpn conction")
                btn.innerHTML="Submit"
              }, 20000);
        
        let newUser={
            username:userInputElem.value,
            password:passwordInputElem.value
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
}

loginform.addEventListener("submit",api)
//singUpForm.addEventListener("submit",api)
function changeform(e){
    e.preventDefault()
    console.log(e);
   
if(e.target.id=="singUPBtn" && animatedElemrRight.classList.contains("mt-78")){
console.log(logInContainer.childNodes[5]);
logInContainer.childNodes[5].remove()
    animatedElemrRight.classList.replace("mt-78","mt-98")
    logInContainer.insertAdjacentHTML("beforeend",singUp)
}else{
    console.log(e.target.id);
    logInContainer.childNodes[5].remove()
    logInContainer.insertAdjacentHTML("beforeend",login)
    animatedElemrRight.classList.replace("mt-98","mt-78")
}
console.log(logInContainer.childNodes);
}

 //loginBtn.addEventListener("click",changeform)
 //singUpBtn.addEventListener("click",changeform)