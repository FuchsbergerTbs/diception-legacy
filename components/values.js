import styled from 'styled-components'

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.children.length}, minmax(${props => props.itemWidth}px, 1fr));
    gap: ${props => props.gap ? 1 : 0}px;
    height: 100%;
`

const Slider = props => {
    return (
            <StyledGrid {...props}>
                {props.children}
            </StyledGrid>
    )
}

export default Slider