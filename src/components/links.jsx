const Links = ({children,href, id}) => (
    <a href={href} target="_blank" className="link" id={id}>
        {children}
    </a>
)
 
export default Links;