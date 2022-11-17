import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Hero from "./components/Hero";
import MainSection from "./components/MainSection";
import { CircularProgress, Container } from "@mui/material";
import Footer from "./components/Footer";
import axios from "axios";
import config from "./config/config.json";

const App = () => {
  console.log(config);
  const [review, setReview] = useState("");
  const [type, setType] = useState("");
  const [rating, setRating] = useState(0);
  const [wontShow, setWontShow] = useState(false);
  const [currentData, setCurrentData] = useState("");
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);

  const url = new URL(window.location);
  const id = url.pathname.split("/");

  useEffect(() => {
    setLoading(true);
    axios.get(config.parcel_api).then((res) => {
      const ids = res.data.parcel.map((res) => res._id);

      if (ids.includes(id[1])) {
        setWontShow(false);
        const userId = res.data.parcel.filter((res) => res._id === id[1])[0]
          .userId;

        const ObjVals = Object.keys(
          res.data.parcel.filter((res) => res._id === id[1])[0]
        ).includes(
          ("customer_rating" && "customer_comment" && "customer_concern") ||
            ("user_rating" && "user_comment" && "user_concern")
        );

        if (!ObjVals) {
          setWontShow(true);
          setShowError(ObjVals);
        }

        axios.get(config.userName_api + `?_id=${userId}`).then((res) => {
          setCurrentData(res.data.vendors_collection[0].name);
          setLoading(false);

          // console.log(res.data);
        });
        // [0].pickup[0]
      } else {
        setShowError(true);
        setWontShow(true);
        setLoading(false);
      }
    });

    //eslint-disable-next-line
  }, []);

  const submit = async () => {
    setLoading(true);
    await axios.get(config.parcel_api).then((res) => {
      const aParticularData = res.data.parcel.filter(
        (res) => res._id === id[1]
      )[0];

      const ObjVals = Object.keys(aParticularData).includes(
        ("customer_rating" && "customer_comment" && "customer_concern") ||
          ("user_rating" && "user_comment" && "user_concern")
      );

      if (id[2] === "customer") {
        if (!ObjVals) {
          axios
            .put(config.parcel_api, {
              _id: id[1],
              customer_rating: rating,
              customer_comment: review,
              customer_concern: type,
            })
            .then((res) => {
              console.log(res.data);
              if (res.data.status === "Success") {
                setLoading(false);

                alert(res.data.status);
              } else {
                alert(res.data.ERROR);
              }
            });
        } else {
          setLoading(false);

          alert("Already Submitted");
        }
      } else {
        if (ObjVals === false) {
          axios
            .put(config.parcel_api, {
              _id: id[1],
              user_rating: rating,
              user_comment: review,
              user_concern: type,
            })
            .then((res) => {
              if (res.data.status === "success") {
                alert(res.data.status);
                setLoading(false);
              } else {
                alert(res.data.ERROR);
                setLoading(false);
              }
            });
        } else {
          alert("Already Submitted");
          setLoading(false);
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

      <>
        {loading ? (
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "80vh",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <>
            {wontShow ? (
              <Container>
                <h3>
                  {showError
                    ? "Please Provide proper user / customer id"
                    : "Feedback already submitted"}
                </h3>
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
                  userName={currentData}
                />
                <Footer />
              </Container>
            )}
          </>
        )}
      </>
    </Box>
  );
};

export default App;
