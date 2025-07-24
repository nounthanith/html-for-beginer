import React from "react";

function Step1() {
  return (
    <div>
      {/* Step 1 */}
      <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 transition-all hover:shadow-xl">
        <div className="flex items-center mb-6">
          <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold mr-4">
            ១
          </div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            តើ HTML ជាអ្វី?
          </h2>
        </div>

        <div className="pl-0 sm:pl-14">
          <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-4 text-sm sm:text-base">
            HTML (HyperText Markup Language)
            គឺជាភាសាសំខាន់សម្រាប់បង្កើតគេហទំព័រ។ ដើម្បីបង្ហាញ Content អ្វីមួយទៅលើ<b>Internet</b>(Website)។
          </p>

          <div className="grid md:grid-cols-2 gap-4 mt-6">
            {/* HTML Element Card */}
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h3 className="font-semibold text-blue-800 mb-2">HTML Element</h3>
              <p className="text-blue-700 text-sm">
                ធាតុ HTML ត្រូវបានកំណត់ដោយ Tag បើក ខ្លឹមសារ និង​ Tag បញ្ចប់៖
                (&lt;&gt; និង &lt;/&gt;)
              </p>
            </div>

            {/* Tag Card */}
            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
              <h3 className="font-semibold text-green-800 mb-2">Tag</h3>
              <p className="text-green-700 text-sm">
                Tag HTML ត្រូវបានរុំព័ទ្ធដោយតង្កៀប &lt;&gt; និង &lt;/&gt;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step1;
