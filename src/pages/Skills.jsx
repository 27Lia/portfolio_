import styled from "styled-components";
import { Icon, SubTitle, Title } from "./Introduce";
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
          <SubTitle>Skills</SubTitle>
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
