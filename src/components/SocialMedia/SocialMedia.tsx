import socialMedias from "@/constants/social-medias";
import Image from "next/image";
import Link from "next/link";

type Props = {
  direction?: 'row' | 'col',
}

const SocialMedia = ({ direction = 'row' }: Props) => {
  const flexDirection = `flex-${direction}`

  return (
    <div className={`flex ${flexDirection} items-center gap-2`}>
      {socialMedias.length && socialMedias.map(sm => (
        <Link key={sm.name} href={sm.url} target={'_blank'}>
          <Image alt={sm.name + 'icon'} src={sm.picture} width={40} height={40}/>
        </Link>
      ))
      }
    </div>
  )

}

export default SocialMedia;
