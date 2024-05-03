export default function Tile({ name, state, onClick, index }) {
    return (
      <li className={`tile ${state}`}>
        
        {state === "shown" || state === "matched" ? (
          <img role="img" alt={name} src={`./imagesa/${name}.svg`} />
        ) : (
          <button
            role="button"
            onClick={onClick}
            disabled={state === "disabled" ? true : false}
          >
            Tile {index + 1}
          </button>
        )}
      </li>
    );
  }
  