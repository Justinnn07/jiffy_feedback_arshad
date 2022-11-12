import { Button, Container, Grid, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Textarea from "@mui/joy/Textarea";

const MainSection = ({
  setReview,
  review,
  setType,
  type,
  rating,
  setRating,
  onClick,
}) => {
  const [options] = useState([
    { type: "Delivery" },
    { type: "Packaging" },
    { type: "Quality" },
    { type: "Others" },
  ]);
  return (
    <Box style={{}}>
      <h3
        style={{
          fontSize: 20,
          font: "normal normal bold 20px/23px Montserrat",
        }}
      >
        Hello Arshad,
      </h3>
      <div>
        <h3
          style={{
            color: "#545A77",
            fontSize: "15px",
            font: "normal normal normal 15px/24px Montserrat",
            witdh: 515,
          }}
        >
          We'd love to get your feedback on your order from Jiffy. Please take a
          moment to rate your experience.
        </h3>
      </div>

      <Box
        sx={{
          background: "#131C4C",
          borderRadius: 3,
          "& > *": {
            color: "white",
            padding: "40px",
          },
        }}
      >
        <Container
          style={{
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              font: "normal normal 600 16px/23px Montserrat",
              color: "white",
            }}
          >
            How would you like to rate your order?
          </Typography>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Rating
              value={rating}
              onChange={(e, newVal) => setRating(newVal)}
              color="white"
              size="large"
            />
            <Box
              sx={{
                display: "flex",
                marginLeft: -10,
              }}
            >
              <Typography
                component="legend"
                sx={{
                  font: "normal normal normal 14px/40px Montserrat",
                  marginLeft: 10,
                }}
              >
                Very Bad
              </Typography>
              <Typography
                sx={{
                  font: "normal normal normal 14px/40px Montserrat",
                  marginLeft: 20,
                }}
                component="legend"
              >
                Amazing
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      {rating <= 3 && rating !== 0 && rating !== undefined && (
        <Box sx={{ marginTop: 3, background: "#FAF6EA", padding: 5 }}>
          <h3
            style={{
              color: "#131C4C",
              font: "normal normal 600 16px/23px Montserrat",
              textAlign: "center",
            }}
          >
            Anything in particular?
          </h3>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            {options.map((res, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid #858793",
                  padding: 10,
                  borderRadius: 10,
                  font: "normal normal 16px/23px Montserrat",
                  color: type === res.type ? "black" : "#858793",
                  width: "auto",
                  textAlign: "center",
                  marginTop: 10,
                  cursor: "pointer",
                  background: type === res.type ? "#DBA41F" : null,
                }}
                onClick={() => setType(res.type)}
              >
                {res.type}
              </div>
            ))}
          </div>
        </Box>
      )}

      <Box sx={{ marginTop: 3, background: "#FAF6EA", padding: 5 }}>
        <h3
          style={{
            color: "#131C4C",
            font: "normal normal 600 16px/23px Montserrat",
            textAlign: "center",
          }}
        >
          Tell us more, to serve you better
        </h3>

        <Grid container>
          <Grid item xs={12}>
            <Textarea
              sx={{
                border: "1px solid #858793",
                outlineWidth: 0,
                outline: "none",
              }}
              minRows={8}
              placeholder="Let us know what went wrong so we can get it right the next time."
              value={review}
              onChange={(e) => {
                if (review.length > 100) {
                  alert("Review exceeds");
                } else {
                  setReview(e.target.value);
                }
              }}
            />
          </Grid>

          <Grid item xs={12} sx={{ textAlign: "right" }}>
            {review.length} / 100
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ marginTop: 2 }}>
        <Button
          fullWidth
          sx={{
            background: "#131C4C",
            color: "white",
            fontWeight: 700,
            "&:hover": {
              color: "black",
            },
            borderRadius: 2,
          }}
          size="large"
          onClick={onClick}
        >
          Submit Your Feedback
        </Button>
      </Box>
    </Box>
  );
};

export default MainSection;
