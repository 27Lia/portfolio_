import styled from "styled-components";
import {
  Container,
  HighlightText,
  Icon,
  MainTitle,
  Title,
} from "../styles/share";
import { LuBoxes } from "react-icons/lu";
import skills from "../data/skills.json";

const CardBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 25px;
`;

const SkillCard = styled.div`
  width: 180px;
  border-radius: 12px;
  height: 120px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  background-color: transparent;
  color: #fff;
  transition: transform 0.3s ease;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.2);

  &:hover {
    transform: scale(1.04);
  }
`;

const SkillIcon = styled.img`
  width: 30px;
  height: 30px;
`;

const SkillName = styled.h4`
  font-size: 16px;
  font-weight: 400;
`;

function Skills() {
  return (
    <Container id="Skills" data-aos="fade-down" data-aos-duration="1000">
      <Title>
        <Icon>
          <LuBoxes />
        </Icon>
        Skills
      </Title>
      <MainTitle>
        My <HighlightText>Skills</HighlightText>
      </MainTitle>

      <CardBox data-aos="fade-left" data-aos-duration="1200">
        {skills.map((skill, index) => (
          <SkillCard key={skill.id} index={index}>
            <SkillName>{skill.name}</SkillName>
            <div>
              {skill.icons.map((icon, iconIndex) => (
                <SkillIcon
                  key={iconIndex}
                  src={icon}
                  alt={`${skill.name} icon`}
                />
              ))}
            </div>
          </SkillCard>
        ))}
      </CardBox>
    </Container>
  );
}

export default Skills;
