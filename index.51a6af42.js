// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})(
  {
    b9BDZ: [
      function (require, module, exports) {
        /**
         * index.js
         */ var _configJson = require('./config.json');
        var _main = require('./js/main');
        const textCount = _configJson.text.length;
        const textPortrait = document.getElementById('text');
        const title = document.createElement('title');
        title.innerHTML = `${_configJson.name} | CSS Text Portrait`;
        document.head.appendChild(title);
        const setText = () => {
          const maxChar = (0, _main.computeMaxChar)();
          // apply correct repeat count to text
          textPortrait.innerHTML = `${_configJson.text} `
            .repeat(Math.ceil(maxChar / textCount))
            .substring(0, maxChar + 1);
        };
        window.addEventListener('load', setText);
        // dynamically set text on resize/zoom to ensure
        // the entire viewport is covered with text
        window.addEventListener('resize', setText);
      },
      { './config.json': 'hghHj', './js/main': 'aKvBm' },
    ],
    hghHj: [
      function (require, module, exports) {
        module.exports = JSON.parse(
          '{"name":"Happy Anniversary my Babyyy","text":"To my dearest babyy love love koo Happy 2nd anniversary poo! Hihihihi.. 2 years na tayo poo babyy koo hihihih.. parang kelan lang nung nagkakilala tayo at nagsimulang hilingin sa Panginoon ang pagpapala Nya sa piling ng isa\'t isa.. ngayon dalawang taon na tayong magkasama habang patuloy na dinadakila ang grasya nya :) Sobrang masaya akoo kasee ung akala moo datii na bola bola lang at pandalian.. dinala na tayoo sa ibat ibang experience at mga memories na hinding hindi koo makakalimutan babyy.. Mahal na mahaal kita poo babyy kooo sobraaa :) Maraming beses koo na sinabe sayoo na ikaw ang blessing koo babyy.. peroo hinding hindi akoo magsasawa na sabihin sayoo kase ikaw talagaa ang naging blessing saken ni God, nung hiningi koo ung ung peace of mind kooo.. sobrang thankful parin akoo sayoo kase tinanggap moo akoo at ang buong pagkatao koo kahit na maraming pagkakataon na hindi ako kamahal-mahal. Salamat babyy dahil sobra mong binago ung buhay koo sa mga pagkakataon na pinapakitaa moo saken kung anoo ba talagaa ung mga bagay na nagmamatter, lalo na sa mga decision natin sa buhay. Sobrang thankful akoo dahil patuloy moo akong minamahal poo at ginagawa moo ang lahat ng makakaya moo para panatilihin na masayaa at puno ng pag-ibig ang relationship natin. Mahal na mahal kitaa palagii Svet Jazmine Dio.. sobra kong pinagpapasalamat lahat ng mga memories na nabuo natin at mga experiences na naranasan natin dahil yun ung bumuo sa kung ano man tayoo ngayon.. Ikaw ang nagbigay ng bagong akoo sa mundo naa naging malupit sakin.. ikaw ang naging liwanag sa madilim kong paligid.. ikaw ang naging kasama koo para maging better akoo.. ikaw lang ang pinakamamahal koo babyy Jazmine koo.. I love youu so much pooo. All I wish now is for us to be stronger and more patient sa mga nangyayari sa paligid.. I know naa malayoo pa ung kelangan nating baybayin paraa maabot ung katiwasayan na hinahanap natin. Malayoo pa ung pangarap na pinagsisikapan nating abutin.. peroo masaya akoo na sobrang layo na rin natin kahit sa saglit na panahon na magkasamaa tayoo.. Hindi lang ung pagmamahal natin ang naging tulay natin para maging better person tayoo ngayon.. pero pati ung pagsisikap natin at ung walang hanggang pag-unawa natin sa isat isa.. Sobrang palagi kong hinihiling sa Panginoon na sana palagi nating piliin na maging maunawain sa lahat ng hamon na dumadating satin.. Kung ano man ung pagmamahal at pang-unawa na ibinigay koo sayo nung mga nakaraan taon.. pinapangako koo na palagi koo paring ibibigay sayoo dahil labis kitang mahal na mahaal poo hihihihi.. You are always my princess babyy koo.. and my queen.. and my wifeyy.. and my one and onlyyy.. mahal na mahaal kita Jazmine kooo"}'
        );
      },
      {},
    ],
    aKvBm: [
      function (require, module, exports) {
        /**
         * main.js
         */ /**
         * Uses `canvas.measureText` to compute and return the width of
         * the given `text` of given font in pixels.
         *
         * @param {String} text
         * The text to be rendered.
         *
         * @param {String} font
         * The CSS font descriptor that `text` is to be rendered
         * with (e.g. `bold 14px verdana`).
         *
         * @return {number} Text width
         *
         * @see https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript/21015393#21015393
         */ var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'getTextWidth', () => getTextWidth);
        parcelHelpers.export(exports, 'computeMaxChar', () => computeMaxChar);
        const getTextWidth = (text, font) => {
          // Re-use canvas object for better performance
          const canvas =
            getTextWidth.canvas ||
            (getTextWidth.canvas = document.createElement('canvas'));
          const context = canvas.getContext('2d');
          context.font = font;
          const metrics = context.measureText(text);
          return metrics.width;
        };
        /**
         * Calculates the average character width of a particular font style.
         *
         * @param {String} font
         * The CSS font descriptor that a character is to be rendered
         * with (e.g. `bold 14px verdana`).
         *
         * @return {number} Average font style character width
         */ const getFontTextWidthAverage = (font) => {
          // Test characters
          const chars =
            '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ .,\'()?!"';
          let totalWidth = 0;
          let count = 0;
          for (const char of chars) {
            totalWidth += getTextWidth(char, font);
            count++;
          }
          return Math.floor(totalWidth / count);
        };
        const getStyle = (element, prop) =>
          window.getComputedStyle(element, null).getPropertyValue(prop);
        const getFontDescriptors = (element = document.body) => {
          const fontWeight = getStyle(element, 'font-weight') || 'normal';
          const fontSize = getStyle(element, 'font-size') || '16px';
          const fontFamily =
            getStyle(element, 'font-family') || 'Times New Roman';
          return `${fontWeight} ${fontSize} ${fontFamily}`;
        };
        const computeMaxChar = (percent = 100) => {
          if (percent < 1 || percent > 100)
            throw new Error('Invalid fill percentage!');
          const textPortrait = document.getElementById('text');
          const fontSize = parseInt(
            getStyle(textPortrait, 'font-size').match(/\d+/)[0]
          );
          const maxLineY = Math.floor(
            (window.innerHeight / fontSize) * (percent / 100)
          );
          const maxCharX = Math.floor(
            window.innerWidth /
              (getFontTextWidthAverage(getFontDescriptors(textPortrait)) - 1)
          );
          return Math.ceil(maxCharX * maxLineY);
        };
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh' },
    ],
    j7FRh: [
      function (require, module, exports) {
        exports.interopDefault = function (a) {
          return a && a.__esModule
            ? a
            : {
                default: a,
              };
        };
        exports.defineInteropFlag = function (a) {
          Object.defineProperty(a, '__esModule', {
            value: true,
          });
        };
        exports.exportAll = function (source, dest) {
          Object.keys(source).forEach(function (key) {
            if (
              key === 'default' ||
              key === '__esModule' ||
              dest.hasOwnProperty(key)
            )
              return;
            Object.defineProperty(dest, key, {
              enumerable: true,
              get: function () {
                return source[key];
              },
            });
          });
          return dest;
        };
        exports.export = function (dest, destName, get) {
          Object.defineProperty(dest, destName, {
            enumerable: true,
            get: get,
          });
        };
      },
      {},
    ],
  },
  ['b9BDZ'],
  'b9BDZ',
  'parcelRequire14d3'
);
