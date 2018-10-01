# Marvel Heroes 💪🏻

Marvel Heroes es una app para Android que lista algunos de los súperheroes de Marvel con algunos de sus datos.

## Características ✨

- React-Native
- REDUX + Middleware Thunk
- Router Flux
- Axios (Acceso a la API de Marvel.com)
- Retrofit (DataSource Remoto)

## IMPORTANTE 📝

- Para poder acceder a la API de Marvel, la App requiere que se añada un Archivo de configuración (`config.js`) en la carpeta `./App`

- Los parámetros de configuración a exportar, son: `TMDB_API_PUBLIC_KEY` (valor de la clave pública de la Marvel Comics API), `TMDB_API_PRIVATE_KEY` (valor de la clave privada) y `TMDB_API_REFERER_VALUE` (valor de dominio autorizado)
