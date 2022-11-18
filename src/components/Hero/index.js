import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getParcelById } from "../../actions";
import heroImg from "../../assests/hero.png";

function Hero({ setCurrentData, setLoading }) {
  const { userId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getParcelById(userId, setCurrentData, navigate, setLoading);

    // eslint-disable-next-line
  }, []);
  return (
    <Box>
      <Grid container>
        <Grid xs={8} item>
          <Box>
            <h4
              style={{
                fontSize: 22,
                width: "219px",
                font: "normal normal normal 22px/30px Montserrat",
                position: "relative",
              }}
            >
              How was your order experience?
            </h4>
          </Box>
          <Box
            style={{
              marginTop: -55,
            }}
          >
            <h4
              style={{
                fontSize: 50,
                width: 343,
                font: "normal normal bold 50px/62px Montserrat",
                position: "relative",
              }}
            >
              Tell us about your order from Jiffy.
            </h4>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <div
            style={{
              height: "390px",
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
            }}
          >
            <img src={heroImg} alt="" />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Hero;
