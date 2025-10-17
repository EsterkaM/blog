import { BlogCard, Breadcrumb } from '@/components/layout';
import { Article, Heading1, Heading3, LeadingParagraph } from '@/components/topology';
import { getPostsByTag, sortPostsByPublished } from '@/data/blog-post';
import { type Tag, tags } from '@/data/tag';
import { GetStaticProps } from 'next';

type Params = {
  id: string;
};

type Props = {
  tag: Tag;
};

export default function Tag({ tag }: Props) {
  return <div>
    <Article>
      <Breadcrumb items={[{
        label: tag.name
      }]} />


      <Heading1>#{tag.name}</Heading1>
      <LeadingParagraph>{tag.description}</LeadingParagraph>


    </Article>

    <main className="max-w-5xl mx-auto px-4 py-8 space-y-12">
      <section>
        <Heading3>Nejnovější příspěvky</Heading3>
        <main className="max-w-5xl mx-auto px-0 py-0 space-y-12">
          <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
            {getPostsByTag(tag.code).sort(sortPostsByPublished).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </main>
      </section>
    </main>

  </div>

}

export async function getStaticPaths() {
  // Get the paths we want to pre-render based on posts
  const paths = tags.map((tag) => ({
    params: { id: tag.code },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}


export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  if (!params) {
    return { notFound: true };
  }

  const tag = tags.find(tag => tag.code === params.id);
  if (!tag) {
    return { notFound: true };
  }

  return {
    props: {
      tag,
    },
  };
};