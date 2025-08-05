import { TagCode } from "./tag";

export interface BlogPost {
  id: string;
  name: string;
  subheading?: string;
  description: string;
  slug: string;
  previewImage: string;
  published: string;
  tags: TagCode[]
}

export interface Source {
  label: string;
  link: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    name: "Bansko - Interview with a local guide",
    subheading: "Part 1",
    description: "Sratsimir Baryakov is telling us about the influential personalities of Bansko and why he thinks this place was and is special for the whole of Bulgaria.",
    slug: "/blog/bansko-interview-with-local-guide",
    previewImage: "/bansko/neophyte-ofrila.JPG",
    published: "2025-07-31T11:52:01.000Z",
    tags: ["bansko"]
  }, {
    id: "2",
    name: "Bansko - Interview with a local guide",
    subheading: "Part 2",
    description: "We asked Sratsimir about Nicola Vaptsarov, as we see his portraits all around the region.",
    // description: "We asked Sratsimir about Nicola Vaptsarov, as we see his portraits all around the region. We asked Sratsimir about Nicola Vaptsarov, as we see his portraits all around the region.",
    slug: "/blog/bansko-interview-with-local-guide-nikola-vaptsarov",
    previewImage: "/bansko/nikola-building.JPG",
    published: "2025-08-01T13:34:01.000Z",
    tags: ["bansko"]
  }
];