(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.test = {}));
})(this, function(exports2) {
  "use strict";
  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };
  class C {
    f() {
    }
    get g() {
      return 72;
    }
  }
  __publicField(C, "s", 42);
  exports2.C = C;
  Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
});
