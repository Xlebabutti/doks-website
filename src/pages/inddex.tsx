import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import classes from "./index.module.css";
import { ExtremumLogo } from "../components/HomepageLogo";
import AboutPlatform from "../components/HomepageSections/AboutPlatform";
import WhoIsRightFor from "../components/HomepageSections/WhoIsRightFor";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header
      className={clsx("hero hero--primary", classes.heroBanner, classes.jump)}
    >
      <div className="container">
        <ExtremumLogo></ExtremumLogo>
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={classes.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <AboutPlatform />
      <WhoIsRightFor />
    </Layout>
  );
}
