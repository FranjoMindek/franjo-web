const HomePage = () => {
  return (
    <div className={'page-container justify-center'}>
      <div className={'flex flex-col gap-8'}>
        <p className={'flex flex-col gap-2'}>
          <span className={'text-6xl'}>Hello,</span>
          <span className={'text-4xl'}>my name is Franjo Mindek.</span>
        </p>
        <div className={'flex flex-col gap-2 max-w-prose'}>
          <p>
            I'm a passionate software engineer with curiosity for just about anything.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto nemo numquam provident reprehenderit sint,
            veniam? Dicta, doloremque eum ipsam ipsum magni modi omnis quasi quia, recusandae sapiente sint soluta
            tempore.
          </p>
          <p>
            Aut cupiditate deleniti eligendi esse illum, nulla possimus provident quae quas recusandae
            sed veniam voluptates. Adipisci beatae deleniti error eveniet harum hic, iste itaque minus molestias quae
            quaerat sequi sunt.
          </p>
        </div>
      </div>
    </div>
  )
};

export default HomePage;
