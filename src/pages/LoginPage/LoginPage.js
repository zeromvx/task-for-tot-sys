import React, {useState} from "react";
import classes from "./login-page.module.scss";
import Button from "../../components/UI/Button/Button";

export default function AuthPage({ setIsAuthorized }) {

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = (e) => {
    e.preventDefault();

    if (login === "admin" && password === "1234") {
      localStorage.setItem("user", login);
      setIsAuthorized(true);
    }
  }

  return (
    <form className={classes.Login} onSubmit={handleAuth}>
      <h1>Авторизация</h1>
      <label htmlFor="login">Логин</label>
      <input type="text" id="login" name="login" placeholder="Введите логин." onChange={({target: {value}}) => setLogin(value)} value={login}/>
      <label htmlFor="login">Пароль</label>
      <input type="password" id="password" name="password" placeholder="Введите пароль." onChange={({target: {value}}) => setPassword(value)} value={password}/>
      <Button>Войти</Button>
    </form>
  )
}