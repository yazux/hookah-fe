//скрипт, который автоматически собирает все роуты и модули vuex
let routes = [];
let stores = {};
//находим все файлы с именем routes.js в текущей папке
let files = require.context('.', true, /routes\.js$/);
files.keys().forEach(key => {
  //получаем роуты
  routes = routes.concat(files(key).default.routes)
});


//модули vuex
files = require.context('.', true, /store\.js$/);
files.keys().forEach(key => {
  //получаем название модуля
  let moduleName = key.match(/\.\/(.+?)\//)[1];
  stores[moduleName] = files(key).default.store;
});

export { routes, stores }
