import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import MoreRandomImages from '../components/MoreRandomImages'
import RandomImage from '../components/RandomImage'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    // <div className={styles.container}>
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.site_header}>
        <nav>
          <ul className={styles.nav_list}>
            <li className={styles.list_reset}>
              <a href="#">About</a>
            </li>
            <li className={styles.list_reset}>
              <a href="#">Blog</a>
            </li>
            <li className={styles.list_reset}>
              <a href="#">Register</a>
            </li>
            <li className={styles.list_reset}>
              <a href="#">Login</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <div
          className={styles.homepage_hero}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1557264337-e8a93017fe92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
          }}
        ></div>
        <section className={styles.homepage_section}>
          <div className={styles.homepage_section_container}>
            <h1>
              Don't miss your
              <br />
              perfect shot
            </h1>
            <p>
              Snapsure tells you when it’s possible to take the shots you want
              to take. There’s nothing worse than missing an opportunity to take
              photo you’ve been thinking about for months, so we pull in data
              from dozens of sources to tell you when the stars—or time, sunset,
              tide, weather, and lots more—align.
            </p>
            <a href="#">
              <button className={styles.homepage_section_signup}>
                Get Started
              </button>
            </a>
          </div>
        </section>
        <div className={styles.lower_section}>
          <RandomImage />
          <MoreRandomImages />
          <RandomImage />
        </div>
      </main>

      {/* <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}

export default Home
