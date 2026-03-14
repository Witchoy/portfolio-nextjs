import { LuCopyright } from "react-icons/lu";

export default function Footer() {
  return (
    <section className="flex flex-col items-center justify-center gap-3 bg-taupe-900 text-white m-3 py-8 rounded-lg">
      <p className="inline-flex items-center gap-1">
        Jules Goy <LuCopyright size={16} />
      </p>
      <p>Made with coffee and croissants</p>
    </section>
  );
}
