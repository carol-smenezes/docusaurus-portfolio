import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

type FeatureItem = {
  title: string;
  badge: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Project Management',
    badge: 'Strategy & Scope',
    description: (
      <>
        Managing the lifecycle of digital products, mapping complex workflows, 
        prioritizing strategic backlogs, and leading agile teams to ensure 
        high-value deliverables from inception to release.
      </>
    ),
  },
  {
    title: 'UX Writing',
    badge: 'Content & Experience',
    description: (
      <>
        Designing conversational flows and microcopy with a strong focus on accessibility, 
        usability, and clarity. Translating technical complexities into intuitive user journeys.
      </>
    ),
  },
  {
    title: 'Technical Writing',
    badge: 'Documentation & APIs',
    description: (
      <>
        Architecting enterprise information and authoring technical documentation (Docs-as-Code). 
        Structuring knowledge bases, API references, and internal playbooks for maximum readability.
      </>
    ),
  },
];

function Feature({title, badge, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="padding-horiz--md margin-bottom--lg">
        <div style={{
          display: 'inline-block',
          padding: '4px 12px',
          borderRadius: '16px',
          fontSize: '0.85rem',
          fontWeight: '600',
          marginBottom: '12px',
          backgroundColor: 'var(--ifm-color-primary-lightest)',
          color: 'var(--ifm-background-surface-color)'
        }}>
          {badge}
        </div>
        <Heading as="h3" className="margin-bottom--sm">{title}</Heading>
        <p style={{lineHeight: '1.6', fontSize: '0.95rem'}}>{description}</p>
      </div>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container text--center">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="#projects">
            Explore portfolio
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Bilingual Technical Writer, UX Writer, and Product Manager Portfolio">
      <HomepageHeader />
      <main>
        
        {/* SECTION 1: CORE DISCIPLINES */}
        <section style={{padding: '4rem 0', backgroundColor: 'var(--ifm-background-surface-color)'}}>
          <div className="container">
            
            <div className="text--center margin-bottom--xl">
              <Heading as="h2">Areas of Expertise</Heading>
              <p style={{maxWidth: '650px', margin: '0 auto', color: 'var(--ifm-font-color-base)', opacity: 0.8}}>
                Bridging product strategy, user-centered design, and high-performance documentation 
                to make technology human and accessible.
              </p>
            </div>
            
            <div className="row">
              {FeatureList.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>

            {/* UI SECTION DIVIDER 1 */}
            <hr style={{margin: '3rem 0', opacity: 0.1}} />

            {/* SECTION 2: FEATURED PROJECTS */}
            <div id="projects" style={{scrollMarginTop: '2rem'}}>
              <div className="text--center margin-bottom--xl">
                <Heading as="h2">Featured Projects</Heading>
                <p style={{opacity: 0.8}}>Explore end-to-end case studies and technical samples.</p>
              </div>

              <div className="row">
                {/* PROJECT 1: ALCÁRIA OS */}
                <div className="col col--6 margin-bottom--lg">
                  <div style={{
                    border: '1px solid rgba(0,0,0,0.08)', 
                    borderRadius: '8px', 
                    padding: '2rem',
                    backgroundColor: 'rgba(45, 90, 67, 0.02)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}>
                    <div>
                      <Heading as="h3">🌲 Alcária OS</Heading>
                      <p style={{fontSize: '0.9rem', color: 'var(--ifm-color-primary)', fontWeight: 'bold', marginBottom: '0.5rem'}}>
                        SaaS B2B • PM / UXW / Tech Writing
                      </p>
                      <p>End-to-end strategy, experience design, and documentation for an AI-powered Enterprise Knowledge Management platform.</p>
                    </div>
                    <div>
                      <Link href="/portfolio/intro" className="button button--secondary button--sm">
                        View Case Study →
                      </Link>
                    </div>
                  </div>
                </div>

                {/* PROJECT 2: FUTURE EXAMPLE */}
                <div className="col col--6 margin-bottom--lg">
                  <div style={{
                    border: '1px solid rgba(0,0,0,0.08)', 
                    borderRadius: '8px', 
                    padding: '2rem',
                    backgroundColor: 'rgba(0,0,0,0.01)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}>
                    <div>
                      <Heading as="h3">📱 FinTech Flow Optimization</Heading>
                      <p style={{fontSize: '0.9rem', color: 'var(--ifm-color-primary)', fontWeight: 'bold', marginBottom: '0.5rem'}}>
                        Mobile App • UX Writing
                      </p>
                      <p>Improving error handling, clarity, and transactional microcopy during complex server timeouts and network instability.</p>
                    </div>
                    <div>
                      <span style={{fontSize: '0.9rem', color: 'var(--ifm-font-color-base)', opacity: 0.5, fontStyle: 'italic'}}>
                        Coming soon
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* UI SECTION DIVIDER 2 */}
            <hr style={{margin: '3rem 0', opacity: 0.1}} />

            {/* SECTION 3: ABOUT & CONTACT */}
            <div className="row">
              {/* LEFT COLUMN: BIO */}
              <div className="col col--7 padding-right--lg">
                <Heading as="h2" className="margin-bottom--md">About Me</Heading>
                <p style={{fontSize: '1.1rem', lineHeight: '1.6', fontWeight: '500', color: 'var(--ifm-color-primary)'}}>
                  I’ve always believed that technology only becomes meaningful when people understand it.
                </p>
                <p style={{lineHeight: '1.6'}}>
                  That belief shaped my path from support consulting to technical writing, where I translate complexity into clarity for thousands of users. With a background in Computer Science, Translation, and now Neuroscience and Marketing, I explore how people think, decide, and interact with information to create content that truly connects.
                </p>
                <p style={{lineHeight: '1.6'}}>
                  Today, I combine technical depth with modern content practices. I work with doc-as-code workflows, MadCap Flare, Git, and Bitbucket, and apply style guides, accessibility, and plain language principles to deliver user-centered communication at scale.
                </p>
                <p style={{lineHeight: '1.6'}}>
                  I also design AI-assisted documentation workflows using prompt engineering techniques. I’ve built internal AI agents in Microsoft Copilot and ROVO that review standard adherence and generate release and announcement emails aligned with the company communication guidelines.
                </p>
                <p style={{lineHeight: '1.6', fontWeight: 'bold'}}>
                  My goal is simple: remove friction, reduce cognitive load, and help people confidently use the tools they rely on.
                </p>
              </div>

              {/* RIGHT COLUMN: QUICK INFO & LINKS */}
              <div className="col col--4 col--offset--1">
                {/* CONTACT CARD */}
                <div style={{
                  backgroundColor: 'var(--ifm-background-color)',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(0,0,0,0.05)',
                  marginBottom: '1.5rem'
                }}>
                  <Heading as="h4" style={{marginTop: 0, marginBottom: '1rem'}}>✉️ Contact Information</Heading>
                  <ul style={{listStyle: 'none', paddingLeft: 0, margin: 0, lineHeight: '2'}}>
                    <li>
                      <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/carol-smenezes/" target="_blank" rel="noopener noreferrer">Let's connect →</a>
                    </li>
                    <li>
                      <strong>Email:</strong> <a href="mailto:your-email@provider.com">Contact me →</a>
                    </li>
                    <li>
                      <strong>Location:</strong> Remotely from Brazil - RS
                    </li>
                  </ul>
                </div>

                {/* LANGUAGES & SKILLS BADGES */}
                <div style={{
                  backgroundColor: 'var(--ifm-background-color)',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(0,0,0,0.05)'
                }}>
                  <Heading as="h4" style={{marginTop: 0, marginBottom: '1rem'}}>🌐 Core Competencies</Heading>
                  <p style={{fontSize: '0.9rem', marginBottom: '0.5rem'}}><strong>Languages:</strong> Fluent in English & Portuguese</p>
                  <div style={{display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '1rem'}}>
                    {['Doc-as-Code', 'UX Writing', 'Product Management', 'MadCap Flare', 'Git', 'Prompt Engineering', 'Accessibility (WCAG)'].map((skill) => (
                      <span key={skill} style={{
                        fontSize: '0.75rem',
                        padding: '4px 8px',
                        backgroundColor: 'rgba(45, 90, 67, 0.08)',
                        color: 'var(--ifm-color-primary)',
                        borderRadius: '4px',
                        fontWeight: '600'
                      }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
    </Layout>
  );
}