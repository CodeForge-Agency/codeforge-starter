const Container = ({ children, className, ...props }) => (
  <div className={`container px-4 ${className}`} {...props}>
    {children}
  </div>
)

export default Container
