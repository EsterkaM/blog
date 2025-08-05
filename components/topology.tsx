import { PropsWithChildren } from "react"
import Image from "next/image";

export const Article = ({ children }: PropsWithChildren) => <article className="max-w-3xl mx-auto p-6 prose prose-lg prose-indigo">{children}</article>
export const LeadingParagraph = ({ children }: PropsWithChildren) => <p className="mb-5 text-lg md:text-xl sm:text-xxl text-gray-500 dark:text-gray-400">{children}</p>
export const Paragraph = ({ children }: PropsWithChildren) => <p className="mb-3 text-gray-500 dark:text-gray-400">{children}</p>
export const Bold = ({ children }: PropsWithChildren) => <strong className="font-semibold text-gray-900 dark:text-white">{children}</strong>
export const Heading1 = ({ children }: PropsWithChildren) => <h1 className="text-5xl font-extrabold mb-6 text-gray-900 dark:text-white">{children}</h1>
export const Heading2 = ({ children }: PropsWithChildren) => <h2 className="text-4xl font-bold mb-6 dark:text-white">{children}</h2>
export const Heading3 = ({ children }: PropsWithChildren) => <h2 className="text-3xl font-bold mb-6 dark:text-white">{children}</h2>
export const Heading4 = ({ children }: PropsWithChildren) => <h2 className="text-2xl font-bold mb-6 dark:text-white">{children}</h2>

export const SecondaryText = ({ children }: PropsWithChildren) => <small className="text-blue-600 dark:text-blue-500">{children}</small>

export const ImageWithCaption = ({ src, caption, maxLg }: { src: string; caption: string; maxLg?: string; }) =>
  <figure className={maxLg ? `${maxLg} mb-2 mt-5 mx-auto` : "mb-2 mx-auto"}>
    <Image
      src={src}
      alt={caption}
      width={800}       // Replace with your image actual width or expected max width
      height={600}      // Replace with your image actual height accordingly
      className="rounded-lg"
      style={{ maxWidth: '100%', height: 'auto' }}
    />
    <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
      {caption}
    </figcaption>
  </figure>