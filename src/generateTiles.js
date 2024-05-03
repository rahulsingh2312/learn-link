import { shuffle } from "./utils";

export default function generateTiles(pairs) {
  //Array of original images
  const fullTileList = [
    "clown-halloween-svgrepo-com",
    "scarecrow-svgrepo-com",
    "hockey-mask-fear-svgrepo-com",
    "maple-leaf-leaf-svgrepo-com",
    "dracula-halloween-svgrepo-com",
    "spider-svgrepo-com",
    "half-moon-moon-svgrepo-com",
    "witch-halloween-svgrepo-com",
    "owl-svgrepo-com",
    "mummy-svgrepo-com",
    "frankenstein-svgrepo-com",
    "cauldron-pot-svgrepo-com",
    "candy-svgrepo-com",
    "bat-svgrepo-com",
    "pumpkin-svgrepo-com",
    "ghost-svgrepo-com"
  ];

  // New array that grabs 8 random images from image array
  const randomArray = shuffle(fullTileList).slice(0, pairs);

  // Duplicate new array so we have 16 items
  const duplicatedArray = [...randomArray, ...randomArray];

  // Randomize order of new array
  const gameTileList = shuffle(duplicatedArray);

  const tileDefaultState = gameTileList.map((name) => ({
    name: name,
    status: "hidden"
  }));

  return tileDefaultState;
}
