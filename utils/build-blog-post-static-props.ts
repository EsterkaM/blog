import { BlogPostProps, findPostBySlug } from "@/data/blog-post";
import { findTagByCode, TagCode } from "@/data/tag";
import { readdir } from "fs/promises";
import { GetStaticProps } from "next/types";
import path from "path";
import { fileURLToPath } from "url";

type Props = ({ tagCode, postSlug, galleryPath }: { tagCode: TagCode, postSlug: string, galleryPath?: string[] }) => GetStaticProps<BlogPostProps>;
export const getBlogPostStaticProps: Props = ({ tagCode, postSlug, galleryPath }) => async () => {
  const tag = findTagByCode(tagCode);
  if (!tag) {
    return { notFound: true };
  }

  const post = findPostBySlug(postSlug);
  if (!post) {
    return { notFound: true };
  }

  let gallery: string[] = [];
  if (galleryPath) {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const currentInputDir = path.join(__dirname, '..', 'public', 'images-optimized', ...galleryPath);
    gallery = (await readdir(currentInputDir)).map(imagePath => path.join(...galleryPath, imagePath));
  }

  return {
    props: {
      gallery,
      post,
      tag,
      breadcrumb: [
        ...(tag ? [{
          label: tag.name,
          link: tag.slug
        }] : []),
        {
          label: post.name,
        }
      ]
    }
  }
};