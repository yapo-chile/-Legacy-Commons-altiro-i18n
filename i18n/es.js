/* eslint-disable import/prefer-default-export */
export const i18nEs = {
  bannerSMS: {
    deeplink: {
      android: 'https://yapo.app.link/smsinfobip',
      ios: 'https://yapo.app.link/smsinfobip',
    },
    options: {
      ios: {
        name: 'IOS',
      },
      android: {
        name: 'Android',
      },
    },
    optionSelected: 'android',
    response: {
      error: 'Error de conexión. Intente nuevamente.',
      invalid: 'Número inválido',
      success: 'Ahora recibirás el enlace para descargar nuestra app',
      sending: 'Enviando...',
    },
    text: {
      description: 'Ingresa tu <b class="bannerSMSTextBold">número de teléfono</b> y te enviaremos un enlace para descargar la app',
      from: 'Yapo.cl',
      message: 'Descarga la App de Yapo aquí',
      buttonText: 'Enviar',
    },
    title: 'Compra y vende aún más rápido con la app de',
    url: '/sms/send_sms',
  },
  favButton: {
    empty: 'Agregar a favoritos:',
    selected: 'Agregado a favoritos:',
  },
};