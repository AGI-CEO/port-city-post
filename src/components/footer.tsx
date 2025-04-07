import ExtLink from './ext-link'

export default function Footer() {
  return (
    <>
      <footer className="cta-section" style={{ marginTop: '4rem' }}>
        <h3>Ready to Transform Your Business?</h3>
        <p style={{ fontSize: '1.1rem', margin: '1rem 0' }}>
          Whether you need a stunning website, effective marketing strategies,
          or streamlined administration, we've got you covered. Take your
          business to the next level with professional solutions tailored to
          your needs.
        </p>
        <ExtLink href="https://virtualzenassistants.com">
          <button
            style={{
              background: '#2c5282',
              color: 'white',
              padding: '0.8rem 1.5rem',
              borderRadius: '6px',
              border: 'none',
              fontSize: '1.1rem',
              cursor: 'pointer',
              transition: 'background 0.3s ease',
              marginTop: '1rem',
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = '#1a365d')}
            onMouseOut={(e) => (e.currentTarget.style.background = '#2c5282')}
          >
            Get Started Today
          </button>
        </ExtLink>
      </footer>
    </>
  )
}
