import { BlogArticle } from "@/components/layout";
import { ImageWithCaption, Paragraph, YoutubeVideo } from "@/components/topology";
import { BlogPostProps, findPostBySlug } from "@/data/blog-post";
import { findTagByCode } from "@/data/tag";
import { GetStaticProps } from "next/types";

export default function Page({ post, breadcrumb, tag }: BlogPostProps) {
  return <BlogArticle post={post} breadcrumb={breadcrumb} tag={tag}>
    <Paragraph>
      Včera jsme opustili pevninskou Malajsii a přesunuli se na malajskou část ostrova Borneo.
      Naši cestu po ostrově začínáme ve městě Sandakan, původním hlavním městě severního Bornea za doby britské koloniální nadvlády. 
      Bohatost tohoto místa nás překvapila. Představovali jsme si, že přiletíme do divočiny a orangutani nám budou klepat na okno a místo toho nás přivítalo, v našem měřítku prosperující velkoměsto s různorodými čtvrtěmi - s výškovými domy, rybářskou osadou a i něokolika vilovými čtvrtěmi. 
      Bydleli jsme ve čtvrti dvoupodlažních domů, kde byly ve spodních patrech restaurace, obchody a instituce. 
      Častým urabnistickým trendem v celé Malajsii jsou satelitní městečka, stavěná pro mladé rodiny, které mají možnost dostat obdobu bezúročné půjčky. 
      Bohužel všude jsou i smutné části, lidé bez domova a odpadky. Potkali jsme jich ale v Malajsii velmi málo.
    </Paragraph>

    <ImageWithCaption src='/images-optimized/pozdravy-z-pralesa/sandakan-city.webp' caption='Pohled na město s městkého parku Astana Height Elopura'></ImageWithCaption>

    <Paragraph>
      Místní se tu mají většinou dobře a tráví s námi svůj večerní čas v podnicích, kde při večeři a čaji s mlékem (alkohol se tady kvůli muslimské většině nepije) společně fandíme indonéské národní reprezentaci proti Saudské Arábii. Dnes bohužel neúspěšně.
    </Paragraph>

    <YoutubeVideo src="https://www.youtube.com/embed/vcDsia6-TSc?si=2yJqfDSbbEHcW4vF" title="
Adventures with Ester - Sepilok / Sandakan, Sabah, Borneo"></YoutubeVideo>

    <br />
    <Paragraph>
      Divočinu ale nemáme daleko a tak jsme dnes navštívili přírodní rezervaci Sepilok, konkrétně jednu z její částí “Rainforest Discovery Center“, kde jsme mohli obdivovat faunu a floru místních deštných pralesů. Je pro nás osvobozující, když si můžeme jednotlivé trasy projít sami našim tempem a dozvědět se informace z tabulí. Na potkávání obyvatel pralesa jsme měli štěstí, od plachých varanů, přes předvádějící se makaky, po mnohé druhy endemitních ptáčků. Unikátní svou rozlohou je zdejší “skywalk“, jak jsme se ale zde dozvěděli, tak u nás máme na Lipnu podobný klenot (a ještě o 55m delší).
      Celkově se tu o Česku dozvídáme věci, které k nám dome nedostaly, jako například to, že minulá Miss World je naše Krystyna Pyszková (asi od Těšína).
    </Paragraph>

    <ImageWithCaption src='/images-optimized/pozdravy-z-pralesa/sepilok-esterka.webp' caption=""></ImageWithCaption>

    <Paragraph>
      Jen zmíněná malá část rezervace nám zabrala celý den a jsme rádi, že nenásledujeme instrukce jednoho z taxikářů, který nám chtěl takových programů naordinovat 5 v jeden den. Lidi hold jedou v současnosti hlavně na kvantitu, i protože je tu většina turistů jen na dva dny.
    </Paragraph>

  </BlogArticle>
}

export const getStaticProps: GetStaticProps<BlogPostProps> = async () => {
  const tag = findTagByCode("pozdravy-z-divociny");
  if (!tag) {
    return { notFound: true };
  }

  const post = findPostBySlug("/cs/clanek/pozdravy-z-divociny/sepilok-sandakan-sabah");
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