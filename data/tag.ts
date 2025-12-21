import { getPostsByTag } from "./blog-post";

export type Tag = {
  name: string;
  code: TagCode;
  type?: string;
  slug: string;
  count: number;
  description?: string; 
};

export type TagCode = 'bansko' | 'pozdravy-z-divociny' | 'taiwan' | 'thajsko';

export const tags: Tag[] = [
  {
    name: "Thajsko",
    code: "thajsko",
    type: "country",
    slug: "/cs/kategorie/thajsko",
    description: "V této části blogu si můžete přečíst naše zápisky z cest, z Jihovýchodní Asie, konkrétně z Thajska, kraje kterému žehná Máří Magdaléna.",
    count: getPostsByTag('taiwan').length
  },
  {
    name: "Taiwan",
    code: "taiwan",
    type: "country",
    slug: "/cs/kategorie/taiwan",
    description: "V této části blogu si můžete přečíst naše zápisky z cest, z Jihovýchodní Asie, konkrétně ostrova Taiwan.",
    count: getPostsByTag('taiwan').length
  },
  {
    name: "Bansko",
    code: "bansko",
    type: "city",
    slug: "/tag/bansko",
    count: getPostsByTag('bansko').length
  },
  {
    name: "Pozdravy z divočiny",
    code: "pozdravy-z-divociny",
    type: "story",
    slug: "/cs/kategorie/pozdravy-z-divociny",
    description: "V této části blogu si můžete přečíst naše zápisky z cest, z Jihovýchodní Asie, konkrétně malajského Bornea.",
    count: getPostsByTag('pozdravy-z-divociny').length
  }
];

export function findTagByCode(code: TagCode) {
  return tags.find(tag => tag.code === code);
}