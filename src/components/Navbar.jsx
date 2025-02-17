const Navbar = () => {
  return (
    <nav className="w-full h-16 flex items-center justify-end py-6 px-8">
      <div className="flex items-center gap-6 text-lg">
        <a href="#about" className="hover:text-gray-400">
          About
        </a>
        <a href="#technologies" className="hover:text-gray-400">
          Technologies
        </a>
        <a href="#experience" className="hover:text-gray-400">
          Experience
        </a>
        <a href="#education" className="hover:text-gray-400">
          Education
        </a>
        <a href="#projects" className="hover:text-gray-400">
          Projects
        </a>
        <a href="#contact" className="hover:text-gray-400">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
