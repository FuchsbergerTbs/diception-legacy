// TODO: get hover and tap effect on Card component

import { useState, useContext } from "react";

import Card from "./card";
import { motion } from "framer-motion";
import { ThemeContext } from "styled-components";

const HP = () => {
	const themeContext = useContext(ThemeContext);
	const [hp, setHP] = useState(.7);
	return (
		<>
			<Card bg={themeContext.colors.black} onClick={() => setHP(hp - 0.1)}>
				<motion.div
					animate={{ scaleX: hp }}
  					transition={{ type: 'spring', damping: 300 }}
					style={{
						width: "100%",
						backgroundColor:
							hp <= 0.4 ? themeContext.colors.red : themeContext.colors.white,
						transformOrigin: "left center"
					}}
				></motion.div>
				<Card p={2} size="100%" alignItems="center" position="absolute" bg="transparent">
					{Math.floor(hp * 100)} HP
				</Card>
			</Card>
		</>
	);
};

export default HP;
