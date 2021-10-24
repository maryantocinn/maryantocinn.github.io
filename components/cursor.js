import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Cursor = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: white;
  mix-blend-mode: difference;
  z-index: 999;
  pointer-events: none;
  opacity: 1;
  transform: translate(-50%, -50%);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
`;

export default Cursor;
