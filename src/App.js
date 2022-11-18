import { Box } from "@mui/system";
import React, { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Hero from "./components/Hero";
import MainSection from "./components/MainSection";
import { Container } from "@mui/material";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Loading from "./components/Loading";

const App = () => {
  const [review, setReview] = useState("");
  const [type, setType] = useState("");
  const [rating, setRating] = useState(0);
  const [currentData, setCurrentData] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <Box>
      <Header />
      <Box
        style={{
          height: 50,
          backgroundImage:
            "linear-gradient(to right top, #d7ebf5, #d6ecf4, #d5ecf3, #d4edf2, #d4edf1, #d4eeef, #d5efed, #d6f0eb, #daf2e7, #dff3e3, #e7f4e0, #eff4dd)",
        }}
      ></Box>

      <Routes>
        <Route path="*" element={<NotFound showError={true} />} />
        <Route path="/" element={<NotFound showError={true} />} />
        <Route
          path="/feedback-already-submitted"
          element={<NotFound showError={false} />}
        />

        <Route path="/">
          <Route
            path=":userId/user"
            element={
              <Container>
                {loading ? (
                  <Loading Loading={loading} />
                ) : (
                  <>
                    <Hero
                      setLoading={setLoading}
                      setCurrentData={setCurrentData}
                    />
                    <MainSection
                      rating={rating}
                      setRating={setRating}
                      setReview={setReview}
                      type={type}
                      setType={setType}
                      review={review}
                      setLoading={setLoading}
                      userName={currentData}
                    />
                    <Footer />
                  </>
                )}
              </Container>
            }
          />
        </Route>
      </Routes>
    </Box>
  );
};

export default App;
