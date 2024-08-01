import { PageController } from "./src/controllers/Page.controller";

const loginForm = document.querySelector('#loginForm') as HTMLFormElement;
const emailUser = document.querySelector('#emailUser') as HTMLInputElement;
const passwordUser = document.querySelector('#passwordUser') as HTMLInputElement;
console.log("hola")

const url = 'https://reqres.in/api/'

loginForm.addEventListener("submit", async(event: Event) =>{
  event.preventDefault();
  
  const user = {
    email: emailUser.value,
    password: passwordUser.value,
  }

  try {
  const pageController = new PageController(url);
  const responseOfLogin = await pageController.login(user, "login")

  sessionStorage.setItem("token", responseOfLogin.token)

  const getToken = sessionStorage.getItem("token");
  if(getToken === responseOfLogin.token){
    window.location.href = 'src/views/home.html'
  }
  } catch (e) {
    console.log(e)
  }
  
})


