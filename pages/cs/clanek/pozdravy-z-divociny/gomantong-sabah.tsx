import { BlogArticle } from "@/components/layout";
import { ImageWithCaption, Paragraph, YoutubeVideo } from "@/components/topology";
import { BlogPostProps, findPostBySlug } from "@/data/blog-post";
import { findTagByCode } from "@/data/tag";
import { GetStaticProps } from "next/types";

export default function Page({ post, breadcrumb, tag }: BlogPostProps) {
  return <BlogArticle post={post} breadcrumb={breadcrumb} tag={tag}>
    <Paragraph>
      U řeky Kinabatangan se nám zalíbilo a tak jsme se rozhodli tu chvíli zůstat. Místo je to odlehlé a více nám svou aurou připomíná Lombok v Indonésii, než Malajsii jakou jsme zažívali doteď. Vesnička Sukau a její okolí má ale ze všeho to nejlepší. Jsou zde bohužel vidět odpadky, které místní pálí, přírody si ale cení a v pralese je „uklizeno“. Původně chudé místo, kde dnes lidé žijí hlavně z turismu, ať už poskytují své služby přímo nebo jsou napojeni na nějaký homestay (ubytování), pro který pracují jako průvodci.
      Na průvodce máme štěstí, umí velmi dobře anglicky a jsou ochotní s námi strávit víc času, než je na papíře.
    </Paragraph>

    <YoutubeVideo src="https://www.youtube.com/embed/6VtBcD8rW_Q?si=Zt-fVmvNJKuhF2lU" title="
Adventures with Ester - Gomantong Cave / Sabah, Borneo"></YoutubeVideo>

    <br />
    <Paragraph>
      Dnes jsme navštívili národní park Gomantong s jeskyněmi. Jedná se o primární prales a jeskynní ekosystém, který je domovem mnoha netopýrů, ptáků a švábů. V jeskyni je zem pokrytá několikametrovou vrstvou netopýřího trusu, který zpracovávají miliony švábů. Když do jeskyně zaprší, tak trus poslouží jako výživné hnojivo celému pralesu. Ptáci (Salangany ostrovní), tedy jejich hnízda, jsou mimochodem důležití pro místní ekonomiku. Konkrétně jejich sliny ze kterých si hnízda vyrábějí, se ve velkém exportují hlavně do Číny, kde se jedná o velkou pochoutku, ať už ve formě pudinku nebo levnější varianta je přidání trochy slin do polévky. Využívá se hojně i v exkluzivní kosmetice. Hnízda se sklízí čtyřikrát do roka a kromě návštěvníků národního parku, člověk může potkat i sběrače hnízd, tato práce je bohužel nebezpečná kvůli výšce (až 90 metrů), ve které se hnízda nacházejí.
    </Paragraph>

    <ImageWithCaption src='/images-optimized/pozdravy-z-pralesa/jeskyne-vchod.webp' caption='Děkujeme našemu průvodci za pěči a spoustu zajímavých informací'></ImageWithCaption>

    <Paragraph>
      Dnes jsme při pohledu na obrovské množství ptáků a netopýrů poprvé pochopili důležitost komárů (a že jich tu je přehnaně moc) jako jejich potravy. Pro nás představují nechtěné zpestření naších procházek v džungli a raději se vykoupeme v repelentu před každou takovou cestou.  Netopýři jsou naopak potravou pro dravé ptáky, jednoho orla jsme měli to štěstí vidět.
    </Paragraph>

    <ImageWithCaption src='/images-optimized/pozdravy-z-pralesa/jeskyne-detail.webp' caption=''></ImageWithCaption>

    <Paragraph>
      Vrcholem výpravy bylo setkání s Orangutanem bornejským (Orang Utan - člověk z lesa). Nejdřív jsme viděli jen jeho hnízdo, které si údajně každý den staví nové. Orangutani žijí v menších skupinách/rodinách, samci často jako solitéři. V dospělosti narostou orangutanům lícní valy, které jsou znakem dominance, čím větší, tím lepší. Důležitá je i síla hrdelního zpěvu, kterým vábí. Matka orangutanice vychovává mládě sama (někdy se starším sourozencem) a právě takovou dvojici se nám podařilo potkat.
    </Paragraph>
  </BlogArticle>
}

export const getStaticProps: GetStaticProps<BlogPostProps> = async () => {
  const tag = findTagByCode("pozdravy-z-divociny");
  if (!tag) {
    return { notFound: true };
  }

  const post = findPostBySlug("/cs/clanek/pozdravy-z-divociny/gomantong-sabah");
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