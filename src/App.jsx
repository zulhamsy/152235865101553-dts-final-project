import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const App = () => {
  return (
    <div
      style={{
        padding: "1rem",
      }}
    >
      <Typography variant="h1">Typography Component Test</Typography>
      <Button variant="contained">Add New Note</Button>
    </div>
  );
};

export default App;
