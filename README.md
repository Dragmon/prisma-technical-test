# API rest con PrismaJS

## Base de datos

---

1. Crear la base de datos en MySQL, solo la base de datos, las tablas serán creadas por PrismaJs
2. Después de crear la base de datos tener a la mano el usuario y password de acceso, se recomienda que sea un usuario que solo tenga acceso a esta base de datos.
3. Crear el archivo .env que tendrá la ruta de acceso a la base de datos de MySQL

```
#DATABASE_URL="mysql://usuario:password@localhost:port/nameDB?schema=public"
```

Sustituir los campos de usuario, password, port y nameDB por el usuario que accede a la base de datos, el password de acceso del usuario, el puerto de acceso y el nombre de la base de datos correspondiente.

Con esto ya se tendrá la conexión entre la base de datos y nuestra API.

## Esquema de las tablas de base de datos

En la ruta prisma/schema.prisma se encuentra la estructura de las tablas que utilizara nuestra base datos, conformada por el nombre del campo, tipo de campo, longitud.

1. Una vez creado este archivo, si es que no lo tiene o con el archivo que maneje el proyecto, deberá correr el siguiente comando en la terminal.

```
npx prisma migrate dev
```

Al ejecutar este comando nos pedirá que le demos un nombre a la migración que estemos realizando, esto para generar una carpeta en prisma/migration donde guardara el histórico de las migraciones que realicemos, una vez seleccionado el nombre y dado enter, nos crea las tablas que tengamos en nuestra archivo schema.primsa dentro de la base de datos que le indiquemos en nuestro archivo .env.

## Ejecutar proyecto

Para correr el proyecto y poder ocupar las api's ejecutaremos el siguiente comando:

```
npm run dev
```

Esto nos permite correr el proyecto http://localhost:3005

Para ver las tablas en el navegador mediante un ambiente gráfico podemos correr el siguiente comando:

```
npx prisma studio
```

Esto nos abre en el navegador la ruta localhost:5555, un ambiente gráfico para visualizar las tablas que se crearon, los campos y los datos, además de que nos permite crear, editar, eliminar registros de las tablas.

[Documentación de prisma](https://www.prisma.io/docs/getting-started/quickstart)
