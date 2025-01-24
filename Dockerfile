# Utilisation de l'image Nginx
FROM nginx:alpine

# Copie les fichiers statiques dans le dossier par défaut de Nginx
COPY src /usr/share/nginx/html
COPY static /usr/share/nginx/html/static

# Expose le port 80
EXPOSE 80
