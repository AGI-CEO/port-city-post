import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <h1 className="title">Port City Post</h1>
        <h2 className="subtitle">Wilmington's Essential Local Newsletter</h2>

        <div className="hero-content">
          <p className="tagline">
            Stay connected to the pulse of the Port City with our curated
            coverage of what matters most to locals.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-item">
            <h3>Local Events & Culture</h3>
            <p>
              From downtown festivals to beach happenings, never miss out on
              what makes Wilmington vibrant.
            </p>
          </div>
          <div className="feature-item">
            <h3>Community News</h3>
            <p>
              Stay informed about neighborhood developments, city council
              decisions, and community initiatives.
            </p>
          </div>
          <div className="feature-item">
            <h3>Food & Dining Scene</h3>
            <p>
              Discover the latest restaurant openings, local food trends, and
              hidden culinary gems.
            </p>
          </div>
          <div className="feature-item">
            <h3>Coastal Updates</h3>
            <p>
              Get important updates on beach conditions, marine life, and
              coastal developments.
            </p>
          </div>
        </div>

        <div className="cta-section">
          <h3>Join Your Community</h3>
          <p>
            Subscribe to Port City Post and get weekly updates delivered
            straight to your inbox. Stay connected with what's happening in
            Wilmington NC - from historic downtown to Wrightsville Beach.
          </p>
        </div>
      </div>
    </>
  )
}
