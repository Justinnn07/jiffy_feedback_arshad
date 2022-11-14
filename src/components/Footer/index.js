import { Box } from "@mui/material";
import React from "react";
import scooty from "../../assests/Scooty.png";
import instagram from "../../assests/instagram.png";
import twitter from "../../assests/twitter-logo.png";
import fb from "../../assests/fb-logo.png";

const Footer = () => {
  return (
    <Box style={{ paddingTop: 20 }}>
      {/* eslint-disable */}
      <div className="jthanks">
        Thank you, <br /> <strong>Team Jiffy</strong>
      </div>

      <div className="jscooter">
        <img src={scooty} alt="Jiffy" width="86" height="86" />
      </div>

      <div className="jrow">
        <div className="jslogan">your needs in a Jiff…</div>
        <div className="jsocial">
          <a href="">
            <img src={fb} alt="facebook" />
          </a>
          <a href="">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
      <div className="jfooter">
        <div className="jlink">
          <a href="https://jiffy.ae/">About Us </a> |{" "}
          <a href="https://jiffy.ae/">Privacy Policy</a> |{" "}
          <a href="https://jiffy.ae/">Contact Us</a>
        </div>
        <p>
          This message and any associated files are intended only for the use of
          the individual or entity to which it is addressed. If you are not the
          intended recipient please delete this message and notify the sender
          immediately by return email or by calling the sender.
        </p>
      </div>
    </Box>
  );
};

export default Footer;
