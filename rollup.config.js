import resolve from 'rollup-plugin-node-resolve-angular';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import pkgGen from 'rollup-plugin-pkg-generator';
import pkg from './package.json';

import { minify } from 'uglify-es';


function cleanName(name){
	var parts = name.split('/');
	if (parts.length > 1) {
		name = parts[parts.length-1];
	}
	return name;
}

const targetFolder = './dist/';
const browserFile = cleanName(pkg.name) + '.umd.js'
const moduleFile = cleanName(pkg.name) + '.es5.js'
const minFile = cleanName(pkg.name) + '.umd.min.js'

// Add here external dependencies that actually you use.
// This will exclude them from the bundle
const globals = {
	'@angular/core' : 'core',
	'@angular/core' : 'Injectable',
	'@angular/common' : 'common',
	'@angular/router' : 'CanActivate',
	'@angular/router' : 'ActivatedRouteSnapshot',
	'@angular/router' : 'Router',
	'rxjs/Observable' : 'Rx',
	'rxjs/Observer' : 'Rx',
	'rxjs/add/operator/map' : 'Rx'
};


var umdConfig = {
		input : './dist/index.js',
		output : {
			file : targetFolder + browserFile,
			format : 'umd',
			exports: 'named'
		},
		sourcemap : true,
		name : browserFile.split('.')[0].replace(/-/g, '_'),
		plugins : [
			resolve({
				browser: true
			}),
			commonjs()
		],
		external : Object.keys(globals),
		globals : globals
};

var es5Config = {
		input : './dist/index.js',
		output : {
			file : targetFolder + moduleFile,
			format : 'es',
			exports: 'named'
		},
		sourcemap : true,
		name : moduleFile.split('.')[0].replace(/-/g, '_'),
		plugins : [
			resolve({
				browser: true
			}),
			commonjs(),
		],
		external : Object.keys(globals),
		globals : globals
};

var minifyConfig = {
		input : './dist/index.js',
		output : {
			file : targetFolder + minFile,
			format : 'umd',
			exports: 'named'
		},
		sourcemap : true,
		name : minFile.split('.')[0].replace(/-/g, '_'),
		plugins : [
			resolve({
				browser: true
			}),
			commonjs(),
			uglify({}, minify),
			pkgGen({pkg:{
				main: 'index.js',
				module: moduleFile,
				browser: browserFile,
				dependencies: pkg.peerDependencies,
				devDependencies: {},
				scripts: {},
				typings: 'index.d.ts'
			}})
		]
};


export default [
	umdConfig,
	es5Config,
	minifyConfig
]