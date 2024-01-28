import { IoDocumentAttachOutline } from "react-icons/io5";
import { Container, Icon, MainTitle, Title } from "../styles/share";
import styled from "styled-components";

function Portfolio() {
  const Div = styled.div`
    width: 100%;
    height: 400px;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-bottom: 30px;
  `;

  const Img = styled.img`
    border-radius: 20px;
    height: 100%;
  `;

  const Button = styled.button`
    background-color: transparent;
    border: none;
    font-size: 18px;
    font-weight: 400;
    background-color: #cfd0c9;
    border-radius: 19px;
    padding: 7px 20px;
    position: absolute;
    bottom: 6%;
    left: 3%;
  `;

  return (
    <>
      <Container>
        <Title>
          <Icon>
            <IoDocumentAttachOutline />
          </Icon>
          <>Portfolio</>
        </Title>
        <MainTitle>Projects</MainTitle>
        <Div>
          <Img src="../images/iPhone 12 Pro.png" alt="d"></Img>
          <Button>Site</Button>
        </Div>
        <Div>
          <Img src="../images/shopping.png" alt="d"></Img>
          <Button>Site</Button>
        </Div>
        <Div>
          <Img src="../images/iPhone 12 Pro.png" alt="d"></Img>
          <Button>Site</Button>
        </Div>
        <Div>
          <Img src="../images/iPhone 12 Pro.png" alt="d"></Img>
          <Button>Site</Button>
        </Div>
      </Container>
    </>
  );
}

export default Portfolio;
