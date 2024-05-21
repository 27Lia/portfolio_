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
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  gap: 25px;
  @media (max-width: 700px) {
    justify-content: center;
  }
`;

const SkillCard = styled.div`
  width: 200px;
  height: 120px;
  perspective: 1000px;

  @media (max-width: 700px) {
    width: 120px;
  }
`;

const SkillCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s ease-in-out;
  transform-style: preserve-3d;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  will-change: transform;

  &:hover {
    transform: rotateY(180deg);
  }
`;

const SkillCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: transparent;
  color: #fff;
  border-radius: 12px;
  padding: 1px;
`;

const SkillCardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  background-color: #333;
  color: #fff;
  transform: rotateY(180deg);
  border-radius: 12px;
  padding: 10px;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.2);
`;

const SkillIcon = styled.img`
  width: 30px;
  height: 30px;
`;

const SkillName = styled.h4`
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  word-wrap: break-word;

  @media (max-width: 700px) {
    font-size: 13px;
  }
`;

const SkillDescription = styled.p`
  font-size: 12px;
  text-align: left;
  margin: 5px 0;

  @media (max-width: 700px) {
    font-size: 10px;
  }
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
            <SkillCardInner>
              <SkillCardFront>
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
              </SkillCardFront>
              <SkillCardBack>
                {skill.descriptions.map((description, descIndex) => (
                  <SkillDescription key={descIndex}>
                    {description}
                  </SkillDescription>
                ))}
              </SkillCardBack>
            </SkillCardInner>
          </SkillCard>
        ))}
      </CardBox>
    </Container>
  );
}

export default Skills;
