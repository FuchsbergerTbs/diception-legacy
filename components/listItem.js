import Card from './card'

const ListItem = ({ name, value, ability }) => (
    <Card alignItems="center" p={2}>
        <p style={{ flex: 1 }}>{name}</p>
        {value &&
            <strong>{value}</strong>
        }
        {ability &&
            <small style={{ textAlign: "right", width: 24, marginLeft: 8, fontSize: 10, fontWeight: 500 }}>{ability}</small>
        }
    </Card>
)

export default ListItem