import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-700 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto text-center">
        <p>© 2025 EduRural. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="hover:text-yellow-400">Facebook</a>
          <a href="#" className="hover:text-yellow-400">Twitter</a>
          <a href="#" className="hover:text-yellow-400">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
