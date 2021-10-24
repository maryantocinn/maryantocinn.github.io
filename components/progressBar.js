import styled from "@emotion/styled";

const ProgressBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 2px;
  background: linear-gradient(to left, #ff5f6d, #ffc371);
  width: ${({ width }) => width + "%"};
  z-index: 100;
  transition: width 0.2s ease-out;
`;

export default ProgressBar;
