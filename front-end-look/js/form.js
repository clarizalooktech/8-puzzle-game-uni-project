const emailInput = document.querySelector('#registerEmail');
const passwordInput = document.querySelector('#registerPassword');
const loginEmailInput = document.querySelector('#loginEmail');
const loginPasswordInput = document.querySelector('#loginPassword');
const playGameContainer = document.querySelector('.play-the-game-div');
const logoutButton = document.querySelector('#logout-button');
const registerButton = document.querySelector('#register-button');
const loginButton = document.querySelector('#login-button');

const errorMessage = {
  all: {
    required: "Please fill out required fields!",
    incorrect: "Sorry, either email or password is incorrect!"
  },
  email: {
    registered: "Email address already registered!",
    invalid: "You have entered an invalid email address!"
  }
}

/* Validates the email address */
const validateEmail = (email) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  } else {
    return false;
  }
}

const handleRegister = () => {
  registerButton.addEventListener('click', (e) => {
    const formValues = localStorage.getItem('form_values');
    const emailValue = emailInput.value;
    const passValue = passwordInput.value;

    e.preventDefault(); 
    if(emailValue !== '' && passValue !== '') {
      if(validateEmail(emailValue)) {
        if(formValues) {
          let isAccount = false;
          let playerEmail = "";
          formValues.forEach(item => {
            if(item.email === emailValue) {
              isAccount = true;
              playerEmail = item.email;
            }
          })
          
          if(isAccount) {
            alert(errorMessage.email.registered);
          } else {
            let formArr = []; // creates form values into an array
            formArr.push(...formValues, {email: emailValue, pass: passValue});

            localStorage.setItem('form_values', JSON.stringify(formArr))
            localStorage.setItem('is_logged_in', true);
            localStorage.setItem('player_id', playerEmail);
            // /* Reloads the page */
            setTimeout(() => window.location.href = window.location.href);
          }
        } else {
          localStorage.setItem('form_values', JSON.stringify([{email: emailValue, pass: passValue}]))
          localStorage.setItem('is_logged_in', true);
          localStorage.setItem('player_id', emailValue);
          // /* Reloads the page */
          setTimeout(() => window.location.href = window.location.href);
        }
      } else {
        alert(errorMessage.email.invalid);
      }     
    } else {
      alert(errorMessage.all.required);
    }
  })
}

const handleLogin = () => {
  loginButton.addEventListener('click', (e) => {
    const formValues = JSON.parse(localStorage.getItem('form_values'));
    const emailValue = loginEmailInput.value;
    const passValue = loginPasswordInput.value;

    e.preventDefault();
    if(emailValue !== '' && passValue !== '') {
      if(validateEmail(emailValue)) {
        if(formValues) {
          let isAccountLogin = false;
          let playerEmail = "";
          formValues.forEach(item => {
            if(item.email === emailValue && item.pass === passValue) {
              isAccountLogin = true;
              playerEmail = item.email;
            }
          })
          if(isAccountLogin) {
            localStorage.setItem('is_logged_in', true);
            localStorage.setItem('player_id', playerEmail);
            /* Reloads the page */
            setTimeout(() => window.location.href = window.location.href);
          } else {
            alert(errorMessage.all.incorrect);
          }
        } else {
          alert(errorMessage.all.incorrect);
        }
      } else {
        alert(errorMessage.email.invalid);
      }
    } else {
      alert(errorMessage.all.required);
    }
  })
}

const handleLogout = () => {
  logoutButton.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.removeItem('is_logged_in');
    localStorage.removeItem('player_id');
    localStorage.removeItem('is_start');
    localStorage.removeItem('time_display_final');
    localStorage.removeItem('drop_count_final');
    /* Reloads the page */
    setTimeout(() => window.location.href = window.location.href);
  })
}

window.addEventListener('load', () => {
  handleRegister();
  handleLogin();
  handleLogout();
  
  // localStorage.removeItem('form_values');
  const isLoggedIn = JSON.parse(localStorage.getItem('is_logged_in')); // Add item to the local storage
  const playerValue = localStorage.getItem('player_id'); // Add item to the local storage
  if(isLoggedIn !== null || isLoggedIn) {
    document.body.classList.add('is-logged-in');
    playGameContainer.classList.remove('is-disabled');

    const playerId = document.querySelector('#player-email');
    playerId.innerText = playerValue;
  } else {
    document.body.classList.remove('is-logged-in');
    playGameContainer.classList.add('is-disabled');
  }
})