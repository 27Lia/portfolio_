import styled from "styled-components";
import { IoHomeOutline } from "react-icons/io5";

const Container = styled.div`
  border: 2px solid red;
`;

export const Title = styled.h5`
  border-radius: 30px;
  padding: 9px 20px;
  border: 1px solid #fff;
  color: #fff;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
  text-transform: uppercase;
`;

export const Icon = styled.h4`
  margin-right: 8px;
`;

export const SubTitle = styled.span``;

function Introduce() {
  return (
    <>
      <Container>
        <Title>
          <Icon>
            <IoHomeOutline />
          </Icon>
          Introduce
        </Title>
        <div>ssad</div>
        <div>ssad</div>
      </Container>
    </>
  );
}

export default Introduce;
