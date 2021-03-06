//src : https://codesandbox.io/s/i18n-example-phtsp?file=/src/js/index.js
"use strict";
class Translator {
    constructor(options = {}) {
      this._options = Object.assign({}, this.defaultConfig, options);
      this._lang = this.getLanguage();
      this._elements = document.querySelectorAll("[data-i18n]");
    }
  //get default language start
    getLanguage() {
      if (!this._options.detectLanguage) {
        return this._options.defaultLanguage;
      }
  
      var stored = localStorage.getItem("language");
  
      if (this._options.persist && stored) {
        return stored;
      }
  
      var lang = navigator.languages
        ? navigator.languages[0]
        : navigator.language;
        // console.log(navigator.languages);
        // console.log(lang);
  
      return lang.substr(0, 2);
    }

    //get default language end
  
    load(lang = null) {
      if (lang) {
        if (!this._options.languages.includes(lang)) {
          return;
        }
  
        this._lang = lang;
      }
  
      var path = `${this._options.filesLocation}/${this._lang}.json`;
  
      fetch(path)
        .then(res => res.json())
        .then(translation => {
          this.translate(translation);
          this.toggleLangTag();
  
          if (this._options.persist) {
            localStorage.setItem("language", this._lang);
          }
        })
        .catch(err => {
          console.error(
            `Could not load ${path}.json. Please make sure that the path is correct.`,
            err
          );
        });
    }
  
    toggleLangTag() {
      if (document.documentElement.lang !== this._lang) {
        document.documentElement.lang = this._lang;
      }
    }
  
    translate(translation) {
      function replace(element) {
        var text = element.dataset.i18n
          .split(".")
          .reduce((obj, i) => obj[i], translation);
  
        if (text) {
          element.innerHTML = text;
        }
      }
  
      this._elements.forEach(replace);
    }
  
    get defaultConfig() {
      return {
        persist: false,
        // languages: ["en"],
        // defaultLanguage: "en",
        filesLocation: "/i18n"
      };
    }
  }
  
//  export default Translator;
var translator = new Translator({
    persist: false,
    languages: ['hu', 'ro', 'en', 'de'],
    defaultLanguage: 'hu',
    detectLanguage: true,
    filesLocation: '/i18n',
  });
  
  translator.load();

  
  // const flagElement= baseElement.querySelector(".flag");
  document.querySelector('.flags').addEventListener('click', function (evt) {
    var clikedTarget = evt.target.id;
    var parent = clikedTarget.parentElement;
    var nyelv = parent.id;
    // var nyelv = event.currentTarget.id;
    console.log("clikedTarget",clikedTarget);
    console.log("parent",parent);
    console.log("parent.id",parent.id);
      console.log("id=", evt.target.id);
      console.log("nyelv=",nyelv);
      console.log("target.id",evt.target);
      console.log("currenttarget.id",event.currentTarget);
  
  
     translator.load(nyelv);
  });
  