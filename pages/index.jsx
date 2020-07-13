import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Alert from "../components/alert";

export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>

			<section className={utilStyles.headingMd}>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempora reiciendis vero accusantium nisi maiores ea perspiciatis quos fuga in, facilis itaque eum explicabo! Suscipit
					eaque pariatur corrupti quas quo?
				</p>
				<p>
					(This is a sample website - you’ll be building a site like this on <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
				</p>
			</section>
			<Alert type="success">success</Alert>
		</Layout>
	);
}
