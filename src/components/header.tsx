import Image from "next/image";
import Link from "next/link";

import { Menu } from "lucide-react";

import { Button } from "@/components/button";
import { Topbar } from "@/components/topbar";

export default function header() {
  return (
    <header>
      <Topbar />
      <div className="py-6">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex flex-1 items-center justify-between gap-4">
              <Link href="/">
                <Image src="/2025/images/logos/gotex-show-horizontal.svg" alt="Logo" width={120} height={46} />
                <span className="sr-only">Página inicial</span>
              </Link>
              <nav className="hidden lg:block">
                <ul className="flex items-center gap-2">
                  <li>
                    <Button size="sm" variant="subtle" asChild>
                      <Link href="/">Quero visitar</Link>
                    </Button>
                  </li>
                  <li>
                    <Button size="sm" variant="subtle" asChild>
                      <Link href="/">Quero expor</Link>
                    </Button>
                  </li>
                  <li className="ml-2">
                    <Button size="sm" variant="outline" asChild>
                      <Link href="/">Área restrita do expositor</Link>
                    </Button>
                  </li>
                  <li className="ml-2">
                    <Button size="sm" variant="primary" asChild>
                      <Link href="/">Inscreva-se gratuitamente</Link>
                    </Button>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="ml-6 flex items-center gap-6">
              <Menu className="text-default" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
