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

  const [resMsg, setResMsg] = useState<string>("Apply for Pwdport");

  const resRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    let originalPwd = form.base;
    let keyword = form.keyword;
    let offset = form.offset;
    let length = form.length;

    if (originalPwd !== "" && keyword !== "" && offset >= 0 && length >= 1) {
      setRes(generatePwd(originalPwd, keyword, offset, length));
      setResMsg("Your Pwdport is issued");
      notify("Your Pwdport is issued!", true);
      if (document.body.clientWidth <= 1000) {
        resRef.current!.scrollIntoView({ behavior: "smooth" });
      }
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
      <div className="flex w-full flex-col items-center justify-evenly space-y-8 bg-slate-800 px-[10%] py-[5%] 2xl:h-[85vh] 2xl:flex-row 2xl:gap-0 2xl:space-y-0">
        <InputFrame setForm={setForm} form={false} />
        <img
          src={Logo}
          alt="logo"
          width={200}
          className="hidden animate-pulse-slow 2xl:block"
        />
        <div
          className="relative flex w-full items-center py-5 md:w-3/4 2xl:hidden"
          ref={resRef}
        >
          <div className="flex-grow border-b-2 border-pink-400/75"></div>
          <span className="mx-4 flex-shrink text-pink-400/75">{resMsg}</span>
          <div className="flex-grow border-b-2 border-pink-400/75"></div>
        </div>
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
