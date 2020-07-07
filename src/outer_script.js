'use strict';

const SITE_NAME ='https://outerscript.ru';

let mainScript = document.createElement('script');
mainScript.src = SITE_NAME + '/src/outer_script.js';

let styles = document.createElement('link');
styles.rel ='stylesheet';
styles.href = SITE_NAME + '/src/styles.css';

document.head.appendChild(styles);

styles.addEventListener('load', function () {
    document.head.appendChild(mainScript);
});