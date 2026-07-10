import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = [
    { label: "About", path: "/about" },
    { label: "Destinations", path: "/" },
    { label: "Careers", path: "/" },
    { label: "Contact", path: "/contact" },
    { label: "Privacy", path: "/" },
  ];

  return (
    <footer className="bg-[#0F2C5C] border-t border-white/10 px-6 py-8">
      <div className="max-w-4xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">

          {/* Logo */}
          <Link to="/" className="no-underline">
            <span className="text-white font-medium text-base">
              Meridian<span className="text-[#C9943A]">Airlines</span>
            </span>
          </Link>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="text-white/50 hover:text-white text-sm transition-colors no-underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-5 text-center">
          <p className="text-white/25 text-xs">
            © 2026 Meridian Airlines. All rights reserved. Full-stack portfolio project — ASP.NET Core + React.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
