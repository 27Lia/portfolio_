import styled from "styled-components";
import { Icon, Title } from "../styles/share";
import { RiShoppingBagLine } from "react-icons/ri";

const Container = styled.div`
  border: 1px solid blue;
`;

function Resume() {
  return (
    <>
      <Container>
        <Title>
          <Icon>
            <RiShoppingBagLine />
          </Icon>
          Resume
        </Title>
        <div>ssad</div>
        <div>ssad</div>
        <div>ssad</div>
        <div>ssad</div>
      </Container>
    </>
  );
}

export default Resume;
