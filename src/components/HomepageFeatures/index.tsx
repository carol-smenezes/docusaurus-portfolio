import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  badge: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Product Management',
    badge: 'Estratégia & Escopo',
    description: (
      <>
        Definição de visão de produto SaaS B2B, mapeamento de processos complexos, 
        priorização de backlog e garantia de que o projeto saia da folha em branco 
        com escopo gerenciável e foco em entrega de valor.
      </>
    ),
  },
  {
    title: 'UX Writing',
    badge: 'Experiência & Tom de Voz',
    description: (
      <>
        Desenho de fluxos conversacionais, microcopy focado em acessibilidade e 
        mensagens claras para o usuário. Tradução de jargões técnicos complexos em 
        interfaces amigáveis e intuitivas.
      </>
    ),
  },
  {
    title: 'Technical Writing',
    badge: 'Arquitetura de Informação',
    description: (
      <>
        Estruturação de documentação robusta utilizando Markdown e ferramentas Docs-as-Code. 
        Criação de guias de instalação, documentação de processos e manuais focados na legibilidade.
      </>
    ),
  },
];

function Feature({title, badge, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="padding-horiz--md margin-bottom--xl">
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

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features} style={{padding: '4rem 0', backgroundColor: 'var(--ifm-background-surface-color)'}}>
      <div className="container">
        <div className="text--center margin-bottom--xl">
          <Heading as="h2">Como atuei no desenvolvimento do Alcária OS</Heading>
          <p style={{maxWidth: '600px', margin: '0 auto', color: 'var(--ifm-font-color-base)', opacity: 0.8}}>
            Um ecossistema complexo exige um olhar multidisciplinar. Veja abaixo as disciplinas que 
            arquitetaram a experiência do produto.
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}