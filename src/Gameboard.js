import Tile from "./Tile";
import useGameState from "./useGameState";
import { formatTime } from "./utils";

export default function Gameboard({ pairs = 8 }) {
  const { tileState, showTile, gameState, secondsPassed } = useGameState(pairs);

  if (gameState === "over") {
    return (
      <div>
        <p>Game over</p>
        <p>
          <span>Total time:</span>
          <span> {formatTime(secondsPassed)}</span>
        </p>
      </div>
    );
  } else {
    return (
      <>
        <ul
          data-testid="gameboard"
          className="gameboard"
          style={{ "--column-count": 4 }}
        >
          {tileState.map((tile, index) => (
            <Tile
              key={tile.name + index}
              name={tile.name}
              state={tile.status}
              index={index}
              onClick={() => showTile(index)}
            />
          ))}
        </ul>
        {gameState === "running" && (
          <p>
            <span>Timer:</span>
            <span> {formatTime(secondsPassed)}</span>
          </p>
        )}
      </>
    );
  }
}
