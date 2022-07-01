document
  .getElementById('form-reg')
  ?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const errorDiv = document.querySelector('.error-div');

    const response = await fetch('/auth/reg', {
      method: 'POST',
      body: JSON.stringify({
        login: event.target.login.value,
        name: event.target.name.value,
        email: event.target.email.value,
        password: event.target.password.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();
    if (result.reg) {
      window.location = '/';
    } else {
      errorDiv.innerHTML = '<p>Такой пользователь уже существует</p>';
    }
  });
