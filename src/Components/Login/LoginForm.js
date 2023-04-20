import React from "react";
import { Link } from "react-router-dom";
import URL from "./URL.js";

const LoginForm = () => {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubimit(e) {
    e.preventDefault();
    fetch(`${URL}/jwt-auth/v1/token`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ userName, password }),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((json) => {
        console.log(json);
        return json();
      });
  }

  return (
    <section>
      <h1>Login</h1>

      <form action="" onSubmit={handleSubimit}>
        <input
          type="text"
          value={userName}
          onChange={({ target }) => setUserName(target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button>Entrar</button>
      </form>

      <Link to="/login/create">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
