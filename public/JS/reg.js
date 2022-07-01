document.querySelector('.btn_reg').addEventListener('submit', async (event) => {
  console.log('========>', event);
  event.preventDefault();

  //   if (event.target.password === event.target.checkPassword) {
  //     const response = await fetch('/auth/reg', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         login: event.target.login.value,
  //         name: event.target.name.value,
  //         email: event.target.email.value,
  //         password: event.target.password.value,
  //       }),
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //   }
});
