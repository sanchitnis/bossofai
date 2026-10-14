import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroGlow}></div>
      <div className="container">
        <div className="row">
          {/* Full-width Hero Column */}
          <div className="col col--12 text--center">
            <div className={styles.heroBadge}>Educate to Enterprise</div>
            <Heading as="h1" className={styles.heroTitle}>
              Boss of AI <span className={styles.accentText}>Learning Hub</span>
            </Heading>
            <p className={`${styles.heroSubtitle} margin-bottom--xl`} style={{ marginLeft: 'auto', marginRight: 'auto' }}>
              A collaborative academic hub for learners, educators, researchers, and innovators to master AI and build real-world competency.
            </p>
            
            {/* Wide Buttons Row */}
            <div className={styles.heroButtons} style={{ justifyContent: 'center' }}>
              <Link
                className={`${styles.actionButton} ${styles.btnTeal}`}
                to="/intro#explore-our-courses">
                Courses
              </Link>
              <Link
                className={`${styles.actionButton} ${styles.btnGold}`}
                to="/intro#interactive-presentations">
                Microlearning
              </Link>
              <Link
                className={`${styles.actionButton} ${styles.btnIndigo}`}
                to="/pdf500-faculty-guides/pdf501-content-creation">
                Create Content
              </Link>
              <Link
                className={`${styles.actionButton} ${styles.btnRose}`}
                to="/blog">
                Blogs
              </Link>
              <Link
                className={`${styles.actionButton} ${styles.btnGreen}`}
                to="/Common-Resources">
                Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  const courses = [
    {
      badge: 'Self-Paced',
      title: 'CSU101: Introduction to AI',
      desc: 'Exploring the foundations of Machine Learning, neural networks, and applications of modern AI models.',
      route: '/csu101-intro-ai',
      icon: '💡',
      colorClass: styles.pillarTeal
    },
    {
      badge: 'Interactive',
      title: 'CSU102: Modern Web Dev',
      desc: 'Building scalable, high-performance web applications using modern Javascript frameworks and static build tools.',
      route: '/csu102-modern-web-dev',
      slidesPath: '/presentations/sample-presentation/',
      icon: '💻',
      colorClass: styles.pillarGold
    },
    {
      badge: 'Interactive + Lab',
      title: 'CSA490: Software 3.0',
      desc: 'Agentic Software Engineering. Learn context orchestration, ReAct patterns, RAG pipelines, and multi-agent frameworks.',
      route: '/csa490-software3',
      slidesPath: '/presentations/ai-drivers-license/',
      icon: '🤖',
      colorClass: styles.pillarRose
    }
  ];

  return (
    <Layout
      title="Learning Hub"
      description="Collaborative learning hub for Boss of AI courses, curriculum guides, and interactive microlearning presentations.">
      <HomepageHeader />
      
      <main className="container margin-vert--xl">
        <div className="text--center margin-bottom--xl">
          <Heading as="h2" className={styles.sectionTitle}>Featured Courses</Heading>
        </div>

        <section className={styles.pillarGrid}>
          {courses.map((course, idx) => (
            <div key={idx} className={`${styles.pillarCard} ${course.colorClass}`}>
              <div className={styles.pillarLetter}>{course.icon}</div>
              <div className={styles.pillarContent}>
                <div className={styles.tag} style={{ display: 'inline-block', marginBottom: '0.5rem' }}>
                  {course.badge}
                </div>
                <Heading as="h3" className={styles.pillarName}>{course.title}</Heading>
                <p className={styles.pillarDesc}>{course.desc}</p>
                <div className={styles.heroButtons} style={{ marginTop: '1.25rem', gap: '8px' }}>
                  <Link 
                    className="button button--secondary button--sm" 
                    to={course.route}
                    style={{ fontWeight: '700' }}
                  >
                    Open Course
                  </Link>
                  {course.slidesPath && (
                    <a 
                      className="button button--primary button--sm" 
                      href={useBaseUrl(course.slidesPath)}
                      style={{ fontWeight: '700', color: '#060B13' }}
                    >
                      Play Slides
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </Layout>
  );
}
