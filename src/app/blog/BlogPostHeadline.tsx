import BlogPostPreviewVM from "@/models/BlogPostPreviewVM";
import Image from "next/image";
import Link from "next/link";

type Props = {
  preview: BlogPostPreviewVM,
}

export default function BlogPostHeadline({ preview }: Props) {
  return (
    <Link href={`blog/${preview.slug}`} className={'flex flex-col gap-4 col-span-full group hover:-translate-y-2 hover:scale-[1.02] transition-all delay-75 ease-linear'}>
      <Image
        width={preview.cover.width}
        height={preview.cover.height}
        src={preview.cover.url}
        alt={preview.cover.alternativeText ?? 'Blog post cover'}
        className={'w-full h-auto object-cover aspect-video'}/>
      <h2 className={'text-3xl sm:text-5xl font-semibold'}>{preview.title}</h2>
      <p className={'text-small sm:text-lg'}>{preview.description}</p>
    </Link>
  )
};
