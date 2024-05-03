import { useState, useEffect } from "react";
import generateTiles from "./generateTiles";

export default function useGameState(pairs) {
  const tileDefaultState = generateTiles(pairs);

  const [tileState, setTileState] = useState(tileDefaultState);
  const [gameState, setGameState] = useState("ready"); // ready, running, over
  const [secondsPassed, setSecondsPassed] = useState(0);

  useEffect(() => {
    let timeOutId;
    if (gameState === "running") {
      timeOutId = setTimeout(() => {
        setSecondsPassed(secondsPassed + 1);
      }, 1000);
    } else {
      clearTimeout(timeOutId);
    }
  }, [gameState, secondsPassed]);

  const showTile = (index) => {
    setGameState("running");
    let newState = [...tileState];
    newState[index].status = "shown";

    setTileState(newState);

    // setTileState(newArr);
    const filteredArray = tileState.filter((tile) => tile.status === "shown");

    const changeStatus = (curStatus, newStatus) => {
      const newArr = tileState.map((tile) =>
        tile.status === curStatus
          ? { name: tile.name, status: newStatus }
          : tile
      );
      setTileState(newArr);
    };

    // 2 second timeout:
    if (filteredArray.length === 2) {
      // once 2 things are in 'shown' state,
      ///// can't click a 3rd thing until they're either matched or hidden
      changeStatus("hidden", "disabled");
      setTimeout(() => {
        // if another tile is shown, and its name matches this tile
        if (filteredArray[0].name === filteredArray[1].name) {
          //// then update both tiles' status to 'matched'
          // changeStatus("shown", "matched");

          const newArr = tileState.map((tile) =>
            tile.status === "shown"
              ? { name: tile.name, status: "matched" }
              : tile.status === "disabled"
              ? { name: tile.name, status: "hidden" }
              : tile
          );
          setTileState(newArr);

          // TODO
          // Check to see if any unmatched tiles remain
          const remainingHidden = tileState.filter(
            (tile) => tile.status === "hidden"
          ).length;
          // If no game is over
          if (remainingHidden === 0) {
            setGameState("over");
          }
        } else {
          // else
          //// then update both tiles' statuses to 'hidden'
          const newArr = tileState.map((tile) =>
            tile.status === "shown" || tile.status === "disabled"
              ? { name: tile.name, status: "hidden" }
              : tile
          );
          setTileState(newArr);
        }
      }, 1000);
    }
  };

  return { tileState, showTile, gameState, secondsPassed };
}
