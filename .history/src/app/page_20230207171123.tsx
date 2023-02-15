
const API_KEY=process.env.API_KEY

export default async function Home({searchParams}) {

  const genre = searchParams.genre || "fetchTrending"
  return (
    <main className={styles.main}>
      hello
    </main>
  )
}
