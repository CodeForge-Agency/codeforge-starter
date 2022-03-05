import Head from 'next/head'
import Header from '/components/organisms/header'
import Footer from '/components/organisms/footer'

const DefaultLayout = ({ children, pageTitle }) => (
  <div id="site-wrap" className="site-wrap layout-default">
    <Head>
      <title>{!!pageTitle ? `${pageTitle} | ` : ''}Website Name</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <main id="site-main" className="site-main">
      {children}
    </main>
    <Footer />
  </div>
)

export default DefaultLayout
