import Image from "next/image";

import { Button } from "@/components/button";
import { IconList } from "@/components/icon-list";
import { CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <main>
      <section className="relative pt-40">
        <Image className="absolute top-0 -z-10 h-1/2 w-full object-cover" src="/images/seja-um-expositor/hero.webp" alt="Pessoas no evento da Gotex Show" width={1400} height={373} />
        <div className="container">
          <div className="bg-default border-default grid items-end rounded border shadow md:grid-cols-12">
            <div className="space-y-4 p-10 md:col-span-6 lg:col-span-7">
              <h1 className="text-default text-4xl font-medium">
                <span className="text-brand">Seja um expositor</span> no maior evento têxtil do Brasil!
              </h1>
              <p>A Gotex Show reúne compradores, lojistas, confeccionistas e importadores do Brasil e do exterior em busca das últimas tendências e inovações da indústria têxtil.</p>
              <IconList className="space-y-2">
                <IconList.Item icon={CheckCircle}>
                  <strong className="text-default">+5.000 visitantes qualificados</strong> em busca de fornecedores e parceiros
                </IconList.Item>
                <IconList.Item icon={CheckCircle}>
                  <strong className="text-default">Mais de 150 expositores</strong> nacionais e internacionais
                </IconList.Item>
                <IconList.Item icon={CheckCircle}>
                  Oportunidades de <strong className="text-default">networking e negócios globais</strong>
                </IconList.Item>
              </IconList>
              <div className="flex gap-4 pt-4">
                <Button size="md" variant="primary">
                  Quero ser expositor
                </Button>
                <Button size="md" variant="outline">
                  Ver opções de patrocínio
                </Button>
              </div>
            </div>
            <div className="p-10 pb-0 md:col-span-6 lg:col-span-5">
              <Image src="/images/seja-um-expositor/seja-um-expositor.webp" alt="Pessoas no evento da Gotex Show" width={370} height={414} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
