/* eslint-disable import/prefer-default-export */
import RECURRING_PAYMENT from './recurring-payment';
import PAYMENT_DELIVERY from './payment-delivery';
import MESSAGING_CENTER from './messaging-center';
import YAPO_HEADER from './yapo-header';
import YAPO from './yapo';

export const es = {
  BANNER_SMS: {
    DEEPLINKS: {
      ANDROID: 'https://yapo.app.link/smsinfobip',
      IOS: 'https://yapo.app.link/smsinfobip',
    },
    OPTIONS: {
      IOS: {
        NAME: 'IOS',
      },
      ANDROID: {
        NAME: 'Android',
      },
    },
    OPTION_SELECTED: 'android',
    DESCRIPTION:
      'Ingresa tu <b class="bannerSMSTextBold">número de teléfono</b> y te enviaremos un enlace para descargar la app',
    SUCCESS_MSG: 'Ahora recibirás el enlace para descargar nuestra app',
    TITLE: 'Compra y vende aún más rápido con la app de',
    URL: '/sms/send_sms',
  },
  ACCEPT_REQUEST: 'Aceptar la solicitud',
  ACCEPT_REQUEST_EXPLAIN:
    'Si estás conforme con vender este producto a ese usuario, será necesario un par de datos para el pago y envío.',
  ADD_TO_FAVORITES: 'Agregar a favoritos:',
  ADDED_TO_FAVORITES: 'Agregado a favoritos:',
  ADDRESS: 'Dirección',
  AD_TITLE: 'Título del aviso',
  BUY: 'Comprar',
  BUY_AND_PAY_SECURE: 'Compra y vende de forma segura sin moverte de tu casa.',
  BUY_PRODUCT: 'Compra el producto',
  BUY_PRODUCT_EXPLAIN:
    'Ingresa tus datos de contacto y domicilio requeridos para la entrega del producto. Realiza tu pago online.',
  BACK: 'Volver',
  BACK_TO_YAPO: 'Volver a Yapo.cl',
  EMAIL: 'E-mail',
  CANCEL: 'Cancelar',
  CONTINUE: 'Continuar',
  CONTINUE_PURCHASE: 'Continuar compra',
  COMPLETE_NAME: 'Nombre Completo',
  COMPLETE_DATA: 'Completar datos',
  COMMUNES: 'Comunas',
  COMMERCIAL_DETAIL: 'Detalle comercial',
  DELIVERY_TERMS: 'Plazos de entrega',
  DELIVERY_TERMS_EXPLAIN:
    'Una vez aceptada la compra y retirado el producto, la entrega se realizará dentro de los próximos días.',
  DOWNLOAD_APP_MOVIL_YAPO_HERE: 'Descarga la App de Yapo aquí',
  DNI: 'RUT',
  FASTER_SALES: 'Ventas más rápidas',
  FASTER_SALES_EXPLAIN:
    'Ahora puedes vender lejos de ti sin riesgos, tus potenciales compradores se multiplican, lo que acelera tus ventas.',
  FREE_SHIPPING: '¡Envío gratis!',
  FREE_SHIPPING_EXPLAIN:
    'Sin cobros de envío para el vendedor, no tienes que adelantar nada, y además te recogen el paquete en casa.',
  GREETINGS: 'Felicidades por haber realizado una venta a través de Pago y despacho.',
  GO_TO_MY_ADS: 'Ir a mis avisos',
  GUARANTY_DEVOLUTION: 'Garantía de devolución',
  GUARANTY_DEVOLUTION_EXPLAIN:
    'Si el envío no llega o no es lo que compraste, te devolvemos el dinero y nos hacemos cargo del envío de vuelta.',
  HOW_WORK: '¿Cómo funciona?',
  HOW_WORKS: 'Cómo funciona',
  MOVIL_PHONE: 'Celular',
  NUMBER: 'Número',
  OPTIONAL_APARTMENT: 'Depto. (Opcional)',
  ORIGINAL_PRICE: 'Precio original',
  PAID_PRICE: 'Precio pagado',
  PAY_AND_RECEPTION: 'Pago y recepción',
  PAY_AND_RECEPTION_EXPLAIN:
    'Tu pago será retenido hasta que al recibir el producto te asegures que está en las condiciones prometidas.',
  PAYMENT_DELIVERY_ADVANTAGE: 'Ventajas de Pago y despacho',
  PAYMENT_DELIVERY_ADVANTAGE_MIN: 'Ventajas de pago y despacho',
  PAYMENT_DELIVERY_INFO:
    '* Servicio de Pago y despacho disponible solo en la provincia de Santiago, Región Metropolitana. Próximamente en otras regiones del país.',
  PAYMENT_DELIVERY_INFO_REMEMBER:
    'Recuerda que el precio debe haber sido acordado previamente con el vendedor, para no recibir cargos de devolución',
  PAYMENT_DELIVERY_INFO_BEGIN:
    'Recuerda que el precio debe haber sido acordado previamente con el vendedor, para no recibir cargos de devolución',
  PAYMENT_DELIVERY_WELCOME: '¡Bienvenido a pago y despacho!',
  PAYMENT_TO_SELLER: 'Pago al vendedor',
  PAYMENT_TO_SELLER_EXPLAIN:
    'Cuando verifiques y apruebes el estado del producto se liberará el proceso de pago al vendedor.',
  PRODUCT_DELIVERY: 'Entrega del producto',
  PRODUCT_DELIVERY_EXPLAIN:
    'Al aceptar la solicitud de compra tendrás que coordinar la entrega de tu producto en la dirección que desees.',
  PAYMENT_RECEPTION: 'Recepción del pago',
  PAYMENT_RECEPTION_EXPLAIN:
    'Si tu producto fue aceptado por el comprador, el dinero retenido en forma segura será transferido a tu cuenta.',
  REJECT: 'Rechazar',
  RETURN: 'Devolución',
  RETURN_EXPLAIN:
    'Si el comprador no está conforme con el producto, te lo llevamos de vuelta sin costo para tí.',
  RETURN_GUARANTEE: 'Garantía de devolución',
  RETURN_GUARANTEE_EXPLAIN:
    'Antes de que envíes, ya tenemos el dinero del comprador retenido como garantía de pago.',
  WE_GO_TO_YOUR_HOME: 'Vamos hasta la puerta de tu casa para garantizar tu mayor comodidad',
  PERSONAL_DATA: 'Datos personales',
  PRICE: 'Precio',
  REGION: 'Región',
  RETRY: 'Reintentar',
  SAVE_YOUR_MONEY:
    'Guardamos tu dinero en un depósito seguro y no lo transferimos al vendedor hasta que compruebes tu producto.',
  SECURE_PAY: 'Pago Seguro',
  SECURE_BUY: 'Compra Segura',
  SEND: 'Enviar',
  SENDING: 'Enviando...',
  SELLER: 'Vendedor',
  SUBSCRIBE: 'Suscribir',
  HAVE_BOUGHT_YOUR_PRODUCT: '¡Han comprado tu producto!',
  SOMEONE_BOUGHT_YOUR_PRODUCT: 'pagó por tu producto',
  SUMMARY: 'Resumen de tu compra',
  TO_YOUR_HOME_DOOR: 'A la puerta de tu casa',
  TO_YOUR_HOME_DOOR_EXPLAIN:
    'Nos encargamos de retirar el producto y entregartelo en la dirección que más te acomode.',
  TOTAL_PRICE: 'Precio Total',
  WHERE_IS_PRODUCT_SENT: '¿Dónde te enviamos el producto?',
  WHAT_IS_PAYMENT_DELIVERY: '¿Qué es pago y despacho?',
  WHAT_IS_PAYMENT_DELIVERY_EXPLAIN:
    'Es el nuevo servicio de pago y despacho seguro de Yapo.cl en conjunto con Lemonpay y Blue Express nos encargaremos de cuidar tu dinero y del envío de tu producto llevándolo donde tú nos digas. Te acompañaremos en la negociación, pago, envío y cobro.',
  YAPO_URL: 'Yapo.cl',
  ERRORS: {
    CONNECTION: 'Error de conexión. Intente nuevamente.',
    CONFIRM_FORMAT: 'Confirma que el {field} está en el formato correcto.',
    EMPTY_ACCOUNT_NUMBER: 'Ingresa número de cuenta.',
    EMPTY_ADDRESS: 'Ingresa una dirección válida para el envío de tu producto.',
    EMPTY_EMAIL: '¡Ups! ingresa un e-mail de contacto.',
    EMPTY_NAME: '¡Ups! debes incluir tu nombre.',
    EMPTY_PHONE: '¡Ups! Ingresa un teléfono de contacto.',
    INVALID_NUMBER: 'Número inválido',
    INVALID_EMAIL: 'Confirma que el e-mail está en el formato correcto.',
    INVALID_FORMAT: 'El formato del {field} no es válido.',
    INVALID_PHONE: 'Tu número debe tener 8 dígitos.',
    INVALID_RUT: 'Escribe un rut válido.',
    MIN_PRICE: 'El precio debe ser mayor o igual a',
    MIN_LETTER: 'Debes colocar al menos {count} letras.',
    REQUIRED_FIELD: 'El {field} es requerido.',
    SELECT_ACCOUNT_TYPE: 'Selecciona el tipo de cuenta.',
    SELECT_BANK: 'Selecciona banco.',
    SELECT_COMMUNE: 'Selecciona una comuna.',
    SELECT_REGION: 'Selecciona una región.',
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
    FOLLOW_US: 'Síguenos en:',
    ANY_QUESTIONS: '¿Tienes alguna duda?',
    CONTACT_US: 'Contáctanos',
    CONTACT: 'Contactar',
    OUR_RULES: 'Lee nuestras reglas',
    COPYRIGHT: '2018 Yapo.cl SpA',
    LOG_IN: 'Iniciar Sesión',
    PUBLISH: 'Publicar',
    PUBLISH_FULL: 'Publicar Aviso',
    ACCOUNT: 'Cuenta',
    HELLO: 'Hola',
    CLOSE_SESSION: 'Cerrar Sesión',
    HOME: 'Home',
    FIND_ADS: 'Buscar Avisos',
    FAVORITES: 'Mis Favoritos',
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
      APPROVED_CREDIT: 'Tienes crédito aprobado',
    },
  },
  COMMON: {
    FOLLOW_US: 'Síguenos en:',
    CONTACT_US: 'Contáctanos',
    OUR_RULES: 'Lee nuestras reglas',
    COPYRIGHT: ' Yapo.cl SpA',
    ANY_QUESTIONS: '¿Tienes alguna duda?',
  },
  MESSAGING_CENTER,
  RECURRING_PAYMENT,
  PAYMENT_DELIVERY,
  YAPO,
  YAPO_HEADER,
};
