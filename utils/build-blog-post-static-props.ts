import { BlogPostProps, findPostBySlug } from "@/data/blog-post";
import { findTagByCode, TagCode } from "@/data/tag";
import { GetStaticProps } from "next/types";

type Props = ({ tagCode, postSlug }: { tagCode: TagCode, postSlug: string }) => GetStaticProps<BlogPostProps>;
export const getBlogPostStaticProps: Props = ({ tagCode, postSlug }) => async () => {
  const tag = findTagByCode(tagCode);
  if (!tag) {
    return { notFound: true };
  }

  const post = findPostBySlug(postSlug);
  if (!post) {
    return { notFound: true };
  }

  return {
    props: {
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