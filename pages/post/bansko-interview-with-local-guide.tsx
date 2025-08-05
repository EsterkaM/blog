import { Sources } from '@/components/blog-post';
import { Breadcrumb, BreadcrumbItem } from '@/components/layout';
import { Article, Bold, Heading1, Heading4, ImageWithCaption, LeadingParagraph, Paragraph, SecondaryText } from '@/components/topology';
import { Source } from '@/data/blog-post';
import { findTagByCode } from '@/data/tag';

const sources: Source[] = [
  {
    label: "Famous figures who have lived in Bansko: Lazar Todorov German (Golev)",
    link: "https://luckybansko.com/famous-figures-who-have-lived-in-bansko-lazar-todorov-german-golev/",
  },
  {
    label: "Famous figures who have lived in Bansko: Metropolitan Neophyte of Rila (1793 – 1881)",
    link: "https://luckybansko.com/famous-figures-who-have-lived-in-bansko-metropolitan-neophyte-of-rila-1793-1881/",
  },
  {
    label: "Neofit Rilski",
    link: "https://en.wikipedia.org/wiki/Neofit_Rilski"
  },
];

const tag = findTagByCode("bansko");

const breadcrumb: BreadcrumbItem[] = [
  ...(tag ? [{
    label: tag.name,
    link: tag.slug
  }] : []),
  {
    label: "Bansko - Interview with a local guide",
    sublabel: "Part 1"
  }
];

export default function Page() {
  return <Article>
    <Breadcrumb items={breadcrumb} />
    <Heading1>Bansko - Interview with a local guide <SecondaryText>Part 1</SecondaryText></Heading1>

    <LeadingParagraph>
      We visited a typical 19th-century building in Bansko, where is located the museum of the Neophyte of Rila - a ​​linguist, artist, and teacher who authored the first grammar book of the Bulgarian language, a Greek-Slavic dictionary, and also a translation of the New Testament to modern Bulgarian, thus he became the leading personality of the Bulgarian National Revival.
    </LeadingParagraph>

    <ImageWithCaption src='/images-optimized/bansko/neophyte-museum.webp' caption={`Entrance to the native house, "cell school" and today's museum of Neophyte of Rila.`}></ImageWithCaption>
    <br />
    <LeadingParagraph>
      Sratsimir Baryakov is a local guide, and he is willing to answer a few questions for us.
    </LeadingParagraph>

    <Paragraph><Bold>How long have you been working here, and what do you think of it? </Bold></Paragraph>
    <Paragraph>It's been almost four years, and I still enjoy this job. I'm not sure if that's the perfect fit for me, but it's definitely a good fit because I enjoy meeting people and I like exchanging information. I like to give them what they are here for, at least. That's how I imagine it; this is a place where people have to step out of the everyday world, to come here and honour the spirits who are in the museum, in this case, Neophyte of Rila. I don't only work in this museum, but in all the museums in Bansko. That also gives my job nice diversity because I don't stay in just one place. Otherwise, even if it were the best place, it would eventually become boring. But this way, it's not. I enjoy meeting people and travelling, but even from this perspective, it's even better for me, because I don't usually visit places that often. Still, I meet many people who go to places and tell stories about their experiences when they were in this or that town, city, country, or place. And I enjoy listening, not only telling stories. And that's how I find my job to be something that I enjoy.</Paragraph>


    <Paragraph><Bold>That's amazing. Did you study history in university, or is that your hobby?</Bold></Paragraph>
    <Paragraph>Let's say I was born into a family of historians; both my parents are historians and archaeologists, so I've been interested in the field since a young age. With or without my desire, I had to know about history because it was all around me—legends from the past, myths and all those things. But professionally, I never learned history, like precise history. My primary education is in philosophical education for secondary schools. And philosophy, at least from my point of view, is impossible to understand if you don't know at least the basics of history. Because the particular ideas matter in a given historical era, understanding the historical periods allows you to comprehend better why people thought in a certain way at different times. You see the relations between all those things. So history is essential for me to know, even if it wasn't interesting for me at all. However, it is interesting to me.</Paragraph>

    <Paragraph><Bold>Did you work as a teacher in a secondary school after finishing your studies?</Bold></Paragraph>
    <Paragraph>
      I did teach in high school for a while, but that wasn't my primary goal when I began studying philosophy. For me, it was more of a personal goal. I mean that every person wants to know what the meaning of life is, where we come from, where it all goes, and whether it all has any meaning, along with all those philosophical questions. Most people, though, prefer to go with everyday life and not listen to those questions so much, nor search for answers. However, I like to seek answers, and that's the main reason I began with philosophical education.
    </Paragraph>

    <Paragraph><Bold>I see that you utilise your education in this job.</Bold></Paragraph>
    <Paragraph>
      Absolutely. When I get questions from visitors, most of the time I don't look at them from a historical perspective. I am aware that history matters, and I keep it in mind. Still, most of the time I look from a philosophical standpoint, which would say that I try to see the abstract thing, like to have in mind documentary information, but also my intuition of how things were interacting with each other, and also the level of understanding of the person in front of me. And, yes, I have to keep many aspects in mind. I cannot say all of them now. But that's precisely the philosophical position when you can stand from the top of all the knowledge and all the science and you can see the relations between all those and to get, to extract something from the many, something which has to be the philosophical truth, the best possible truth which you can provide right now.
    </Paragraph>

    <Paragraph><Bold>This museum is fortunate to have you. In how many branch offices of the museum are you working?</Bold></Paragraph>
    <Paragraph>Oh, thank you for saying that. There are six of those, and each week I'm in a different museum.</Paragraph>

    <Paragraph><Bold>That is a sound working system.  Are you local? Do you come from Bansko?</Bold></Paragraph>
    <Paragraph>Yeah, I've been born and raised here. I lived half of my life here. Now I'm back for seven years already. I'm not sure if I'll be staying for life, but for now, I enjoy it. </Paragraph>

    <Paragraph><Bold>Now that's a more subjective question, but is there something special about Bansko because many notable personalities in Bulgarian culture were born here? Is it coincidental, or do you believe that this place is somehow special?</Bold></Paragraph>
    <Paragraph>Well, since I'm a native, I would love to think that the place is special. 🙂 And that's also my thinking, because not only from what I know from history but also from what I see today. Even nowadays, Bansko is a pretty unique place, even though it's still a small town. It was like a village a hundred years ago. When I was a child, by the way, life here was pretty much like life in the countryside, with domestic animals, working in the fields for food, and a toilet in the yard, not inside the house, and all those things. In just two decades, it has evolved into what it is today: a leading European ski resort. Technologies are here, as is the digital nomad society, with people from all over the world coming in, some for tourism and others to stay. There was a list of the top places in the world that are best for living in, which I believe was published either this year or in the previous year, and Bansko was in the top ten of all the towns in the world. It's an interesting mix of culture, traditions, and innovations. And the mountains are beautiful, not only our history. Even nowadays, there are only 10,000 natives, not more than that. And still, in this era, some impressive people were born here. As you mentioned, in the past, it was even more so. Bansko was isolated in many ways, not only in terms of the mountains, which provided a kind of defence or cover, but also because the people here were more closed. At that time, they were engaging in intermarriages and similar practices. Fortunately, not only were they a closed society, but they were also a society that sought not only to survive but to develop, and they made their best efforts. That's how, in the worst times for the Bulgarians in Bulgarian history, came the best times for Bansko.
      The Bansko golden age (19th century) was not only due to the birth of these great people, but also because many residents of Bansko became very wealthy through trade. They became great merchants, and much of their wealth they invested in developing the place, its culture, the arts, and all that. And that's how it all came to be, because there were many talented people, not only the merchants, but also other artisans here in Bansko who were top-level. Even nowadays, descendants of the bell makers work here. Back then, in Bansko, the craft was one of the best, and nowadays, this craft is still alive in Bulgaria. If it weren't for that family, we would not have that craft in Bulgaria. Great masters and artists, not all of them have a museum dedicated to them, but since you are asking, it's nice to mention them. And many of them, we can no longer find their names, but that doesn't mean they don't matter.
    </Paragraph>

    <Paragraph><Bold>I read about the German Brothers, who were very successful bankers and merchants (having bank branches in Vienna and Venice). They were essential for local politics and culture. Do you agree?</Bold></Paragraph>
    <Paragraph>Yeah, it's true. You can even see them (on the family tree fresco of Neophyte of Rila). Yeah, that's his father (Peter Benin, local priest and teacher), that's his mother (Ecaterine from a wealthy family of cotton traders). The German family is from the father's side. Lazar German, the mayor, was crucial for the building of the church, not only because he was the mayor, but he was, you can say, the sacrifice for the church to happen and to be protected afterwards from being destroyed. But it's a long story, like 20 minutes. 🙂</Paragraph>
    
    <ImageWithCaption src='/images-optimized/bansko/neophyte-fresca.webp' caption='A fresco from 1989, located in the museum, is dedicated to the family tree of Neophyte of Rila.'></ImageWithCaption>
    <ImageWithCaption src='/images-optimized/bansko/neophyte-kostel.webp' caption='The church in Bansko was completed in 1835 thanks to the mayor Lazar German, with the financial assistance of local donors and the physical help of other citizens.' maxLg={"max-w-lg"}></ImageWithCaption>

    <br />

    <Heading4>Sources</Heading4>
    <Sources items={sources}></Sources>

    <br />

  </Article>
}