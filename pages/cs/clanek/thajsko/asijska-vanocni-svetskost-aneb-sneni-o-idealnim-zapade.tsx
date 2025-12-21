// asijska-vanocni-svetskost-aneb-sneni-o-idealnim-zapade.tsx

import { Gallery } from "@/components/gallery";
import { BlogArticle } from "@/components/layout";
import { ImageWithCaption, Paragraph, YoutubeVideo } from "@/components/topology";
import { BlogPostProps } from "@/data/blog-post";
import { getBlogPostStaticProps } from "@/utils/build-blog-post-static-props";

export default function Page({ post, breadcrumb, tag, gallery }: BlogPostProps) {
  return <BlogArticle post={post} breadcrumb={breadcrumb} tag={tag}>
    <Paragraph>
      Během listopadu a prosince jsme na Taiwanu (omlouvám se, exonymum
      Tchaj-wan, které je asištější než Asie mi osobně nedává smysl) a v
      Thajsku zažili nové úrovně oné často omýlané kulturní apropriace, a
      bylo to úžasné. Na konci listopadu se začaly rozsvěcovat pompézní
      vánoční stromy před nákupními domy za zvuku ohňostrojů (ohleduplnost k
      domácím mazlíčkům v tomto kontextu sem ještě nedorazila), k lehkému
      zklamání naší milované taiwanské hostetitelky jsme neuměli předstírat
      nadšení. Malému filďákovi ve mně bylo prostě líto, že kvalitní a
      promyšlené výstavy v bohatě financovaných muzeích a galeriích jsou
      poloprázdné a u obchoďáku (mezi značkami s příznačnými jmény - Saint
      Laurent a All Saints) jsme se navzájem málem ušlapali.
    </Paragraph>

    <YoutubeVideo src="https://www.youtube.com/embed/POE4tL6aSD8?si=xItug7Th8b-Paq0U" title="
Kaohsiung and its fascination with Venice"></YoutubeVideo>

    <br />

    <Paragraph>
      Tématem letošních Vánoc na Taiwanu byly Benátky. Nevím, jestli o
      těchto jevech na italském ministerstvu turismu vědí, ale v
      jihovýchodní Asii jim dělají obchodní domy velkou reklamu na cesty do Itálie zdarma.
      Gondoliéři, benátský lev, benátské mostíky a napodobeniny notoricky,
      ale i méně známých památek, byly hlavní hvězdou každého obchoďáku, který jsme navštívili. Z asijského vánočního snění o Benátekách jsme viděli
      i něco, co se dá kategorizovat jako zábavní park. Zde si nadšené taiwanské
      rodiny s dětmi dělali vánoční rodinné fotografie… kdo by jim to měl za
      zlé, když z toho měli tak upřímnou radost. Znova bych jen zmínila
      obavu o zklámání z reality, ve které není všechno tak naleštěné a
      voňavé. Funguje to jako by člověk porovnával anime a naši realitu.
    </Paragraph>

    <Gallery gallery={gallery || []} ></Gallery>

    <Paragraph>
      V prosinci gondoliérům přibily na klobouku vánoční girlandy a dokola
      začali pobíhat zaměstanaci obchodního domu v oblečcích Santa Clause,
      sněhuláčků a sobíků. Poslední adventní týden thajští rodiče nastrkali
      své potomečky do vánočních oblečků, které vypadaly jako vánoční
      stromečky a americké cukrkandlíčky. GDPR je lidem v jihovýchodní Asii
      úplně ukradené, ale i tak jsem si jejich rozkošné dětičky nedovolila
      vyfotit - zato jsem se vyfotila s jednou milou prostitutkou (jak
      známo, nejstarší řemeslo zde není stigmatizováno) v santovském sexy
      oblečku, která v denní pauze vzala svou maminku do kina na nového
      Avatara.
    </Paragraph>

    <YoutubeVideo src="https://www.youtube.com/embed/oEgUmYP1Whk?si=3Av19c-ERp0a7VGm" title="
Merry Christmas from Kaohsiung"></YoutubeVideo>

    <br />
    <Paragraph>
      <strong> Tradice je přece od toho, aby se aktualizovala - ne?</strong>
    </Paragraph>

    <Paragraph>
      <strong>Veselé Vánoce!</strong>
    </Paragraph>
  </BlogArticle>
}

export const getStaticProps = getBlogPostStaticProps({
  tagCode: "thajsko",
  postSlug: "/cs/clanek/thajsko/asijska-vanocni-svetskost-aneb-sneni-o-idealnim-zapade",
  galleryPath: ['thajsko', 'vanoce']
});
