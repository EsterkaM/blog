import { Gallery } from "@/components/gallery";
import { BlogArticle } from "@/components/layout";
import { Paragraph } from "@/components/topology";
import { BlogPostProps } from "@/data/blog-post";
import { getBlogPostStaticProps } from "@/utils/build-blog-post-static-props";

export default function Page({ post, breadcrumb, tag, gallery }: BlogPostProps) {
  const gallery1 = gallery ? gallery.slice(0, 10) : [];
  const gallery2 = gallery ? gallery.slice(10, 20) : [];
  const gallery3 = gallery ? gallery.slice(20, gallery.length) : [];

  return <BlogArticle post={post} breadcrumb={breadcrumb} tag={tag}>
    <Paragraph>Taiwan si prochází v posledních letech kulturním  a společenským obrozením. V každém městě, ve kterém jsme byli jsme zaregistrovali novotou vonící knihovnu nebo divadlo, často obklopené parkem s hřišti.
      Taiwanská poltika není tak pro-sociální jako ta česká, samozřejmě. Tolik druhů sociálních dávek jako v ČR je málokde, Taiwan má ale snahu kompenzovat občanům nízké sociální dávky kvalitními službami ve veřejném prostoru zdarma.
      Lidé ve městech mají možnost odpočívat a sportovat v krásných parcích, kde jsou zaměstnaní (často senioři - předpokládám, že na snížený úvazek), kteří zde pracují jako zahradníci a uklízeči.
      V parcích, na stanicích metra, ale i ve všech obchodních domech, knihovnách, muzeích, informačních centrech a přístavech jsou čisté záchody zdarma a jejich zaměstnanci nejsou povinováni návštěvníky nijak kontrolovat a zjišťovat zda tam "patří". Možnost vykonání potřeby v důstojných a hygienických podmínkách je tady umožněna všem. V tomto ohledu je Taiwan solidární a taky si chce zachovat svá veřejná místa hezká, přitom ale počítá s pohybem lidí bez domova v těchto místech, kterým umožňuje použití WC a umytí se zdarma. V mnoha evropských městech je velký nedostatek veřejných záchodů, které jsou často za poplatek, pokud vůbec jsou. Řím je notoricky známý absencí veřejných toalet, a tak  člověk víc než nadšení z místa cítí pach moči a vidí občasný exkrement na těch nejžádanějších a tudíž nejvytíženějších turistických místech. Často si říkáme, jak Taiwanci na hygienický kulturní šok na předražené, vysněné dovolené do Evropy reagují.
      Máme někdy strach se zeptat, jak se v Praze líbilo, vědomi si všech negativ - naštěstí, ale mnoho lidí ze všech koutů světa tvrdí, že Praha zůstává tím nejkrásnějším hlavním městem na světě.
    </Paragraph>

    <Gallery gallery={gallery1 || []} ></Gallery>

    <Paragraph>Na dětských hřištích, kam nás vozila maminka dětí, které jsme tu hlídali jsme kromě WC viděli i venkovní umyvadla a sprchy. Dalším krásným projektem jsou centra pro rodiny.
      Přestavte si prostor, který je asi tak troj až pětinásobně větší než běžná školka a je vybaven nejen bežnými hračkami, ale hrami, který pomáhají rozvíjet přesně ty aspekty, které dětí v daném období potřebuje.
      V centrech jsou tedy sekce od 0,5 do šesti let, rozdělené i proto, aby starší děti malá batolátka neohrožovaly. Zaměstnanci center každé tři měsíce mění témata aktivit (taiwanské tradiční pokrmy a nápoje, řemesla, zvyky a náboženství…), kde si děti formou hry vyzkouší přípravu pokrmů, návštěvu chrámů a jiné činnosti dospělích.
      Tato centra obsahují i dílny, kde si děti mohou něco vyrobit a taky čtecí koutek, kde mohou rodiče s dětmi zajít na besedu. Pak zde bývají i venkovní části, kde si děti mohou půjčit kolobežku nebo odrážedlo, to vše zdarma, takže tam rodiče a opatrovníci s dětmi můžou chodit každý den.
      Jako člověk, který má papír s názvem „osvědčení pro chůvy“ a taky jako kamarádka několika rodičů jsem k této oblasti pozorná a všimla jsem si častých „family toilets“ s malým záchodkem a přebalovacím pultem, dále taky „Brestfeeding Room“, kde může maminka v klidu nakojit v křesle nebo vysterilizovat lahvičku na mléko.
    </Paragraph>

    <Gallery gallery={gallery2 || []} ></Gallery>
    <Paragraph>Co se týče knihoven a muzeí, tak jsme byli ohromeni mírou investování do těchto institucí. Taiwanská vláda podporuje děti a lidi ve čtení, knihovny obsahují pohodlná křesílka různých typů, studovny a prosotory pro rodiny, koutky na hraní deskovek, kde se smí mluvit nahlas, často také kuchyňku.
      V každé knihovně je i sterilizátor na knihy, pro ty, kterým přijde půjčování knih nehygienické, v každé knihovně jsou dobře fungující samoobslužné výpůjční přístroje, které umí naskenovat více titulů naráz.
      Vstup do knihovny je povolen všem, ne jen zaregistrovaným čtenářům.
    </Paragraph>

    <Gallery gallery={gallery3 || []} ></Gallery>

    <Paragraph>Státní muzea, která jsme na Taiwanu zdarma navštívili se věnovala mladé historii Taiwanu, snaze informovat a upozorňovat na chyby i zločiny jeho nedemokratické minulosti a uctít památku všech perzekuovaných původních obyvatel Taiwanu.
      Bohužel ani současná taiwnská demokratická vláda se neobejde bez několika extremistů, jako jsou čínští nacionalisté, kteří mají rasistické názory vůči menšinám původních obyvatel.
      I přesto nebo právě v reakci na to, zde znova rozkvétá styl paiwanské tradiční hudby a hraní na paiwanskou nosní flétnu. Také hra na měsíční loutnu, tradiční nástroj pro velkou část Asie. V muzeu lidových písní ve městě Hengchun si lze objednat lekce na loutnu u místních babiček.
      Navštívili jsme i kulturní centrum jednoho z minoritních etnik na Taiwanu - Hakka. Centrum obsahuje muzeum, knihovnu s publikacemi, hrací koutek s aktivitami a kino s filmy dabovanými do řeči Hakka, tyto snahy kompenzují bývalé manistreamové potlačování této řeči (a dalších řečí původních obyvatel) ve prospěch mandarínštiny.
    </Paragraph>
  </BlogArticle>
}

export const getStaticProps = getBlogPostStaticProps({
  tagCode: "taiwan",
  postSlug: "/cs/clanek/taiwan/knihovny-kulturni-instituce-parky-a-centra",
  galleryPath: ['taiwan', 'parky-centra-gelerie']
})
