import Card from './card'

const Value = props => (
    <Card alignItems='center' justifyContent='center'>
        <h3 style={{fontWeight: "normal"}}>{props.value}</h3>
        <small style={{position: 'absolute', bottom: 4, right: 6, fontSize: 10, fontWeight: 500}}>DEX</small>
    </Card>
)

export default Value