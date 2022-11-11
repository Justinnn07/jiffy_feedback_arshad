import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box, Divider } from "@mui/material";
import React from "react";
import scooty from "../../assests/Scooty.png";
const Footer = () => {
  return (
    <Box style={{ height: "auto" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <h2
            style={{
              color: "#545A77",
              font: "normal normal normal 15px/24px Montserrat",
            }}
          >
            Thank you,
            <h2
              style={{
                color: "#131C4C",
                opacity: "100%",
                font: " normal normal 600 15px/24px Montserrat",
                marginTop: -5,
              }}
            >
              Team Jiffy
            </h2>
          </h2>

          <img src={scooty} alt="" />
          <h3
            style={{
              font: "italic normal medium 14px/23px Montserrat",
              height: 18,
            }}
          >
            your needs in a Jiff…
          </h3>
        </Box>
        <Box
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          <Box>
            <Facebook />
          </Box>
          <Box>
            <Twitter />
          </Box>
          <Box>
            <Instagram />
          </Box>
        </Box>
      </Box>
      <Divider />

      <Box>
        <div
          style={{
            font: "normal normal normal 11px/16px Montserrat",
            fontSize: 13,
            color: "#131C4C",
          }}
        >
          <span>About Us</span> | <span>Privacy Policy</span> |{" "}
          <span>Contact Us</span>
        </div>

        <div
          style={{
            font: "Montserrat",
            color: "#545A77",
          }}
        >
          This message and any associated files are intended only for the use of
          the individual or entity to which it is addressed. If you are not the
          intended recipient please delete this message and notify the sender
          immediately by return email or by calling the sender.
        </div>
      </Box>
    </Box>
  );
};

export default Footer;
