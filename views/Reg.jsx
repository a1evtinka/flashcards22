const React = require('react');
const Layout = require('./Layout');
const NavBar = require('./NavBar');

module.exports = function Reg() {
  return (
    <Layout>
      <NavBar></NavBar>

      <form className="form-reg" id="form-reg">
        <input
          required
          className="input"
          name="login"
          type="login"
          placeholder="Ваш логин"
        />
        <input
          required
          className="input"
          name="name"
          type="name"
          placeholder="Ваше имя"
        />
        <input
          required
          className="input"
          name="email"
          type="email"
          placeholder="Ваш e-mail"
        />
        <input
          required
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Пароль должен содержать по крайней мере одно число, одну заглавную и строчную буквы, а также не менее 8 и более символов"
          className="input"
          name="password"
          type="password"
          placeholder="Пароль"
        />
        <input
          required
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Пароль должен содержать по крайней мере одно число, одну заглавную и строчную буквы, а также не менее 8 и более символов"
          className="input"
          name="checkPassword"
          type="Password"
          placeholder="Повторите пароль"
        />
        <button className="btn" type="submit">
          Зарегистрироваться
        </button>
        <div className="error-div" />
      </form>
    </Layout>
  );
};
