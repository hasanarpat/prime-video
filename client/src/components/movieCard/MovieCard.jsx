const MovieCard = ({ item }) => {
  return (
    <div className='w-[196px] md:w-[250px] lg:w-[220px] xl:w-[270px] 2xl:w-[320px] shrink-0'>
      <img
        src={item.img}
        alt=''
        className='w-full aspect-video object-cover rounded-lg'
      />
    </div>
  );
};

export default MovieCard;
