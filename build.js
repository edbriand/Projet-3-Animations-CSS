const fs = require("fs-extra");
const DIST_FOLDER = "docs";
const autoprefixer = require("autoprefixer");
const postcss = require("postcss");
const postcssNested = require("postcss-nested");
const postcssImport = require("postcss-import");

function build() {
  // Créer un dossier docs
  if (!fs.existsSync(DIST_FOLDER)) {
    fs.mkdirSync(DIST_FOLDER);
  }
  // Copier les fichiers de distribution
  fs.copySync("src", DIST_FOLDER);
  // Executer le build postCSS et l'injecter dans docs
  fs.readFile(`${DIST_FOLDER}/styles/style.css`, (err, css) => {
    postcss([autoprefixer, postcssNested, postcssImport])
      .process(css, {
        from: `${DIST_FOLDER}/styles/style.css`,
        to: `${DIST_FOLDER}/index.css`,
      })
      .then((result) => {
        fs.writeFile(`${DIST_FOLDER}/index.css`, result.css, () => true);
      });
  });
}

build();
