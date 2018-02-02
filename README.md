# altiro-i18n
International data text for support components of altiro repositories.

## What's included
* `npm run build` : Production-ready build.

## How to Use
Add in package.json in dependencies

`"altiro-i18n":""ssh://git@github.schibsted.io/Yapo/altiro-i18n#master"`

Import in the repo
```js
import Vue from 'vue';
import Vuex from 'vuex';
import vuexI18n from 'vuex-i18n';
import i18n from 'vuex-i18n';

Vue.use(Vuex);

Vue.use(vuexI18n.plugin,
  store,
  {
    moduleName: 'i18n',
    onTranslationNotFound,
  },
);

Vue.i18n.add('es', i18n.es.BUILDERS);
Vue.i18n.set('es');
```
