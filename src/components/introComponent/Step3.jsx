import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FiList, FiAlertCircle } from "react-icons/fi";

function Step3() {
  const commonTagsExample = `<h1>Main Heading</h1>
<h2>Subheading</h2>
<p>This is a paragraph.</p>
<a href="https://example.com">This is a link</a>
<img src="image.jpg" alt="Description">
<ul>
    <li>List item 1</li>
    <li>List item 2</li>
</ul>`;

  return (
    <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
      {/* Header Section */}
      <div className="flex items-center mb-4 sm:mb-6">
        <div className="bg-blue-600 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-lg sm:text-xl font-bold mr-3 sm:mr-4">
          ៣
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
          <FiList className="text-blue-600" />
          ស្លាក HTML ទូទៅ
        </h2>
      </div>

      {/* Content */}
      <div className="pl-0 sm:pl-11 md:pl-14">
        <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
          ខាងក្រោមនេះគឺជាស្លាក HTML មួយចំនួនដែលគេប្រើញឹកញាប់៖
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Code Block */}
          <div className="overflow-x-auto">
            <SyntaxHighlighter
              language="html"
              style={oneDark}
              customStyle={{
                borderRadius: "0.75rem",
                fontSize: "0.85rem",
                padding: "1.25rem",
                background: "#282c34",
              }}
              wrapLines={true}
              wrapLongLines={true}
            >
              {commonTagsExample}
            </SyntaxHighlighter>
          </div>

          {/* Tips Section */}
          <div className="space-y-4">
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-3">
                បញ្ជីស្លាកសំខាន់ៗ
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    ចំណងជើង
                  </h4>
                  <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">
                    <code className="text-blue-600">&lt;h1&gt;</code> ដល់{" "}
                    <code className="text-blue-600">&lt;h6&gt;</code>
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    អត្ថបទ
                  </h4>
                  <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">
                    <code className="text-blue-600">&lt;p&gt;</code>,{" "}
                    <code className="text-blue-600">&lt;span&gt;</code>
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    តំណភ្ជាប់
                  </h4>
                  <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">
                    <code className="text-blue-600">&lt;a&gt;</code>
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    រូបភាព
                  </h4>
                  <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">
                    <code className="text-blue-600">&lt;img&gt;</code>
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    បញ្ជី
                  </h4>
                  <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">
                    <code className="text-blue-600">&lt;ul&gt;</code>,{" "}
                    <code className="text-blue-600">&lt;ol&gt;</code>,{" "}
                    <code className="text-blue-600">&lt;li&gt;</code>
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    រចនាសម្ព័ន្ធ
                  </h4>
                  <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">
                    <code className="text-blue-600">&lt;div&gt;</code>,{" "}
                    <code className="text-blue-600">&lt;section&gt;</code>
                  </p>
                </div>
              </div>
            </div>

            {/* Khmer Encoding Tip */}
            <div className="bg-yellow-50 dark:bg-yellow-100 p-4 rounded-lg border border-yellow-200 dark:border-yellow-300 flex gap-3 items-start">
              <FiAlertCircle className="text-yellow-700 text-lg mt-1" />
              <div>
                <h3 className="font-semibold text-yellow-800 mb-2">
                  ការបង្ហាញអក្សរខ្មែរ
                </h3>
                <p className="text-yellow-700 text-sm">
                  ដើម្បីបង្ហាញអក្សរខ្មែរឱ្យបានត្រឹមត្រូវ ត្រូវប្រាកដថាប្រើ{" "}
                  <code className="bg-yellow-100 px-1 rounded">UTF-8</code>{" "}
                  encoding និងដាក់អក្សរខ្មែរដោយផ្ទាល់ក្នុងកូដ។
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step3;
