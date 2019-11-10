import { motion } from "framer-motion";
import styled from "styled-components";

const AnimatedGrid = props => {
	return (
		<motion.div
            className={props.className}
			whileHover={{ boxShadow: `inset 0 0 0 2px black` }}
			whileTap={{ boxShadow: `inset 0 0 0 4px black` }}
		></motion.div>
	);
};

const StyledGrid = styled.div`
	overflow-x: scroll;
    position: relative;
`;

const Slider = props => <StyledGrid {...props}>{props.children}</StyledGrid>;

export default Slider;
