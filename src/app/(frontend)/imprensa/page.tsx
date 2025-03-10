import PressCard from "@/components/press-card";
import { fetchPress } from "@/data/payload";

export async function generateMetadata() {
  return {
    title: "Imprensa",
    description: "...",
  };
}

export default async function Page() {
  const press = await fetchPress();

  return (
    <main>
      <section id="eventos" className="py-24">
        <div className="container max-w-6xl space-y-10">
          {Object.entries(press).map(([edition, items]) => (
            <div key={edition}>
              <h2 className="mb-4 text-2xl font-bold">Edição {edition}</h2>
              <ul className="grid gap-8 md:grid-cols-2">
                {items.map(({ id, title, description, url }) => (
                  <PressCard key={id} title={title!} description={description!} url={url!} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
