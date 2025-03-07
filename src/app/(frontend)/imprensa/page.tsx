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
                  <li key={id} className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="text-gray-600">{description}</p>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Ler mais
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
