import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/global.css";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="grid min-h-screen place-items-center bg-stone-100 px-6 text-neutral-900">
      <h1 className="m-0 text-center font-sans text-5xl font-bold uppercase tracking-[-0.08em] sm:text-7xl md:text-8xl">
        RZ1 Labs
      </h1>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <html lang="en" />
    <title>RZ1 Labs</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="RZ1 Labs" />
  </>
);
