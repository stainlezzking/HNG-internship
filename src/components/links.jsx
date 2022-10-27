const Links = ({children,href, id,hidden}) => (
    <a href={href}  hidden={hidden} target="_blank" className="link" id={id}>
        {children}
    </a>
)
 
Links.defaultProps = {
    hidden : false
}
export default Links;