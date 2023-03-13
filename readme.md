Trabajo practico de Digital House : Middlewares y rutas de administrador

metodo de uso:

    -Clonar repositorio

    -En terminal (Carpeta raiz) para instalar las dependencias, ejecutar: npm i

    -Luego ejecutar nodemon o ir a la ruta "src/bin" y ejecutar en la terminal : node www

descripcion: aplicaremos middlewares para manejarnos con mayor eficiencia, asimismo crearemos rutas de administrador que solo podran ingresarse con los permisos correspondientes

    desafio 1:
    base del proyecto, maquetacion provista por el ejercicio
        -crear una carpeta logs, que dentro contenga un archivo userLogs.txt, este middleware se ejecutara a nivel global
        - este archivo debe alamacenar todas las rutas a las accede el usuario
    
    desafio 2:
    implementar un middleware que nos permita autorizar el ingreso de usuarios administradores a las rutas admin si estos estan en la lista
        - si accede se saluda al usuario
        - de lo contrario se implementa la leyenda "no tiene privilegios para ingresar"