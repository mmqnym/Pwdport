import React, { SetStateAction } from "react";
import { FormType } from "./CustomTypes";
import { ToastContainer } from "react-toastify";
import { notify } from "./customToastEmitter";
import "react-toastify/dist/ReactToastify.css";
import "./customToast.css";
import inputRule from "./inputRule";

interface FormComponentHookType {
  form: boolean;
  setForm: React.Dispatch<SetStateAction<FormType>>;
}

function InputFrame({ setForm }: FormComponentHookType) {
  return (
    <div className="h-[520px] w-[400px] rounded-lg border-2 border-gray-500 bg-gray-800 p-12 py-6 shadow-md shadow-violet-400">
      <form autoComplete="off">
        <div className="group">
          <label
            htmlFor="base-input"
            className="text-md mb-2 block text-left font-medium text-gray-300 duration-700 group-focus-within:translate-x-[40%] group-focus-within:text-2xl group-focus-within:text-violet-300"
          >
            Base
          </label>
          <input
            type="text"
            id="base-input"
            className="mb-4 block w-full rounded-md border border-gray-500/50 bg-gray-800/50 px-4 py-1 text-xl text-white shadow-[0px_-0.4px_2px_2px] shadow-violet-300/50  hover:bg-gray-700 focus:border-violet-500/75 focus:outline-none group-focus-within:ring group-focus-within:ring-violet-300"
          ></input>
        </div>
        <div className="group">
          <label
            htmlFor="keyword-input"
            className="text-md mb-2 block text-left font-medium text-gray-300 duration-700 group-focus-within:translate-x-[34%] group-focus-within:text-2xl group-focus-within:text-violet-300"
          >
            Keyword
          </label>
          <input
            type="text"
            id="keyword-input"
            className="mb-4 block w-full rounded-md border border-gray-500/50 bg-gray-800/50 px-4 py-1 text-xl text-white shadow-[0px_-0.4px_2px_2px] shadow-violet-300/50 hover:bg-gray-700 focus:border-violet-500/75 focus:outline-none group-focus-within:ring group-focus-within:ring-violet-300"
          ></input>
        </div>

        <div className="group mb-4">
          <label
            htmlFor="offset-input"
            className="text-md mb-2 block text-left font-medium text-gray-300 duration-700 group-focus-within:translate-x-[37%] group-focus-within:text-2xl group-focus-within:text-violet-300"
          >
            Offset
          </label>
          <input
            type="number"
            min={0}
            step={1}
            id="offset-input"
            className="peer block w-full rounded-md border border-gray-500/50 bg-gray-800/50 px-4 py-1 text-xl text-white shadow-[0px_-0.4px_2px_2px] shadow-violet-300/50 hover:bg-gray-700 focus:border-violet-500/75 focus:outline-none group-focus-within:ring group-focus-within:ring-violet-300"
          ></input>
          <p className="mt-2 hidden text-left text-sm text-pink-600 peer-invalid:block">
            The input value must be greater than 1
          </p>
        </div>

        <div className="group mb-10">
          <label
            htmlFor="length-input"
            className="text-md mb-2 block text-left font-medium text-gray-300 duration-700 group-focus-within:translate-x-[37%] group-focus-within:text-2xl group-focus-within:text-violet-300"
          >
            Length
          </label>
          <input
            type="number"
            min={inputRule.minLength}
            max={inputRule.maxLength}
            step={1}
            id="length-input"
            className="peer block w-full rounded-md border border-gray-500/50 bg-gray-800/50 px-4 py-1 text-xl text-white shadow-[0px_-0.4px_2px_2px] shadow-violet-300/50 hover:bg-gray-700 focus:border-violet-500/75 focus:outline-none group-focus-within:ring-violet-300"
          ></input>
          <p className="mt-2 hidden text-left text-sm text-pink-600 peer-invalid:block">
            The input value must be between {inputRule.minLength} and{" "}
            {inputRule.maxLength}
          </p>
        </div>

        <div className="flex flex-row items-center justify-center">
          <button
            id="main-btn"
            type="button"
            onClick={() => {
              let base = (
                document.getElementById("base-input") as HTMLInputElement
              )?.value;
              let keyword = (
                document.getElementById("keyword-input") as HTMLInputElement
              )?.value;
              let offset = (
                document.getElementById("offset-input") as HTMLInputElement
              )?.value;
              let length = (
                document.getElementById("length-input") as HTMLInputElement
              )?.value;

              let offsetINT = 0,
                lengthINT = 0;

              try {
                offsetINT = parseInt(offset);
              } catch (e) {
                notify((e as Error).message, false);
                offsetINT = 0;
              }

              try {
                lengthINT = parseInt(length);
              } catch (e) {
                notify((e as Error).message, false);
                lengthINT = 0;
              }

              setForm({
                base: base,
                keyword: keyword,
                offset: offsetINT,
                length: lengthINT,
              });

              setTimeout(() => {
                const btn = document.getElementById("main-btn");
                btn?.blur();
              }, 3000);
            }}
            className="group mb-2 mr-2 inline-flex overflow-hidden rounded-lg bg-gradient-to-br from-purple-600/50 to-cyan-500/50 p-0.5 text-lg font-medium text-white hover:text-white focus:animate-ping-slow group-hover:from-purple-600 group-hover:to-cyan-500"
          >
            <span className="rounded-lg bg-gray-800 px-8 py-2 transition-all duration-300 ease-out group-hover:bg-opacity-0">
              Sign
            </span>
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default InputFrame;
