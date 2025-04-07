import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import styles from '../styles/header.module.css'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'Home', page: '/' },
  { label: 'Blog', page: '/blog' },
  { label: 'Contact', link: 'http://bio.blaisep.com' },
]

const ogImageUrl = 'https://notion-blog.now.sh/og-image.png'

const Header = ({ titlePre = '' }) => {
  const { pathname } = useRouter()

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <motion.header
      className={styles.header}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} Port City Post</title>
        <meta
          name="description"
          content="An example Next.js site using Notion for the blog"
        />
        <meta name="og:title" content="Port City Post" />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:site" content="@AGI_CEO" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>
      <motion.ul variants={containerVariants}>
        {navItems.map(({ label, page, link }) => (
          <motion.li
            key={label}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            {page ? (
              <Link href={page}>
                <motion.a
                  className={pathname === page ? 'active' : undefined}
                  whileHover={{ color: 'var(--accent)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  {label}
                </motion.a>
              </Link>
            ) : (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExtLink href={link}>{label}</ExtLink>
              </motion.div>
            )}
          </motion.li>
        ))}
      </motion.ul>
    </motion.header>
  )
}

export default Header
