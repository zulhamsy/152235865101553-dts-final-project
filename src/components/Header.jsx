import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import blue from "@mui/material/colors/blue";

export default function Header() {
  return (
    <AppBar position="static" color="transparent" variant="outlined">
      <Toolbar>
        <Typography
          fontWeight="normal"
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          Game
          <Typography
            fontWeight="bold"
            variant="h6"
            component="span"
            color={() => blue[800]}
          >
            Blue
          </Typography>
        </Typography>
        <Button color="primary" variant="contained" size="large" sx={{ px: 4 }}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}
