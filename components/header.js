import styled from "styled-components";
import Card from "./card";

const HeaderGrid = styled.div`
	display: grid;
	grid-template-columns: 40px 1fr repeat(3, 48px);
	gap: 1px;
	width: 100%;
`;

const Header = () => (
	<HeaderGrid>
		<Card></Card>
		<Card></Card>
		<Card></Card>
		<Card></Card>
		<Card></Card>
	</HeaderGrid>
);

export default Header;
