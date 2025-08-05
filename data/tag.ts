export type Tag = {
  name: string;
  code: TagCode;
  type?: string;
  slug: string;
  count: number;
};

export type TagCode = 'bansko' | 'valencia';

export const tags: Tag[] = [
  {
    name: "Bansko",
    code: "bansko",
    type: "city",
    slug: "/tag/bansko",
    count: 2 // Temp
  }
];

export function findTagByCode(code: TagCode) {
  return tags.find(tag => tag.code === code);
}