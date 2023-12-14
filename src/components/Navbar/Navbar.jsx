import { Link } from "react-scroll";

const Navbar = () => {
  const navLinks = (
    <>
      <li className=" font-bold">
        <Link to="Home" spy={true} smooth={true} offset={-100} duration={600}>
          Home
        </Link>
      </li>

      <li className=" font-bold">
        <Link to="About" spy={true} smooth={true} offset={-50} duration={600}>
          About
        </Link>
      </li>

      <li className=" font-bold">
        <Link to="Skills" spy={true} smooth={true} offset={-50} duration={600}>
          Skills
        </Link>
      </li>

      <li className=" font-bold">
        <Link
          to="Projects"
          spy={true}
          smooth={true}
          offset={-50}
          duration={600}
        >
          Projects
        </Link>
      </li>

      <li className=" font-bold">
        <Link to="Education" spy={true} smooth={true} offset={-50} duration={600}>
          Education
        </Link>
      </li>
      <li className=" font-bold">
        <Link to="contact" spy={true} smooth={true} offset={-50} duration={600}>
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-[#1834ce] text-white ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Rajib </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
    <p className="hidden md:block">Email: rajibahamed6060@gmail.com</p>
  </div>
      </div>
    </div>
  );
};

export default Navbar;
