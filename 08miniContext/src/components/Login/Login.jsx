import React, { useState,useContext } from "react";
import UserContext from "../../context/UserContext";

//SENDING DATA TO CONTEXT AND FETCHING THERE

//to control the values of usernames and password or to connect these with the UI, we'll add 'value' attribute in the input tag and when value changes we want UI to be updated as well so for that use OnChange()
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //fetching values/data from usercontext.Using setUser from the context we created UserContext to set the username and password of user
  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault(); //by default when we submit, the value goes somewhere through url or post method
    console.log({username});
    setUser({ username, password });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="username"
      />{" "}
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
