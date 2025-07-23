import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FiEdit3 } from "react-icons/fi";

function Step4() {
  const fullHtmlExample = `<!DOCTYPE html>
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
    
    <h3>ចំណង់ចំណូលចិត្ត</h3>
    <ul>
        <li>ការអភិវឌ្ឍគេហទំព័រ</li>
        <li>ការសរសេរកម្មវិធី</li>
        <li>ការរៀនភាសាថ្មីៗ</li>
    </ul>
    
    <p>សូមទស្សនាវេបសាយរបស់យើង៖ 
        <a href="https://example.com">ចុចទីនេះ</a>
    </p>
</body>
</html>`;

  return (
    <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
      {/* Header */}
      <div className="flex items-center mb-4 sm:mb-6">
        <div className="bg-primary text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-lg sm:text-xl font-bold mr-3 sm:mr-4">
          ៤
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
          ឧទាហរណ៍ពេញលេញ
        </h2>
      </div>

      {/* Content */}
      <div className="pl-0 sm:pl-11 md:pl-14">
        <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
          ខាងក្រោមនេះគឺជាឧទាហរណ៍ឯកសារ HTML ពេញលេញដែលប្រើអក្សរខ្មែរ៖
        </p>

        {/* Syntax Highlighter Block */}
        <div className="overflow-x-auto rounded-xl">
          <SyntaxHighlighter
            language="html"
            style={oneDark}
            customStyle={{
              borderRadius: "0.75rem",
              fontSize: "0.9rem",
              padding: "1.5rem",
              background: "#282c34",
            }}
            wrapLines={true}
            wrapLongLines={true}
          >
            {fullHtmlExample}
          </SyntaxHighlighter>
        </div>

        {/* Exercise Card */}
        <div className="mt-6 bg-green-50 dark:bg-green-100 p-4 rounded-lg border border-green-200 dark:border-green-300 flex gap-3 items-start">
          <FiEdit3 className="text-green-700 text-lg mt-1" />
          <div>
            <h3 className="font-semibold text-green-800 mb-2">លំហាត់</h3>
            <p className="text-green-700 text-sm">
              សូមបង្កើតឯកសារ HTML ថ្មីមួយដោយធ្វើតាមគំរូខាងលើ ហើយផ្លាស់ប្តូរខ្លឹមសារទៅជាព័ត៌មានរបស់អ្នកផ្ទាល់។
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step4;
