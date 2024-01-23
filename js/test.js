let logInContainer=document.querySelector("main")
let login=`<form action="" id="Loginform" class="relative font-serif w-9/12 sm:w-6/12 lg:6/12 flex flex-col items-center gap-4 bg-stone-100 bg-opacity-20 pt-4 pb-10 mt-5 mx-auto rounded-xl border">
<div class="mx-auto"><h1 class="text-center text-stone-100 text-3xl font-medium hover:tracking-wider">Login Form</h1></div>
<div class="w-full mx-auto flex flex-col items-center">
    <div class="w-9/12"><span class="float-left" for="password">Username</span></div>
    <input id="usernameinput" class="w-9/12 h-8 mx-auto rounded-md" type="text" placeholder="username" name="username" /></div>
<div class="w-full mx-auto flex flex-col items-center">
    <div class="w-9/12"><span class="float-left" for="password">Password</span></div>
    <input id="passwordinput" class="w-9/12 h-8 mx-auto rounded-md" type="password" placeholder="Password" name="PassWord" />
    </div>
    <button id="submitbutton" class="w-7/12 py-2 mt-5 bg-cyan-300 rounded-lg transition-all border-red-950 hover:border hover:bg-zinc-200 hover:scale-95">Submit</button>
    <div class="text-xs"><button onclick="changeform(event)" id="singUPBtn" class="hover:text-cyan-300">Sing Up</button> / <button id="LoginBtn" onclick="changeform(event)" class="hover:text-cyan-300">Login</button></div>
</form>`
let singUp=`<form action="" onsubmit="api(event)" id="Singupform" class="relative font-serif w-9/12 sm:w-6/12 lg:6/12 flex flex-col items-center gap-4 bg-stone-100 bg-opacity-20 pt-4 pb-10 mt-5 mx-auto rounded-xl border">
<div class="mx-auto"><h1 class="text-center text-stone-100 text-3xl font-medium hover:tracking-wider">Login Form</h1></div>
<div class="w-full mx-auto flex flex-col items-center text-left">
    <div class="w-9/12"><span class="float-left" for="password">Username</span></div>
    <input id="usernameinput" class="w-9/12 h-8 mx-auto rounded-md" type="text" placeholder="username" name="username" /></div>
<div class="w-full mx-auto flex flex-col items-center text-left">
    <div class="w-9/12"><span class="float-left" for="password">Password</span></div>
    <input id="passwordinput" class="w-9/12 h-8 mx-auto rounded-md" type="password" placeholder="Password" name="PassWord" />
    <div  class="w-9/12" id="regex"></div>
    </div>
    <div class="w-full mx-auto flex flex-col items-center text-left">
        <div class="w-9/12"><span class="float-left" for="password">Repeat Password</span></div>
        <input id="repeatinput" class="w-9/12 h-8 mx-auto rounded-md" type="password" placeholder="Repeat-Password" name="PassWord" />
        <div  class="w-9/12" id="checkpassword"></div>
        </div>
    <button id="submitbutton" class="w-7/12 py-2 mt-5 bg-cyan-300 rounded-lg transition-all border-red-950 hover:border hover:bg-zinc-200 hover:scale-95">Submit</button>
    <div class="text-xs"><button onclick="changeform(event)" id="singUPBtn" class="hover:text-cyan-300">Sing Up</button> / <button id="LoginBtn" onclick="changeform(event)" class="hover:text-cyan-300">Login</button></div>
</form>`
// add login form to the contioner
logInContainer.insertAdjacentHTML("beforeend",login)

let loginform=document.getElementById("Loginform")

let btn=document.getElementById("submitbutton")
let singUpBtn=document.getElementById("singUPBtn")
let loginBtn=document.getElementById("LoginBtn")

let animatedElemrRight=document.getElementById("animatedCircleright")
let animatedElemrLeft=document.getElementById("animatedCircleleft")

/// a function to clear input value after submit

function clearData () {
    let passwordInputElem=document.getElementById("passwordinput")
    let userInputElem=document.getElementById("usernameinput")
    userInputElem.value=""
    passwordInputElem.value=""
}
/// a function to redirect the user to the todolist
function link(){
    console.log(location.search);
    window.location.assign("https://amirhossein-mirzaei23.github.io/Advanced-Todo-List/")
}
///
function define(){
    let passwordInputElem=document.getElementById("passwordinput")
let userInputElem=document.getElementById("usernameinput")
}
/// a function to create regex for sing up form
function api(e){
    
        e.preventDefault()
//
let passwordInputElem=document.getElementById("passwordinput")
let userInputElem=document.getElementById("usernameinput")




    if(e.target.id=="Singupform"){
        let checkPasswordInput=document.getElementById("repeatinput")
        let checkpassElem=document.getElementById("checkpassword")
        let regexElem=document.getElementById("regex")
        let regextext="repeat Password isn`t match"
        function passwordmassege(){
            checkpassElem.insertAdjacentHTML("beforeend",`<h3 class="text-xs md:text-sm flex text-red-500 mt-1 text-left">${regextext}</h3>`)
        }
        if (/.{8}/.test(passwordInputElem.value) && /[^A-Za-z]/.test(passwordInputElem.value))
        {
            // At least 8 characters and contains one non-alphabetic character
            regexElem.innerHTML=""
        }else{
            regexElem.innerHTML=""
            regexElem.insertAdjacentHTML("beforeend",`<h4 class="text-xs md:text-sm flex text-red-500 mt-1 text-left">At least 8 characters and contains one non-alphabetic character</h4>`)
            return
        }
     if(checkPasswordInput.value===passwordInputElem.value){
           
            regextext="repeat Password is matched"
            checkpassElem.innerHTML=""
            passwordmassege()
        }else{
            checkpassElem.innerHTML=""
            passwordmassege()
            return
        }}
       
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
/// a fecth method to post user info
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

loginform.addEventListener("submit",api)
//singUpForm.addEventListener("submit",api)
function changeform(e){
    e.preventDefault()
   
if(e.target.id=="singUPBtn" && animatedElemrRight.classList.contains("mt-78")){

logInContainer.childNodes[5].remove()
    animatedElemrRight.classList.replace("mt-78","mt-98")
    logInContainer.insertAdjacentHTML("beforeend",singUp)
}else{
   
    logInContainer.childNodes[5].remove()
    logInContainer.insertAdjacentHTML("beforeend",login)
    animatedElemrRight.classList.replace("mt-98","mt-78")
}

}

 //loginBtn.addEventListener("click",changeform)
 //singUpBtn.addEventListener("click",changeform)