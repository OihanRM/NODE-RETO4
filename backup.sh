/bin/bash
# Configuración de nombre de usuario y contraseña
git_user="OihanRM"


# Paso 1: Agregar todos los cambios al área de preparación de Git
git add .

# Paso 2: Realizar commit con un mensaje que incluya la fecha
fecha=$(date +'%Y-%m-%d')
git commit -m "Backup del $fecha"

# Paso 3: Hacer push de los cambios al repositorio remoto en la rama principal (main)
# Utiliza el nombre de usuario y contraseña para la autenticación
git push https://$git_user:$git_pw@github.com/OihanRM/TuRepositorio.git main
