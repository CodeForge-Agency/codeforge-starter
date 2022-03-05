const Section = ({ children, className, ...props }) => (
  <section className={`py-12 ${className}`} {...props}>
    {children}
  </section>
)

export default Section
