import { Metadata } from "next";
import Link from "next/link";
import { Button, Card, CardContent, CardHeader, CardTitle } from "ui";

const CARD_CONTENT = [
  {
    title: "Caching Tasks",
    href: "https://turbo.build/repo/docs/core-concepts/caching",
    cta: "Read More",
  },
  {
    title: "Running Tasks",
    href: "https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks",
    cta: "Read More",
  },
  {
    title: "Configuration Options",
    href: "https://turbo.build/repo/docs/reference/configuration",
    cta: "Read More",
  },
  {
    title: "Shadcn-UI Docs",
    href: "https://ui.shadcn.com/docs",
    cta: "Read More",
  },
];

export const metadata: Metadata = {
  title: "Web - Turborepo Example",
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="mx-auto w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8">
        <h1 className="mx-auto text-center text-6xl font-extrabold tracking-tight text-black sm:text-7xl lg:text-8xl xl:text-8xl">
          Web
          <span className="block bg-gradient-to-r from-brandred to-brandblue bg-clip-text text-transparent px-2">
            Turborepo Example
          </span>
        </h1>
        <div className="mx-auto mt-5 max-w-xl sm:flex sm:justify-center md:mt-8">
          <Button>Welcome :D</Button>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-4 gap-4 place-content-evenly">
          {CARD_CONTENT.map(({ title, href }) => (
            <Card key={title}>
              <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardContent>
                  <Link href={href}>{title}</Link>
                </CardContent>
              </CardHeader>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
