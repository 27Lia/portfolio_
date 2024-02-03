import React from "react";
import styled from "styled-components";

const CareerFeedContainer = styled.div``;

const CareerItem = styled.div``;

const CareerFeed = ({ careerData }) => {
  return (
    <CareerFeedContainer>
      {careerData.map((item, index) => (
        <CareerItem key={index}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </CareerItem>
      ))}
    </CareerFeedContainer>
  );
};

export default CareerFeed;
