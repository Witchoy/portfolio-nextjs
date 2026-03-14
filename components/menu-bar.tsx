import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { menuBar } from "@/lib/data";

export default function MenuBar() {
  return (
    <div>
      <div className="flex justify-between text-stone-700 mx-3 mt-3 mb-0">
        <div>
          <Button variant={"link"}>
            <a href="https://julesgoy.dev/" className="text-2xl">
              julesgoy.dev
            </a>
          </Button>
        </div>
        <div>
          {menuBar.map((item) => (
            <Button key={item.name} variant="link" asChild>
              <a href={item.url} className="text-2xl">
                <span className="text-xl">{item.name}</span>
              </a>
            </Button>
          ))}
        </div>
      </div>
      <Separator className="bg-slate-900" />
    </div>
  );
}
