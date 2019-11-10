import { useContext } from "react";
import { motion } from "framer-motion";
import { flexbox, layout, space, position, color } from "styled-system";
import styled, { ThemeContext } from "styled-components";

const AnimatedCard = props => {
	const themeContext = useContext(ThemeContext);
	return (
		<motion.div
            onClick={props.onClick}
			className={props.className}
			whileHover={{ boxShadow: `inset 0 0 0 2px ${themeContext.colors.black}` }}
			// Safari iOS 13 Bug:
			whileTap={{ boxShadow: `inset 0 0 0 4px ${themeContext.colors.black}` }}
		>
			{props.children}
		</motion.div>
	);
};

const Card = styled(AnimatedCard)`
	display: flex;
	background-color: ${props => props.theme.colors.white};
	cursor: pointer;
    position: relative;
    box-sizing: border-box;
	${position};
	${flexbox};
	${layout};
	${color};
	${space};
`;

export default Card;
