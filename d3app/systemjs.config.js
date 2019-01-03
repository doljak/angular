(function(global){

    const map = {
        'app': 'app',
        'angular': 'node-modules/@angular',
        'angular2-in-memory-web-api': 'node-modules/angular2-in-memory-web-api',
        'rxjs': 'node-modules/rxjs'
    }

    const packkages = {
        'app':{main:'main.js', defaultExtension:'js'},
        'rxjs':{defaultExtension:'js'},
        'angular2-in-memory-web-api':{main:'index.js',defaultExtension:'js'}
    }

    const ngPackagesNames = [
        'common',
        'compiler',
        'core',
        'forms',
        'http',
        'plataform-browser',
        'plataform-browser-dynamic',
        'router',
        'router-deprecated',
        'upgrade',
    ]   

    function packIndex(pkgName){
        packages['@angular/' + pkgName ] = {main:'index.js', defaultExtension:'js'}
    }

    function packUMD(pkgName){
        packages['@angular/' + pkgName ] = {main:'/bundles/' + pkgName + '.umd.js', defaultExtension:'js'}
    }

    const setPackageConfig = System.packageWithIndex ? packIndex : packUMD
})