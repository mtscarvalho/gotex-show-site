import Image from "next/image";

export function Partners() {
  return (
    <section className="pt-24">
      <div className="container">
        <div className="grid gap-y-10 text-center md:grid-cols-2">
          <a className="block" href="https://www.8com.com.br/" title="Link para o site da organizadora OitoCom" target="_blank" rel="noopener noreferrer">
            <span>Organizador</span>
            <Image className="m-auto" src="/images/seja-um-expositor/logo-oitocom.webp" alt="Logo da organizadora OitoCom" width={133} height={133} loading="lazy" />
          </a>
          <a className="block" href="https://jogajunto.co/" title="Link para o site da agência oficial JogaJunto" target="_blank" rel="noopener noreferrer">
            <span>Agência oficial</span>
            <Image className="m-auto" src="/images/seja-um-expositor/logo-jogajunto.svg" alt="Logo da agência oficial JogaJunto" width={133} height={133} loading="lazy" />
          </a>
        </div>
      </div>
    </section>
  );
}
