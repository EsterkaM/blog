import { Gallery } from "@/components/gallery";
import { BlogArticle } from "@/components/layout";
import { Paragraph } from "@/components/topology";
import { BlogPostProps } from "@/data/blog-post";
import { getBlogPostStaticProps } from "@/utils/build-blog-post-static-props";

export default function Page({ post, breadcrumb, tag, gallery }: BlogPostProps) {
  const gallery1 = gallery?.slice(0, 4);
  const gallery2 = gallery?.slice(4, gallery?.length || 0);

  return <BlogArticle post={post} breadcrumb={breadcrumb} tag={tag}>
    <Paragraph>Zmíněné dvě metropole jsou nechvalně známé mnoha nočními bary, lehkými drogami a prostitucí - já, která jsem byla vychovaná v upjatém a moralizujícím prostředí, jsem si nebyla jistá, jestli s těmito destinacemi souzním, a zda si zde najdeme hezká místa, kde se dějí hezké dějě. </Paragraph>

    <Gallery gallery={gallery1 || []} ></Gallery>

    <Paragraph>A světe div se: V Pattaye jsme viděli mnoho smíšených spokojených párů, často i s dětmi, kteří se zřejmě vracejí do Thajska za rodinou manželky na svátky. A těmi páry nemyslím jen staré movité pány s mladými, krásnými partnerkami. Bylo tedy jasné, že dědeček si našel babičku v Thajsku už před mnoha lety a z (pravděpodobně) bývalé prostitutky se stala manželka. Víc než jako sexuální objekty jsou thajské ženy ceněné jako profesionální společnice. Muži, kteří sem jezdí, si přejí trávit příjemné večery ve společnosti milých, pečujících a laskavých dam - to je něco, co se narozdíl od sexu nevyčerpá.
      Na našem ubytování trávil Vánoce jeden starší pán z Německa, zřejmě vdovec. Bylo mu asi osmdesát let a narozdíl od jeho nepohyblivých vrstevníků, kteří tráví osamělé Vánoce v domově důchodců, on čile pochoduje s igelitkami plnými pitíček pro sebe a svou milou společnici. Když nám přál veselé vánoce a hodně štěstí v životě, tak mu zářily oči nově objevenou chutí do života.
    </Paragraph>

    <Gallery gallery={gallery2 || []} ></Gallery>

    <Paragraph>Tichý obdiv a lehkou závist jsem pociťovala k ženám, které byly vysoké, atletické a měly tolik šarmu, jisker a ženskosti, kterou bych ze sebe nikdy nevydolovala - v tomto životě, ve kterém mám hrát roli ženy. U těchto dam často nebylo jisté, co mají mezi nohama. To ale, jak jsem zde zjistila není ten hlavní ukazatel feminních kvalit.
      Další body za lidskost u mě Pattaya má kvůli tomu, že nechá i sedmdesátnice tančit v kabaretu a nevykopne ji jen proto, že už není mladá. Šedesát procent lidí v Thajsku končí bez důchodu, takže staří lidé se živí často jako pouliční prodejci jídla, suvenárů apod. Moc bychom těmto lidem přáli komfort českých důchodců. Jaké máme štěstí, že nemusíme vidět naše babičky tančit v klubu nebo prodávat kokosy na pláži.
      V Thajsku není demokracie a královská rodina se nesmí kritizovat, můžu jen objektivně tvrdit, že do kultu osobnosti zdejších panovníků se investuje tolik peněz (na každém kroku oltářky - květiny, portréty ve zlatých rámech, fangle…), že by se za to jistě ubytovalo mnoho starých lidí bez domova.
    </Paragraph>

    <Paragraph>Jeden místní pan taxikář říkal, že pracovní místa nejsou naštěstí jen v turismu, ale stále hodně žen z celého Thajska jezdí do turistických center pracovat v rámci pohostinství, masáží apod. Potvrdil nám to, co jsme sami vypozorovali - “kalhoty tu nosí ženy”, ženy jsou živitelkami rodin. Platí to samozřejmě i pro Thajky, co pracují v zahraničí ve welness sektoru. Říkal, poněkud pragmaticky, že lidé tu chtějí dcery, které se lépe postarají o stárnoucí rodiče. Hrdě prohlásil, že on ve své generaci, si už může dovolit platit dceři vyšší odbornou školu, jeho rodiče svým mnoha dětem na venkově ještě žádnou budoucnost zajistit nemohli. Jeho dcera bude brzy kvalifikovanou zdravotní sestrou.</Paragraph>
  </BlogArticle>
}

export const getStaticProps = getBlogPostStaticProps({
  tagCode: "thajsko",
  postSlug: "/cs/clanek/thajsko/postrehy-z-lasky-partnerstvi-a-socialnich-veci-v-pattaye-a-bankoku",
  galleryPath: ['thajsko', 'laska']
});
