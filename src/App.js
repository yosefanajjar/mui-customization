import React from "react";
import Button from "@material-ui/core/Button";
import "./App.css";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import ProTip from "./ProTip";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Create React App v4-beta example
          </Typography>
          <Button variant="contained" color="primary">
            hello world
          </Button>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
