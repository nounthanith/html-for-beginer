import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FiInfo, FiClock } from "react-icons/fi";

function Step2() {
  const structureExample = `<html>
<head>
    <!-- Metadata that isn't displayed -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
</head>
<body>
    <!-- Content visible to users -->
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
</body>
</html>`;

  return (
    <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
      {/* Header Section */}
      <div className="flex items-center mb-4 sm:mb-6">
        <div className="bg-blue-600 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-lg sm:text-xl font-bold mr-3 sm:mr-4">
          ២
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
          រចនាសម្ព័ន្ធមូលដ្ឋាន
        </h2>
      </div>

      {/* Content Section */}
      <div className="pl-0 sm:pl-11 md:pl-14">
        <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
          ឯកសារ HTML មួយត្រូវបានសាងសង់ឡើងដោយធាតុគ្រឹះមួយចំនួន៖
        </p>

        <div className="flex flex-col gap-4 sm:gap-6 md:grid md:grid-cols-2">
          {/* Code Block */}
          <div className="overflow-x-auto">
            <SyntaxHighlighter
              language="html"
              style={oneDark}
              customStyle={{
                borderRadius: "0.5rem",
                fontSize: "0.8rem",
                padding: "1rem",
                background: "#282c34",
                margin: 0,
              }}
              wrapLines={true}
              wrapLongLines={true}
            >
              {structureExample}
            </SyntaxHighlighter>
          </div>

          {/* Tips Section */}
          <div className="space-y-3 sm:space-y-4">
            {/* Important Parts */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <div className="bg-yellow-100 text-yellow-800 p-2 rounded-lg w-10 h-10 flex-shrink-0 flex items-center justify-center">
                <FiInfo className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                  ផ្នែកសំខាន់ៗ
                </h3>
                <ul className="mt-1 text-gray-700 dark:text-gray-200 space-y-1 list-disc pl-5 text-xs sm:text-sm">
                  <li>
                    <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">
                      &lt;!DOCTYPE html&gt;
                    </code>{" "}
                    - កំណត់ប្រភេទឯកសារ
                  </li>
                  <li>
                    <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">
                      &lt;html&gt;
                    </code>{" "}
                    - ឫសគល់នៃទំព័រ
                  </li>
                  <li>
                    <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">
                      &lt;head&gt;
                    </code>{" "}
                    - ព័ត៌មានមេតាដា
                  </li>
                  <li>
                    <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">
                      &lt;body&gt;
                    </code>{" "}
                    - ខ្លឹមសារបង្ហាញ
                  </li>
                </ul>
              </div>
            </div>

            {/* Recommendation */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <div className="bg-blue-100 text-blue-800 p-2 rounded-lg w-10 h-10 flex-shrink-0 flex items-center justify-center">
                <FiClock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                  អនុសាសន៍
                </h3>
                <p className="mt-1 text-gray-700 dark:text-gray-200 text-xs sm:text-sm">
                  តែងតែដាក់ស្លាក{" "}
                  <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded dark:text-white">
                    &lt;meta charset="UTF-8"&gt;
                  </code>{" "}
                  នៅក្នុង{" "}
                  <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded dark:text-white">
                    &lt;head&gt;
                  </code>{" "}
                  ដើម្បីធានាថាអក្សរខ្មែរបង្ហាញត្រឹមត្រូវ។
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step2;
