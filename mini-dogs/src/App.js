import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./store/login";

import "./styles/global.scss";
import styles from './styles/home.module.scss'


function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();

    dispatch(login({ username, password }));
  }

  return (
    <div className={styles.container}>
      <div className={styles.mainBox}>
        <h2>Mini-dogs</h2>

        <form onSubmit={handleSubmit}>
          <label htmlFor="user-input">Usuário</label>
          <input
            value={username}
            onChange={({ target }) => setUsername(target.value)}
            className="user-input"
            type="text"
          />

          <label htmlFor="pwd-input">Senha</label>
          <input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            className="pwd-input"
            type="text"
          />

          <div>
            <button type="submit">Logar</button>
          </div>
        </form>

        <button type="button" className={styles.logoutButton}></button>
      </div>
    </div>
  );
}

export default App;
