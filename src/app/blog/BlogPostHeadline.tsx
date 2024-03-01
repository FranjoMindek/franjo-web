import BlogPostPreviewVM from '@/models/BlogPostPreviewVM';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  preview: BlogPostPreviewVM;
};

export default function BlogPostHeadline({ preview }: Props) {
  return (
    <Link
      href={`blog/${preview.slug}`}
      className='group col-span-full flex flex-col gap-4 transition-all delay-75 ease-linear hover:-translate-y-2 hover:scale-[1.02]'
    >
      <Image
        width={preview.cover.width}
        height={preview.cover.height}
        src={preview.cover.url}
        alt={preview.cover.alternativeText ?? 'Blog post cover'}
        className='aspect-video h-auto w-full object-cover'
      />
      <h2 className='text-3xl font-semibold sm:text-5xl'>{preview.title}</h2>
      <p className='text-small sm:text-lg'>{preview.description}</p>
    </Link>
  );
}
