import Header from '../components/header'
import { motion } from 'framer-motion'
import Image from 'next/image'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <>
      <Header titlePre="Home" />
      <motion.div
        className={sharedStyles.layout}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 className="title" variants={itemVariants}>
          Port City Post
        </motion.h1>
        <motion.div
          className="logo-container"
          style={{ margin: '2rem auto', textAlign: 'center' }}
          variants={itemVariants}
        >
          <Image
            src="/logo.png"
            alt="Port City Post Logo"
            width={300}
            height={300}
            priority
            className="logo-image"
          />
        </motion.div>
        <motion.h2 className="subtitle" variants={itemVariants}>
          Wilmington's Essential Local Newsletter
        </motion.h2>

        <motion.div className="hero-content" variants={itemVariants}>
          <motion.p
            className="tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Stay connected to the pulse of the Port City with our curated
            coverage of what matters most to locals.
          </motion.p>
        </motion.div>

        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="feature-item" variants={itemVariants}>
            <h3>Local Events & Culture</h3>
            <p>
              From downtown festivals to beach happenings, never miss out on
              what makes Wilmington vibrant.
            </p>
          </motion.div>
          <motion.div className="feature-item" variants={itemVariants}>
            <h3>Community News</h3>
            <p>
              Stay informed about neighborhood developments, city council
              decisions, and community initiatives.
            </p>
          </motion.div>
          <motion.div className="feature-item" variants={itemVariants}>
            <h3>Food & Dining Scene</h3>
            <p>
              Discover the latest restaurant openings, local food trends, and
              hidden culinary gems.
            </p>
          </motion.div>
          <motion.div className="feature-item" variants={itemVariants}>
            <h3>Coastal Updates</h3>
            <p>
              Get important updates on beach conditions, marine life, and
              coastal developments.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="cta-section"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Join Your Community</h3>
          <p>
            Subscribe to Port City Post and get weekly updates delivered
            straight to your inbox. Stay connected with what's happening in
            Wilmington NC - from historic downtown to Wrightsville Beach.
          </p>
        </motion.div>
      </motion.div>
    </>
  )
}
