import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export function CategoryCard({ title, kicker, image, large }) {
  return (
    <Link
      className={"cat " + (large ? "large" : "")}
      to={"/celestial-objects?type=" + title.toLowerCase()}
    >
      <img src={image} />
      <div className="shade" />
      <div className="catcontent">
        <div>
          <span className="eyebrow light">{kicker}</span>
          <h2>{title}</h2>
        </div>
        <ArrowUpRight className="arrow" size={22} />
      </div>
    </Link>
  );
}
