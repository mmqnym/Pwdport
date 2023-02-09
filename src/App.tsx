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
    <div className="App box-border">
      <div className="bg-slate-800 w-full flex justify-between items-center px-[10%] 2xl:px-[15%] py-[2.5%] h-[77vh] 2xl:h-[84vh]">
        <InputFrame />
        <img
          src={Logo}
          alt="logo"
          width={200}
          className="animate-pulse-slow"
        />
        <OuputFrame />
      </div>
      <Footer />
    </div>
  );
}

export default App;
