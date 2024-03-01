import socialMedias from '@/constants/social-medias';
import Link from 'next/link';

type Props = {
  direction?: 'row' | 'col';
};

const SocialMedia = ({ direction = 'row' }: Props) => {
  const flexDirection = `flex-${direction}`;

  return (
    <div className={`flex ${flexDirection} items-center justify-center gap-2`}>
      {socialMedias.length &&
        socialMedias.map(sm => (
          <Link
            key={sm.name}
            href={sm.url}
            target='_blank'
            aria-label={`Open page to authors ${sm.name}`}
          >
            <sm.picture
              width={40}
              height={40}
              className='rounded-xl stroke-coffee transition-colors duration-300 hover:fill-coffee hover:stroke-cappuccino'
            />
          </Link>
        ))}
    </div>
  );
};

export default SocialMedia;
