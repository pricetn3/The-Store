import type { CSSProperties } from 'react';
import paradigmLogo from './assets/paradigm-logo.svg';
import suretyCorner from './assets/surety-corner.svg';
import styles from './PaperAuthentication.module.css';

export interface Institution {
  name: string;
  logoUrl: string;
  /** Institution brand color for the card's left border, e.g. "#0086C4". */
  accentColor: string;
}

export interface PaperAuthenticationProps {
  institution: Institution;
  recipientName: string;
  /** ISO date, e.g. "2026-03-16". Shown as MM/DD/YYYY. */
  conferralDate: string;
  publisher: string;
  /** When this QR scan happened. Pass it from the server so the server and browser render the same text. */
  accessedAt: Date;
  /** Login URL. Include the credential ID so the user lands on this credential after verifying. */
  accessHref: string;
}

/** "2026-03-16" → "03/16/2026". Splits the string so the date never shifts with time zones. */
function formatConferralDate(iso: string): string {
  const [year, month, day] = iso.split('-');
  return `${month}/${day}/${year}`;
}

function ordinal(n: number): string {
  const suffixes = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
}

/** → "Mon, October 12th 2026 at 9:20 AM" in the viewer's local time. */
function formatAccessedOn(date: Date): string {
  const weekday = date.toLocaleDateString('en-US', { weekday: 'short' });
  const month = date.toLocaleDateString('en-US', { month: 'long' });
  const time = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  return `${weekday}, ${month} ${ordinal(date.getDate())} ${date.getFullYear()} at ${time}`;
}

export function PaperAuthentication({
  institution,
  recipientName,
  conferralDate,
  publisher,
  accessedAt,
  accessHref,
}: PaperAuthenticationProps) {
  const details = [
    { label: 'Institution', value: institution.name },
    { label: 'Recipient', value: recipientName },
    {
      label: 'Conferral date',
      value: <time dateTime={conferralDate}>{formatConferralDate(conferralDate)}</time>,
      tabular: true,
    },
    { label: 'Publisher', value: publisher },
  ];

  return (
    <div className={styles.page}>
      <header className={styles.siteHeader}>
        <img className={styles.siteHeaderLogo} src={paradigmLogo} alt="Paradigm" />
      </header>

      <main className={styles.auth}>
        <span className="cc-badge cc-badge--success">
          Authenticated via{' '}
          <span className={styles.surety}>
            SURETY<strong>LOCK</strong>
          </span>
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="5" y="11" width="14" height="10" rx="2" />
            <path d="M8 11V7a4 4 0 0 1 8 0v4" />
          </svg>
        </span>

        <h1 className={styles.title}>The publication of this credential has been authenticated.</h1>
        <p className={styles.lede}>View publication information below.</p>

        <section
          className={`cc-card ${styles.credential}`}
          style={{ '--institution-accent': institution.accentColor } as CSSProperties}
          aria-labelledby="credential-heading"
        >
          <img className={styles.corner} src={suretyCorner} alt="" />
          <img className={styles.institutionLogo} src={institution.logoUrl} alt={institution.name} />
          <hr className={styles.divider} />
          <h2 id="credential-heading" className={styles.heading}>Credential details</h2>
          <dl className={styles.details}>
            {details.map(({ label, value, tabular }) => (
              <div key={label} className={styles.row}>
                <dt>{label}</dt>
                <dd className={tabular ? styles.tabular : undefined}>{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <div className={styles.actions}>
          <a className="cc-btn cc-btn--primary cc-btn--block" href={accessHref}>
            Access my credentials
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 3h6v6" />
              <path d="M10 14L21 3" />
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            </svg>
          </a>
        </div>

        <p className={styles.summary}>
          Order paper credential copies, download and share digital credentials, and validate credential details.
        </p>
        <p className={styles.timestamp}>
          Accessed on <time dateTime={accessedAt.toISOString()}>{formatAccessedOn(accessedAt)}</time>.
        </p>
      </main>

      <footer className={styles.siteFooter}>
        <p className={styles.copyright}>© {accessedAt.getFullYear()} Paradigm, Inc.</p>
        <p>All Rights Reserved. Proudly made in the USA.</p>
      </footer>
    </div>
  );
}

export default PaperAuthentication;
