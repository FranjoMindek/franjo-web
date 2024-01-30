import SocialMedia from "@/components/SocialMedia/SocialMedia";

const Footer = () => {
  return (
    <div className={'responsive-container flex flex-col items-center pb-4 pt-12 '}>
      <div className={'contained-container flex flex-row justify-between items-center'}>
        <SocialMedia/>
        <span className={'text-gray-400'}>franjo.mindek@gmail.com @ 2024</span>
      </div>
    </div>
  )


}

export default Footer;
