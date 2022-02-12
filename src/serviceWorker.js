// Este código opcional se utiliza para registrar un trabajador de servicio.
// register() no se llama por defecto.

// Esto permite que la aplicación se cargue más rápido en las siguientes visitas en producción, y le da
// capacidades offline. Sin embargo, también significa que los desarrolladores (y los usuarios)
// sólo verán las actualizaciones desplegadas en las siguientes visitas a una página, después de que todas las
// las pestañas existentes abiertas en la página se hayan cerrado, ya que los recursos
// los recursos almacenados en caché se actualizan en segundo plano.

// Para obtener más información sobre las ventajas de este modelo y las instrucciones sobre cómo
// participar, lea https://bit.ly/CRA-PWA

const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
      // [::1] es la dirección IPv6 localhost.
      window.location.hostname === '[::1]' ||
      // 127.0.0.1/8 se considera localhost para IPv4.
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
);

export function register(config) {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
      // El constructor de URL está disponible en todos los navegadores que soportan SW.
      const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
      if (publicUrl.origin !== window.location.origin) {
        // Nuestro service worker no funcionará si PUBLIC_URL está en un origen diferente
        // del que se sirve nuestra página. Esto puede ocurrir si se utiliza una CDN para
        // servir activos; ver https://github.com/facebook/create-react-app/issues/2374
        return;
      }
  
      window.addEventListener('load', () => {
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
  
        if (isLocalhost) {
          // Esto se está ejecutando en localhost. Comprobemos si todavía existe un service worker o no.
          checkValidServiceWorker(swUrl, config);
  
          // Añadir algunos registros adicionales a localhost, apuntando a los desarrolladores a la
          // la documentación del trabajador de servicio/PWA.
          navigator.serviceWorker.ready.then(() => {
            console.log(
              'This web app is being served cache-first by a service ' +
                'worker. To learn more, visit https://bit.ly/CRA-PWA'
            );
          });
        } else {
          // No es localhost. Sólo hay que registrar el trabajador del servicio
          registerValidSW(swUrl, config);
        }
      });
    }
  }

  function registerValidSW(swUrl, config) {
    navigator.serviceWorker
      .register(swUrl)
      .then(registration => {
        registration.onupdatefound = () => {
          const installingWorker = registration.installing;
          if (installingWorker == null) {
            return;
          }
          installingWorker.onstatechange = () => {
            if (installingWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                // En este punto, el contenido actualizado de la caché previa ha sido obtenido,
                // pero el trabajador del servicio anterior seguirá sirviendo el contenido
                // contenido antiguo hasta que se cierren todas las pestañas del cliente.
                console.log(
                  'New content is available and will be used when all ' +
                    'tabs for this page are closed. See https://bit.ly/CRA-PWA.'
                );
  
                // Ejecutar callback
                if (config && config.onUpdate) {
                  config.onUpdate(registration);
                }
              } else {
                // En este punto, todo ha sido pre-cacheado.
                // Es el momento perfecto para mostrar un mensaje
                // "El contenido se almacena en caché para su uso sin conexión".
                console.log('Content is cached for offline use.');
  
                // Ejecutar callback
                if (config && config.onSuccess) {
                  config.onSuccess(registration);
                }
              }
            }
          };
        };
      })
      .catch(error => {
        console.error('Error during service worker registration:', error);
      });
  }

  function checkValidServiceWorker(swUrl, config) {
    // Comprueba si el trabajador del servicio puede ser encontrado. Si no puede recargar la página.
    fetch(swUrl)
      .then(response => {
       // Asegúrese de que el trabajador del servicio existe, y que realmente estamos recibiendo un archivo JS.
        const contentType = response.headers.get('content-type');
        if (
          response.status === 404 ||
          (contentType != null && contentType.indexOf('javascript') === -1)
        ) {
          // No se ha encontrado ningún trabajador del servicio. Probablemente una aplicación diferente. Recarga la página.
          navigator.serviceWorker.ready.then(registration => {
            registration.unregister().then(() => {
              window.location.reload();
            });
          });
        } else {
          // Trabajador del servicio encontrado. Proceda normalmente.
          registerValidSW(swUrl, config);
        }
      })
      .catch(() => {
        console.log(
          'No internet connection found. App is running in offline mode.'
        );
      });
  }
  
export function unregister() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister();
      });
    }
  }
  