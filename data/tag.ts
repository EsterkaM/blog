export type Tag = {
  name: string;
  code: TagCode;
  type?: string;
  slug: string;
  count: number;
  description?: string; 
};

export type TagCode = 'bansko' | 'pozdravy-z-divociny';

export const tags: Tag[] = [
  {
    name: "Bansko",
    code: "bansko",
    type: "city",
    slug: "/tag/bansko",
    count: 2 // Temp
  },
  {
    name: "Pozdravy z divočiny",
    code: "pozdravy-z-divociny",
    type: "story",
    slug: "/cs/kategorie/pozdravy-z-divociny",
    description: "V této části blogu si můžete přečíst naše zápisky z cest v Jihovýchodní Asie, konkrétně malajského Bornea.",
    count: 1 // temp
  }
];

export function findTagByCode(code: TagCode) {
  return tags.find(tag => tag.code === code);
}