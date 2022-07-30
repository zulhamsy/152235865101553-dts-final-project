import { useState } from "react";
// APIs
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
// Icon
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function PasswordField() {
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  function handleChange(e) {
    setValues({
      ...values,
      password: e.target.value,
    });
  }

  function handleClickShowPassword() {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  }

  return (
    <FormControl variant="outlined">
      <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
      <OutlinedInput
        id="filled-adornment-password"
        label="Password"
        type={values.showPassword ? "text" : "password"}
        value={values.password}
        onChange={handleChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
}
