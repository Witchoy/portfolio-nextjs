import Image from "next/image";

export default function Home() {
  return (
    <main className="p-6">
      <div className="flex bg-accent rounded-4xl p-4">
        <div className="">
          <p>
            Hey ! I&apos;m <strong>Jules Goy</strong> alias{" "}
            <strong>Witchoy</strong> a Junior Software Developper.
          </p>
        </div>
        <div className="">
          <Image
            src="/placeholder_ai_slop.svg"
            width={1000}
            height={760}
            alt="Placeholder ai slop image"
            className="object-contain"
          />
        </div>
      </div>
      <div></div>
    </main>
  );
}
