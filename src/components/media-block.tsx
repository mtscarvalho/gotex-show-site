import Image from "next/image";
import { Media } from "@/payload-types";

export type MediaBlockProps = {
  media: Media;
};

export function MediaBlock({ media }: MediaBlockProps) {
  const { url, alt, width, height } = media;

  return (
    <>
      {url && alt && width && height && (
        <Image src={url} alt={alt} width={width} height={height} loading="lazy" />
      )}
    </>
  )
}
