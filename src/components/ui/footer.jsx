// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-br from-black to-slate-900 text-white border-t border-purple-500/20">
//       <div className="max-w-7xl mx-auto px-16 py-24">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
//           {/* Company Info */}
//           <div className="md:col-span-2">
//             <div className="flex items-center space-x-4 mb-8">
//               <div className="flex relative">
//                 <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
//                 <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full -ml-4"></div>
//               </div>
//               <span className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">InterXAI</span>
//             </div>
//             <p className="text-gray-300 max-w-lg mb-8 text-lg leading-relaxed">
//               The world's most advanced AI interview platform. Join thousands of professionals 
//               who've transformed their careers with our cutting-edge technology.
//             </p>
//             <div className="flex space-x-6">
//               <a href="#" className="text-gray-300 hover:text-purple-300 transition-colors text-lg">Twitter</a>
//               <a href="#" className="text-gray-300 hover:text-purple-300 transition-colors text-lg">LinkedIn</a>
//               <a href="#" className="text-gray-300 hover:text-purple-300 transition-colors text-lg">GitHub</a>
//             </div>
//           </div>

//           {/* Product Links */}
//           <div>
//             <h4 className="text-xl font-semibold mb-8 text-purple-300">Product</h4>
//             <ul className="space-y-4">
//               <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-lg">AI Interviews</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-lg">Feedback System</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-lg">Progress Tracking</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-lg">Mobile App</a></li>
//             </ul>
//           </div>

//           {/* Company Links */}
//           <div>
//             <h4 className="text-xl font-semibold mb-8 text-purple-300">Company</h4>
//             <ul className="space-y-4">
//               <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-lg">About Us</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-lg">Success Stories</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-lg">Contact</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-lg">Careers</a></li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-gray-800 mt-16 pt-12 flex flex-col md:flex-row justify-between items-center">
//           <p className="text-gray-400 text-lg">
//             © 2025 InterXAI. Revolutionizing interviews worldwide.
//           </p>
//           <div className="flex space-x-8 mt-6 md:mt-0">
//             <a href="#" className="text-gray-400 hover:text-purple-300 text-lg transition-colors">Privacy</a>
//             <a href="#" className="text-gray-400 hover:text-purple-300 text-lg transition-colors">Terms</a>
//             <a href="#" className="text-gray-400 hover:text-purple-300 text-lg transition-colors">Security</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-black to-slate-900 text-white border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8">
              <div className="flex relative">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full -ml-3 sm:-ml-4"></div>
              </div>
              <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">InterXAI</span>
            </div>
            <p className="text-gray-300 max-w-lg mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
              The world's most advanced AI interview platform. Join thousands of professionals 
              who've transformed their careers with our cutting-edge technology.
            </p>
            <div className="flex space-x-4 sm:space-x-6">
              <a href="#" className="text-gray-300 hover:text-purple-300 transition-colors text-base sm:text-lg">Twitter</a>
              <a href="#" className="text-gray-300 hover:text-purple-300 transition-colors text-base sm:text-lg">LinkedIn</a>
              <a href="#" className="text-gray-300 hover:text-purple-300 transition-colors text-base sm:text-lg">GitHub</a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 md:mb-8 text-purple-300">Product</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-base sm:text-lg">AI Interviews</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-base sm:text-lg">Feedback System</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-base sm:text-lg">Progress Tracking</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-base sm:text-lg">Mobile App</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 md:mb-8 text-purple-300">Company</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-base sm:text-lg">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-base sm:text-lg">Success Stories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-base sm:text-lg">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-base sm:text-lg">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 sm:mt-14 md:mt-16 pt-8 sm:pt-10 md:pt-12 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm sm:text-base md:text-lg text-center md:text-left">
            © 2025 InterXAI. Revolutionizing interviews worldwide.
          </p>
          <div className="flex space-x-6 sm:space-x-8">
            <a href="#" className="text-gray-400 hover:text-purple-300 text-sm sm:text-base md:text-lg transition-colors">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-purple-300 text-sm sm:text-base md:text-lg transition-colors">Terms</a>
            <a href="#" className="text-gray-400 hover:text-purple-300 text-sm sm:text-base md:text-lg transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
