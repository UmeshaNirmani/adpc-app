// import "./Style.css";
import React, { useState } from "react";
import LoginForm from "../components/drop-file-input/login-form";
// import { Details } from "@material-ui/icons";
import { Link } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({ name: "", Password: "", dropFiles: "" });
  const [error] = useState("");
  const welcome = {
    padding: 200,
    height: "75vh",
    width: 300,
    margin: "20px auto",
    align: "center",
  };

  const Login = (details) => {
    console.log(details);

    if (details) {
      console.log("Logged in");
      setUser({
        name: details.name,
        Password: details.Password,
        dropFiles: details.dropFiles,
      });
    } else {
      console.log("Details do not match!");
      // serError("Detail do not match");
    }
  };

  const Logout = () => {
    setUser({ name: "", password: "", dropFiles: "" });
  };

  return (
    <div className="App">
      {user.name !== "" ? (
        <div className="welcome" style={welcome}>
          <h2>welcome {user.name}</h2>
          <h3>Username is :{user.name}</h3>
          <h3>Password is :{user.Password}</h3>
          <h3>{user.dropFiles}</h3>
          <button onClick={Logout}>Logout</button>
          <nav>
            <Link to="/pagination" className="link">
              Pagination
            </Link>
          </nav>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default Login;
