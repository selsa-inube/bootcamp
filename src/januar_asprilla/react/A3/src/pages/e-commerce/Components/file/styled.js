import styled from "styled-components";
const FirstContainer = styled.div`
  display: ${(props) => (props.size === "small" ? "grid" : "flex")};
  grid-template-columns: ${(props) =>
    props.size === "small" ? "none" : "auto 1fr"};
  grid-template-rows: ${(props) =>
    props.size === "small" ? "none" : "auto auto"};
  justify-content: space-between;
  gap: ${(props) => (props.size === "small" ? "10px" : "none")};
  border-right: 1px solid #b9b4b4;
`;
const TitleContainer = styled.h2`
  font-size: 20px;
  max-width: 350px;
  font-weight: lighter;
`;

const TextContainer = styled.p`
  font-size: 16px;
  color: #575966;
`;
const IconContainer = styled.i`
  margin-right: 5px;
  color: #575966;
  display: ${(props) => (props.size === "small" ? "inline" : "none")};
`;

const TextLink = styled.a`
  font-size: 16px;
  display: ${(props) => (props.size === "small" ? "inline" : "none")};
`;

const SecondContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr;
`;

const DinnerContainer = styled.p`
  font-size: 17px;
  font-weight: 600;
`;
const ShippingContainer = styled.p`
  color: ${(props) => (props.size === "small" ? "#575966" : "none")};
  font-weight: ${(props) => (props.size === "small" ? "none" : "700")};
`;

const StyledPais = styled.p`
  color: #575966;
`;

const StyledContainerPais = styled.div`
  display: ${(props) => (props.size === "small" ? "none" : "flex")};
  gap: 10px;
  padding: 0 20px;
`;

const StyledImage = styled.img`
  width: 20px;
  border-radius: 5px;
`;
const IconSelection = styled.i`
  font-size: 15px;
`;

export {
  FirstContainer,
  TitleContainer,
  TextContainer,
  IconContainer,
  TextLink,
  SecondContainer,
  DinnerContainer,
  ShippingContainer,
  StyledPais,
  StyledContainerPais,
  StyledImage,
  IconSelection,
};
