import React from "react";

function OuputFrame() {
  return (
    <div>
      <div
        id="pwdResult"
        className="p-12 bg-white border-2 border-violet-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <div id="defaultPwd">
          <span className="block mb-2 text-left text-xl font-medium text-white">
            Default Password
          </span>
          <span
            id="defaultPwdRes"
            className="inline-block w-full mb-6 text-left text-xl text-violet-400 bg-gray-800/50 hover:text-violet-400"
          ></span>
        </div>
        <div id="advancedPwd">
          <span className="block mb-2 text-left text-xl font-medium text-white">
            Advanced Password
          </span>
          <span
            id="advancedPwdRes"
            className="inline-block w-full mb-6 text-left text-xl text-violet-400 bg-gray-800/50 hover:text-violet-400"
          ></span>
        </div>
        <div id="specialPwd">
          <span className="block mb-2 text-left text-xl font-medium text-white">
            Special Password
          </span>
          <span
            id="specialPwdRes"
            className="inline-block w-full mb-2 text-left text-xl text-violet-400 bg-gray-800/50 rounded-md hover:text-violet-600"
          ></span>
        </div>
      </div>
    </div>
  );
}

export default OuputFrame;
