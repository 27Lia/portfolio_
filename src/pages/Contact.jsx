import styled from "styled-components";
import { IoCallOutline } from "react-icons/io5";
import { Icon, SubTitle, Title } from "./Introduce";

const Container = styled.div`
  border: 1px solid blue;
`;

function Contact() {
  return (
    <>
      <Container>
        <Title>
          <Icon>
            <IoCallOutline />
          </Icon>
          <SubTitle>Contact</SubTitle>
        </Title>
        <div>aaaaaaaaaa</div>
        <div>ssad</div>
        <div>ssad</div>
      </Container>
    </>
  );
}

export default Contact;
