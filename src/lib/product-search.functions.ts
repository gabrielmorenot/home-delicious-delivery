import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const WEBHOOK_URL =
  "https://api.lailla.io/v1/webhook/custom/aee20e6d-ec71-41ae-a2d0-5b34a5e370fc";

export type Product = {
  id: string;
  title: string;
  price: string;
  image: string;
  link: string;
  source: string;
  category: string;
};

const SearchInput = z.object({ query: z.string().min(1).max(200) });

async function refineQuery(query: string): Promise<string> {
  const key = process.env["LOVABLE_API_KEY"];
  if (!key) return query;

  try {
    const res = await fetch("https://ai.gateway.lovable.dev/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Lovable-API-Key": key,
      },
      body: JSON.stringify({
        model: "openai/gpt-5.6-luna",
        input: [
          {
            role: "system",
            content:
              "You turn a shopper's request into a short English product search query for US online stores. Reply with the query only, max 8 words, no quotes, no explanation.",
          },
          { role: "user", content: query },
        ],
      }),
    });

    if (!res.ok) return query;
    const data: any = await res.json();
    const text: string =
      data.output_text ??
      (Array.isArray(data.output)
        ? data.output
            .flatMap((item: any) => item?.content ?? [])
            .map((part: any) => part?.text ?? "")
            .join(" ")
        : "");
    const cleaned = text.replace(/\s+/g, " ").trim();
    return cleaned.length > 1 ? cleaned.slice(0, 120) : query;
  } catch {
    return query;
  }
}

export const searchProducts = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => SearchInput.parse(input))
  .handler(async ({ data }): Promise<{ products: Product[]; error?: string }> => {
    const serperKey = process.env["SERPER_API_KEY"];
    if (!serperKey) {
      return { products: [], error: "missing_serper_key" };
    }

    const q = await refineQuery(data.query);

    const res = await fetch("https://google.serper.dev/shopping", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-API-KEY": serperKey },
      body: JSON.stringify({ q, gl: "us", hl: "en", num: 20 }),
    });

    if (!res.ok) {
      return { products: [], error: `search_failed_${res.status}` };
    }

    const json: any = await res.json();
    const items: any[] = Array.isArray(json.shopping) ? json.shopping : [];

    const products: Product[] = items
      .filter((item) => item?.title && item?.link)
      .slice(0, 12)
      .map((item, index) => ({
        id: String(item.productId ?? `${index}-${item.title}`),
        title: String(item.title),
        price: typeof item.price === "string" ? item.price : "",
        image: typeof item.imageUrl === "string" ? item.imageUrl : "",
        link: String(item.link),
        source: typeof item.source === "string" ? item.source : "",
        category: typeof item.source === "string" ? item.source : "Product",
      }));

    return { products };
  });

const WebhookInput = z.object({
  status: z.string().min(1),
  query: z.string().max(500).optional(),
});

export const sendWebhook = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => WebhookInput.parse(input))
  .handler(async ({ data }) => {
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          data.query ? { status: data.status, query: data.query } : { status: data.status },
        ),
      });
      return { ok: res.ok, status: res.status };
    } catch {
      return { ok: false, status: 0 };
    }
  });
