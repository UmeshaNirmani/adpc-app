import React, { useState } from "react";
import {
  Avatar,
  Checkbox,
  Grid,
  Paper,
  TextField,
  FormControlLabel,
  Button,
} from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import DropFileInput from "./DropFileInput";

const LoginForm = ({ Login, error }) => {
  const [details, setDetails] = useState({
    name: "",
    Password: "",
    dropFiles: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

  const paperStyle = {
    padding: 20,
    height: "75vh",
    width: 300,
    margin: "20px auto",
    align: "center",
  };
  const avtarStyle = { backgroundColor: "#1bbd7e" };
  const textStyle = { width: 300, margin: "10px auto" };
  const buttonStyle = { padding: 15, width: 300, margin: "10px auto" };
  const onFileChange = (files) => {
    setDetails({ ...details, dropFiles: files[0].name });
    console.log(files);
    console.log("file name: ", files[0].name);
  };

  // const FormControlLabel={backgroundColor:'#1bbd7e'}

  return (
    <form onSubmit={submitHandler}>
      <Paper elevation={24} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avtarStyle}>
            <AccountCircleOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>

        <TextField
          htmlFor="name"
          label="Username"
          id="name"
          placeholder="Enter username"
          type="text"
          name="name"
          fullWidth
          required
          style={textStyle}
          onChange={(e) => setDetails({ ...details, name: e.target.value })}
          value={details.name}
        />

        <TextField
          htmlFor="Password"
          label="Password"
          id="Password"
          placeholder="Enter Password"
          type="Password"
          name="Password"
          fullWidth
          required
          style={textStyle}
          onChange={(e) => setDetails({ ...details, Password: e.target.value })}
          value={details.Password}
        />

        <DropFileInput
          onFileChange={(files) => onFileChange(files)}
          id="dropFiles"
          name="dropFiles"
          fullWidth
          required
          style={textStyle}
          // onChangeFile={(e) =>
          //   setDetails({ ...details, dropFiles: e.target.value })
          // }
          value={details.dropFiles}
        />

        <FormControlLabel
          control={<Checkbox name="checkedb" color="primary" />}
          label="Remember Me"
        />
        {error !== "" ? <div className="error">{error}</div> : ""}

        <Button
          style={buttonStyle}
          value="LOGIN"
          type="submit"
          color="primary"
          variant="contained"
          //   fullwidth
        >
          Sign In
        </Button>
      </Paper>
    </form>
  );
};

export default LoginForm;
