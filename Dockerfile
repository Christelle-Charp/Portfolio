# Étape 1 : Image Node officielle
FROM node:20-alpine

RUN apk add --no-cache libc6-compat

#RUN apk add --no-cache wget

# Étape 2 : Répertoire de travail
WORKDIR /app

# Étape 3 : Copier les fichiers de dépendances
COPY package*.json ./

# Étape 4 : Installer les dépendances
RUN npm ci --omit=dev

# Étape 5 : Copier le reste du projet
COPY . .

# Étape 6 : Builder l’application Next.js
RUN npm run build

# Étape 7 : Exposer le port
EXPOSE 3000

# Étape 8 : Lancer l’app
CMD ["node", "node_modules/next/dist/bin/next", "start", "-H", "0.0.0.0", "-p", "3000"]