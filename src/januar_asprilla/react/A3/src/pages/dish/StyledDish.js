import styled from "styled-components";
const BackgroundContainer = styled.div`
  background-color: #f2f2f6;
  margin: 0;
  padding: 15vh 10vw;
  height: 100vh;
`;

const DishContainer = styled.div`
  margin: 0 auto;
  background-color: white;
  border-radius: 15px;
  display: grid;
  grid-template-columns: auto 1fr;
  box-shadow: 16px 0px 53px 39px #fdebe4;
`;

const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 15% 85%;
  grid-template-rows: auto 1fr;
`;

const ExtraContainer = styled.div`
  margin-left: 15px;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #d4d4d4;
`;

const OptionContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  margin-bottom: 10px;
  border-right: ${(props) =>
    props.barRight === "true" ? "3px solid orange" : "transparent"};
`;

const IconContainer = styled.div`
  margin: 0 auto;
`;

const OptionsCard = styled.div`
  margin: 30px auto;
`;
const ContainerInformation = styled.div`
  font-family: Helvetica;
`;
const Content = styled.div`
  display: flex;
  gap: 5px;
  align-items: baseline;
  margin: 0px 20px;
  flex-direction: ${(props) =>
    props.direction === "column" ? "column" : "row"};
`;
const TitleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  margin: 30px 20px 8px;
  align-items: center;
`;
const StyledOptions = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  padding: 0 25px;
  gap: 20px;
  margin-top: 70px;
`;

export {
  Content,
  OptionsCard,
  OptionContainer,
  IconContainer,
  BackgroundContainer,
  DishContainer,
  InfoContainer,
  ExtraContainer,
  ContainerInformation,
  TitleContainer,
  StyledOptions,
};
