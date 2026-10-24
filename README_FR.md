MOHAMED GPT — GUIDE RAPIDE EN FRANÇAIS

DANS LE ZIP
- index.html : interface du site.
- logo-mohamed-gpt.jpg : le logo fourni.
- worker.js : serveur qui contacte l'IA.
- wrangler.toml : configuration de base.
- README_FR.md : ce guide.

IMPORTANT
Le site n'a pas un modèle IA intégré hors ligne. Il faut une clé API autorisée et un serveur hébergé. L'offre gratuite et les conditions d'accès peuvent changer. Respecte les conditions d'âge du service; demande l'aide d'un parent/tuteur si nécessaire. Ne partage jamais ta clé API.

ÉTAPE 1 — GITHUB PAGES
1. Ouvre ton dépôt : https://github.com/yattaoumohamed-ctrl/yattaoumohamed-ctrl.github.io
2. Remplace le contenu de index.html par le fichier index.html de ce ZIP.
3. Ajoute logo-mohamed-gpt.jpg à la racine du dépôt (même niveau que index.html).
4. Appuie sur Commit changes et attends la publication.

ÉTAPE 2 — SERVEUR IA
1. Ouvre Cloudflare et va dans Workers & Pages.
2. Crée un Worker et colle le contenu de worker.js.
3. Dans les paramètres du Worker, ajoute un Secret nommé GEMINI_API_KEY et mets ta clé Gemini comme valeur. Ne la mets jamais dans le code public.
4. Déploie le Worker et copie son URL.
5. Le modèle par défaut est gemini-2.5-flash. Vérifie dans la documentation officielle que ce modèle est disponible pour ton compte.

ÉTAPE 3 — RELIER LE SITE AU SERVEUR
1. Dans index.html sur GitHub, cherche la ligne qui commence par const API_URL.
2. Remplace https://REMPLACE-MOI.workers.dev/chat par l'URL de ton Worker suivie de /chat.
3. Enregistre avec Commit changes, attends la publication puis recharge le site.

ERREURS COURANTES
- Serveur à configurer : l'URL du Worker n'a pas été remplacée.
- Origine non autorisée : le domaine du site doit être https://yattaoumohamed-ctrl.github.io; ajuste ALLOWED_ORIGIN dans worker.js si ton domaine change.
- Erreur API/403 : vérifie la clé et l'accès au modèle.
- Erreur 429 : quota atteint.
- Erreur 500 : le secret GEMINI_API_KEY manque.

SÉCURITÉ
Le site et l'URL du Worker sont publics. Avant de partager largement le site, configure une limite de requêtes et surveille les quotas. Ne saisis pas de données sensibles.
