# Prueba Técnica Front End - Skandia

Prueba técnica desarrollada con **Angular 17** siguiendo las buenas prácticas de arquitectura, consumo de API y diseño responsive.  
El objetivo principal fue construir una aplicación basada en el diseño proporcionado y consumir la API de tarjetas para mostrar productos dinámicamente.

---

## Requerimientos de la prueba

✅ Utilizar el framework **Angular** en su última versión estable.  
✅ Uso de **SCSS** con variables globales para estilos.  
✅ Estructura modular y componentes standalone.  
✅ Consumo de la API de tarjetas:  
   [https://62e152f8fa99731d75d44571.mockapi.io/api/v1/test-front-end-skandia/cards](https://62e152f8fa99731d75d44571.mockapi.io/api/v1/test-front-end-skandia/cards)  
✅ Interfaz **responsive** siguiendo el diseño de referencia:  
   [Adobe XD - Diseño base](https://xd.adobe.com/view/7520751b-2b53-4b0f-9613-527817e8cc92-2073/specs/)  
✅ Estructura de proyecto organizada (core, shared, features).  
✅ Manejo de errores en llamadas HTTP.  
✅ Uso de **HTML5, CSS3, SCSS** y buenas prácticas de código.  
✅ Proyecto versionado con Git (repositorio entregado).  

---

##  Estructura del proyecto

src/
├── app/
│ ├── core/ # Servicios, modelos, interceptores
│ │ └── services/ # CardsService para consumo de API
│ ├── features/ # Funcionalidades principales
│ │ ├── home/ # Página de inicio
│ │ ├── cards/ # Listado dinámico de productos/cards
│ │ └── goal-success/ # Pantalla de éxito de objetivo
│ └── shared/ # Componentes reutilizables (header, footer, hero)
├── assets/ # Recursos estáticos (logo, imágenes)
└── styles/ # Variables SCSS y estilos globales


## Requisitos previos

- Node.js 20+
- Angular CLI 17+

jecución del proyecto

 ## Como clonar el repositorio:

git clone https://github.com/AndreaRamirez123/skandia-test-angular.git
cd skandia-test-angular


Instalar dependencias:

npm install

Levantar servidor de desarrollo:

ng serve

Abrir en http://localhost:4200

## Consumo de API

Servicio: cards.service.ts

private apiUrl = 'https://62e152f8fa99731d75d44571.mockapi.io/api/v1/test-front-end-skandia/cards';

getCards(): Observable<Card[]> {
  return this.http.get<Card[]>(this.apiUrl).pipe(
    retry(2),
    catchError((error) => {
      console.error('Error al obtener tarjetas', error);
      return throwError(() => new Error('No se pudieron cargar las tarjetas'));
    })
  );
}


# Características:

Consumo vía HttpClient.

Manejo de errores con catchError.

Retries automáticos para mejorar resiliencia.

Modelado de datos con card.model.ts.

# Funcionalidades implementadas

Header y Footer responsivos.

Hero Section con mensaje de bienvenida.

Listado dinámico de tarjetas conectado a la API.

Estilos globales con SCSS (variables en src/styles/variables.scss).

Manejo de errores en peticiones HTTP.

Navegación con Angular Router (Home, Goal Success).

Diseño responsive (flexbox / grid).

# Calidad del código

Código limpio y comentado.

Estructura clara en carpetas.

Buenas prácticas Angular (standalone components, servicios).

Variables SCSS para consistencia de estilos.

Preparado para pruebas unitarias (Jasmine/Karma).

Manejo de errores centralizado.


# En la presentación se mostrará:

Estructura del proyecto y carpetas.

Ejecución con ng serve.

Consumo en vivo de la API de tarjetas.

Estilos responsivos en distintas resoluciones.

Manejo de errores y calidad del código.

# Autor

Andrea Paola Ramírez Torres
 Ingeniera de Sistemas |  Desarrolladora Frontend
 Contacto: andrearamirezt1992@gmail.com
 GitHub: https://github.com/AndreaRamirez123





