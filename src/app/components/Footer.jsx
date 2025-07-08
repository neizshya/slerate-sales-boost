const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 text-center text-sm">
      <div className="container mx-auto px-4">
        <p>
          &copy; {new Date().getFullYear()} Slerate Sales Boost. All rights
          reserved.
        </p>
        <p>
          Built by <a href="https://github.com/neizshya">Neizshya</a> with
          Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
