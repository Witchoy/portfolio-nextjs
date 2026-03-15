import tech from "@/lib/data";
import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";
import { getTranslations } from "next-intl/server";

export default async function Stack() {
  const t = await getTranslations();
  const categories = ["web", "gameDev", "tools"] as const;

  return (
    <section className="px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto w-full max-w-4xl">
        <h2 className="mb-4 text-xl font-semibold text-stone-900 sm:text-2xl">
          {t("Stack.title")}
        </h2>
        <div className="space-y-5">
          {categories.map((cat) => (
            <div key={cat} className="w-full">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-stone-400">
                {t(`Stack.categories.${cat}`)}
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {tech.stack
                  .filter((item) => item.category === cat)
                  .map((item) => (
                    <Item
                      key={item.nameKey}
                      className="w-fit border border-stone-200/70 bg-white/70 px-2.5 py-2 backdrop-blur-sm sm:px-3 sm:py-2.5"
                    >
                      <ItemMedia>
                        {item.icon ? (
                          <item.icon className="text-stone-700 text-base sm:text-lg" />
                        ) : (
                          <span
                            className="inline-block size-2 rounded-full bg-stone-400"
                            aria-hidden
                          />
                        )}
                      </ItemMedia>
                      <ItemContent>
                        <ItemTitle className="text-sm text-stone-700 sm:text-base">
                          {t(item.nameKey)}
                        </ItemTitle>
                      </ItemContent>
                    </Item>
                  ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-5 max-w-4xl text-base text-stone-700 leading-relaxed sm:text-lg">
          {t(tech.descriptionKey)}
        </p>
      </div>
    </section>
  );
}
