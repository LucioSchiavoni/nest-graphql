Repaso de lo que se estuvo aprendiendo con nest

Se debe instalar graphql, typeOrm, la base de datos que usaremos en este caso postgres, entre otras librerias propias de @nestjs/common

http://localhost:3000 	
http://localhost:3000/graphql  para poder utilizar el graphql de nuestro backend

app.controller.ts: 

utilizamos como decorador el tipo de peticion @Get y @Post
una vez puesto el decorador si es get o post , etc 
creamos una funcion en este caso de tipo string 
y luego devolvemos el appService y la funcion especifica

Carpeta ./src/user tendremos

Module:
le definimos los componentes y servicios que se va a utilizar en toda la aplicacion
tambien importamos modulos de terceros los cuales son graphQLModule y TypeOrmModule
tambien hacemos la conexion a la base de datos en este caso con TypeOrm.

Service: 
la parte mas baja, donde utilizamos las querys de typeORM para colocarla dentro de funciones y luego exportar la clase service con todas sus funciones para luego llamarlas.


Resolver: 
Esto es para utilizar graphql, declaramos que tipo de query graphql sera y luego creamos la funcion que hace un llamado por el dto y luego devuelve la funcion del service.

Entity:
crea las entidades de la base de datos aqui en el entity como una clase la cual sera una entidad, basicamente es como crear la tabla de la base de datos pero en typescript


Dto:
LO QUE EL CLIENTE ESTA INSERTANDO (LAS REQUEST CONCRETAS QUE QUIERO PARA UNA FUNCION ESPECIFICA)
son clases en las cuales se especifica los datos exactos que vamos a usar, en este caso una clase para el registro de usuario, dentro de la clase le ingresamos el alias y password que son los campos especificos que el usuario va a insertar para el registro.
En el archivo service entre () se aclara que en este caso user : nombre de la clase dto se esta especificando en esa funcion del service que al importar ese dto usaremos esos datos especificos que tiene ese dto.
