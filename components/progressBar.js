import styled from "@emotion/styled";

const ProgressBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 2px;
  background: ${({ mode }) => (mode === "light" ? "#805AD5" : "#FBD38D")};
  width: ${({ width }) => width + "%"};
  z-index: 100;
  transition: width 0.2s ease-out;
`;

export default ProgressBar;
