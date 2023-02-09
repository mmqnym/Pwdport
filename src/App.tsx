import React from "react";
import "./App.css";
import InputFrame from "./InputFrame";
import OuputFrame from "./OutputFrame";
import Footer from "./Footer";
import Logo from "./logo.png";

import { Keccak } from "sha3";

function replaceAt(s: string, n: number, insert: string) {
  return s.substring(0, n) + insert + s.substring(n + 1);
}

function generatePwd(
  originalPwd: string,
  keyword: string,
  offset: number,
  length: number
) {
  let defaultPwd =
    originalPwd.substring(0, offset) + keyword + originalPwd.substring(offset);

  let hash = new Keccak(256);
  hash.update(defaultPwd);

  let advancedPwd = hash.digest("hex").toString().slice(0, length);
  let exchangeBaseStr = hash.digest("hex").toString().slice(length, 63);
  let exchangeBaseAlphabet = "";

  for (let i = 0; i < exchangeBaseStr.length; i++) {
    if (exchangeBaseStr[i].match(/[a-z]/)) {
      exchangeBaseAlphabet = exchangeBaseStr[i].toUpperCase();
      break;
    }
  }

  if (exchangeBaseAlphabet === "") {
    exchangeBaseAlphabet = "X";
  }

  let gotUpper = false;

  for (let i = 0; i < advancedPwd.length; i++) {
    if (advancedPwd[i].match(/[a-z]/)) {
      advancedPwd = replaceAt(advancedPwd, i, exchangeBaseAlphabet);
      gotUpper = true;
      break;
    }
  }

  if (!gotUpper) {
    advancedPwd = replaceAt(
      advancedPwd,
      advancedPwd.length - 1,
      exchangeBaseAlphabet
    );
  }

  let specialPwd = advancedPwd;

  for (let i = 0; i < advancedPwd.length; i++) {
    if (specialPwd[i].match(/a/)) {
      specialPwd = replaceAt(specialPwd, i, "@");
    } else if (specialPwd[i].match(/i/)) {
      specialPwd = replaceAt(specialPwd, i, "!");
    } else if (specialPwd[i].match(/s/)) {
      specialPwd = replaceAt(specialPwd, i, "$");
    } else if (specialPwd[i].match(/0/)) {
      specialPwd = replaceAt(specialPwd, i, "Q");
    } else if (specialPwd[i].match(/q/)) {
      specialPwd = replaceAt(specialPwd, i, "9");
    } else if (specialPwd[i].match(/2/)) {
      specialPwd = replaceAt(specialPwd, i, "z");
    }
  }

  console.log(exchangeBaseStr);

  console.log(`Default Pwd: ${defaultPwd}`);
  console.log(`Advanced Pwd: ${advancedPwd}`);
  console.log(`Special Pwd: ${specialPwd}$`);
}

const onSubmit = () => {};

function App() {
  let originalPwd = "0x03760670";
  let keyword = "BIN";
  let offset = 6;
  let length = 10;

  // length !<= 32
  // offset !<= 32

  generatePwd(originalPwd, keyword, offset, length);

  return (
    <div className="App">
      <div className="bg-slate-800 md:w-full md:h-[100vh] flex md:flex-col md:items-center md:justify-between">
        <div></div>
        <div
          id="mainFram"
          className="flex md:flex-row md:items-center md:space-x-20 xl:space-x-32"
        >
          <div className="flex md:w-1/3 xl:w-[40%]">
            <InputFrame />
          </div>
          <div className="">
            <img
              src={Logo}
              alt="logo"
              width={200}
              className="animate-pulse-slow"
            />
          </div>
          <div className="flex md:w-1/3 xl:w-[40%]">
            <OuputFrame />
          </div>
        </div>
        <div id="footer" className="w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
