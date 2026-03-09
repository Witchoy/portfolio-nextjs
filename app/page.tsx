import Image from "next/image";

export default function Home() {
  return (
    <main
      className="min-h-screen bg-gray-400 flex items-center justify-center p-6"
      style={{
        background:
          "linear-gradient(49deg,rgba(252, 198, 122, 1) 23%, rgba(49, 65, 88, 1) 100%)",
      }}
    >
      <div className="flex">
        <div className="flex items-center text-slate-700 text-6xl">
          <p>
            Hey ! I&apos;m <strong>Jules Goy</strong> alias{" "}
            <strong>Witchoy</strong> a Junior Software Developper.
          </p>
        </div>
        <Image
          src="/no_background_ai_slop.svg"
          width={1000}
          height={760}
          alt="Placeholder ai slop image"
          className="w-full hidden md:block"
        />
      </div>
    </main>
  );
}
