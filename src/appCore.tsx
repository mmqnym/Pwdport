import { Keccak } from "sha3";

function replaceAt(s: string, n: number, insert: string) {
  return s.substring(0, n) + insert + s.substring(n + 1);
}

function setUserTime() {
  const date = new Date();
  return date.toLocaleString();
}

export function generatePwd(
  base: string,
  keyword: string,
  offset: number,
  length: number
) {
  if (offset > base.length) {
    offset = base.length;
  }

  let defaultPwd = base.substring(0, offset) + keyword + base.substring(offset);

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

  specialPwd = replaceAt(specialPwd, advancedPwd.length - 1, "*");

  console.log(exchangeBaseStr);

  console.log(`Default Pwd: ${defaultPwd}`);
  console.log(`Advanced Pwd: ${advancedPwd}`);
  console.log(`Special Pwd: ${specialPwd}`);

  return {
    default: defaultPwd,
    advanced: advancedPwd,
    special: specialPwd,
    issueTime: `${setUserTime()} by 0xmimiQ`,
  };
}
