import Card from "react-bootstrap/Card";

function Player({
  name = "Unknown Player",
  team = "Unknown Team",
  nationality = "Unknown",
  jerseyNumber = 0,
  age = 0,
  image = "https://via.placeholder.com/300x250?text=Player",
}) {
  return (
    <Card
      style={{
        width: "18rem",
        margin: "20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Card.Img
        variant="top"
        src={image}
        alt={name}
        style={{
          height: "250px",
          objectFit: "cover",
        }}
      />

      <Card.Body>
        <Card.Title>{name}</Card.Title>

        <Card.Text>
          <strong>Team:</strong> {team}
          <br />
          <strong>Nationality:</strong> {nationality}
          <br />
          <strong>Jersey Number:</strong> {jerseyNumber}
          <br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Player;