// import Translator from 'js/translator';

// var translator = new Translator({
//   persist: false,
//   languages: ['hu', 'ro'],
//   defaultLanguage: 'hu',
//   detectLanguage: true,
//   filesLocation: '/i18n',
// });

// translator.load();

document.querySelector('.flag').addEventListener('click', function (evt) {
  var x = document.getElementById("flags").querySelectorAll("a");
  x[0] ="hu";
  x[1] ="ro";
  nyelv = document.querySelector('.flag').id;
  console.log(x);
  console.log(nyelv);
  var y = clicked;
  
  // translator.load(evt.nyelv);
});
