import { Link } from "react-router-dom";

export default function GameCard({
  title,
  subtitle,
  color,
  link
}) {
  return (
    <Link
      to={link}
      className={`${color} rounded-3xl p-4 block`}
    >

      <h2 className="text-2xl font-bold">
        {title}
      </h2>

      <p className="opacity-90 mt-2">
        {subtitle}
      </p>

    </Link>
  );
}