import "bootstrap/dist/css/bootstrap.min.css";
import PlayersList from "./PlayersList";

function App() {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          marginTop: "30px",
        }}
      >
        Football Players
      </h1>

      <PlayersList />
    </div>
  );
}

export default App;