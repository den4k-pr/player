import NavBar from "./navBar"

const Layout: React.FC<{children: React.ReactNode}> = ({children}) => (
    <>
        <NavBar />
        {children}
    </>
);

export default Layout;