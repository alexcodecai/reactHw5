import React from "react";
import { today, tomorrow, yesterday } from "./date.js";
import Logout from "./Logout.js"
import './App.css'

function InputForm(props) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [authenticated, setAuthenticated] = React.useState(false);
  const [isVaild, setIsvaild] = React.useState(true);

  const handleUsernameChange = e => {
    setUsername(e.target.value);
  };

  const handleSubmit = e => {
    if (
      (username === "today" && password === today) ||
      (username === "tomorrow" && password === tomorrow) ||
      (username === "yestoday" && password === yesterday)
    ) {
      setAuthenticated(true);
    } else {
      setIsvaild(false);
    }
    e.preventDefault();
  };
  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleLogout = () => {
    setAuthenticated(0);
    setUsername("");
    setPassword("");
  };

  if (authenticated) {
    return (
      <div>
          <Logout handleLogout = {handleLogout}/>
      </div>
    );
  }
  return (
    <div className = "contanier">
      <h1>please login</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div>
        <label>
          username
          <input
            className="input"
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
        </label>
        </div>
        <div>
        <label>
          password
          <input
            className="input"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        </div>
      </form>
      <div>
      <button className="btn" onClick={handleSubmit}>
        login
      </button>
      </div>
      <p>{isVaild ? "" : "Invalid Username or Password. Please try again."}</p>
    </div>
  );
}

export default InputForm;
