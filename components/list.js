import styled from 'styled-components'

const rows = 6;

const StyledGrid = styled.div`
    display: grid;
    grid-template-rows: repeat(${rows}, 1fr);
    grid-template-columns: repeat(${props => (props.children.length / rows)}, minmax(${props => props.itemWidth}px, 1fr));
    grid-auto-flow: column;
    height: 100%;
    gap: ${props => props.gap ? 1 : 0}px;
`

const Slider = props => {
    return (
        <StyledGrid {...props}>
            {props.children}
        </StyledGrid>
    )
}

export default Slider