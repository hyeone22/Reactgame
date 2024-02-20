import Player from "./componenets/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player1" symbol="X" />
          <Player name="Player2" symbol="O" />
        </ol>
        GAME BOARE
      </div>
      LOG
    </main>
  );
}

export default App;
