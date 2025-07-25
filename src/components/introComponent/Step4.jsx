import React from "react";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FiEdit3 } from "react-icons/fi";

// Content constants
const CONTENT = {
  title: "ការអនុវត្តបង្កើត Website ផ្ទាល់ខ្លួន",
  description: "ខាងក្រោមនេះគឺជាឧទាហរណ៍ឯកសារ HTML ពេញលេញដែលប្រើអក្សរខ្មែរ៖",
  fullHtmlExample: `<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ទំព័រដំបូងរបស់ខ្ញុំ</title>
</head>
<body>
    <h1>សួស្តីពិភពលោក!</h1>
    <p>នេះគឺជាទំព័រ HTML ដំបូងរបស់ខ្ញុំ។</p>
    
    <h2>អំពីខ្ញុំ</h2>
    <p>ខ្ញុំកំពុងរៀនពីរបៀបបង្កើតគេហទំព័រ។</p>
    
    <h3>ចំណង់ចំណូលចិត្ត៖</h3>
    <ul>
        <li>ការអភិវឌ្ឍគេហទំព័រ</li>
        <li>ការសរសេរកម្មវិធី</li>
        <li>ការរៀនភាសាថ្មីៗ</li>
    </ul>
    
    <p>សូមទស្សនាវេបសាយរបស់យើង៖ 
        <a href="https://example.com">ចុចទីនេះ</a>
    </p>
</body>
</html>`,
  exercise: {
    title: "លំហាត់",
    description: "សូមបង្កើតឯកសារ HTML ថ្មីមួយដោយធ្វើតាមគំរូខាងលើ ហើយផ្លាស់ប្តូរខ្លឹមសារទៅជាព័ត៌មានរបស់អ្នកផ្ទាល់។"
  },
  structure: {
    title: "រចនាសម្ព័ន្ធឯកសារ HTML",
    items: [
      "<!DOCTYPE html> - កំណត់ប្រភេទឯកសារជាប្រភេទ HTML",
      "html element - ធាតុដំបូងសំខាន់សម្រាប់សរសេរកូដ HTML",
      "head section - សម្រាប់ដាក់ link meta និង title",
      "body section - ខ្លឹមសារដែលអាចឲ្យគេមើលាបាន",
      "អក្សរខ្មែរ - ប្រើ UTF-8 encoding"
    ]
  }
};

// Animation constants
const ANIMATIONS = {
  fadeIn: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  },
  stagger: {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }
};

function Step4() {
  return (
    <motion.div 
      id="step4"
      className="max-w-4xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={ANIMATIONS.stagger}
    >
      {/* Step Header */}
      <motion.div 
        className="flex items-center mb-8"
        variants={ANIMATIONS.fadeIn}
      >
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4 shadow-lg">
          <span className="drop-shadow-md">៤</span>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
            {CONTENT.title}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mt-2"></div>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div 
        className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl"
        whileHover={{ y: -5 }}
        variants={ANIMATIONS.fadeIn}
      >
        <div className="pl-0 sm:pl-4">
          <motion.p 
            className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-base sm:text-lg"
            variants={ANIMATIONS.fadeIn}
          >
            {CONTENT.description}
          </motion.p>

          <motion.div 
            className="grid md:grid-cols-2 gap-6 mt-8"
            variants={ANIMATIONS.stagger}
          >
            {/* Code Block */}
            <motion.div 
              className="overflow-x-auto"
              variants={ANIMATIONS.fadeIn}
            >
              <SyntaxHighlighter
                language="html"
                style={oneDark}
                customStyle={{
                  borderRadius: "0.75rem",
                  fontSize: "0.85rem",
                  padding: "1.25rem",
                  background: "#282c34",
                  margin: 0
                }}
                wrapLines={true}
                wrapLongLines={true}
              >
                {CONTENT.fullHtmlExample}
              </SyntaxHighlighter>
            </motion.div>

            {/* Right Column */}
            <motion.div 
              className="space-y-6"
              variants={ANIMATIONS.fadeIn}
            >
              {/* Structure Card */}
              <motion.div 
                className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/20 p-5 rounded-xl border border-purple-100 dark:border-purple-900/50 shadow-md hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                variants={ANIMATIONS.fadeIn}
              >
                <div className="flex items-center mb-3">
                  <div className="bg-purple-100 dark:bg-purple-900/50 p-2 rounded-lg mr-3">
                    <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-purple-800 dark:text-purple-200">
                    {CONTENT.structure.title}
                  </h3>
                </div>
                <ul className="pl-11 space-y-2 text-purple-700 dark:text-purple-300 text-sm">
                  {CONTENT.structure.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block bg-purple-200 dark:bg-purple-900/40 rounded-full w-1.5 h-1.5 mt-2 mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Exercise Card */}
              <motion.div 
                className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/20 p-5 rounded-xl border border-green-100 dark:border-green-900/50 shadow-md hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                variants={ANIMATIONS.fadeIn}
              >
                <div className="flex items-center mb-3">
                  <div className="bg-green-100 dark:bg-green-900/50 p-2 rounded-lg mr-3">
                    <FiEdit3 className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-lg font-bold text-green-800 dark:text-green-200">
                    {CONTENT.exercise.title}
                  </h3>
                </div>
                <p className="text-green-700 dark:text-green-300 text-sm pl-11">
                  {CONTENT.exercise.description}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Step4;