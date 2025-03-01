const refs = {
  loginForm: document.querySelector('.login-form'),
};

const handleSubmit = function (event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  const formDataValue = {
    email: email.value.trim(),
    password: password.value.trim(),
  };
  if (formDataValue.email === '' || formDataValue.password === '') {
    return alert('All form fields must be filled in');
  }
  console.log(formDataValue);
  event.currentTarget.reset();
};
refs.loginForm.addEventListener('submit', handleSubmit);
