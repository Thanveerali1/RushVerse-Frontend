import { useNavigate } from "react-router-dom";

export default function GameCard({
  image,
  title,
  path,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="
        overflow-hidden
        rounded-3xl
        border
        border-purple-500/20
        hover:scale-[1.02]
        transition
        cursor-pointer
      "
    >
      <img
        src={image}
        alt={title}
        className="
          w-full
          h-[520px]
          object-cover
          rounded-3xl
        "
      />
    </div>
  );
}