import resolve from 'rollup-plugin-node-resolve';
import copy from 'rollup-plugin-copy';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';

//Add here external dependencies that actually you use.
const globals = {
	'@angular/core' : 'ng.core',
	'@angular/core' : 'Injectable',
	'@angular/common' : 'ng.common',
	'@angular/router' : 'CanActivate',
	'@angular/router' : 'ActivatedRouteSnapshot',
	'@angular/router' : 'Router',
	'rxjs/Observable' : 'Rx',
	'rxjs/Observer' : 'Rx',
	'rxjs/add/operator/map' : 'Rx',
	'jwt-decode' : 'decode'
};

export default {
	input : 'dist/index.js',
	output : {
		file : pkg.module,
		format : 'umd'
	},
	sourcemap : true,
	name : 'ngxSecurity',
	plugins : [
		resolve(),
		commonjs(), // so Rollup can convert it to an ES module
		copy({
			"package-publish.json" : "dist/package.json"
		})
	],
	external : Object.keys(globals),
	globals : globals
}