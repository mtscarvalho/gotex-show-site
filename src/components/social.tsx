import Link from "next/link";

import { Facebook, Instagram, LinkedIn, YouTube } from "@/components/icons";

export function Social() {
  return (
    <ul className="flex">
      <li>
        <Link className="text-default flex size-8 items-center justify-center" href="https://www.youtube.com/channel/UCMMCKmoj-emTmKhPZExxR6w" target="_blank" rel="noopener noreferrer">
          <YouTube />
        </Link>
      </li>
      <li>
        <Link className="text-default flex size-8 items-center justify-center" href="https://www.linkedin.com/company/gotexshow/" target="_blank" rel="noopener noreferrer">
          <LinkedIn />
        </Link>
      </li>
      <li>
        <Link className="text-default flex size-8 items-center justify-center" href="https://www.facebook.com/gotexshow" target="_blank" rel="noopener noreferrer">
          <Facebook />
        </Link>
      </li>
      <li>
        <Link className="text-default flex size-8 items-center justify-center" href="https://www.instagram.com/gotex.show/" target="_blank" rel="noopener noreferrer">
          <Instagram />
        </Link>
      </li>
    </ul>
  );
}
