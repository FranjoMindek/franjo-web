const HomePage = () => {
  return (
    <div className={'page-container'}>
      <div className={'responsive-container flex flex-col items-center'}>
        <div className={'contained-container'}>
          <div className={'flex flex-col gap-8'}>
            <p className={'flex flex-col gap-2'}>
              <span className={'text-7xl'}>Hello,</span>
              <span className={'text-4xl'}>My name is Franjo Mindek.</span>
            </p>
            <p className={'flex flex-col gap-2'}>
              <p>I do stuff software engineering.</p>
              <p>
                I'm a passionate software engineer with curiosity for about anything.
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default HomePage;
