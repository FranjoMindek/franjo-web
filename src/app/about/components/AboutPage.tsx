import AboutPageContent from "@/app/about/components/AboutPageContent";

const AboutPage = () => {
  return (
    <div className={'page-container'}>
      <div className={'responsive-container flex flex-col items-center'}>
        <div className={'contained-container'}>
          {/* title */}
          <div>
            <h1 className={'text-7xl'}>About</h1>
          </div>
          <AboutPageContent/>
        </div>
      </div>
    </div>
  )
};

export default AboutPage;
