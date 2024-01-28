import styled from "styled-components";
import { Container, Icon, MainTitle, Title } from "../styles/share";
import { LuBoxes } from "react-icons/lu";
import skills from "../data/skills.json";

const CardBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 22px;
`;

const SkillCard = styled.div`
  width: 190px;
  border-radius: 12px;
  height: 110px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  background-color: transparent;
  color: #fff;
  transition: transform 0.3s ease;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.2);

  &:hover {
    transform: scale(1.05);
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
    <Container data-aos="fade-down" data-aos-duration="500">
      <Title>
        <Icon>
          <LuBoxes />
        </Icon>
        Skills
      </Title>
      <MainTitle>My Skills</MainTitle>

      <CardBox>
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
