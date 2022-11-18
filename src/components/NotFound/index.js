import { Container } from "@mui/system";
import React from "react";

const NotFound = ({ showError }) => {
  return (
    <Container>
      <h3>
        {showError
          ? "Please Provide proper user / customer id"
          : "Feedback already submitted"}
      </h3>
    </Container>
  );
};

export default NotFound;
