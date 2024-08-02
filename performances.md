Principales recommandations pour améliorer la performance :

    Améliorer le Largest Contentful Paint (LCP) :
        Optimisation des images : Convertir les images en formats modernes comme WebP et s'assurer qu'elles sont correctement dimensionnées.
----------------------------------------------------------------------------
        la technique du chargement paresseux d'images : le but ici c'est de charger chaque image en différée, c'est à dire à mesure que celle-ci entre dans le viewport.

            Étape 1 : Installer la bibliothèquebreact-lazy-load-image-component.
            npm install react-lazy-load-image-component

            LazyLoadImage: Importe le composant LazyLoadImage depuis "react-lazy-load-image-component", qui permet de charger des images de manière paresseuse, c'est-à-dire de manière optimisée en fonction du défilement de la page ou de l'interaction de l'utilisateur.

            opacity.css: Importe les styles pour l'effet d'opacité du composant LazyLoadImage. Ces styles sont optionnels mais permettent de personnaliser l'apparence de l'image pendant le chargement.

            Ensuite on interchange toutes les balises img par une balise LazyLoadImage.
----------------------------------------------------------------------------
Utilisation de la compression de fichier à un projet Vite en utilisant vite-plugin-compression.

1. Tout d'abord, on installe le plugin vite-plugin-compression via npm ou yarn à la racine du projet.

    npm install vite-plugin-compression --save-dev ou
    yarn add vite-plugin-compression --dev
2. On importe le plugin de compression vite-plugin-compression en haut du fichier.

    import compressionPlugin from 'vite-plugin-compression';

3. Ajoutez le plugin de compression à la liste des plugins Vite dans la configuration defineConfig().

   export default defineConfig({
  plugins: [
    react(), // Si vous utilisez React
    compressionPlugin(), // Ajouter le plugin de compression
  ],
}); 

4. Le plugin vite-plugin-compression prend en charge plusieurs options qui permettent de personnaliser le comportement de la compression. Vous pouvez spécifier les extensions de fichiers à compresser, l'algorithme de compression et d'autres options selon vos besoins.

    ex:
    export default defineConfig({
  plugins: [
    react(), // Si vous utilisez React
    compressionPlugin({
      ext: ['.js', '.css', '.html'], // Extensions de fichiers à compresser
      verbose: true, // Afficher des messages détaillés
      algorithm: 'gzip', // Algorithme de compression (gzip par défaut)
    }),
  ],
});

vite.config.js : Ce fichier est la configuration principale de l'application. Il définit la manière dont Vite doit compiler, transformer et optimiser le code source. Dans ce fichier, on spécifit les plugins à utiliser (comme @vitejs/plugin-react pour React et vite-plugin-compression pour la compression des fichiers), les paramètres de compilation, et d'autres options spécifiques à tout projet.
----------------------------------------------------------------------------


