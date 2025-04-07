import ExtLink from './ext-link'
import { motion } from 'framer-motion'
import styles from '../styles/footer.module.css'

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const buttonVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
    tap: { scale: 0.95 },
  }

  return (
    <motion.footer
      className={styles.footer}
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true }}
    >
      <motion.div className={styles.content}>
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Ready to Transform Your Business?
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          Whether you need a stunning website, effective marketing strategies,
          or streamlined administration, we've got you covered. Take your
          business to the next level with professional solutions tailored to
          your needs.
        </motion.p>
        <ExtLink href="https://virtualzenassistants.com">
          <motion.button
            className={styles.button}
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
          >
            Get Started Today
          </motion.button>
        </ExtLink>
      </motion.div>
    </motion.footer>
  )
}
