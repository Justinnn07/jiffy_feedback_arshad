import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Hero from "./components/Hero";
import MainSection from "./components/MainSection";
import { Container } from "@mui/material";
import Footer from "./components/Footer";
import axios from "axios";

const App = () => {
  const [review, setReview] = useState("");
  const [type, setType] = useState("");
  const [rating, setRating] = useState(0);
  const [wontShow, setWontShow] = useState(false);

  console.log(wontShow);
  const url = new URL(window.location);
  const id = url.pathname.split("/");

  useEffect(() => {
    axios
      .get("https://apis.staging.jiffy.ae/vendor/api/v1/parcel")
      .then((res) => {
        const ids = res.data.parcel.map((res) => res._id);
        if (ids.includes(id[1])) {
          setWontShow(false);
        } else {
          setWontShow(true);
        }
      });
  }, [id]);

  const submit = () => {
    axios
      .get("https://apis.staging.jiffy.ae/vendor/api/v1/parcel")
      .then((res) => {
        const aParticularData = res.data.parcel.filter(
          (res) => res._id === id[1]
        )[0];

        const ObjVals = Object.keys(aParticularData).includes(
          ("customer_rating" && "customer_comment" && "customer_concern") ||
            ("user_rating" && "user_comment" && "user_concern")
        );
        if (id[2] === "customer") {
          if (ObjVals === false) {
            axios
              .put("https://apis.staging.jiffy.ae/vendor/api/v1/parcel", {
                _id: id[1],
                customer_rating: rating,
                customer_comment: review,
                customer_concern: type,
              })
              .then((res) => {
                console.log(res.data);
                if (res.data.status === "Success") {
                  alert(res.data.status);
                } else {
                  alert(res.data.ERROR);
                }
              });
          } else {
            alert("Already Submitted");
          }
        } else {
          if (ObjVals === false) {
            axios
              .put("https://apis.staging.jiffy.ae/vendor/api/v1/parcel", {
                _id: id[1],
                user_rating: rating,
                user_comment: review,
                user_concern: type,
              })
              .then((res) => {
                if (res.data.status === "success") {
                  alert(res.data.status);
                } else {
                  alert(res.data.ERROR);
                }
              });
          } else {
            alert("Already Submitted");
          }
        }
      });
  };

  return (
    <Box>
      <Header />
      <div
        style={{
          height: 50,
          backgroundImage:
            "linear-gradient(to right top, #d7ebf5, #d6ecf4, #d5ecf3, #d4edf2, #d4edf1, #d4eeef, #d5efed, #d6f0eb, #daf2e7, #dff3e3, #e7f4e0, #eff4dd)",
        }}
      ></div>
      {wontShow ? (
        <Container>
          <h3>Please Provide proper user / customer id</h3>
        </Container>
      ) : (
        <Container>
          <Hero />
          <MainSection
            rating={rating}
            setRating={setRating}
            setReview={setReview}
            type={type}
            setType={setType}
            review={review}
            onClick={submit}
          />
          <Footer />
        </Container>
      )}
    </Box>
  );
};

export default App;
