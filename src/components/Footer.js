import React from "react";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";

export const Footer = (props) => {
  return (
    <footer>
      <AppBar position="static" color="primary">
        <Container maxWidth="md">
          <Toolbar>
            <Typography variant="body1" color="inherit">
              Thank You for supporting me !
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </footer>
  );
};

export default Footer;
