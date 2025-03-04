import { fetchPress } from "@/data";

export async function generateMetadata() {
  return {
    title: "Imprensa",
    description: "...",
  };
}

export default async function Page() {
  const events = await fetchPress();

  return (
    <main>
      <section id="eventos" className="py-24">
        <div className="container max-w-6xl space-y-10">
          <ul className="grid gap-8 md:grid-cols-2">
            {events.map(({ id, title, description }) => (
              <div key={id}>
                <p>{title}</p>
                <p>{description}</p>
              </div>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
