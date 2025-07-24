import React from "react";
import { FaCode, FaGraduationCap, FaLaptopCode, FaQuestionCircle, FaEnvelope, FaGithub, FaLinkedin, FaUser } from "react-icons/fa";

const features = [
  {
    icon: <FaCode className="w-8 h-8 text-primary" />,
    title: "Learn HTML5",
    description: "Master the latest HTML5 standards and best practices for modern web development."
  },
  {
    icon: <FaGraduationCap className="w-8 h-8 text-primary" />,
    title: "Beginner Friendly",
    description: "Perfect for absolute beginners with no prior coding experience required."
  },
  {
    icon: <FaLaptopCode className="w-8 h-8 text-primary" />,
    title: "Hands-on Projects",
    description: "Build real-world projects to apply what you've learned and build your portfolio."
  },
  {
    icon: <FaQuestionCircle className="w-8 h-8 text-primary" />,
    title: "24/7 Support",
    description: "Get help whenever you need it from our community and support team."
  }
];

function ComponetAbout() {
  return (
    <div className="bg-base-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Welcome to HTML For Beginners
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Start your web development journey with our comprehensive HTML course designed for complete beginners.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-base-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Our Course?</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-base-200 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div className="py-16 bg-base-200 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="bg-base-100 dark:bg-gray-700 rounded-lg shadow-xl p-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Hi, I'm Your Instructor</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  With years of experience in web development, I'm passionate about teaching beginners the fundamentals of HTML and web development in an easy-to-understand way.
                </p>
                <div className="flex justify-center md:justify-start space-x-4 mt-6">
                  <a 
                    href="mailto:nuonthanith99@gmail.com" 
                    className="flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    <FaEnvelope className="mr-2" /> Email Me
                  </a>
                  <a 
                    href="https://github.com/nounthanith" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </a>
                  <a 
                    href="https://modern-portfolio-pi-two.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                  >
                    <FaUser className="mr-2" /> Portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Learning?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have already started their web development journey with us.
          </p>
          <a
            href="/"
            className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Get Started Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default ComponetAbout;
