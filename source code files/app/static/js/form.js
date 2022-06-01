const checkUserExists = (userArr) => {
  if(userArr) {
    userArr.forEach((user) => {
      user.addEventListener('focusout', async (el) => {
        const inputValue = el.target.value
        const inputName = el.target.name
        let message = ""
        let userValue;
        if(inputName == 'username') {
          message = "This " +inputName+ " already exists."
          userValue = JSON.parse(JSON.stringify({
            username: inputValue,
            email: ""
          }))
        } else {
          message = "This " +inputName+ " already exists, please try login instead."
          userValue = JSON.parse(JSON.stringify({
            email: inputValue,
            username: ""
          }))
        }

        await axios.post('/validate-registration', userValue)
          .then(res => {
            if(res.data.user_exists == 'true') {
              el.target.setCustomValidity(message)
              el.target.reportValidity()
            } else {
              el.target.setCustomValidity("")
            }
            console.log(res);
          }, error => {
            console.log(error)
          })
      })
    })
  }
}

const checkUserNotExists = (email) => {
  email.addEventListener('focusout', async function (el) {
      const emailValue = el.target.value
      await axios.post('/validate-login', {
        email: emailValue
      })
        .then(res => {
          if (res.data.user_exists == 'true') {
            el.target.setCustomValidity("")
          } else {
            el.target.setCustomValidity("This user does not exists.")
            el.target.reportValidity()
          }
        }, error => {
          console.log(error)
        })
    })
}

window.addEventListener('load', () => {
  const registrationForm = document.querySelector('form[name="registration-form"]')
  const registrationEmail = registrationForm.querySelector('[name="email"]')
  const registrationUsername = registrationForm.querySelector('[name="username"]')
  const loginForm = document.querySelector('form[name="login-form"]')
  const loginEmail = loginForm.querySelector('[name="email"]')

  checkUserExists([registrationEmail, registrationUsername]);
  checkUserNotExists(loginEmail);
})