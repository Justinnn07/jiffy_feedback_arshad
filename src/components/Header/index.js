import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../../assests/giffy_logo.png";
import moment from "moment";

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit" elevation={1}>
        <Toolbar>
          {/* eslint-disable */}
          <img src={logo} alt="" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* News */}
          </Typography>
          <Typography
            color={"#545A77"}
            style={{
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            {moment(Date.now()).format("Do MMM, YYYY")}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
