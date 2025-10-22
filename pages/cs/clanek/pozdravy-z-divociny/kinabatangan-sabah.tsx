import { BlogArticle } from "@/components/layout";
import { ImageWithCaption, Paragraph, YoutubeVideo } from "@/components/topology";
import { BlogPostProps } from "@/data/blog-post";
import { getBlogPostStaticProps } from "@/utils/build-blog-post-static-props";

export default function Page({ post, breadcrumb, tag }: BlogPostProps) {
  return <BlogArticle post={post} breadcrumb={breadcrumb} tag={tag}>
    <Paragraph>
      Když si člověk zadá na webu, co navštívit v Sandakanu, tak mu jako jedna z prvních věcí vyskočí safari tour na řece Kinabatangan.
      To je jako by člověk přijel do Prahy a udělal si jednodenní výlet do Krkonoš nebo na Šumavu.
    </Paragraph>

    <YoutubeVideo src="https://www.youtube.com/embed/m0Dxpkwa3M4?si=mBLzxW-VO_rmJRJc" title="Adventures with Ester - Kinabatangan / Sabah"></YoutubeVideo>

    <br />
    <Paragraph>
      Vzdálenosti tu ale nehrají roli jako u nás, a z eko turistiky naštěstí profitují všichni.
      Místní, kteří by se kromě práce na palmových plantážích a rybaření neměli jak důstojně živit.
      Když je příroda komodita, za kterou se platí, tak si ji místní nenechají zničit a dbají o její zdraví.
    </Paragraph>

    <ImageWithCaption src='/images-optimized/pozdravy-z-pralesa/reka-vyhled-z-lodi.webp' caption=''></ImageWithCaption>

    <Paragraph>
      Výlety do této oblasti nejsou sice nejlevnější, ale díky šikovnosti místních taxikářů, kteří jsou schopni jakýkoliv výlet zařídit za lidovější cenu jsme měli tu čest řeku navštívit s milým panem řidičem, který si od svojí šikovné dcery - výzkumnice, půjčuje pro tyto případy její teréňák.
    </Paragraph>

    <ImageWithCaption src='/images-optimized/pozdravy-z-pralesa/reka-opicka-detail.webp' caption=''></ImageWithCaption>

    <Paragraph>
      Jet někam mimo cestovku je vždy sázka do loterie, ale nakonec jsme měli soukromý výlet pouze s panem taxikářem a „kapitánkem“ malé lodičky. Jejich přístup byl mnohem osobnější, než jaký jsme mohli vidět u profi lodí „River junkies“, které jsme na řece potkali. Hlavními hvězdami přehlídky byly početné tlupy makaků jávských, které lze mimochodem běžně potkat i u silnice v blízkosti lesa. Další, už ohroženější skupinou jsou primáti Kahau nosatí, nejen s velkými nosy, ale i břichy. Měli jsme štěstí také na varana, krokodýlí mláďátko a sloní stopu.
    </Paragraph>
  </BlogArticle>
}

export const getStaticProps = getBlogPostStaticProps({
  tagCode: "pozdravy-z-divociny",
  postSlug: "/cs/clanek/pozdravy-z-divociny/kinabatangan-sabah"
});
