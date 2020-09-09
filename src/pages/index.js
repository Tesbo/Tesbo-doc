/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Cross browser support',
   
    description: (
      <>
        Run your test on any browsers, versions and viewport.
      </>
    ),
  },
  {
    title: 'Parallel Test execution',
   
    description: (
      <>
       Run your test in parallel to reduce the Test execution time.
      </>
    ),
  },
  {
    title: 'Easy to integrate with CI platform',
  
    description: (
      <>
      Integrate your like test with any CI platform like Jenkins, Bamboo, TeamCity etc..
      </>
    ),
  },
  {
    title: 'Data Driven Testing',
   
    description: (
      <>
      Run single test for the multiple data using excel or Json.
      </>
    ),
  },
  {
    title: 'In Built Web driver Manager',
   
    description: (
      <>
     You don't need to worry about the update your binary when browser version are updated.
      </>
    ),
  },
  {
    title: 'Selenium Grid Supports',
  
    description: (
      <>
      Expand your test execution on various platforms and browsers with Selenium Grid.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map(({title, imageUrl, description}) => (
                  <Feature
                    key={title}
                    title={title}
                    imageUrl={imageUrl}
                    description={description}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
