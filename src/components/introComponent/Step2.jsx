import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiCheckCircle, FiAlertTriangle, FiClock } from "react-icons/fi";

// Content constants
const CONTENT = {
  title: "រចនាសម្ព័ន្ធមូលដ្ឋានរបស់ HTML",
  description: "ឯកសារ HTML មួយត្រូវបានសាងសង់ឡើងដោយធាតុគ្រឹះសំខាន់ៗដូចខាងក្រោម៖",
  structureExample: `<!DOCTYPE html>
<html lang="km">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ទំព័រឧទាហរណ៍</title>
  </head>
  <body>
    <h1>សួស្តីពិភពលោក!</h1>
    <p>នេះគឺជាកថាខណ្ឌដំបូងរបស់ខ្ញុំ។</p>
  </body>
</html>`,
  htmlElements: [
    {
      tag: "<!DOCTYPE html>",
      description: "កំណត់ប្រភេទឯកសារជា HTML5"
    },
    {
      tag: "<html>",
      description: "ជា tag ដំបូងសំខាន់សម្រាប់សរសេរកូដ HTML"
    },
    {
      tag: "<head>",
      description: "ជា tag ដំបូងសំខាន់សម្រាប់ដាក់ meta link និង title"
    },
    {
      tag: "<body>",
      description: "សម្រាប់បង្ហាញ Content ទៅអ្នកប្រើប្រាស់"
    }
  ],
  notes: {
    important: {
      title: "ចំណាំសំខាន់",
      content: "ត្រូវប្រាកដថាអ្នកបិទ tag ទាំងអស់ឱ្យបានត្រឹមត្រូវ Example: <tagname> Content </tagname>។"
    },
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

function Step2() {
  return (
    <motion.div 
      id="step2"
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
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4 shadow-lg">
          <span className="drop-shadow-md">២</span>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
            {CONTENT.title}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mt-2"></div>
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

          <div className="grid md:grid-cols-2 gap-6">
            {/* Code Example */}
            <motion.div
              className="group bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/30 dark:to-gray-800/20 p-5 rounded-xl border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.01 }}
              variants={ANIMATIONS.fadeIn}
            >
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 dark:bg-purple-900/50 p-2 rounded-lg mr-3">
                  <FiCode className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                  គំរូកូដ HTML
                </h3>
              </div>
              <div className="bg-gray-800 rounded-lg p-3 sm:p-4 overflow-x-auto">
                <pre className="text-xs sm:text-sm text-gray-300 font-mono">
                  <code>
                    {CONTENT.structureExample.split("\n").map((line, i) => (
                      <div key={i} className="flex whitespace-pre">
                        <span className="text-gray-500 w-6 sm:w-8 flex-shrink-0 inline-block">
                          {i + 1}
                        </span>
                        <span className="text-blue-400 flex-1 overflow-x-auto">
                          {line}
                        </span>
                      </div>
                    ))}
                  </code>
                </pre>
              </div>
            </motion.div>

            {/* HTML Elements */}
            <motion.div 
              className="space-y-4"
              variants={ANIMATIONS.stagger}
            >
              {CONTENT.htmlElements.map((item, index) => (
                <motion.div
                  key={index}
                  className="group bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/10 p-4 rounded-xl border border-purple-100 dark:border-purple-900/30 shadow-sm hover:shadow-md transition-all duration-200"
                  whileHover={{ x: 5 }}
                  variants={ANIMATIONS.fadeIn}
                >
                  <div className="flex items-start">
                    <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg mr-3 mt-0.5">
                      <FiCheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <code className="font-mono bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-300 px-2 py-1 rounded text-sm">
                        {item.tag}
                      </code>
                      <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Important Notes */}
          <motion.div
            className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700"
            variants={ANIMATIONS.fadeIn}
          >
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 rounded-r-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <FiAlertTriangle className="h-5 w-5 text-yellow-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                    {CONTENT.notes.important.title}
                  </h3>
                  <div className="mt-2 text-sm text-yellow-700 dark:text-yellow-300">
                    <p>{CONTENT.notes.important.content}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Step2;