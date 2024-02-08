import styled from "styled-components";
import {motion, AnimatePresence} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 400px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  display: flex;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  justify-content: center;
  align-items: center;
`;

const Circle = styled(motion.div)`
  background-color: #00a5ff;
  height: 100px;
  width: 100px;
  border-radius: 50px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const [clicked, setClicked] = useState(false);
  const toggleClick = () => setClicked(prev => !prev);
  return (
    <Wrapper onClick={toggleClick}>
        <Box>
          {clicked ? null : <Circle layoutId="circle" style={{borderRadius: 50}}/>}
        </Box>
        <Box>
          {!clicked ? null : <Circle layoutId="circle" style={{borderRadius: 0}} />}
        </Box>
    </Wrapper>
  );
}

export default App;