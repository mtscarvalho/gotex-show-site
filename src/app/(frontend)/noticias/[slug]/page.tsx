import Image from "next/image";

import { fetchPost } from "@/data";
import { notFound } from "next/navigation";
import { RichText } from "@/components/rich-text";

import Link from "next/link";
import { Facebook, LinkedIn, Threads, WhatsApp, X } from "@/components/icons";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = await fetchPost(slug);

  return {
    title: event.meta?.title,
    descrition: event.meta?.description,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const event = await fetchPost(slug);

  if (!event) {
    notFound();
  }

  return (
    <main>
      <article className="pt-10 pb-24">
        <div className="container space-y-16">
          <div className="mx-auto max-w-3xl space-y-6">
            <h1 className="text-default text-4xl font-medium">{event.title}</h1>
            <p className="text-default">Publicado em {new Date(event.publishedDate).toLocaleDateString("pt-BR")}</p>
          </div>
          <div className="grid gap-x-8 gap-y-16 lg:grid-cols-8">
            <div className="flex flex-col items-center gap-6 lg:col-span-2">
              <p className="text-overline text-default">Compartilhar</p>
              <ul className="flex gap-4 lg:flex-col">
                <li>
                  <Link href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(event.permalink)}`} target="_blank" rel="noopener noreferrer">
                    <LinkedIn className="text-default size-8" />
                  </Link>
                </li>
                <li>
                  <Link href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(event.permalink)}`} target="_blank" rel="noopener noreferrer">
                    <Facebook className="text-default size-8" />
                  </Link>
                </li>
                <li>
                  <Link href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(event.permalink)}&text=${encodeURIComponent(event.title)}`} target="_blank" rel="noopener noreferrer">
                    <X className="text-default size-8" />
                  </Link>
                </li>
                <li>
                  <Link href={`https://www.threads.net/intent/post?text=${encodeURIComponent(event.title + " " + event.permalink)}`} target="_blank" rel="noopener noreferrer">
                    <Threads className="text-default size-8" />
                  </Link>
                </li>
                <li>
                  <Link href={`https://api.whatsapp.com/send?text=${encodeURIComponent(event.title + " " + event.permalink)}`} target="_blank" rel="noopener noreferrer">
                    <WhatsApp className="text-default size-8" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="prose max-w-full lg:col-span-6">{event.content && <RichText data={event.content} />}</div>
          </div>
        </div>
      </article>
    </main>
  );
}
