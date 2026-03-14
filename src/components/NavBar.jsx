function NavBar({ currentPage, setPage }) {
  return (
    <nav className="navbar">

      <button onClick={() => setPage("home")}>
        Home
      </button>

      <button onClick={() => setPage("projects")}>
        Projects
      </button>

      <button onClick={() => setPage("contact")}>
        Contact
      </button>

    </nav>
  );
}


        

export default NavBar;