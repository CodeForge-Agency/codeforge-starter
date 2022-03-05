import DefaultLayout from '/components/layouts/default'
import Headings from '/components/atoms/headings'

const HomePage = () => (
  <DefaultLayout pageTitle="Home Page">
    <section id="home-hero">
      <Headings.H1>
        Code Forge Agency is a digital agency that specializes in web development, design, and marketing.
      </Headings.H1>
      <p> Delete this section and replace with client content to get started. </p>
    </section>
  </DefaultLayout>
)

export default HomePage
