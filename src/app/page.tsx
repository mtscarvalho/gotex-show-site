import Image from "next/image";

import { Button } from "@/components/button";
import { IconList } from "@/components/icon-list";
import { Calendar, CheckCircle, Clock, MapPin, Rocket, RocketIcon, Users } from "lucide-react";
import ColoredLine from "@/components/colored-line";
import Card from "@/components/card-icon";

export default function Home() {
  return (
    <main>
      <section className="relative md:pt-40">
        <Image className="w-full object-cover md:absolute md:top-0 md:-z-10 md:h-1/2" src="/images/seja-um-expositor/hero.webp" alt="Pessoas no evento da Gotex Show" width={1400} height={373} />
        <div className="container">
          <div className="md:bg-default md:border-default grid items-end rounded md:grid-cols-12 md:border md:shadow">
            <div className="space-y-4 pt-10 md:col-span-6 md:p-10 lg:col-span-7">
              <h1 className="text-default text-4xl font-medium">
                <span className="text-brand">Seja um expositor</span> no maior evento têxtil do Brasil!
              </h1>
              <p>A Gotex Show reúne compradores, lojistas, confeccionistas e importadores do Brasil e do exterior em busca das últimas tendências e inovações da indústria têxtil.</p>
              <IconList className="space-y-2">
                <IconList.Item icon={CheckCircle} classname="icon-brand">
                  <strong className="text-default">+5.000 visitantes qualificados</strong> em busca de fornecedores e parceiros
                </IconList.Item>
                <IconList.Item icon={CheckCircle} classname="icon-brand">
                  <strong className="text-default">Mais de 150 expositores</strong> nacionais e internacionais
                </IconList.Item>
                <IconList.Item icon={CheckCircle} classname="icon-brand">
                  Oportunidades de <strong className="text-default">networking e negócios globais</strong>
                </IconList.Item>
              </IconList>
              <div className="flex flex-wrap gap-4 pt-4">
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

      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-8">
            <div className="md:col-span-4 lg:col-span-5">[FORM]</div>
            <div className="md:col-span-4 lg:col-span-3">
              <div className="bg-brand-secondary text-on-brand-secondary overflow-hidden rounded-lg">
                <ColoredLine />
                <div className="space-y-6 p-10">
                  <h2 className="text-3xl font-semibold">Gotex Show - 12ª edição</h2>
                  <p>Encontro Internacional Têxtil, de Moda e Negócios</p>
                  <IconList>
                    <IconList.Item icon={Users}>Evento presencial</IconList.Item>
                    <IconList.Item icon={Calendar}>05 a 07 de agosto de 2025</IconList.Item>
                    <IconList.Item icon={MapPin}>Distrito Anhembi, Expo 2, Avenida Olavo Fontoura, 1209  –  Santana, São Paulo/SP - 02012-021</IconList.Item>
                    <IconList.Item icon={Clock}> 05 e 06/08: 10h às 18h <br /> 07/08: 10h às 17h</IconList.Item>
                  </IconList>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container grid gap-y-12">
          <div className="space-y-4 text-center">
            <span className="uppercase text-brand">Benefícios</span>
            <h2 className="text-3xl font-bold text-default text-balance"><span className="text-brand">Por que participar</span> do Encontro Internacional Têxtil, de Moda e Negócios?</h2>
          </div>
          <div className="space-y-6">
          <div className="grid grid-cols-4 gap-x-4">
            <Card
              icon={<Rocket />}
              title="Lançamento de produtos"
              description="Evento ideal para lançar novos produtos e obter feedback direto dos consumidores e especialistas do setor."
            />
            <Card
              icon={<Rocket />}
              title="Lançamento de produtos"
              description="Evento ideal para lançar novos produtos e obter feedback direto dos consumidores e especialistas do setor."
            />
            <Card
              icon={<Rocket />}
              title="Lançamento de produtos"
              description="Evento ideal para lançar novos produtos e obter feedback direto dos consumidores e especialistas do setor."
            />
            <Card
              icon={<Rocket />}
              title="Lançamento de produtos"
              description="Evento ideal para lançar novos produtos e obter feedback direto dos consumidores e especialistas do setor."
            />
          </div>
          <div className="grid grid-cols-3 gap-x-4">
              <Card
                icon={<Rocket />}
                title="Lançamento de produtos"
                description="Evento ideal para lançar novos produtos e obter feedback direto dos consumidores e especialistas do setor."
              />
              <Card
                icon={<Rocket />}
                title="Lançamento de produtos"
                description="Evento ideal para lançar novos produtos e obter feedback direto dos consumidores e especialistas do setor."
              />
              <Card
                icon={<Rocket />}
                title="Lançamento de produtos"
                description="Evento ideal para lançar novos produtos e obter feedback direto dos consumidores e especialistas do setor."
              />
          </div>
          <p className="text-right">*Número de visitantes esperado na Gotex Show 2025 com base no público da última edição.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
