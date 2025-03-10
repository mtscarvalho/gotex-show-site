import { Press } from "@/payload-types";

type PressCardProps = {
  title: Press["title"];
  description: Press["description"];
  url: Press["url"];
};

export default function PressCard({ title, description, url }: PressCardProps) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Leia mais
      </a>
    </div>
  );
}
