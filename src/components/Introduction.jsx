import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Step1 from "./introComponent/Step1";
import Step2 from "./introComponent/Step2";
import Step3 from "./introComponent/Step3";
import Step4 from "./introComponent/Step4";
import Step5 from "./introComponent/Step5";

function Introduction() {
  return (
    <div
      className="max-w-7xl mx-auto px-4 py-8 space-y-10"
      style={{ fontFamily: "'Noto Sans Khmer', Arial, sans-serif" }}
    >
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">
          ការណែនាំអំពី HTML
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-200">
          រៀនពីមូលដ្ឋានគ្រឹះនៃ HTML ដើម្បីសាងសង់គេហទំព័រដំបូងរបស់អ្នក
        </p>
      </div>

      {/* Step 1 */}
      <Step1 />

      {/* Step 2 */}
      <Step2 />

      {/* Step 3 */}
      <Step3 />

      {/* Step 4 */}
      <Step4 />

      {/* Step 5 */}
      <Step5 />
    </div>
  );
}

export default Introduction;
