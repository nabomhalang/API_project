import Seo from "./components/SEO";
import style from "../styles/Home.module.css";

export default function Movie({ data, error }) {
  return (
    <div className='container'>
      <Seo title='Home' />
      {!data && <h4>Loading...</h4>}
      {error && <h1>EOORO : {error}</h1>}
      {data?.boxOfficeResult?.dailyBoxOfficeList.map((item) => (
        <div>
          <div className={style.rank}>{item.rank}: </div>
          <div className={style.title}>{item.movieNm}</div>
          ({item.openDt})
        </div>
      ))}

      {data?.boxOfficeResult?.dailyBoxOfficeList.map((item)=> {
        console.log(item);
      })}
    </div>
  );
}

export async function getServerSideProps() {
  let data = [];
  let error = "";

  try {
    const res = await fetch("http://localhost:3000/api/movies");
    data = await res.json();
  } catch(e) {
    error = e.toString(e);
  }
  
  return {
    props: {
      data,
      error,
    },
  };
}