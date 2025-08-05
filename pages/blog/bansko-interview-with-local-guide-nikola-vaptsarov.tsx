import { Sources } from "@/components/blog-post";
import { Breadcrumb, BreadcrumbItem } from "@/components/layout";
import { Article, Bold, Heading1, Heading4, LeadingParagraph, Paragraph, SecondaryText } from "@/components/topology";
import { Source } from "@/data/blog-post";
import { findTagByCode } from "@/data/tag";

const tag = findTagByCode("bansko");

const sources: Source[] = [
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
];

const breadcrumb: BreadcrumbItem[] = [
  ...(tag ? [{
    label: tag.name,
    link: tag.slug
  }] : []),
  {
    label: "Bansko - Interview with a local guide",
    sublabel: "Part 2"
  }
];

export default function Page() {
  return <Article>
    <Breadcrumb items={breadcrumb} />
    <Heading1>Bansko - Interview with a local guide <SecondaryText>Part 2</SecondaryText></Heading1>

    <LeadingParagraph>
      On our walk through the Bansko city centre, we noticed another museum, dedicated to the poet and political activist Nikola Vaptsarov, who was also born in Bansko in 1909 to a family whose father was a participant in the anti-Ottoman struggles and whose mother was one of the most educated women in Bansko, working as a teacher. After the German invasion of the Soviet Union in 1941, he got involved with the Bulgarian resistance and was sentenced to death in 1942 by the ruling monarch, Tsar Boris III.
    </LeadingParagraph>

    <Paragraph><Bold>My last question is: What do you think about the relationship the Bulgarian people have to Nikola Vapsarov's legacy? </Bold></Paragraph>
    <Paragraph>Oh, that's an interesting question. Where are you from, by the way? </Paragraph>

    <Paragraph><Bold>Czech Republic. </Bold></Paragraph>
    <Paragraph>So you know about socialism. He is connected with those times, although back in his time, we in Bulgaria say that there were two types of socialists or communists. One was the utopian socialists or utopian communists, and the other was the practical ones. It happened so that the romantic socialists spilled their blood so that the regime could come. But then, on top of that regime came the practical socialists. The ideas of the first and second groups were very different to each other, although they are all called the same. Nikola was, at least to my understanding, from the utopian socialists, and he died before he was widely recognised. He was sentenced to death because he was caught, arrested for anti-government propaganda and anti-government activities. But those activities were in favour of the communist regime they were striving for. I'm not sure if he was famous at all while he was alive. But once he died, and two years after that, the socialist regime came to Bulgaria, and socialists decided to make him a symbol, like a torch of their regime. </Paragraph>

    <Paragraph><Bold>Do you think they used him for communist propaganda?</Bold></Paragraph>
    <Paragraph>Yeah, that's what I think. I mean, of course, many of the things he said, they (communist party) believed or at least they claimed to believe, but I'm not sure they were that deep or such sensitive souls, so that they could appreciate what he wanted to communicate with his poetry. And nowadays, the Bulgarian people are divided into two. One of them is nostalgic about the socialist regime, and for sure, there were positives, the positives that they claim the regime had. But most of them ignore the bad in this regime. Maybe everyone is nostalgic about their youth anyway. But some people suffered from that regime, so they remember what it was, and they hate it. And nowadays people, most of us, are much freer-minded, so we could not imagine living in those conditions back then, which doesn't mean that all of us reject the good side of it. And to answer the question, usually, who admires and appreciates Vaptsarov is closely related to the person's opinion, to the socialist regime in Bulgaria. </Paragraph>

    <Paragraph><Bold>I would like to ask what you think Nikola Vapcarov's opinion would be on the later development of this socialism: would he be disappointed and maybe change his thinking, or would he be happy with the result?</Bold></Paragraph>
    <Paragraph>This is just my Personal opinion. But I think he would be disappointed for sure. He believed in the uniqueness of every human being, and the regime back then wanted to unify the people to make them all the same, small parts of the big mechanism, which socialist society had to become.</Paragraph>

    <br />
    <Heading4>Sources</Heading4>
    <Sources items={sources}></Sources>
  </Article>
}