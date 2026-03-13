import tech from "@/lib/data";
import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";

export default function Stack() {
  return (
    <section className="py-8 flex flex-col md:flex-row md:justify-between items-start gap-8">
      <div className="flex flex-row flex-wrap gap-3">
        {tech.stack.map((item) => (
          <Item key={item.name} className="w-fit">
            <ItemMedia>
              <item.icon size={24} className="text-slate-700" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle className="text-2xl text-slate-700">
                {item.name}
              </ItemTitle>
            </ItemContent>
          </Item>
        ))}
      </div>

      <div className="max-w-xl">
        <h2 className="text-3xl font-medium text-slate-700 mb-4">Tech Stack</h2>
        <p className="text-lg text-slate-600">{tech.description}</p>
      </div>
    </section>
  );
}
