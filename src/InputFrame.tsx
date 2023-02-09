import React from "react";

function InputFrame() {
  const onSubmit = () => {};

  return (
    <form>
      <div className="p-12 border-2 rounded-lg shadow bg-gray-800 border-gray-700">
        <label
          htmlFor="base-input"
          className="block mb-2 text-left text-xl font-medium text-white"
        >
          Base
        </label>
        <input
          type="text"
          id="base-input"
          className="block w-full mb-6 px-4 py-2 text-xl text-white border-[3px] border-violet-300 rounded-lg bg-gray-800/50 hover:bg-gray-700 focus:outline-none focus:border-violet-500/50"
        ></input>

        <label
          htmlFor="keyword-input"
          className="block mb-2 text-left text-xl font-medium text-white"
        >
          Keyword
        </label>
        <input
          type="text"
          id="keyword-input"
          className="block w-full mb-6 px-4 py-2 text-xl text-white border-[3px] border-violet-300 rounded-lg bg-gray-800/50 hover:bg-gray-700 focus:outline-none focus:border-violet-500/50"
        ></input>

        <label
          htmlFor="offset-input"
          className="block mb-2 text-left text-xl font-medium text-white"
        >
          Offset
        </label>
        <input
          type="text"
          id="offset-input"
          className="block w-full mb-6 px-4 py-2 text-xl text-white border-[3px] border-violet-300 rounded-lg bg-gray-800/50 hover:bg-gray-700 focus:outline-none focus:border-violet-500/50"
        ></input>

        <label
          htmlFor="length-input"
          className="block mb-2 text-left text-xl font-medium text-white"
        >
          Length
        </label>
        <input
          type="text"
          id="length-input"
          className="block w-full mb-16 px-4 py-2 text-xl text-white border-[3px] border-violet-300 rounded-lg bg-gray-800/50 hover:bg-gray-700 focus:outline-none focus:border-violet-500/50"
        ></input>

        <button
          type="button"
          className="relative focus:animate-ping-slow inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-base font-medium rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white text-white focus:ring focus:outline-none focus:ring-violet-700/50"
        >
          <span className="relative px-8 py-3 transition-all ease-out duration-300 bg-gray-800 rounded-lg group-hover:bg-opacity-0">
            Generate
          </span>
        </button>
      </div>
    </form>
  );
}

export default InputFrame;
