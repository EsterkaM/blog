import { BreadcrumbItem } from "@/components/layout";
import { Tag, TagCode } from "./tag";

const basePath = process.env.basePath;

export interface BlogPost {
  id: string;
  name: string;
  subheading?: string;
  description: string;
  slug: string;
  previewImage: string;
  published: string;
  tags: TagCode[];
  sources: Source[];
  keywords: string[];
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
    slug: `${basePath}/post/bansko-interview-with-local-guide`,
    previewImage: "/images-optimized/bansko/neophyte-ofrila.webp",
    published: "2025-07-31T11:52:01.000Z",
    tags: ["bansko"],
    sources: [
      {
        label: "Famous figures who have lived in Bansko: Lazar Todorov German (Golev)",
        link: "https://luckybansko.com/famous-figures-who-have-lived-in-bansko-lazar-todorov-german-golev/",
      },
      {
        label: "Famous figures who have lived in Bansko: Metropolitan Neophyte of Rila (1793 – 1881)",
        link: "https://luckybansko.com/famous-figures-who-have-lived-in-bansko-metropolitan-neophyte-of-rila-1793-1881/",
      },
      {
        label: "Neofit Rilski",
        link: "https://en.wikipedia.org/wiki/Neofit_Rilski"
      },
    ],
    keywords: ["interview", "interview with a guide", "bansko museum"]
  }, {
    id: "2",
    name: "Bansko - Interview with a local guide",
    subheading: "Part 2",
    description: "We asked Sratsimir about Nicola Vaptsarov, as we see his portraits all around the region.",
    slug: `${basePath}/post/bansko-interview-with-local-guide-nikola-vaptsarov`,
    previewImage: "/images-optimized/bansko/nikola-building.webp",
    published: "2025-08-01T13:34:01.000Z",
    tags: ["bansko"],
    sources: [
      {
        label: "Nikola Vapcarov",
        link: "https://cs.wikipedia.org/wiki/Nikola_Vapcarov"
      },
      {
        label: "Nikola Vaptsarov",
        link: "https://en.wikipedia.org/wiki/Nikola_Vaptsarov"
      },
      {
        label: "Nikola Vaptsarov",
        link: "https://visit-bansko.bg/en/about-bansko/eminent-persons-from-bansko/item/3946-nikola-vaptsarov"
      },
      {
        label: "Boris III of Bulgaria",
        link: "https://en.wikipedia.org/wiki/Boris_III_of_Bulgaria"
      }
    ],
    keywords: ["interview", "interview with a guide", "bansko museum"]
  },
  {
    id: "3",
    name: "Pozdravy z divočiny - Gomantong / Sabah",
    description: "Zůstali jsme ve vesničce Sukau, obklopeni pralesem. Navštívili jsme jeskyně Gomantong plné netopýrů nahoře a švábů dole. Na závěr jsme zažili setkání s orangutanicí a jejím mládětem.",
    slug: `${basePath}/cs/clanek/pozdravy-z-divociny/gomantong-sabah`,
    previewImage: "/images-optimized/pozdravy-z-pralesa/orangutan-1.webp",
    published: "2025-10-17T10:17:01.000Z",
    tags: ["pozdravy-z-divociny"],
    sources: [{
      label: "Phillipp’s Field Guide: Mammals of Borneo (Second Edition)",
      link: "https://www.nhpborneo.com/book/mammals-of-borneo/?srsltid=AfmBOoqZHQ4f_657cOI3PMaD3vhlatUzWxwzCiZwA0AnjL-zpPPzOzaZ"
    },
    {
      label: "Wikipedie",
      link: "https://cs.wikipedia.org/wiki/Hlavn%C3%AD_strana"
    }],
    keywords: ["Gomantong", "Sabah", "Borneo", "Sukau", "Kinabatangan", "Malaysia"]
  },{
    id: "4",
    name: "Pozdravy z divočiny - Sepilok / Sandakan / Sabah",
    description: "Výhledy z výzkumné pralesní stanice v Sepiloku poblíž rehabilitačního centra pro orangutany. Momenty jeho jedinečné flóry a fauny.",
    slug: `${basePath}/cs/clanek/pozdravy-z-divociny/sepilok-sandakan-sabah`,
    previewImage: "/images-optimized/pozdravy-z-pralesa/milca-sepilok.webp",
    published: "2025-10-11T14:28:01.000Z",
    tags: ["pozdravy-z-divociny"],
    sources: [],
    keywords: ["Sepilok", "Sandakan", "Sabah", "Borneo", "Malaysia"]
  },
  {
    id: "5",
    name: "Pozdravy z divočiny - Kinabatangan / Sabah",
    description: "Objevování bornejské džungle z malé loďky na řece Kinabatangan bylo dobrodružstvím mimo cestovky – s místním taxikářem a jeho kamarádem průvodcem. Byli jsme tak tichými účastníky dvou opičích sněmů. ",
    slug: `${basePath}/cs/clanek/pozdravy-z-divociny/kinabatangan-sabah`,
    previewImage: "/images-optimized/pozdravy-z-pralesa/esterka-lod-nastup.webp",
    published: "2025-10-14T13:05:01.000Z",
    tags: ["pozdravy-z-divociny"],
    sources: [],
    keywords: ["Kinabatangan", "Sandakan", "Sabah", "Borneo", "Malaysia"]
  }
];

export function findPostBySlug(slug: string) {
  return blogPosts.find(post => post.slug === slug);
}

export function getPostsByTag(tag: TagCode) {
  return blogPosts.filter(post => post.tags.includes(tag));
}

export function sortPostsByPublished(postA: BlogPost, postB: BlogPost) {
  return new Date(postB.published).getTime() - new Date(postA.published).getTime()
}

export interface BlogPostProps {
  breadcrumb: BreadcrumbItem[];
  tag: Tag;
  post: BlogPost
}