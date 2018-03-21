// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      // tous les fichiers js présents dans node_modules doivent être regroupés au sein de js/vendor
      'js/vendor.js': /^(?!app)/,
      // tous les fichiers js présents ds app doivent être regroupés au sein de js/app
      'js/app.js': /^app/
    }
  },
  stylesheets: {
    joinTo: {
      'css/vendor.css': /^(?!app)/,
      'css/app.css': /^app/
    }
   }
};

exports.plugins = {
  // On demande à browsersync de surveiller tous les fichiers
    browserSync: {
        files: ['*']
    },
    // Permet de copier les fonts de FA dans le dossier "public" dans le dossier "fonts"
    copycat:{
        "fonts" : [ "node_modules/font-awesome/fonts"],
    },
};

exports.npm = {
    enabled: true,
    // Ajout de FA et normalize dans dossier vendor.css
    styles: {
      'normalize.css': ['normalize.css'],
      'font-awesome': ['css/font-awesome.css']
    },
    // déclaration de variables globales
    globals: {
      // la variable $ = jquery
      '$': 'jquery',
      // la variable jQuery = jquery
      'jQuery': 'jquery',
    }
};


exports.modules = {
  // Require du module "initialize" du fichier "app.js" pour éviter le require dans l'index.html
  autoRequire: {
    'js/app.js': ['initialize']
  }
}
