// TODO: Replace this with styles from branding
const hstyles = `font-bold leading-tight mb-4`

const H1 = props => (
  <h1 className={`${hstyles} text-3xl`} {...props}>
    {props.children}
  </h1>
)
const H2 = props => (
  <h2 className={`${hstyles} text-2xl`} {...props}>
    {props.children}
  </h2>
)
const H3 = props => (
  <h3 className={`${hstyles} text-xl`} {...props}>
    {props.children}
  </h3>
)
const H4 = props => (
  <h4 className={`${hstyles} text-lg`} {...props}>
    {props.children}
  </h4>
)
const H5 = props => (
  <h5 className={`${hstyles} text-md`} {...props}>
    {props.children}
  </h5>
)
const H6 = props => (
  <h6 className={`${hstyles} text-sm`} {...props}>
    {props.children}
  </h6>
)

const Headings = { H1, H2, H3, H4, H5, H6 }

export default Headings
