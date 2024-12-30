const HeroArea = () => {
  const ads = [
    {
      id: 1,
      banner: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg',
      banner_sm: 'ad-small-1.png',
    },
   
  ];

  return (
    <section className="mt-4 md:mt-0">
      {ads.map((ad) => (
        <div key={ad.id}>
          <img
            src={ad.banner}
            alt=""
            className="h-full w-full hidden sm:block"
          />
          <img src={ad.banner_sm} alt="" className="h-full w-full sm:hidden" />
        </div>
      ))}
    </section>
  );
};

export default HeroArea;
