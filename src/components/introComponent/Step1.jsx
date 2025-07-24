import React from "react";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FiCode, FiTag } from "react-icons/fi";

// Content constants
const CONTENT = {
  title: "តើ HTML ជាអ្វី?",
  description: {
    part1: "HTML (HyperText Markup Language)",
    part2: "គឺជាភាសាសំខាន់សម្រាប់បង្កើតគេហទំព័រ។ ដើម្បីបង្ហាញ Content អ្វីមួយទៅលើ",
    part3: "Internet (Website)។"
  },
  cards: {
    element: {
      title: "HTML Element",
      description: "ធាតុ HTML ត្រូវបានកំណត់ដោយ Tag បើក, ខ្លឹមសារ, និង​ Tag បញ្ចប់៖",
      example: "<tagname>content</tagname>",
      icon: <FiCode className="w-5 h-5" />
    },
    tags: {
      title: "HTML Tags",
      description: "Tag HTML ត្រូវបានរុំព័ទ្ធដោយតង្កៀប៖",
      example: "<tag> និង </tag>",
      icon: <FiTag className="w-5 h-5" />
    }
  },
  example: {
    title: "ឧទាហរណ៍៖",
    code: `<!DOCTYPE html>
<html lang="km">
  <head>
    <title>ទំព័រដើម</title>
  </head>
  <body>
    <h1>សួស្តីអ្នកទាំងអស់គ្នា!</h1>
    <p>នេះគឺជាឧទាហរណ៍នៃកូដ HTML ។</p>
  </body>
</html>`
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

function Step1() {
  return (
    <motion.div
      id="step1"
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
          <span className="drop-shadow-md">១</span>
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
            <span className="font-semibold text-blue-600 dark:text-blue-400">{CONTENT.description.part1}</span>
            <span className="ml-1">{CONTENT.description.part2} <span className="font-bold text-blue-600 dark:text-blue-400">{CONTENT.description.part3}</span></span>
          </motion.p>

          <motion.div 
            className="grid md:grid-cols-2 gap-6 mt-8"
            variants={ANIMATIONS.stagger}
          >
            {/* HTML Element Card */}
            <motion.div 
              className="group bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/20 p-5 rounded-xl border border-blue-100 dark:border-blue-900/50 shadow-md hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              variants={ANIMATIONS.fadeIn}
            >
              <div className="flex items-center mb-3">
                <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-lg mr-3 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors">
                  {CONTENT.cards.element.icon}
                </div>
                <h3 className="text-lg font-bold text-blue-800 dark:text-blue-200">
                  {CONTENT.cards.element.title}
                </h3>
              </div>
              <p className="text-blue-700 dark:text-blue-300 text-sm pl-11">
                {CONTENT.cards.element.description}
                <code className="block mt-2 bg-blue-800/10 dark:bg-blue-900/30 px-3 py-2 rounded-md text-blue-900 dark:text-blue-100 font-mono">
                  <span className="text-blue-600 dark:text-blue-400">&lt;tagname&gt;</span>content<span className="text-blue-600 dark:text-blue-400">&lt;/tagname&gt;</span>
                </code>
              </p>
            </motion.div>

            {/* Tag Card */}
            <motion.div 
              className="group bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/20 p-5 rounded-xl border border-green-100 dark:border-green-900/50 shadow-md hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              variants={ANIMATIONS.fadeIn}
            >
              <div className="flex items-center mb-3">
                <div className="bg-green-100 dark:bg-green-900/50 p-2 rounded-lg mr-3 group-hover:bg-green-200 dark:group-hover:bg-green-800/50 transition-colors">
                  {CONTENT.cards.tags.icon}
                </div>
                <h3 className="text-lg font-bold text-green-800 dark:text-green-200">
                  {CONTENT.cards.tags.title}
                </h3>
              </div>
              <p className="text-green-700 dark:text-green-300 text-sm pl-11">
                {CONTENT.cards.tags.description}
                <code className="block mt-2 bg-green-800/10 dark:bg-green-900/30 px-3 py-2 rounded-md text-green-900 dark:text-green-100 font-mono">
                  <span className="text-green-600 dark:text-green-400">&lt;tag&gt;</span> និង <span className="text-green-600 dark:text-green-400">&lt;/tag&gt;</span>
                </code>
              </p>
            </motion.div>
          </motion.div>

          {/* Example Section */}
          <motion.div 
            className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700"
            variants={ANIMATIONS.fadeIn}
          >
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
              {CONTENT.example.title}
            </h4>
            <div className="bg-gray-800 rounded-xl p-4 shadow-inner">
              <SyntaxHighlighter
                language="html"
                style={oneDark}
                customStyle={{
                  background: "none",
                  padding: 0,
                  margin: 0,
                  fontSize: "0.85rem"
                }}
              >
                {CONTENT.example.code}
              </SyntaxHighlighter>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Step1;