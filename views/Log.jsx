const React = require('react');
const Layout = require('./Layout');
const NavBar = require('./NavBar');

module.exports = function Log() {
  return (
    <Layout>
      <NavBar></NavBar>

      <form className="form-reg" action="/log" method="POST">
        <input
          required
          className="input"
          type="email"
          placeholder="Ваш e-mail"
        />
        <input
          required
          className="input"
          type="password"
          placeholder="Пароль"
        />
        <button className="btn_log" type="submit">
          Авторизироваться
        </button>
      </form>
    </Layout>
  );
};
