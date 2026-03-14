import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Layout ({ children, currentPage, setPage}) {
    return (
        <div className="container">

            <Header/>

            <NavBar
            currentPage={currentPage}
            setPage={setPage}
            />

            <main className="content">
                {children}
            </main>
            
            <Footer/>


        </div>
    );
}


export default Layout;