import BigSlider from '../../components/bigSlider/BigSlider';
import MovieSlider from '../../components/movieSlider/MovieSlider';

const Home = () => {
  return (
    <div className='text-shine flex flex-col gap-6 lg:gap-12 pb-12'>
      <BigSlider />
      <MovieSlider
        title='Seslendirmeli Tv dizileri ve filmler'
        offerMore={true}
      />
      <h1>Home</h1>
      <MovieSlider title='Türkiyede ilk 10' offerMore={false} />
      <MovieSlider title='Önerilen Filmler' offerMore={false} />
      <MovieSlider title='İzlemeye Devam Et' offerMore={false} />
    </div>
  );
};

export default Home;
