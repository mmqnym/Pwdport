import React, { useEffect, useState } from "react";
import "./App.css";
import InputFrame from "./InputFrame";
import OuputFrame from "./OutputFrame";
import Footer from "./Footer";
import Logo from "./logo.png";
import { generatePwd } from "./appCore";

import { FormType, EncodeResultType } from "./CustomTypes";
import { ToastContainer } from "react-toastify";
import { notify } from "./customToastEmitter";

let didmount = 0;

function App() {
  const [form, setForm] = useState<FormType>({
    base: "",
    keyword: "",
    offset: 0,
    length: 0,
  });

  const [encodeRes, setRes] = useState<EncodeResultType>({
    default: "",
    advanced: "",
    special: "",
    issueTime: "",
  });

  useEffect(() => {
    let originalPwd = form.base;
    let keyword = form.keyword;
    let offset = form.offset;
    let length = form.length;

    if (originalPwd !== "" && keyword !== "" && offset >= 0 && length >= 1) {
      setRes(generatePwd(originalPwd, keyword, offset, length));
      notify("Your Pwdport is issued!", true);
    } else {
      if (didmount < 2) {
        didmount++;
      } else {
        notify("Refusal to issue", false);
      }
    }
  }, [form]);

  return (
    <div className="App box-border">
      <div className="flex h-[84vh] w-full items-center justify-evenly bg-slate-800 px-[10%] py-[2.5%] 2xl:h-[84vh] 2xl:px-[15%]">
        <InputFrame setForm={setForm} form={false} />
        <img src={Logo} alt="logo" width={200} className="animate-pulse-slow" />
        <OuputFrame
          default={encodeRes.default}
          advanced={encodeRes.advanced}
          special={encodeRes.special}
          issueTime={encodeRes.issueTime}
        />
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
