import { BlogPost, BlogPostProps } from "@/data/blog-post";
import { Article, Heading1, Heading4, SecondaryText } from "./topology";
import { formatDate } from "@/utils/format-date";
import Link from "next/link";
import Image from "next/image";
import { PropsWithChildren } from "react";
import { SeoHead, Sources } from "./blog-post";

export interface BreadcrumbItem {
  label: string;
  link?: string;
  sublabel?: string
}

export const Breadcrumb = ({ items }: { items: BreadcrumbItem[] }) =>
  <nav className="flex mb-4" aria-label="Breadcrumb">
    <ol className="inline-flex items-center space-x-1 md:space-x-3 rtl:space-x-reverse">
      <li key="breadcrumb-item-home" className="inline-flex items-center">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
          <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
          </svg>
          Home
        </Link>
      </li>
      {items.map((item, key) => <li key={`breadcrumb-item-${key}`}>
        <div className="flex items-center">
          <svg className="w-3 h-3 text-gray-400 mx-1 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
          {
            item.link
              ? <Link href={item.link} className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">{item.label}</Link>
              : <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">{item.label} {item.sublabel && <SecondaryText>{item.sublabel}</SecondaryText>}</span>
          }
        </div>
      </li>)}
    </ol>
  </nav>

export const BlogCard = ({ post }: { post: BlogPost }) => {
  return <a href={post.slug} className="flex flex-col items-stretch items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <div className="grid-element relative w-full h-96 md:h-auto overflow-hidden rounded-l-lg aspect-[3/4] md:rounded-none md:rounded-s-lg">
      <Image
        alt="museum"
        fill
        src={post.previewImage}
        // sizes="100vw"
        className="object-cover"
      />
    </div>

    {/* <img className="object-cover w-full h-96 md:h-auto md:w-48 rounded-t-lg  md:rounded-none md:rounded-s-lg" src={post.previewImage} alt="" /> */}
    <div className="flex flex-col justify-between p-4 leading-normal">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.name} {post.subheading && <SecondaryText>{post.subheading}</SecondaryText>}</h5>
      <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-blue-400 border border-blue-400 mb-3">
        <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
        </svg>
        {formatDate(post.published)}
      </span>

      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 max-w-prose">{post.description}</p>
    </div>
  </a>
}

export const BlogArticle = ({ children, post, tag, breadcrumb }: PropsWithChildren<BlogPostProps>) => {
  return <>
    <SeoHead post={post} tag={tag} />
    <Article>
      <Breadcrumb items={breadcrumb} />
      <Heading1>{post.name} {post.subheading && <SecondaryText>{post.subheading}</SecondaryText>}</Heading1>

      {children}

      <br />

      {post.sources && post.sources.length > 0 && <Heading4>Sources</Heading4>}
      <Sources items={post.sources}></Sources>

      <br />
    </Article>
  </>
}