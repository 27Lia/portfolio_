import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const IconContainer = styled.div`
  width: 60px;
  height: 60px;
  cursor: pointer;
  animation: ${bounce} 2s infinite;
`;

const AIIcon = () => {
  return (
    <IconContainer>
      <svg
        width="50"
        height="50"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="100" fill="url(#paint0_linear)" />
        <path
          d="M120 130C117 130 115 128 115 125C115 122 117 120 120 120C123 120 125 122 125 125C125 128 123 130 120 130Z"
          fill="black"
        />
        <path
          d="M80 130C77 130 75 128 75 125C75 122 77 120 80 120C83 120 85 122 85 125C85 128 83 130 80 130Z"
          fill="black"
        />
        <path
          d="M110 150C110 150 90 150 90 150C85 150 82 148 82 145C82 142 85 140 90 140C95 140 105 140 110 140C115 140 118 142 118 145C118 148 115 150 110 150Z"
          fill="black"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="100"
            y1="0"
            x2="100"
            y2="200"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#99f57c" />
            <stop offset="1" stopColor="#e1f3e2" />
          </linearGradient>
        </defs>
      </svg>
    </IconContainer>
  );
};

export default AIIcon;
