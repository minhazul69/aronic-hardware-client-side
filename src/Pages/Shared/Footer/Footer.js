import React from "react";

const Footer = () => {
  const time = new Date();
  const year = time.getFullYear();

  return (
    <div className="bg-base-200 mt-8">
      <footer className="footer p-10 text-base-content lg:px-12">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <footer className="footer px-10 py-4 border-t border-base-300 bg-black text-white">
        <div className="items-center grid-flow-col">
          <h3 className="text-base">&copy; {year} Aronic-Hardware-Shop</h3>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a href="#" className="text-base">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" className="text-base">
              <i className="fa-brands fa-pinterest"></i>
            </a>
            <a href="#" className="text-base">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
