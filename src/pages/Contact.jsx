import styled from "styled-components";
import { Icon, Title } from "../styles/share";
import { MdOutlineEmail } from "react-icons/md";

const Container = styled.div`
  border: 1px solid blue;
  height: 100%;
`;

function Contact() {
  return (
    <>
      <Container>
        <Title>
          <Icon>
            <MdOutlineEmail />
          </Icon>
          <>Contact</>
        </Title>
        <div>aaaaaaaaaa</div>
        <div>ssad</div>
        <div>ssad</div>
      </Container>
    </>
  );
}

export default Contact;
