import React from "react";
import date, { today, tomorrow, yesterday } from "./date.js";
function InputForm(props) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [authenticated, setAuthenticated] = React.useState(false);

  const handleUsernameChange = e => {
    setUsername(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };
  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleauthentication = () => {
    if (
      (username === "today" && password === today ) ||
      (username === "tomorrow" && password === tomorrow) ||
      (username === "yestoday" && password === yesterday)
    ) {
      setAuthenticated(true);
    } else setAuthenticated(false);
    
  };

  const handleLogout = () => {
    setAuthenticated(false);
    setUsername("");
    setPassword("");
  };

  if (authenticated) {
    return (
      <div>
        <h1>wlecome back</h1>
        <button onClick={handleLogout}>logout</button>
      </div>
    );
  }
  return (
    <div>
      <h1>please login</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          username
          <input
            className="input"
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
        </label>
        <label>
          password
          <input
            className="input"
            type="text"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
      </form>
      <button className="btn" onClick={handleauthentication}>
        login
      </button>
    </div>
  );
}

export default InputForm;
