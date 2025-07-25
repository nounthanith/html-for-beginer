import React from "react";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FiGrid } from "react-icons/fi";
import { FaTable } from "react-icons/fa";

// Content constants
const CONTENT = {
  title: "ការបង្កើតតារាង (Table)",
  description:
    "រៀនពីរបៀបបង្កើតតារាងនៅក្នុង HTML ដោយប្រើស្លាក table, tr, th, និង td",
  fullHtmlExample: `<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>តារាងគម្រូ</title>
    <style>
      table {
        width: 100%;
        border-collapse: collapse;
        margin: 1rem 0;
      }
      th, td {
        border: 1px solid #ddd;
        padding: 0.5rem;
        text-align: left;
      }
      th {
        background-color: #f2f2f2;
      }
      tr:nth-child(even) {
        background-color: #f9f9f9;
      }
    </style>
</head>
<body>
    <h1>តារាងសិស្ស</h1>
    
    <table>
        <tr>
            <th>ល.រ</th>
            <th>ឈ្មោះ</th>
            <th>អាយុ</th>
            <th>ថ្នាក់</th>
        </tr>
        <tr>
            <td>1</td>
            <td>នួន ថានិត</td>
            <td>15</td>
            <td>៩ខ</td>
        </tr>
        <tr>
            <td>2</td>
            <td>លាង ស្រីពេជ្រ</td>
            <td>16</td>
            <td>៩ខ</td>
        </tr>
    </table>
</body>
</html>`,
  exercise: {
    title: "លំហាត់",
    description:
      "សូមបង្កើតតារាងផ្ទាល់ខ្លួនរបស់អ្នកដោយប្រើស្លាក table, tr, th, និង td។ បន្ថែមជួរឈរបន្ថែមដូចជា ភេទ ឬ លេខទូរស័ព្ទ។",
  },
  structure: {
    title: "ស្លាកតារាង",
    items: [
      "<table> - សម្រាប់បង្កើតតារាង",
      "<tr> - កំណត់ជួរនីមួយៗ(ជួរដេក)",
      "<th> - កំណត់ក្បាលអត្ថបទសំខាន់",
      "<td> - កំណត់ទិន្នន័យក្នុងតារាង",
      "colspan/rowspan - លាយស៊ុមឈរ/ជួរ",
    ],
  },
  tips: {
    title: "គន្លឹះសំខាន់ៗ",
    items: [
      "ប្រើប្រាស់ <thead>, <tbody>, <tfoot> ដើម្បើធ្វើឲ្យតារាងមានភាពស្អាតស្រួលមើល។",
      "ប្រើ CSS ដើម្បីធ្វើឱ្យតារាងស្អាតនិងមានគម្លាត។",
    ],
  },
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

function Step5() {
  return (
    <motion.div
      id="step5"
      className="max-w-4xl mx-auto "
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
          <span className="drop-shadow-md">៥</span>
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
                  margin: 0,
                }}
                wrapLines={true}
                wrapLongLines={true}
              >
                {CONTENT.fullHtmlExample}
              </SyntaxHighlighter>
            </motion.div>

            {/* Right Column */}
            <motion.div className="space-y-6" variants={ANIMATIONS.fadeIn}>
              {/* Structure Card */}
              <motion.div
                className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/20 p-5 rounded-xl border border-purple-100 dark:border-purple-900/50 shadow-md hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                variants={ANIMATIONS.fadeIn}
              >
                <div className="flex items-center mb-3">
                  <div className="bg-purple-100 dark:bg-purple-900/50 p-2 rounded-lg mr-3">
                    <FaTable className="w-5 h-5 text-purple-600 dark:text-purple-400" />
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

              {/* Tips Card */}
              <motion.div
                className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/30 dark:to-yellow-800/20 p-5 rounded-xl border border-yellow-100 dark:border-yellow-900/50 shadow-md hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                variants={ANIMATIONS.fadeIn}
              >
                <div className="flex items-center mb-3">
                  <div className="bg-yellow-100 dark:bg-yellow-900/50 p-2 rounded-lg mr-3">
                    <svg
                      className="w-5 h-5 text-yellow-600 dark:text-yellow-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-yellow-800 dark:text-yellow-200">
                    {CONTENT.tips.title}
                  </h3>
                </div>
                <ul className="pl-11 space-y-2 text-yellow-700 dark:text-yellow-300 text-sm">
                  {CONTENT.tips.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block bg-yellow-200 dark:bg-yellow-900/40 rounded-full w-1.5 h-1.5 mt-2 mr-2"></span>
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
                    <FiGrid className="w-5 h-5 text-green-600 dark:text-green-400" />
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

export default Step5;
