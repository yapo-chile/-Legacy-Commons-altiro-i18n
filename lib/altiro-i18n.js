(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("altiro-i18n", [], factory);
	else if(typeof exports === 'object')
		exports["altiro-i18n"] = factory();
	else
		root["altiro-i18n"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _es = __webpack_require__(1);

exports.default = { es: _es.es };
module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable import/prefer-default-export */
var es = exports.es = {
  BANNER_SMS: {
    DEEPLINKS: {
      ANDROID: 'https://yapo.app.link/smsinfobip',
      IOS: 'https://yapo.app.link/smsinfobip'
    },
    OPTIONS: {
      IOS: {
        NAME: 'IOS'
      },
      ANDROID: {
        NAME: 'Android'
      }
    },
    OPTION_SELECTED: 'android',
    DESCRIPTION: 'Ingresa tu <b class="bannerSMSTextBold">número de teléfono</b> y te enviaremos un enlace para descargar la app',
    SUCCESS_MSG: 'Ahora recibirás el enlace para descargar nuestra app',
    TITLE: 'Compra y vende aún más rápido con la app de',
    URL: '/sms/send_sms'
  },
  ADD_TO_FAVORITES: 'Agregar a favoritos:',
  ADDED_TO_FAVORITES: 'Agregado a favoritos:',
  DOWNLOAD_APP_MOVIL_YAPO_HERE: 'Descarga la App de Yapo aquí',
  SEND: 'Enviar',
  SENDING: 'Enviando...',
  YAPO_URL: 'Yapo.cl',
  ERRORS: {
    CONNECTION: 'Error de conexión. Intente nuevamente.',
    INVALID_NUMBER: 'Número inválido'
  },
  BUILDERS: {
    PUBLISHED_AT: 'Publicado',
    SINCE: 'Desde',
    TO: 'Hasta',
    PROJECT: 'Proyecto',
    INFORMATION: 'Información',
    RENT: 'Arriendo',
    ID: 'Código',
    CODE: 'Código',
    PROPERTY_TYPE: 'Tipo de inmueble',
    COMMUNE: 'Comuna',
    BEDROOMS: 'Dormitorios',
    APARTMENT: 'Departamento',
    BATHROOMS: 'Baños',
    SERVICES: 'Servicios',
    PROPERTIES_TYPES: 'Tipos de propiedades',
    BEDROOM: 'Dormitorios',
    BATHROOM: 'Baño',
    MTS2: 'mts2',
    QUOTE: 'Cotizar',
    CARRY_US: '¡Llévanos siempre contigo! Descárgate nuestra app',
    SLOGAN: 'Yapo, compra y vende lo que quieras',
    FOLLOW_US: 'Siguenos en:',
    ANY_QUESTIONS: '¿Tienes alguna duda?',
    CONTACT_US: 'Contáctanos',
    CONTACT: 'Contactar',
    OUR_RULES: 'Lee nuestras reglas',
    COPYRIGHT: '2017 Yapo.cl SpA',
    LOG_IN: 'Iniciar Sesión',
    PUBLISH: 'Publicar',
    PUBLISH_FULL: 'Publicar Aviso',
    ACCOUNT: 'Cuenta',
    HELLO: 'Hola',
    CLOSE_SESSION: 'Cerrar Sesión',
    HOME: 'Home',
    FIND_ADS: 'Buscar Avisos',
    FAVORITES: 'Favoritos',
    HELP: 'Ayuda',
    MY_ADS: 'Mis Avisos',
    STORES: 'Tiendas',
    SHARE_PROPERTY: 'Compartir Inmueble',
    QUOTE_PROJECT: 'Cotiza este proyecto',
    SAVE_PROJECT: 'Guardar proyecto',
    DESCRIPTION: 'Descripción',
    LOCATION: 'Ubicación',
    WIFI: 'WiFi',
    TV_CABLE: 'Tv Cable',
    SATELITE: 'Satélite',
    HEATING: 'Calefacción',
    EQUIPPED_KITCHEN: 'Cocina equipada',
    SHOW_MAP: 'Ver mapa',
    YES: 'Sí',
    NO: 'No',
    SOLDOUT: 'Agotado',
    PROPERTY_CHOICE_TYPE: 'Elige un tipo de propiedad',
    DUE_DATE: 'Entrega',
    SURFACE: 'Superficie',
    FLOOR: 'Piso',
    FACING: 'Orientación',
    form: {
      NAME: 'Nombre',
      DNI: 'RUT',
      MAIL: 'Mail',
      PHONE: 'Teléfono',
      MESSAGE: 'Mensaje',
      APPROVED_CREDIT: 'Tienes crédito aprobado'
    }
  }
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=altiro-i18n.js.map