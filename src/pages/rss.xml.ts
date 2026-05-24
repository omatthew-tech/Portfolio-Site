import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";
import { site } from "@/lib/site";

export async function GET(context: APIContext) {
  const writing = await getCollection("writing", ({ data }) => !data.draft);

  return rss({
    title: `${site.name} - Writing`,
    description: site.description,
    site: context.site ?? site.url,
    items: writing.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.pubDate,
      link: `/writing/${entry.slug}/`,
    })),
    customData: "<language>en-us</language>",
  });
}
