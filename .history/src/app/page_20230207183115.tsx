const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  console.log(searchParams)
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(`https://api.themoviedb.org/3/${genre === "fetchTopRated" ? "movie/top_rated" : "trendingall/week"}?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );
  const data = await res.json()
  const result = data.result
  console.log(result);
  
  return <main className=''>hello</main>;
}
