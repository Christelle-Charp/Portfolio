# Étape 1 : Image Node officielle
FROM node:20-alpine

# Étape 2 : Répertoire de travail
WORKDIR /app

# Étape 3 : Installer les dépendances
COPY package*.json ./
RUN npm install

# Étape 4 : Copier le reste du projet
COPY . .

# Étape 5 : Builder l’application Next.js
RUN npm run build

# Étape 6 : Exposer le port
EXPOSE 3000

# Étape 7 : Lancer l’app
CMD ["npm", "start"]
