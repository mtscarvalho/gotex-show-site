import Link from "next/link";
import { Button } from "./button";

export default function CallToAction() {
  return (
    <section className="bg-brand-primary text-on-brand py-24">
      <div className="container space-y-8 text-center">
        <h2 className="text-5xl font-medium">Impulsione suas vendas e expanda seu negócio. Seja um expositor!</h2>
        <Button size="md" variant="outline" asChild>
          <Link href="/">Quero expor</Link>
        </Button>
      </div>
    </section>
  );
}
