import Link from "next/link";
import Image from "next/image";

import { Button, Buttons } from "@/components/button";
import { ColoredLine } from "@/components/colored-line";
import { EventAttributes } from "@/components/event-attributes";

export function Footer() {
  const menu = [
    {
      title: "Início",
      items: [
        { label: "Sobre o evento", href: "/" },
        { label: "Notícias", href: "/" },
        { label: "Imprensa", href: "/" },
        { label: "Contato", href: "/" },
      ],
    },
    {
      title: "Visitante",
      items: [
        { label: "Visite gratuitamente", href: "/" },
        { label: "Como chegar", href: "/" },
        { label: "Palestras", href: "/" },
        { label: "Expositores", href: "/" },
      ],
    },
    {
      title: "Expositores",
      items: [
        { label: "Seja um expositor", href: "/" },
        { label: "Tipos de cota", href: "/" },
        { label: "Business Lounge", href: "/" },
        { label: "Área restrita", href: "/" },
      ],
    },
  ];

  return (
    <>
      <section className="relative py-24">
        <div className="container">
          <div className="grid gap-x-16 gap-y-6 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-default text-3xl font-semibold">Faça negócios de sucesso no 12ª Encontro Internacional Têxtil de Moda e Negócios!</h2>
              <Buttons>
                <Button size="md" variant="primary" asChild>
                  <Link href="/">Quero expor</Link>
                </Button>
                <Button size="md" variant="outline" asChild>
                  <Link href="/">Inscreva-se gratuitamente</Link>
                </Button>
              </Buttons>
            </div>
            <EventAttributes className="text-default" iconColor="icon-brand" />
          </div>
        </div>
      </section>
      <ColoredLine size="lg" />
      <footer className="bg-default py-20" data-theme="dark">
        <div className="container">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-6">
              <Image src="/images/logos/gotex-show-horizontal-negative.svg" alt="Logo" width={120} height={46} />
              <p className="text-sm">
                © 2025 Gotex Show. <br />
                Todos os direitos reservados. <br />
                Site criado por Jogajunto
              </p>
            </div>
            {menu.map((section) => (
              <div className="space-y-2" key={section.title}>
                <h2 className="border-default text-default-secondary border-b pb-3 font-semibold">{section.title}</h2>
                <ul className="-translate-x-3">
                  {section.items.map((item) => (
                    <li key={item.label}>
                      <Button size="sm" variant="subtle" asChild>
                        <Link href={item.href}>{item.label}</Link>
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
