import Link from "next/link";
import Head from "next/head";

export function MainLayout({children, title = "Next App"}) {
    return (
        <>
            <Head>
                <title>{title} | Next practice</title>
                <meta name="keywords" content="next,js,react"/>
            </Head>
            <nav>
                <Link href={"/"}><a>Home</a></Link>
                <Link href={"/about"}><a>About</a></Link>
                <Link href={"/posts"}><a>Posts</a></Link>
            </nav>
            <main>
                {children}
            </main>
            <style jsx>{`
                nav {
                  position: fixed;
                  height: 60px;
                  left: 0;
                  right: 0;
                  background-color: brown;
                  top: 0;
                  display: flex;
                  justify-content: space-around;
                  align-items: center;
                }
                
                nav a {
                  color: white;
                  text-decoration: none;
                  text-transform: uppercase;
                  cursor: pointer;
                }
                
                main {
                  margin-top: 60px;
                  padding: 1rem;
                }
            `}</style>
        </>
    )
}