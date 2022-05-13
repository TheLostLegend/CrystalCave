import { 
  getAuth, 
  onAuthStateChanged, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

import{
  app
} from './index.js'

import { 
  loginUsername,
  loginPassword,
  sigupUsername,
  sigupPassword,
  btnLogin,
  btnSignup,
  btnLoginForm,
  btnSignupForm,
  btnLogout,
  navPanel,
} from './ui.js'

const auth = getAuth(app);
let Iuser = null;

onAuthStateChanged(auth, user => {
    Iuser = user;
    if(user != null) {
        btnLogin.style.display = "none"
        btnSignup.style.display = "none"
        btnLogout.style.display = "block"
        navPanel.style.display = "flex"
      console.log('logged in')
    }
    else {
        btnLogin.style.display = "block"
        btnSignup.style.display = "block"
        btnLogout.style.display = "none"
        navPanel.style.display = "none"
      console.log('No user');
    }
});

// Login using email/password
const loginEmailPassword = async () => {
  const username = loginUsername.value
  const pwd = loginPassword.value

  try {
    await signInWithEmailAndPassword(auth, username, pwd)
    console.log(`${username} login`)
  }
  catch(error) {
    switch(error.message){
      case 'Firebase: Error (auth/invalid-email).':
        alert(`Invalid email`)
        break
      case 'Firebase: Error (auth/wrong-password).':
        alert(`Wrong password`)
        break
      default:
        console.log(`There was an error: ${error}`)
    }
  }
}

const createAccount = async () => {
  const email = sigupUsername.value
  const password = sigupPassword.value

  try {
    await createUserWithEmailAndPassword(auth, email, password)
    console.log(`${email} sign up`)
  } 
  catch(error) {
    switch(error.message){
      case 'Firebase: Error (auth/invalid-email).':
        alert(`Invalid email`)
        break
      case 'Firebase: Password should be at least 6 characters (auth/weak-password).':
        alert(`Password should be at least 6 characters.`)
        break
      case 'Passwords not match':
        alert(`Passwords not match`)
        break
      default:
        console.log(`There was an error: ${error}`)
        console.log(`${error.message}`)
    }
  }
}

const logoutAccount = async () => {
  try {
    await auth.signOut();
    console.log(`logout`)
  } 
  catch(error) {
    console.log(`There was an error: ${error}`)
  }
}

btnLoginForm.addEventListener("click", loginEmailPassword)
btnSignupForm.addEventListener("click", createAccount)
btnLogout.addEventListener("click", logoutAccount)

let currentForm=null;
let isOpen = false;

function openForm(formName) {
    if (formName == 'NavPan' && Iuser == null){console.log('im Out' + formName);   return}
    if (formName == currentForm){closeCurrentForm(); currentForm = null; return }
    console.log('im here' + formName + " " + Iuser);
    closeCurrentForm()
    document.getElementById(formName).style.display = "flex";
    currentForm = formName;
    isOpen = true;
}
function closeFrom(formName) {
    document.getElementById(formName).style.display = "none";
    currentForm = null;
    isOpen = false
} 
function closeCurrentForm()
{
    if (isOpen)
    {
        document.getElementById(currentForm).style.display = "none";
        isOpen = false;
    }
}

window.openForm = openForm;
window.closeFrom = closeFrom;