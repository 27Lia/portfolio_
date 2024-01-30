import styled from "styled-components";
import React, { useEffect, useRef, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import MenuItems from "./MenuItems";

const ItemBox = styled.div`
  margin-top: 100px;
  height: 250px;
`;

const Container = styled.div`
  max-width: 80px;
  height: 400px;
  border-radius: 40px;
  border: 1px solid #cfd0c9;
  position: fixed;
  right: 70px;
  top: 50%;
  transform: translate(0%, -50%);
  z-index: 10;
  padding: 18px;
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.497);
  @media (max-width: 1100px) {
    display: none;
  }
`;

const MenuButton = styled.button`
  display: none;
  position: fixed;
  right: 20px;
  top: 20px;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  border: 1px solid #575757;
  background: #1f1f1f;
  color: #fff;
  font-size: 29px;

  @media (max-width: 1100px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  height: 100vh;
  width: 350px;
  top: 0px;
  right: 0px;
  background-color: #202020;
  padding: 10px;
  display: ${(props) => (props.show ? "block" : "none")};
`;

function RightSidebar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const mobileMenuRef = useRef();

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setShowMobileMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuRef]);

  return (
    <>
      <MenuButton onClick={toggleMobileMenu}>
        <IoMdMenu />
      </MenuButton>
      <MobileMenu show={showMobileMenu} ref={mobileMenuRef}>
        <ItemBox>
          <MenuItems />
        </ItemBox>
      </MobileMenu>
      <Container>
        <MenuItems />
      </Container>
    </>
  );
}

export default RightSidebar;
