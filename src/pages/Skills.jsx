import styled from "styled-components";
import { Icon, Title } from "../styles/share";
import { LuBoxes } from "react-icons/lu";

const Container = styled.div`
  border: 1px solid blue;
`;

function Skills() {
  return (
    <>
      <Container>
        <Title>
          <Icon>
            <LuBoxes />
          </Icon>
          <>Skills</>
        </Title>
        <div>ssad</div>
        <div>ssad</div>
        <div>ssad</div>
        <div>ssad</div>
        <div>ssad</div>
      </Container>
    </>
  );
}

export default Skills;
