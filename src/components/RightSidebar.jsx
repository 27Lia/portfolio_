import styled from "styled-components";

const Container = styled.div`
  max-width: 80px;
  height: 500px;
  border-radius: 40px;
  border: 1px solid #565656;
  position: fixed;
  right: 70px;
  top: 50%;
  transform: translate(0%, -50%);
  z-index: 10;
  border: 2px solid yellow;
  padding: 18px;
`;

const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #ddd;
  background-color: transparent;
`;

function RightSidebar() {
  return (
    <Container>
      <BtnBox>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>
      </BtnBox>
    </Container>
  );
}

export default RightSidebar;
