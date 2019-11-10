import styled from "styled-components";

import Page from "../layouts/main";
import Card from "../components/card";

import Header from "../components/header";
import Hp from "../components/hp";
import Skills from "../components/skills";

import Slider from "../components/slider";
import List from "../components/list";
import ListItem from "../components/listItem";
import Values from "../components/values";
import Value from "../components/value";

const StyledGrid = styled.div`
	display: grid;
	grid-template-rows: 40px 40px 72px 224px 240px 400px;
	gap: 2px;
`;

const Overview = () => {
	return (
		<Page>
			<StyledGrid>
				<Header alignItems="center" />
				<Hp />
				<Slider>
					<Values itemWidth={72} gap={true}>
						{[...Array(6).keys()].map(i => (
							<Value key={i} value={i} name={i} />
						))}
					</Values>
				</Slider>
				<Slider>
					<List itemWidth={240} gap={true}>
						{[...Array(18).keys()].map(i => (
							<ListItem name="Skill" value={8} ability="DEX" key={i} />
						))}
					</List>
				</Slider>
				<Skills />
				<Card></Card>
			</StyledGrid>
		</Page>
	);
};

export default Overview;
