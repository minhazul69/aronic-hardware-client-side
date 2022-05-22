import React from "react";

const Footer = () => {
  const time = new Date();
  const year = time.getFullYear();

  return (
    <div className="bg-base-200 mt-8">
      <footer class="footer p-10 text-base-content lg:px-12">
        <div>
          <span class="footer-title">Services</span>
          <a class="link link-hover">Branding</a>
          <a class="link link-hover">Design</a>
          <a class="link link-hover">Marketing</a>
          <a class="link link-hover">Advertisement</a>
        </div>
        <div>
          <span class="footer-title">Company</span>
          <a class="link link-hover">About us</a>
          <a class="link link-hover">Contact</a>
          <a class="link link-hover">Jobs</a>
          <a class="link link-hover">Press kit</a>
        </div>
        <div>
          <span class="footer-title">Legal</span>
          <a class="link link-hover">Terms of use</a>
          <a class="link link-hover">Privacy policy</a>
          <a class="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <footer class="footer px-10 py-4 border-t border-base-300 bg-black text-white">
        <div class="items-center grid-flow-col">
          <h3 className="text-base">&copy; {year} Aronic-Hardware-Shop</h3>
        </div>
        <div class="md:place-self-center md:justify-self-end">
          <div class="grid grid-flow-col gap-4">
            <a href="#" className="text-base">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" className="text-base">
              <i class="fa-brands fa-pinterest"></i>
            </a>
            <a href="#" className="text-base">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
