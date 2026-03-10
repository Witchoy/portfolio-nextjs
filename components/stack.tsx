import tech from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export default function Stack() {
  return (
    <section className="py-8 flex flex-col md:flex-row md:justify-between items-start gap-8">
      <div className="flex flex-wrap gap-3">
        {tech.stack.map((item) => (
          <Badge
            key={item.name}
            variant="outline"
            className="flex items-center gap-3"
          >
            <item.icon className="text-xl" />
            <span className="text-xl text-slate-700">{item.name}</span>
          </Badge>
        ))}
      </div>

      <div className="max-w-xl">
        <h2 className="text-3xl font-medium text-slate-700 mb-4">Tech Stack</h2>
        <p className="text-lg text-slate-600">{tech.description}</p>
      </div>
    </section>
  );
}
