import styled from "styled-components";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { Icon, Title } from "../styles/share";

const Container = styled.div`
  border: 1px solid blue;
  height: 100%;
`;

function Portfolio() {
  return (
    <>
      <Container>
        <Title>
          <Icon>
            <IoDocumentAttachOutline />
          </Icon>
          <>Portfolio</>
        </Title>
        <div>aaaaaaaaaa</div>
        <div>ssad</div>
        <div>ssad</div>
        <div>ssad</div>
        <div>ssad</div>
      </Container>
    </>
  );
}

export default Portfolio;
