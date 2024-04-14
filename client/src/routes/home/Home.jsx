import BigSlider from '../../components/bigSlider/BigSlider';
import MovieSlider from '../../components/movieSlider/MovieSlider';

const Home = () => {
  return (
    <div className='text-shine flex flex-col gap-12'>
      <BigSlider />
      <MovieSlider
        title='Seslendirmeli Tv dizileri ve filmler'
        offerMore={true}
      />
      <h1>Home</h1>
      <MovieSlider
        title='Seslendirmeli Tv dizileri ve filmler'
        offerMore={true}
      />
      <MovieSlider
        title='Seslendirmeli Tv dizileri ve filmler'
        offerMore={false}
      />
    </div>
  );
};

export default Home;
