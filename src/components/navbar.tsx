function Navbar() {
  return (
    <header className="bg-primary text-primary-foreground ">
      <div className="container flex items-center justify-between py-3">
        <h1 className="text-3xl font-bold hover:cursor-pointer">Logo</h1>
        <nav>
          <ul className="flex gap-10">
            <li className="rounded-md px-5 py-3 hover:cursor-pointer hover:bg-secondary/20">
              Home
            </li>
            <li className="rounded-md px-5 py-3 hover:cursor-pointer hover:bg-secondary/20">
              About
            </li>
            <li className="rounded-md px-5 py-3 hover:cursor-pointer hover:bg-secondary/20">
              Contact
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
