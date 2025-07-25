import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiTwitter, FiMail, FiBook } from "react-icons/fi";

const Footer = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.footer
      className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-t border-gray-200 dark:border-gray-700 mt-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white flex items-center">
              <FiBook className="mr-2 text-blue-600 dark:text-blue-400" />
              HTML សម្រាប់អ្នកចាប់ផ្តើម
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              ជាវគ្គសិក្សាសាមញ្ញសម្រាប់អ្នកដែលចាប់ផ្តើមរៀនអំពីការអភិវឌ្ឍគេហទំព័រ
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-md font-semibold text-gray-800 dark:text-white">
              តំណភ្ជាប់រហ័ស
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#step1"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
                >
                  មេរៀនទី១ - សេចក្តីផ្តើម
                </a>
              </li>
              <li>
                <a
                  href="#step2"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
                >
                  មេរៀនទី២ - រចនាសម្ព័ន្ធ HTML
                </a>
              </li>
              <li>
                <a
                  href="#step3"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
                >
                  មេរៀនទី៣ - Tag HTML ទូទៅ
                </a>
              </li>
              <li>
                <a
                  href="#step4"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
                >
                  មេរៀនទី៤ -  ការអនុវត្តបង្កើត Website ផ្ទាល់ខ្លួន
                </a>
              </li>
              <li>
                <a
                  href="#step5"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
                >
                  មេរៀនទី៥ -  ការបង្កើតតារាង (Table)
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-md font-semibold text-gray-800 dark:text-white">
              ឯកសារយោង
            </h4>
            <ul className="space-y-2">
              
              <li>
                <a
                  href="https://www.w3schools.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
                >
                  W3Schools
                </a>
              </li>
              <li>
                <a
                  href="https://codepen.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
                >
                  CodePen ឧទាហរណ៍
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-md font-semibold text-gray-800 dark:text-white">
              ទំនាក់ទំនង
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/nounthanith"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              >
                <FiGithub className="w-5 h-5" />
              </a>
              
              <a
                href="mailto: nounthanith99@gmail.com"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              >
                <FiMail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              អ៊ីមែល: <a href="mailto:nounthanith99@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">nounthanith99@gmail.com</a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} HTML សម្រាប់អ្នកចាប់ផ្តើម.
            រក្សាសិទ្ធិគ្រប់យ៉ាងដោយ Nuon Thanith.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
