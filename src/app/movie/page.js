import axios from 'axios';

import styles from '@/app/styles/common.module.css';
import MovieCard from '../components/MovieCard';

const Movie = async() => {

    const url = process.env.RAPID_URL;

    const options = {
        method: 'GET',
        url: url,
        params: {
          query: 'stranger',
          offset: '0',
          limit_titles: '10',
          limit_suggestions: '20',
          lang: 'en'
        },
        headers: {
          'X-RapidAPI-Key': 'c63c168abdmshd3e74ad44f7a562p1b0dccjsn7e67a139e03d',
          'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
      };

      const res = await axios.request(options);
      const data = await res.data;
      const main_data = data.titles;

      console.log(main_data);

  return (
    <>
        <section className={styles.movieSection}>
            <div className={styles.container}>
                <h1>Series & Movie</h1>
                <div className={styles.card_section}>
                    {
                        main_data.map((curElem) => {
                            return <MovieCard key={curElem.id} {...curElem} />
                        })
                    }
                </div>
            </div>
        </section>
    </>
  )
}

export default Movie