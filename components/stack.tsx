import tech from "@/lib/data";
import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";

export default function Stack() {
  return (
    <section className="px-6 py-8">
      <div className="max-w-4xl w-full mx-auto">
        <h2 className="text-2xl font-semibold text-stone-900 mb-3">My Stack</h2>
        <div className="flex flex-row flex-wrap gap-3 justify-center">
          {tech.stack.map((item) => (
            <Item
              key={item.name}
              className="w-fit border border-stone-200/70 bg-white/70 backdrop-blur-sm"
            >
              <ItemMedia>
                {item.icon ? (
                  <item.icon size={24} className="text-stone-700" />
                ) : (
                  <span
                    className="inline-block size-2 rounded-full bg-stone-400"
                    aria-hidden
                  />
                )}
              </ItemMedia>
              <ItemContent>
                <ItemTitle className="text-lg text-stone-700">
                  {item.name}
                </ItemTitle>
              </ItemContent>
            </Item>
          ))}
        </div>
        <p className="mt-4 max-w-3xl text-lg text-stone-700 leading-relaxed">
          {tech.description}
        </p>
      </div>
    </section>
  );
}
