import socialMedias from "@/constants/social-medias";
import Image from "next/image";
import Link from "next/link";

type Props = {
  direction?: 'row' | 'col',
}

const SocialMedia = ({ direction = 'row' }: Props) => {
  const flexDirection = `flex-${direction}`

  return (
    <div className={`flex ${flexDirection} justify-center items-center gap-2`}>
      {socialMedias.length && socialMedias.map(sm => (
        <Link key={sm.name} href={sm.url} target={'_blank'}>
          <sm.picture width={40} height={40} className={'stroke-coffee hover:fill-coffee hover:stroke-cappuccino rounded-xl transition-colors duration-300'}/>
        </Link>
      ))
      }
    </div>
  )

}

export default SocialMedia;
