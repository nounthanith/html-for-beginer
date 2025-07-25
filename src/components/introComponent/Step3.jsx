import React from "react";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FiAlertCircle, FiList } from "react-icons/fi";

// Content constants
const CONTENT = {
  title: "Tag HTML ទូទៅ",
  description: "ខាងក្រោមនេះគឺជា <b>Tag</b> HTML មួយចំនួនដែលគេប្រើញឹកញាប់៖",
  commonTagsExample: `<h1>Main Heading</h1>
<h2>Subheading</h2>
<p>This is a paragraph.</p>
<a href="https://example.com">This is a link</a>
<img src="image.jpg" alt="Description">
<ul>
    <li>List item 1</li>
    <li>List item 2</li>
</ul>`,
  importantTags: {
    title: "Tag HTML សំខាន់ៗមួយចំនួន៖",
    tags: [
      {
        category: "ចំណងជើង",
        tags: "<h1> ដល់ <h6>"
      },
      {
        category: "អត្ថបទ",
        tags: "<p>, <span>"
      },
      {
        category: "តំណភ្ជាប់ ( Link )",
        tags: "<a>"
      },
      {
        category: "រូបភាព",
        tags: "<img>"
      },
      {
        category: "បញ្ជី ( List )",
        tags: "<ul>, <ol>, <li>"
      },
      {
        category: "ក្រុម ( Container )",
        tags: "<div>, <section>"
      }
    ]
  },
  khmerEncodingTip: {
    title: "ការបង្ហាញអក្សរខ្មែរ",
    description: "ដើម្បីបង្ហាញអក្សរខ្មែរឱ្យបានត្រឹមត្រូវ ត្រូវប្រាកដថាប្រើ UTF-8 encoding និងដាក់អក្សរខ្មែរដោយផ្ទាល់ក្នុងកូដ។"
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

function Step3() {
  return (
    <motion.div 
      id="step3"
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
          <span className="drop-shadow-md">៣</span>
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
            dangerouslySetInnerHTML={{ __html: CONTENT.description }}
          />

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
                {CONTENT.commonTagsExample}
              </SyntaxHighlighter>
            </motion.div>

            {/* Tips Section */}
            <motion.div 
              className="space-y-4"
              variants={ANIMATIONS.fadeIn}
            >
              {/* Important Tags Card */}
              <motion.div 
                className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/20 p-5 rounded-xl border border-blue-100 dark:border-blue-900/50 shadow-md hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                variants={ANIMATIONS.fadeIn}
              >
                <div className="flex items-center mb-3">
                  <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-lg mr-3">
                    <FiList className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-blue-800 dark:text-blue-200">
                    {CONTENT.importantTags.title}
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3 pl-11">
                  {CONTENT.importantTags.tags.map((tag, index) => (
                    <div key={index}>
                      <h4 className="text-sm font-medium text-blue-700 dark:text-blue-300">
                        {tag.category}
                      </h4>
                      <p className="text-sm mt-1 text-blue-800 dark:text-blue-200 font-mono">
                        {tag.tags}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Khmer Encoding Tip */}
              <motion.div 
                className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/10 p-5 rounded-xl border border-yellow-200 dark:border-yellow-900/50 shadow-md hover:shadow-lg transition-all duration-300 flex gap-3 items-start"
                whileHover={{ scale: 1.02 }}
                variants={ANIMATIONS.fadeIn}
              >
                <div className="bg-yellow-100 dark:bg-yellow-900/30 p-2 rounded-lg">
                  <FiAlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-yellow-800 dark:text-yellow-200 mb-2">
                    {CONTENT.khmerEncodingTip.title}
                  </h3>
                  <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                    {CONTENT.khmerEncodingTip.description.split('UTF-8').map((part, i) => (
                      <React.Fragment key={i}>
                        {i > 0 && (
                          <code className="bg-yellow-200 dark:bg-yellow-900/30 px-1 rounded mx-1">
                            UTF-8
                          </code>
                        )}
                        {part}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Step3;