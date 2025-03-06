import Image from "next/image";

import { Button } from "@/components/button";
import { IconList } from "@/components/icon-list";
import { Calendar, CheckCircle, CircleDollarSign, Clock, Download, Eye, Handshake, MapPin, MicVocal, Rocket, Star, User, Users } from "lucide-react";
import ColoredLine from "@/components/colored-line";
import CardIcon from "@/components/card-icon";
import { Input } from "@/components/input";
import { Textarea } from "@/components/textarea";
import Link from "next/link";

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
          <div className="grid gap-16 lg:grid-cols-8">
            <div className="md:col-span-4 lg:col-span-5">
              <form className="grid gap-4 md:grid-cols-2" action="">
                <Input label="Nome" name="name" type="text" placeholder="Seu nome" required />
                <Input label="E-mail" name="email" type="email" placeholder="Seu e-mail" required />
                <Input label="Telefone" name="phone" type="tel" placeholder="+55 (99) 9999-9999" required />
                <Input label="Empresa" name="company" type="tel" placeholder="Nome da sua empresa" required />
                <div className="col-span-2">
                  <Textarea label="Mensagem" name="company" placeholder="Insira a sua mensagem" required />
                </div>
                <footer className="col-span-2 flex justify-between">
                  <div></div>
                  <Button size="md" variant="primary">
                    Enviar
                  </Button>
                </footer>
              </form>
            </div>
            <div className="md:col-span-4 lg:col-span-3">
              <div className="bg-brand-secondary text-on-brand-secondary overflow-hidden rounded-lg">
                <ColoredLine />
                <div className="space-y-6 p-10">
                  <h2 className="text-3xl font-semibold">Gotex Show - 12ª edição</h2>
                  <p>Encontro Internacional Têxtil, de Moda e Negócios</p>
                  <IconList>
                    <IconList.Item icon={Users}>Evento presencial</IconList.Item>
                    <IconList.Item icon={Calendar}>05 a 07 de agosto de 2025</IconList.Item>
                    <IconList.Item icon={MapPin}>Distrito Anhembi, Expo 2, Avenida Olavo Fontoura, 1209 – Santana, São Paulo/SP - 02012-021</IconList.Item>
                    <IconList.Item icon={Clock}>
                      {" "}
                      05 e 06/08: 10h às 18h <br /> 07/08: 10h às 17h
                    </IconList.Item>
                  </IconList>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="grid gap-y-12">
          <div className="container space-y-4 text-center">
            <span className="text-brand uppercase">Benefícios</span>
            <h2 className="text-default text-3xl font-bold text-balance">
              <span className="text-brand">Por que participar</span> do Encontro Internacional Têxtil, de Moda e Negócios?
            </h2>
          </div>
          <div className="container max-w-[78rem]">
            <div className="flex flex-wrap justify-center gap-4">
              <Image src="/images/seja-um-expositor/flag-bangladesh.svg" alt="Bandeira Bangladesh" width={83} height={40} loading="lazy" />
              <Image src="/images/seja-um-expositor/flag-bolivia.svg" alt="Bandeira Bolivia" width={83} height={40} loading="lazy" />
              <Image src="/images/seja-um-expositor/flag-brazil.svg" alt="Bandeira Brasil" width={83} height={40} loading="lazy" />
              <Image src="/images/seja-um-expositor/flag-china.svg" alt="Bandeira China" width={83} height={40} loading="lazy" />
              <Image src="/images/seja-um-expositor/flag-egypt.svg" alt="Bandeira Egito" width={83} height={40} loading="lazy" />
              <Image src="/images/seja-um-expositor/flag-usa.svg" alt="Bandeira estadoos Unidos da America" width={83} height={40} loading="lazy" />
              <Image src="/images/seja-um-expositor/flag-italy.svg" alt="Bandeira Italia" width={83} height={40} loading="lazy" />
              <Image src="/images/seja-um-expositor/flag-india.svg" alt="Bandeira India" width={83} height={40} loading="lazy" />
              <Image src="/images/seja-um-expositor/flag-mexico.svg" alt="Bandeira Mexico" width={83} height={40} loading="lazy" />
              <Image src="/images/seja-um-expositor/flag-coreia.svg" alt="Bandeira Coreia" width={83} height={40} loading="lazy" />
              <Image src="/images/seja-um-expositor/flag-peru.svg" alt="Bandeira Peru" width={83} height={40} loading="lazy" />
              <Image src="/images/seja-um-expositor/flag-turkey.svg" alt="Bandeira Turquia" width={83} height={40} loading="lazy" />
            </div>
          </div>
          <div className="container space-y-6">
            <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-12">
              <li className="flex items-stretch lg:col-span-3">
                <CardIcon icon={Rocket} title="Lançamento de produtos" description="Evento ideal para lançar novos produtos e obter feedback direto dos consumidores e especialistas do setor." />
              </li>
              <li className="flex items-stretch lg:col-span-3">
                <CardIcon icon={User} title="Prospecção e geração de leads" description="Colete contatos valiosos e leads qualificados que podem se transformar em futuras vendas." />
              </li>
              <li className="flex items-stretch lg:col-span-3">
                <CardIcon icon={CircleDollarSign} title="Promoções e ofertas" description="Aproveite para oferecer promoções exclusivas e atrair mais visitantes ao seu estande." />
              </li>
              <li className="flex items-stretch lg:col-span-3">
                <CardIcon icon={Eye} title="Grande visibilidade" description="Alcance mais de 5.000 visitantes*, além de poder aparecer nos veículos de imprensa que cobrem o evento." />
              </li>
              <li className="flex items-stretch lg:col-span-4">
                <CardIcon icon={Star} title="Business Lounge exclusivo" description="Além do espaço para negociação, você também terá acesso a assessoria e consultoria técnica em comércio exterior." />
              </li>
              <li className="flex items-stretch lg:col-span-4">
                <CardIcon icon={Handshake} title="Networking e parcerias" description="Você terá contato direto com administradores e decisores de empresas têxteis nacionais e internacionais." />
              </li>
              <li className="items-stretch md:col-span-2 lg:col-span-4 lg:flex">
                <CardIcon icon={MicVocal} title="Serviço gratuito de intérpretes" description="Ofereceremos o serviço gratuito de intérpretes durante os três dias de evento." />
              </li>
            </ul>
            <p className="text-right">*Número de visitantes esperado na Gotex Show 2025 com base no público da última edição.</p>
          </div>
        </div>
      </section>

      <section className="overflow-hidden py-24">
        <div className="container">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div className="space-y-6">
              <div className="space-y-2.5">
                <span className="text-brand tracking-[0.2em] uppercase">Público</span>
                <h2 className="text-default text-3xl font-semibold">Perfil dos visitantes</h2>
              </div>
              <p>A Gotex Show atrai um público qualificado do setor têxtil, incluindo empresários, varejistas, atacadistas, e-commerce e indústrias.</p>
              <p>Com visitantes nacionais e internacionais, o evento reúne decisores e influenciadores do mercado e seus principais interesses são tecidos, vestuário, moda praia, acessórios e aviamentos.</p>
              <div className="flex gap-4">
                <Button size="md" variant="primary" asChild>
                  <Link href="/">Quero expor</Link>
                </Button>
                <Button size="md" variant="outline" asChild>
                  <Link href="/">
                    <Download className="size-4" />
                    Perfil completo dos visitantes
                  </Link>
                </Button>
              </div>
            </div>
            <div>
              <div className="relative z-0">
                <Image className="m-auto" src="/images/seja-um-expositor/perfil-dos-visitantes.webp" alt="Mosaico de fotos sobre o publico dentro do evento da Gotex" width={518} height={475} loading="lazy" />
                {/* <Image className="absolute top-1 -right-7 -z-10 scale-110" src="/images/seja-um-expositor/perfil-dos-visitantes.svg" alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-primary text-on-brand py-24">
        <div className="container space-y-8 text-center">
          <h2 className="text-5xl font-medium">Impulsione suas vendas e expanda seu negócio. Seja um expositor!</h2>
          <a href="">Quero expor</a>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="grid gap-y-10 text-center md:grid-cols-2">
            <div>
              <a href="https://www.8com.com.br/" title="Link para o site da organizadora OitoCom" target="_blank" rel="noopener noreferrer">
                <span>Organizador</span>
                <Image className="m-auto" src="/images/seja-um-expositor/logo-oitocom.webp" alt="Logo da organizadora OitoCom" width={133} height={133} loading="lazy" />
              </a>
            </div>
            <div>
              <a href="https://jogajunto.co/" title="Link para o site da agência oficial JogaJunto" target="_blank" rel="noopener noreferrer">
                <span>Agência oficial</span>
                <Image className="m-auto" src="/images/seja-um-expositor/logo-jogajunto.svg" alt="Logo da agência oficial JogaJunto" width={133} height={133} loading="lazy" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="container">
          <div className="grid gap-x-16 gap-y-6 md:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-default text-3xl font-semibold">Faça negócios de sucesso no 12ª Encontro Internacional Têxtil de Moda e Negócios!</h2>
              <a href="">Quero expor</a>
              <a href="">Inscreva-se gratuitamente</a>
            </div>
            <div>
              <IconList>
                <IconList.Item classname="icon-brand" icon={Users}>
                  Evento presencial
                </IconList.Item>
                <IconList.Item classname="icon-brand" icon={Calendar}>
                  05 a 07 de agosto de 2025
                </IconList.Item>
                <IconList.Item classname="icon-brand" icon={MapPin}>
                  Distrito Anhembi, Expo 2, Avenida Olavo Fontoura, 1209 – Santana, São Paulo/SP - 02012-021
                </IconList.Item>
                <IconList.Item classname="icon-brand" icon={Clock}>
                  {" "}
                  05 e 06/08: 10h às 18h <br /> 07/08: 10h às 17h
                </IconList.Item>
              </IconList>
              <div className="absolute right-0 bottom-0 left-0">
                <ColoredLine size="lg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
