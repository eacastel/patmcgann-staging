(function () {
'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};



function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var jquery$1 = createCommonjsModule(function (module) {
/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */
( function( global, factory ) {

	"use strict";

	{

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : commonjsGlobal, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.2.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

}
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( ">tbody", elem )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with computed style
	var valueIsBorderBox,
		styles = getStyles( elem ),
		val = curCSS( elem, name, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Computed unit is not pixels. Stop here and return.
	if ( rnumnonpx.test( val ) ) {
		return val;
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = isBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ name ] );

	// Fall back to offsetWidth/Height when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	if ( val === "auto" ) {
		val = elem[ "offset" + name[ 0 ].toUpperCase() + name.slice( 1 ) ];
	}

	// Normalize "", auto, and prepare for extra
	val = parseFloat( val ) || 0;

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var doc, docElem, rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		doc = elem.ownerDocument;
		docElem = doc.documentElement;
		win = doc.defaultView;

		return {
			top: rect.top + win.pageYOffset - docElem.clientTop,
			left: rect.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( jQuery.isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof undefined === "function" && undefined.amd ) {
	undefined( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );
});

// jQuery plugins expect to find a global `jQuery` object, so we
// need to attach it to the window.
//
// This is in its own file because we have to attach it before any
// other imports happen, but with ES6 modules, all `import`s have
// to be at the top.
window.jQuery = jquery$1;
window.$ = jquery$1;

jquery$1.fn.ariaExpanded = function (toggleOn) {
  return this.attr('aria-expanded', toggleOn);
};

jquery$1.fn.ariaHidden = function (toggleOn) {
  return this.attr('aria-hidden', toggleOn);
};

/*!
 * Trend 0.2.0
 *
 * Fail-safe TransitionEnd event for jQuery.
 *
 * Adds a new "trend" event that can be used in browsers that don't
 * support "transitionend".
 *
 * NOTE: Only supports being bound with "jQuery.one".
 *
 * Copyright 2014, Pixel Union - http://pixelunion.net
 * Released under the MIT license
 */
(function($){

  // Prefixed transitionend event names
  var transitionEndEvents =
    "webkitTransitionEnd " +
    "otransitionend " +
    "oTransitionEnd " +
    "msTransitionEnd " +
    "transitionend";

  // Prefixed transition duration property names
  var transitionDurationProperties = [
    "transition-duration",
    "-moz-transition-duration",
    "-webkit-transition-duration",
    "-ms-transition-duration",
    "-o-transition-duration",
    "-khtml-transition-duration"
  ];

  // Prefixed transition delay property names
  var transitionDelayProperties = [
    "transition-delay",
    "-moz-transition-delay",
    "-webkit-transition-delay",
    "-ms-transition-delay",
    "-o-transition-delay",
    "-khtml-transition-delay"
  ];

  // Parses a CSS time value into milliseconds.
  var parseTime = function(s) {
    s = s.replace(/\s/, "");
    var v = window.parseFloat(s);

    return s.match(/[^m]s$/i)
      ? v * 1000
      : v;
  };

  // Parses the longest time unit found in a series of CSS properties.
  // Returns a value in milliseconds.
  var parseProperties = function(el, properties) {
    var duration = 0;

    for (var i = 0; i < properties.length; i++) {
      // Get raw CSS value
      var value = el.css(properties[i]);
      if (!value) continue;

      // Multiple transitions--pick the longest
      if (value.indexOf(",") !== -1) {
        var values = value.split(",");
        var durations = (function(){
          var results = [];
          for (var i = 0; i < values.length; i++) {
            var duration = parseTime(values[i]);
            results.push(duration);
          }
          return results;
        })();

        duration = Math.max.apply(Math, durations);
      }

      // Single transition
      else {
        duration = parseTime(value);
      }

      // Accept first vaue
      break;
    }

    return duration;
  };

  $.event.special.trend = {
    // Triggers an event handler when an element is done transitioning.
    //
    // Handles browsers that don't support transitionend by adding a
    // timeout with the transition duration.
    add: function(handleObj) {
      var el = $(this);
      var fired = false;

      // Mark element as being in transition
      el.data("trend", true);

      // Calculate a fallback duration. + 20 because some browsers fire
      // timeouts faster than transitionend.
      var time =
        parseProperties(el, transitionDurationProperties) +
        parseProperties(el, transitionDelayProperties) +
        20;

      var cb = function(e) {
        // transitionend events can be sent for each property. Let's just
        // skip all but the first. Also handles the timeout callback.
        if (fired) return;

        // Child elements that also have transitions can be fired before we
        // complete. This will catch and ignore those. Unfortunately, we'll
        // have to rely on the timeout in these cases.
        if (e && e.srcElement !== el[0]) return;

        // Mark element has not being in transition
        el.data("trend", false);

        // Callback
        fired = true;
        if (handleObj.handler) handleObj.handler();
      };

      el.one(transitionEndEvents, cb);
      el.data("trend-timeout", window.setTimeout(cb, time));
    },

    remove: function(handleObj) {
      var el = $(this);
      el.off(transitionEndEvents);
      window.clearTimeout(el.data("trend-timeout"));
    }
  };

})(jQuery);

/*!
 * Revealer 2.0.0
 *
 * Copyright 2015, Pixel Union - http://pixelunion.net
 * Released under the MIT license
 */
(function($){
  // check for trend event (make sure jquery.trend is included)
  if (typeof $.event.special.trend !== "object") {
    console.warn("Please make sure jquery.trend is included! Otherwise revealer won't work.");
  }

  // Simple requestAnimationFrame polyfill
  var raf = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    function(fn) { window.setTimeout(fn, 1000/60); };


  // Public API
  var methods = {
    isVisible: function(el) {
      return !!el.data("revealer-visible");
    },

    show: function(el, force) {
      // Check state
      if (methods.isVisible(el)) {
        el.removeClass("animating animating-in");
        el.off("revealer-animating revealer-show");
        return;
      }

      // Remove previous event listeners
      el.data("revealer-visible", true);
      el.off("trend");

      if (force) {
        el.addClass("visible");
        raf(function(){
          el.trigger("revealer-animating");
          el.trigger("revealer-show");
        });
        return;
      }

      raf(function(){
        // Start animation state transition
        el.addClass("animating animating-in");
        el.trigger("revealer-animating");

        raf(function(){
          el.addClass("visible");

          el.one("trend", function(){
            el.removeClass("animating animating-in");
            el.trigger("revealer-show");
          });
        });
      });
    },

    hide: function(el, force) {
      // Check state
      if (!methods.isVisible(el)) {
        el.removeClass("animating animating-out visible");
        el.off("revealer-animating revealer-hide");
        return;
      }

      // Remove previous event listeners
      el.data("revealer-visible", false);
      el.off("trend");

      if (force) {
        el.removeClass("visible");
        raf(function(){
          el.trigger("revealer-animating");
          el.trigger("revealer-hide");
        });
        return;
      }

      raf(function(){
        el.addClass("animating animating-out");
        el.trigger("revealer-animating");

        raf(function(){
          el.removeClass("visible");

          el.one("trend", function(){
            el.removeClass("animating animating-in animating-out");
            el.trigger("revealer-hide");
          });
        });
      });
    },

    toggle: function(el, force) {
      if (methods.isVisible(el)) {
        methods.hide(el, force);
      } else {
        methods.show(el, force);
      }
    }
  };

  // jQuery plugin
  $.fn.revealer = function(method, force) {
    // Get action
    var action = methods[method || "toggle"];
    if (!action) return this;

    // Run action
    if (method === "isVisible") {
      return action(this);
    }

    return this.each(function(){
      action($(this), force);
    });
  };
})(jQuery);

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
 *
 *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 */

(function(window, document) {
'use strict';


// Exits early if all IntersectionObserver and IntersectionObserverEntry
// features are natively supported.
if ('IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype) {

  // Minimal polyfill for Edge 15's lack of `isIntersecting`
  // See: https://github.com/w3c/IntersectionObserver/issues/211
  if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
    Object.defineProperty(window.IntersectionObserverEntry.prototype,
      'isIntersecting', {
      get: function () {
        return this.intersectionRatio > 0;
      }
    });
  }
  return;
}


/**
 * An IntersectionObserver registry. This registry exists to hold a strong
 * reference to IntersectionObserver instances currently observering a target
 * element. Without this registry, instances without another reference may be
 * garbage collected.
 */
var registry = [];


/**
 * Creates the global IntersectionObserverEntry constructor.
 * https://w3c.github.io/IntersectionObserver/#intersection-observer-entry
 * @param {Object} entry A dictionary of instance properties.
 * @constructor
 */
function IntersectionObserverEntry(entry) {
  this.time = entry.time;
  this.target = entry.target;
  this.rootBounds = entry.rootBounds;
  this.boundingClientRect = entry.boundingClientRect;
  this.intersectionRect = entry.intersectionRect || getEmptyRect();
  this.isIntersecting = !!entry.intersectionRect;

  // Calculates the intersection ratio.
  var targetRect = this.boundingClientRect;
  var targetArea = targetRect.width * targetRect.height;
  var intersectionRect = this.intersectionRect;
  var intersectionArea = intersectionRect.width * intersectionRect.height;

  // Sets intersection ratio.
  if (targetArea) {
    this.intersectionRatio = intersectionArea / targetArea;
  } else {
    // If area is zero and is intersecting, sets to 1, otherwise to 0
    this.intersectionRatio = this.isIntersecting ? 1 : 0;
  }
}


/**
 * Creates the global IntersectionObserver constructor.
 * https://w3c.github.io/IntersectionObserver/#intersection-observer-interface
 * @param {Function} callback The function to be invoked after intersection
 *     changes have queued. The function is not invoked if the queue has
 *     been emptied by calling the `takeRecords` method.
 * @param {Object=} opt_options Optional configuration options.
 * @constructor
 */
function IntersectionObserver(callback, opt_options) {

  var options = opt_options || {};

  if (typeof callback != 'function') {
    throw new Error('callback must be a function');
  }

  if (options.root && options.root.nodeType != 1) {
    throw new Error('root must be an Element');
  }

  // Binds and throttles `this._checkForIntersections`.
  this._checkForIntersections = throttle(
      this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT);

  // Private properties.
  this._callback = callback;
  this._observationTargets = [];
  this._queuedEntries = [];
  this._rootMarginValues = this._parseRootMargin(options.rootMargin);

  // Public properties.
  this.thresholds = this._initThresholds(options.threshold);
  this.root = options.root || null;
  this.rootMargin = this._rootMarginValues.map(function(margin) {
    return margin.value + margin.unit;
  }).join(' ');
}


/**
 * The minimum interval within which the document will be checked for
 * intersection changes.
 */
IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;


/**
 * The frequency in which the polyfill polls for intersection changes.
 * this can be updated on a per instance basis and must be set prior to
 * calling `observe` on the first target.
 */
IntersectionObserver.prototype.POLL_INTERVAL = null;

/**
 * Use a mutation observer on the root element
 * to detect intersection changes.
 */
IntersectionObserver.prototype.USE_MUTATION_OBSERVER = true;


/**
 * Starts observing a target element for intersection changes based on
 * the thresholds values.
 * @param {Element} target The DOM element to observe.
 */
IntersectionObserver.prototype.observe = function(target) {
  var isTargetAlreadyObserved = this._observationTargets.some(function(item) {
    return item.element == target;
  });

  if (isTargetAlreadyObserved) {
    return;
  }

  if (!(target && target.nodeType == 1)) {
    throw new Error('target must be an Element');
  }

  this._registerInstance();
  this._observationTargets.push({element: target, entry: null});
  this._monitorIntersections();
  this._checkForIntersections();
};


/**
 * Stops observing a target element for intersection changes.
 * @param {Element} target The DOM element to observe.
 */
IntersectionObserver.prototype.unobserve = function(target) {
  this._observationTargets =
      this._observationTargets.filter(function(item) {

    return item.element != target;
  });
  if (!this._observationTargets.length) {
    this._unmonitorIntersections();
    this._unregisterInstance();
  }
};


/**
 * Stops observing all target elements for intersection changes.
 */
IntersectionObserver.prototype.disconnect = function() {
  this._observationTargets = [];
  this._unmonitorIntersections();
  this._unregisterInstance();
};


/**
 * Returns any queue entries that have not yet been reported to the
 * callback and clears the queue. This can be used in conjunction with the
 * callback to obtain the absolute most up-to-date intersection information.
 * @return {Array} The currently queued entries.
 */
IntersectionObserver.prototype.takeRecords = function() {
  var records = this._queuedEntries.slice();
  this._queuedEntries = [];
  return records;
};


/**
 * Accepts the threshold value from the user configuration object and
 * returns a sorted array of unique threshold values. If a value is not
 * between 0 and 1 and error is thrown.
 * @private
 * @param {Array|number=} opt_threshold An optional threshold value or
 *     a list of threshold values, defaulting to [0].
 * @return {Array} A sorted list of unique and valid threshold values.
 */
IntersectionObserver.prototype._initThresholds = function(opt_threshold) {
  var threshold = opt_threshold || [0];
  if (!Array.isArray(threshold)) threshold = [threshold];

  return threshold.sort().filter(function(t, i, a) {
    if (typeof t != 'number' || isNaN(t) || t < 0 || t > 1) {
      throw new Error('threshold must be a number between 0 and 1 inclusively');
    }
    return t !== a[i - 1];
  });
};


/**
 * Accepts the rootMargin value from the user configuration object
 * and returns an array of the four margin values as an object containing
 * the value and unit properties. If any of the values are not properly
 * formatted or use a unit other than px or %, and error is thrown.
 * @private
 * @param {string=} opt_rootMargin An optional rootMargin value,
 *     defaulting to '0px'.
 * @return {Array<Object>} An array of margin objects with the keys
 *     value and unit.
 */
IntersectionObserver.prototype._parseRootMargin = function(opt_rootMargin) {
  var marginString = opt_rootMargin || '0px';
  var margins = marginString.split(/\s+/).map(function(margin) {
    var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
    if (!parts) {
      throw new Error('rootMargin must be specified in pixels or percent');
    }
    return {value: parseFloat(parts[1]), unit: parts[2]};
  });

  // Handles shorthand.
  margins[1] = margins[1] || margins[0];
  margins[2] = margins[2] || margins[0];
  margins[3] = margins[3] || margins[1];

  return margins;
};


/**
 * Starts polling for intersection changes if the polling is not already
 * happening, and if the page's visibilty state is visible.
 * @private
 */
IntersectionObserver.prototype._monitorIntersections = function() {
  if (!this._monitoringIntersections) {
    this._monitoringIntersections = true;

    // If a poll interval is set, use polling instead of listening to
    // resize and scroll events or DOM mutations.
    if (this.POLL_INTERVAL) {
      this._monitoringInterval = setInterval(
          this._checkForIntersections, this.POLL_INTERVAL);
    }
    else {
      addEvent(window, 'resize', this._checkForIntersections, true);
      addEvent(document, 'scroll', this._checkForIntersections, true);

      if (this.USE_MUTATION_OBSERVER && 'MutationObserver' in window) {
        this._domObserver = new MutationObserver(this._checkForIntersections);
        this._domObserver.observe(document, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        });
      }
    }
  }
};


/**
 * Stops polling for intersection changes.
 * @private
 */
IntersectionObserver.prototype._unmonitorIntersections = function() {
  if (this._monitoringIntersections) {
    this._monitoringIntersections = false;

    clearInterval(this._monitoringInterval);
    this._monitoringInterval = null;

    removeEvent(window, 'resize', this._checkForIntersections, true);
    removeEvent(document, 'scroll', this._checkForIntersections, true);

    if (this._domObserver) {
      this._domObserver.disconnect();
      this._domObserver = null;
    }
  }
};


/**
 * Scans each observation target for intersection changes and adds them
 * to the internal entries queue. If new entries are found, it
 * schedules the callback to be invoked.
 * @private
 */
IntersectionObserver.prototype._checkForIntersections = function() {
  var rootIsInDom = this._rootIsInDom();
  var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();

  this._observationTargets.forEach(function(item) {
    var target = item.element;
    var targetRect = getBoundingClientRect(target);
    var rootContainsTarget = this._rootContainsTarget(target);
    var oldEntry = item.entry;
    var intersectionRect = rootIsInDom && rootContainsTarget &&
        this._computeTargetAndRootIntersection(target, rootRect);

    var newEntry = item.entry = new IntersectionObserverEntry({
      time: now(),
      target: target,
      boundingClientRect: targetRect,
      rootBounds: rootRect,
      intersectionRect: intersectionRect
    });

    if (!oldEntry) {
      this._queuedEntries.push(newEntry);
    } else if (rootIsInDom && rootContainsTarget) {
      // If the new entry intersection ratio has crossed any of the
      // thresholds, add a new entry.
      if (this._hasCrossedThreshold(oldEntry, newEntry)) {
        this._queuedEntries.push(newEntry);
      }
    } else {
      // If the root is not in the DOM or target is not contained within
      // root but the previous entry for this target had an intersection,
      // add a new record indicating removal.
      if (oldEntry && oldEntry.isIntersecting) {
        this._queuedEntries.push(newEntry);
      }
    }
  }, this);

  if (this._queuedEntries.length) {
    this._callback(this.takeRecords(), this);
  }
};


/**
 * Accepts a target and root rect computes the intersection between then
 * following the algorithm in the spec.
 * TODO(philipwalton): at this time clip-path is not considered.
 * https://w3c.github.io/IntersectionObserver/#calculate-intersection-rect-algo
 * @param {Element} target The target DOM element
 * @param {Object} rootRect The bounding rect of the root after being
 *     expanded by the rootMargin value.
 * @return {?Object} The final intersection rect object or undefined if no
 *     intersection is found.
 * @private
 */
IntersectionObserver.prototype._computeTargetAndRootIntersection =
    function(target, rootRect) {

  // If the element isn't displayed, an intersection can't happen.
  if (window.getComputedStyle(target).display == 'none') return;

  var targetRect = getBoundingClientRect(target);
  var intersectionRect = targetRect;
  var parent = getParentNode(target);
  var atRoot = false;

  while (!atRoot) {
    var parentRect = null;
    var parentComputedStyle = parent.nodeType == 1 ?
        window.getComputedStyle(parent) : {};

    // If the parent isn't displayed, an intersection can't happen.
    if (parentComputedStyle.display == 'none') return;

    if (parent == this.root || parent == document) {
      atRoot = true;
      parentRect = rootRect;
    } else {
      // If the element has a non-visible overflow, and it's not the <body>
      // or <html> element, update the intersection rect.
      // Note: <body> and <html> cannot be clipped to a rect that's not also
      // the document rect, so no need to compute a new intersection.
      if (parent != document.body &&
          parent != document.documentElement &&
          parentComputedStyle.overflow != 'visible') {
        parentRect = getBoundingClientRect(parent);
      }
    }

    // If either of the above conditionals set a new parentRect,
    // calculate new intersection data.
    if (parentRect) {
      intersectionRect = computeRectIntersection(parentRect, intersectionRect);

      if (!intersectionRect) break;
    }
    parent = getParentNode(parent);
  }
  return intersectionRect;
};


/**
 * Returns the root rect after being expanded by the rootMargin value.
 * @return {Object} The expanded root rect.
 * @private
 */
IntersectionObserver.prototype._getRootRect = function() {
  var rootRect;
  if (this.root) {
    rootRect = getBoundingClientRect(this.root);
  } else {
    // Use <html>/<body> instead of window since scroll bars affect size.
    var html = document.documentElement;
    var body = document.body;
    rootRect = {
      top: 0,
      left: 0,
      right: html.clientWidth || body.clientWidth,
      width: html.clientWidth || body.clientWidth,
      bottom: html.clientHeight || body.clientHeight,
      height: html.clientHeight || body.clientHeight
    };
  }
  return this._expandRectByRootMargin(rootRect);
};


/**
 * Accepts a rect and expands it by the rootMargin value.
 * @param {Object} rect The rect object to expand.
 * @return {Object} The expanded rect.
 * @private
 */
IntersectionObserver.prototype._expandRectByRootMargin = function(rect) {
  var margins = this._rootMarginValues.map(function(margin, i) {
    return margin.unit == 'px' ? margin.value :
        margin.value * (i % 2 ? rect.width : rect.height) / 100;
  });
  var newRect = {
    top: rect.top - margins[0],
    right: rect.right + margins[1],
    bottom: rect.bottom + margins[2],
    left: rect.left - margins[3]
  };
  newRect.width = newRect.right - newRect.left;
  newRect.height = newRect.bottom - newRect.top;

  return newRect;
};


/**
 * Accepts an old and new entry and returns true if at least one of the
 * threshold values has been crossed.
 * @param {?IntersectionObserverEntry} oldEntry The previous entry for a
 *    particular target element or null if no previous entry exists.
 * @param {IntersectionObserverEntry} newEntry The current entry for a
 *    particular target element.
 * @return {boolean} Returns true if a any threshold has been crossed.
 * @private
 */
IntersectionObserver.prototype._hasCrossedThreshold =
    function(oldEntry, newEntry) {

  // To make comparing easier, an entry that has a ratio of 0
  // but does not actually intersect is given a value of -1
  var oldRatio = oldEntry && oldEntry.isIntersecting ?
      oldEntry.intersectionRatio || 0 : -1;
  var newRatio = newEntry.isIntersecting ?
      newEntry.intersectionRatio || 0 : -1;

  // Ignore unchanged ratios
  if (oldRatio === newRatio) return;

  for (var i = 0; i < this.thresholds.length; i++) {
    var threshold = this.thresholds[i];

    // Return true if an entry matches a threshold or if the new ratio
    // and the old ratio are on the opposite sides of a threshold.
    if (threshold == oldRatio || threshold == newRatio ||
        threshold < oldRatio !== threshold < newRatio) {
      return true;
    }
  }
};


/**
 * Returns whether or not the root element is an element and is in the DOM.
 * @return {boolean} True if the root element is an element and is in the DOM.
 * @private
 */
IntersectionObserver.prototype._rootIsInDom = function() {
  return !this.root || containsDeep(document, this.root);
};


/**
 * Returns whether or not the target element is a child of root.
 * @param {Element} target The target element to check.
 * @return {boolean} True if the target element is a child of root.
 * @private
 */
IntersectionObserver.prototype._rootContainsTarget = function(target) {
  return containsDeep(this.root || document, target);
};


/**
 * Adds the instance to the global IntersectionObserver registry if it isn't
 * already present.
 * @private
 */
IntersectionObserver.prototype._registerInstance = function() {
  if (registry.indexOf(this) < 0) {
    registry.push(this);
  }
};


/**
 * Removes the instance from the global IntersectionObserver registry.
 * @private
 */
IntersectionObserver.prototype._unregisterInstance = function() {
  var index = registry.indexOf(this);
  if (index != -1) registry.splice(index, 1);
};


/**
 * Returns the result of the performance.now() method or null in browsers
 * that don't support the API.
 * @return {number} The elapsed time since the page was requested.
 */
function now() {
  return window.performance && performance.now && performance.now();
}


/**
 * Throttles a function and delays its executiong, so it's only called at most
 * once within a given time period.
 * @param {Function} fn The function to throttle.
 * @param {number} timeout The amount of time that must pass before the
 *     function can be called again.
 * @return {Function} The throttled function.
 */
function throttle(fn, timeout) {
  var timer = null;
  return function () {
    if (!timer) {
      timer = setTimeout(function() {
        fn();
        timer = null;
      }, timeout);
    }
  };
}


/**
 * Adds an event handler to a DOM node ensuring cross-browser compatibility.
 * @param {Node} node The DOM node to add the event handler to.
 * @param {string} event The event name.
 * @param {Function} fn The event handler to add.
 * @param {boolean} opt_useCapture Optionally adds the even to the capture
 *     phase. Note: this only works in modern browsers.
 */
function addEvent(node, event, fn, opt_useCapture) {
  if (typeof node.addEventListener == 'function') {
    node.addEventListener(event, fn, opt_useCapture || false);
  }
  else if (typeof node.attachEvent == 'function') {
    node.attachEvent('on' + event, fn);
  }
}


/**
 * Removes a previously added event handler from a DOM node.
 * @param {Node} node The DOM node to remove the event handler from.
 * @param {string} event The event name.
 * @param {Function} fn The event handler to remove.
 * @param {boolean} opt_useCapture If the event handler was added with this
 *     flag set to true, it should be set to true here in order to remove it.
 */
function removeEvent(node, event, fn, opt_useCapture) {
  if (typeof node.removeEventListener == 'function') {
    node.removeEventListener(event, fn, opt_useCapture || false);
  }
  else if (typeof node.detatchEvent == 'function') {
    node.detatchEvent('on' + event, fn);
  }
}


/**
 * Returns the intersection between two rect objects.
 * @param {Object} rect1 The first rect.
 * @param {Object} rect2 The second rect.
 * @return {?Object} The intersection rect or undefined if no intersection
 *     is found.
 */
function computeRectIntersection(rect1, rect2) {
  var top = Math.max(rect1.top, rect2.top);
  var bottom = Math.min(rect1.bottom, rect2.bottom);
  var left = Math.max(rect1.left, rect2.left);
  var right = Math.min(rect1.right, rect2.right);
  var width = right - left;
  var height = bottom - top;

  return (width >= 0 && height >= 0) && {
    top: top,
    bottom: bottom,
    left: left,
    right: right,
    width: width,
    height: height
  };
}


/**
 * Shims the native getBoundingClientRect for compatibility with older IE.
 * @param {Element} el The element whose bounding rect to get.
 * @return {Object} The (possibly shimmed) rect of the element.
 */
function getBoundingClientRect(el) {
  var rect;

  try {
    rect = el.getBoundingClientRect();
  } catch (err) {
    // Ignore Windows 7 IE11 "Unspecified error"
    // https://github.com/w3c/IntersectionObserver/pull/205
  }

  if (!rect) return getEmptyRect();

  // Older IE
  if (!(rect.width && rect.height)) {
    rect = {
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      left: rect.left,
      width: rect.right - rect.left,
      height: rect.bottom - rect.top
    };
  }
  return rect;
}


/**
 * Returns an empty rect object. An empty rect is returned when an element
 * is not in the DOM.
 * @return {Object} The empty rect.
 */
function getEmptyRect() {
  return {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: 0,
    height: 0
  };
}

/**
 * Checks to see if a parent element contains a child elemnt (including inside
 * shadow DOM).
 * @param {Node} parent The parent element.
 * @param {Node} child The child element.
 * @return {boolean} True if the parent node contains the child node.
 */
function containsDeep(parent, child) {
  var node = child;
  while (node) {
    if (node == parent) return true;

    node = getParentNode(node);
  }
  return false;
}


/**
 * Gets the parent node of an element or its host element if the parent node
 * is a shadow root.
 * @param {Node} node The node whose parent to get.
 * @return {Node|null} The parent node or null if no parent exists.
 */
function getParentNode(node) {
  var parent = node.parentNode;

  if (parent && parent.nodeType == 11 && parent.host) {
    // If the parent is a shadow root, return the host element.
    return parent.host;
  }
  return parent;
}


// Exposes the constructors globally.
window.IntersectionObserver = IntersectionObserver;
window.IntersectionObserverEntry = IntersectionObserverEntry;

}(window, document));

/*!
 * rimg v2.1.0
 * (c) 2018 Pixel Union
 */
/**
 * The default template render function. Turns a template string into an image
 * URL.
 *
 * @param {String} template
 * @param {Size} size
 * @returns {String}
 */
function defaultTemplateRender(template, size) {
  return template.replace('{size}', size.width + 'x' + size.height);
}

/**
 * @type Settings
 */
var defaults = {
  scale: 1,
  template: false,
  templateRender: defaultTemplateRender,
  max: { width: Infinity, height: Infinity },
  round: 32,
  placeholder: false
};

/**
 * Get a data attribute value from an element, with a default fallback and
 * sanitization step.
 *
 * @param {Element} el
 *
 * @param {String} name
 *        The data attribute name.
 *
 * @param {Object} options
 *        An object holding fallback values if the data attribute does not
 *        exist. If this object doesn't have the property, we further fallback
 *        to our defaults.
 *
 * @param {Function} [sanitize]
 *        A function to sanitize the data attribute value with.
 *
 * @returns {String|*}
 */
function getData(el, name, options, sanitize) {
  var attr = 'data-rimg-' + name;
  if (!el.hasAttribute(attr)) return options[name] || defaults[name];

  var value = el.getAttribute(attr);

  return sanitize ? sanitize(value) : value;
}

/**
 * Sanitize data attributes that represent a size (in the form of `10x10`).
 *
 * @param {String} value
 * @returns {Object} An object with `width` and `height` properties.
 */
function parseSize(value) {
  value = value.split('x');
  return { width: parseInt(value[0], 10), height: parseInt(value[1], 10) };
}

/**
 * Loads information about an element.
 *
 * Options can be set on the element itself using data attributes, or through
 * the `options` parameter. Data attributes take priority.
 *
 * @param {HTMLElement} el
 * @param {Settings} options
 * @returns {Item}
 */
function parseItem(el) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var isImage = el.hasAttribute('data-rimg-template');

  /**
   * @typedef {Settings} Item
   */
  return {
    el: el,

    // Type of element
    isImage: isImage,
    isBackgroundImage: isImage && el.tagName !== 'IMG',

    // Image scale
    scale: getData(el, 'scale', options),

    // Device density
    density: window.devicePixelRatio || 1,

    // Image template URL
    template: getData(el, 'template', options),
    templateRender: options.templateRender || defaults.templateRender,

    // Maximum image dimensions
    max: getData(el, 'max', options, parseSize),

    // Round image dimensions to the nearest multiple
    round: getData(el, 'round', options),

    // Placeholder image dimensions
    placeholder: getData(el, 'placeholder', options, parseSize)
  };
}

/**
 * Round to the nearest multiple.
 *
 * This is so we don't tax the image server too much.
 *
 * @param {Number} size The size, in pixels.
 * @param {Number} multiple The multiple to round to the nearest.
 * @returns {Number}
 */
function roundSize(size, multiple) {
  return Math.ceil(size / multiple) * multiple;
}

/**
 * Get the size of an element.
 *
 * If it is too small, it's parent element is checked, and so on. This helps
 * avoid the situation where an element doesn't have a size yet or is positioned
 * out of the layout.
 *
 * @param {HTMLElement} el
 * @return {Object} size
 * @return {Number} size.width The width, in pixels.
 * @return {Number} size.height The height, in pixels.
 */
function getElementSize(el) {
  var size = { width: 0, height: 0 };

  while (el) {
    size.width = el.offsetWidth;
    size.height = el.offsetHeight;
    if (size.width > 20 && size.height > 20) break;
    el = el.parentNode;
  }

  return size;
}

/**
 * Trigger a custom event.
 *
 * Note: this approach is deprecated, but still required to support older
 * browsers such as IE 10.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
 *
 * @param {HTMLElement} el
 *        The element to trigger the event on.
 *
 * @param {String} name
 *        The event name.
 *
 * @returns {Boolean}
 *          True if the event was canceled.
 */
function trigger(el, name) {
  var event = document.createEvent('Event');
  event.initEvent(name, true, true);
  return !el.dispatchEvent(event);
}

/**
 * Return the maximum supported density of the image, given the container.
 *
 * @param {Item} item
 * @param {Size} size
 */
function supportedDensity(item, size) {
  return Math.min(Math.min(Math.max(item.max.width / size.width, 1), item.density), Math.min(Math.max(item.max.height / size.height, 1), item.density)).toFixed(2);
}

/**
 * Set the image URL on the element. Supports background images and `srcset`.
 *
 * @param {Item} item
 * @param {Size} size
 * @param {Boolean} isPlaceholder
 */
function setImage(item, size, isPlaceholder, onLoad) {
  var render = item.templateRender;
  var density = isPlaceholder ? 1 : supportedDensity(item, size);
  var round = isPlaceholder ? 1 : item.round;

  var width = roundSize(size.width * density, round);
  var height = roundSize(size.height * density, round);
  var displaySize = width > item.max.width || height > item.max.height ? { width: item.max.width, height: item.max.height } : { width: width, height: height };

  var url = render(item.template, displaySize);

  // On load callback
  var image = new Image();
  image.onload = onLoad;
  image.src = url;

  // Set image
  if (item.isBackgroundImage) {
    item.el.style.backgroundImage = 'url(\'' + url + '\')';
  } else {
    item.el.setAttribute('srcset', url + ' ' + density + 'x');
  }
}

/**
 * Load the image, set loaded status, and trigger the load event.
 *
 * @fires rimg:load
 * @fires rimg:error
 * @param {Item} item
 * @param {Size} size
 */
function loadFullImage(item, size) {
  var el = item.el;

  setImage(item, size, false, function (event) {
    if (event.type === 'load') {
      el.setAttribute('data-rimg', 'loaded');
    } else {
      el.setAttribute('data-rimg', 'error');
      trigger(el, 'rimg:error');
    }

    trigger(el, 'rimg:load');
  });
}

/**
 * Load in a responsive image.
 *
 * Sets the image's `srcset` attribute to the final image URLs, calculated based
 * on the actual size the image is being shown at.
 *
 * @fires rimg:loading
 *        The image URLs have been set and we are waiting for them to load.
 *
 * @fires rimg:loaded
 *        The final image has loaded.
 *
 * @fires rimg:error
 *        The final image failed loading.
 *
 * @param {Item} item
 */
function loadImage(item) {
  var el = item.el;

  // Already loaded?
  var status = el.getAttribute('data-rimg');
  if (status === 'loading' || status === 'loaded') return;

  // Is the SVG loaded?
  if (!el.complete && !item.isBackgroundImage) {
    // Wait for the load event, then call load image
    el.addEventListener('load', function cb() {
      el.removeEventListener('load', cb);
      loadImage(item);
    });

    return;
  }

  // Trigger loading event, and stop if cancelled
  if (trigger(el, 'rimg:loading')) return;

  // Mark as loading
  el.setAttribute('data-rimg', 'loading');

  // Get element size. This is used as the ideal display size.
  var size = getElementSize(item.el);

  size.width *= item.scale;
  size.height *= item.scale;

  if (item.placeholder) {
    // Load a placeholder image first, followed by the full image. Force the
    // element to keep its dimensions while it loads. If the image is smaller
    // than the element size, use the image's size. Density is taken into account
    // for HiDPI devices to avoid blurry images.
    if (!item.isBackgroundImage) {
      el.setAttribute('width', Math.min(Math.floor(item.max.width / item.density), size.width));
      el.setAttribute('height', Math.min(Math.floor(item.max.height / item.density), size.height));
    }

    setImage(item, item.placeholder, true, function () {
      return loadFullImage(item, size);
    });
  } else {
    loadFullImage(item, size);
  }
}

/**
 * Prepare an element to be displayed on the screen.
 *
 * Images have special logic applied to them to swap out the different sources.
 *
 * @fires rimg:enter
 *        The element is entering the viewport.
 *
 * @param {HTMLElement} el
 * @param {Settings} options
 */
function load(el, options) {
  if (!el) return;
  trigger(el, 'rimg:enter');

  var item = parseItem(el, options);
  if (item.isImage) {
    if (!item.isBackgroundImage) {
      el.setAttribute('data-rimg-template-svg', el.getAttribute('srcset'));
    }

    loadImage(item);
  }
}

/**
 * Prepare an element to be displayed on the screen.
 *
 * Images have special logic applied to them to swap out the different sources.
 *
 * @fires rimg:enter
 *        The element is entering the viewport.
 *
 * @param {HTMLElement} el
 * @param {Settings} options
 */
function update(el, options) {
  if (!el) return;
  trigger(el, 'rimg:update');

  var item = parseItem(el, options);

  if (item.isImage) {
    if (!item.isBackgroundImage) {
      el.setAttribute('data-rimg', 'lazy');
      el.setAttribute('srcset', el.getAttribute('data-rimg-template-svg'));
    }

    loadImage(item);
  }
}

/**
 * @typedef {Object} Size
 * @property {Number} width
 * @property {Number} height
 */

/**
 * A function to turn a template string into a URL.
 *
 * @callback TemplateRenderer
 * @param {String} template
 * @param {Size} size
 * @returns {String}
 */

/**
 * @typedef {Object} Settings
 *
 * @property {String} [template]
 *           A template string used to generate URLs for an image. This allows us to
 *           dynamically load images with sizes to match the container's size.
 *
 * @property {TemplateRenderer} [templateRender]
 *           A function to turn a template string into a URL.
 *
 * @property {Size} [max]
 *           The maximum available size for the image. This ensures we don't
 *           try to load an image larger than is possible.
 *
 * @property {Number} [round]
 *           Round image dimensions to the nearest multiple. This is intended to
 *           tax the image server less by lowering the number of possible image
 *           sizes requested.
 *
 * @property {Size} [placeholder]
 *           The size of the lo-fi image to load before the full image.
 */

/**
 * Initialize the responsive image handler.
 *
 * @param {String|HTMLElement|NodeList} selector
 *        The CSS selector, element, or elements to track for lazy-loading.
 *
 * @param {Settings} options
 *
 * @returns {PublicApi}
 */
function rimg$1() {
  var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '[data-rimg="lazy"]';
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // Intersections
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        io.unobserve(entry.target);
        load(entry.target, options);
      }
    });
  }, {
    // Watch the viewport, with 20% vertical margins
    rootMargin: '20% 0px'
  });

  /**
   * @typedef {Object} PublicApi
   */
  var api = {
    /**
     * Track a new selector, element, or nodelist for lazy-loading.
     * @type Function
     * @param {String|HTMLElement|NodeList} selector
     */
    track: function track() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '[data-rimg="lazy"]';

      var els = querySelector(selector);
      for (var i = 0; i < els.length; i++) {
        io.observe(els[i]);
      }
    },
    update: function update$$1() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '[data-rimg="loaded"]';

      var els = querySelector(selector);
      for (var i = 0; i < els.length; i++) {
        update(els[i], options);
      }
    },


    /**
     * Stop tracking element(s) for lazy-loading.
     * @type Function
     * @param {String|HTMLElement|NodeList} selector
     */
    untrack: function untrack() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '[data-rimg]';

      var els = querySelector(selector);
      for (var i = 0; i < els.length; i++) {
        io.unobserve(els[i]);
      }
    },


    /**
     * Unload all event handlers and observers.
     * @type Function
     */
    unload: function unload() {
      io.disconnect();
    }
  };

  // Add initial elements
  api.track(selector);

  return api;
}

/**
 * Finds a group of elements on the page.
 *
 * @param {String|HTMLElement|NodeList} selector
 * @returns {Object} An array-like object.
 */
function querySelector(selector) {
  if (typeof selector === 'string') {
    return document.querySelectorAll(selector);
  }

  if (selector instanceof HTMLElement) {
    return [selector];
  }

  if (selector instanceof NodeList) {
    return selector;
  }

  return [];
}

/*!
 * rimg-shopify v2.2.0
 * (c) 2018 Pixel Union
 */
/**
 * Polyfill for Element.matches().
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
 */
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
    var matches = (this.document || this.ownerDocument).querySelectorAll(s),
        i = matches.length;
    while (--i >= 0 && matches.item(i) !== this) {}
    return i > -1;
  };
}

var state = {
  init: init,
  watch: watch,
  unwatch: unwatch
};

function init() {
  var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '[data-rimg="lazy"]';
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  state.selector = selector;
  state.instance = rimg$1(selector, options);
  state.loadedWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

  // Listen for Shopify theme editor events
  document.addEventListener('shopify:section:load', function (event) {
    return watch(event.target);
  });

  window.addEventListener('resize', function () {
    return _update();
  });

  document.addEventListener('shopify:section:unload', function (event) {
    return unwatch(event.target);
  });

  // Listen for custom events to allow themes to hook into rimg
  document.addEventListener('theme:rimg:watch', function (event) {
    return watch(event.target);
  });

  document.addEventListener('theme:rimg:unwatch', function (event) {
    return unwatch(event.target);
  });

  // Support custom events triggered through jQuery
  // See: https://github.com/jquery/jquery/issues/3347
  if (window.jQuery) {
    jQuery(document).on({
      'theme:rimg:watch': function themeRimgWatch(event) {
        return watch(event.target);
      },
      'theme:rimg:unwatch': function themeRimgUnwatch(event) {
        return unwatch(event.target);
      }
    });
  }
}

/**
 * Track an element, and its children.
 *
 * @param {HTMLElement} el
 */
function watch(el) {
  // Track element
  if (typeof el.matches === 'function' && el.matches(state.selector)) {
    state.instance.track(el);
  }

  // Track element's children
  state.instance.track(el.querySelectorAll(state.selector));
}

/**
 * Untrack an element, and its children
 *
 * @param {HTMLElement} el
 * @private
 */
function unwatch(el) {
  // Untrack element's children
  state.instance.untrack(el.querySelectorAll(state.selector));

  // Untrack element
  if (typeof el.matches === 'function' && el.matches(state.selector)) {
    state.instance.untrack(el);
  }
}

/**
 * Update an element, and its children.
 *
 * @param {HTMLElement} el
 */
function _update() {
  var currentWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

  // Return if we're not 2x smaller, or larger than the existing loading size
  if (currentWidth / state.loadedWidth > 0.5 && currentWidth / state.loadedWidth < 2) {
    return;
  }

  state.loadedWidth = currentWidth;
  state.instance.update();
}

var selectors = {
  header: {
    main: '[data-header-main]',
    mobile: '[data-header-mobile]',
    drawerToggle: '[data-header-drawer-toggle]',
    drawerToggleParent: '[data-header-toggle-parent]',
    drawerToggleAttr: 'data-header-drawer-toggle',
    drawerItemAttr: 'data-header-drawer',
    navigation: '[data-header-navigation]',
    actions: '[data-header-actions]',
    utilities: '[data-header-utilities]',
    currencyConverter: '[name=currencies]',
    converterParent: '[data-header-currency-converter]'
  },
  announcementBar: {
    main: '.pxs-announcement-bar'
  },
  drawers: {
    menu: {
      navigation: '[data-header-drawer-navigation]',
      converterParent: '[data-header-drawer-currency-converter]'
    },
    search: {
      field: '[data-header-search]'
    }
  },
  navmenu: {
    submenu: '[data-navmenu-submenu]',
    trigger: '[data-navmenu-trigger]',
    depthOne: '.navmenu-link-depth-1'
  },
  cardsPlayer: {
    card: '[data-cards-player-card]',
    cardVisual: '[data-cards-player-card-visual]',
    cardContent: '[data-cards-player-card-content]'
  },
  collectionUtils: {
    utils: '[data-collection-utils]',
    narrow: '[data-collection-utils-narrow]',
    wide: '[data-collection-utils-wide]'
  },
  collectionPopover: {
    filterItem: '[data-collection-filter] a',
    filterItemAdvanced: '[data-collection-filter-advanced] a',
    sortByItem: '[data-collection-sortby]'
  },
  popover: {
    trigger: '[data-popover-trigger]',
    target: '[data-popover-target]',
    content: '[data-popover-content]',
    triggers: {
      collectionFilter: '[data-popover-trigger="filters"]',
      collectionSortBy: '[data-popover-trigger="sort-by"]',
      atcSteps: '[data-popover-trigger="atc-steps"]',
      atcToggle: '[data-popover-toggle]',
      share: '[data-popover-trigger="share"]'
    },
    contents: {
      collectionFilter: '[data-popover-content="filters"]',
      collectionSortBy: '[data-popover-content="sort-by"]',
      atcStepForm: '[data-popover-content="atc-step-form"]',
      atcStepCart: '[data-popover-content="atc-step-cart"]',
      share: '[data-popover-content="share"]'
    }
  },
  product: {
    el: '[data-product]',
    form: {
      el: '[data-product-form]',
      variants: '[data-variants]',
      productOption: '[data-product-option]',
      quantity: '[data-quantity]',
      atc: '[data-product-form-atc]',
      dcbSubmit: '[data-product-dcb-submit]',
      dcbSubmitText: '[data-product-dcb-text]'
    },
    item: {
      el: '[data-product-item]',
      urlAttr: 'data-product-item-url',
      idAttr: 'data-product-item-id'
    },
    quickshop: {
      data: '[data-quickshop-data]',
      error: '[data-quickshop-error]',
      errorAttr: 'data-quickshop-error',
      trigger: '[data-product-quickshop-trigger]',
      contents: '[data-product-quickshop]',
      selectorAttr: 'data-product-item-quickshop'
    },
    atc: '[data-product-atc]',
    description: '[data-product-description]',
    gallery: '[data-product-gallery]',
    galleryImages: '[data-product-gallery-images]',
    galleryImage: '[data-product-gallery-image]',
    galleryThumbnails: '[data-product-gallery-thumbnails]',
    galleryThumbnailsWrapper: '[data-product-gallery-thumbnails-wrapper]',
    galleryThumbnailsPrev: '[data-product-gallery-thumbnails-prev]',
    galleryThumbnailsNext: '[data-product-gallery-thumbnails-next]',
    galleryThumbnail: '[data-product-gallery-thumbnail]',
    galleryThumbnailSelected: '.product-gallery-thumbnail-selected'
  },
  slideshow: {
    container: '[data-slideshow]',
    slide: '[data-slideshow-slide]',
    slideImage: '[data-slide-image]',
    slideContent: '[data-slide-content]',
    linkButton: '[data-slideshow-button]',
    pagination: '[data-slideshow]',
    paginationNext: '[data-slideshow="next"]',
    paginationPrev: '[data-slideshow="prev"]'
  },
  gallery: {
    container: '[data-gallery]',
    slide: '[data-gallery-slide]'
  },
  twitter: {
    container: '[data-twitter-content]',
    tweet: '[data-tweet-content]'
  },
  instagram: {
    container: '[data-gallery]',
    galleryImage: '.gallery-image',
    placeholder: '.placeholder-svg'
  },
  videoBlock: {
    videoEl: '[data-video-block]',
    blockingLayer: '[data-video-overlay]',
    playButton: '[data-video-play]'
  },
  quantity: {
    el: '[data-quantity]',
    submitEl: '[data-quantity-submit]',
    decrement: '[data-quantity-decrement]',
    increment: '[data-quantity-increment]',
    element: '[data-quantity-element]',
    input: '[data-quantity-input]'
  },
  newsletter: {
    formPosted: '[data-newsletter-submitted]'
  },
  cart: {
    el: '[data-cart]',
    form: '[data-cart-form]',
    expand: '[data-cart-expand]',
    expandable: '[data-cart-expandable]',
    totals: '[data-cart-totals]',
    subtotal: '[data-cart-subtotal]',
    submit: '[data-cart-submit]',
    otherItemsButton: '[data-cart-otheritems-button]',
    atcSuccess: '[data-product-atc-success]',
    item: {
      el: '[data-cart-item]',
      remove: '[data-cart-item-remove]',
      price: '[data-cart-item-price]',
      total: '[data-cart-item-total]',
      slide: '[data-cart-item-column-slide]'
    },
    note: '[data-cart-note]',
    shipping: {
      el: '[data-cart-shipping]',
      response: '[data-cart-shipping-response]',
      message: '[data-cart-shipping-message]',
      rates: '[data-cart-shipping-rates]',
      submit: '[data-cart-shipping-submit]'
    }
  },
  price: {
    compareAt: '[data-price-compare-at]',
    price: '[data-price]'
  },
  password: {
    modal: '[data-password-modal]',
    trigger: '[data-password-modal-trigger]',
    errors: '[data-password-form-error]'
  },
  modal: {
    wrapper: '[data-modal-wrapper]'
  }
};

var classes = {
  header: {
    sticky: 'site-header-sticky',
    scrolled: 'site-header-scrolled',
    bordered: 'site-header-bordered'
  },
  scrollLock: {
    locked: 'scroll-lock'
  },
  navigation: {
    expanded: 'site-navigation-layout-expanded',
    collapsed: 'site-navigation-layout-drawer'
  },
  drawerVisibility: {
    general: 'site-header-drawer-visible',
    account: 'site-header-account-visible',
    notification: 'site-header-notification-visible',
    menu: 'site-header-menu-visible',
    cart: 'site-header-cart-visible action-drawer-visible',
    story: 'site-header-story-visible action-drawer-visible',
    search: 'site-header-search-visible action-drawer-visible'
  },
  drawerToggles: {
    active: 'has-active-toggle',
    disabled: 'is-disabled-toggle'
  },
  navmenu: {
    parentActive: 'navmenu-item-active'
  },
  objectFit: {
    noObjectFit: 'no-object-fit'
  },
  cardsPlayer: {
    player: 'cards-player',
    deck: 'cards-player-deck',
    hand: 'cards-player-hand',
    content: 'cards-player-content',
    visualFirst: 'cards-player-card-visual-first',
    repositioning: 'cards-player-card-repositioning',
    hintingStart: 'cards-player-card-hinting-start',
    hintingEnd: 'cards-player-card-hinting-end'
  },
  popover: {
    created: 'popover-created',
    listItemActive: 'popover-list-item-active',
    scrolls: 'popover-scrolls',
    active: 'popover-active',
    hideHeader: 'popover-hides-header',
    buttonActive: 'popover-button-active',
    buttonHidden: 'popover-button-hidden'
  },
  product: {
    galleryImageSelected: 'product-gallery-image-selected',
    galleryThumbnailSelected: 'product-gallery-thumbnail-selected',
    galleryThumbnailsFlickityEnabled: 'product-gallery-thumbnails-flickity-enabled',
    quickshop: {
      wrapper: 'product-item-quickshop',
      error: 'quickshop-form-errors'
    },
    atc: {
      static: 'product-atc-static',
      defaultVariant: 'product-atc-defaultvariant',
      popper: 'product-atc-popper',
      formActive: 'product-atc-popper-form-active',
      cartActive: 'product-atc-popper-cart-active',
      loading: 'product-form-atc-loading'
    }
  },
  cart: {
    inline: 'cart-inline',
    emptying: 'cart-emptying',
    empty: 'cart-empty',
    loading: 'cart-loading',
    loadingAffectsTotal: 'cart-loading-affects-total',
    reloading: 'cart-reloading',
    expanded: 'cart-expanded',
    item: {
      inlineVisible: 'cart-inline-visible',
      inlineRecentlyAdded: 'cart-inline-recentlyadded',
      loading: 'cart-item-loading',
      totalLoading: 'cart-item-total-loading',
      sliding: 'cart-item-sliding'
    },
    shipping: {
      responseVisible: 'cart-shipping-response-visible'
    },
    expandable: {
      expanded: 'cart-expand-button-expanded'
    }
  },
  instagram: {
    image: 'instagram-image',
    hidden: 'hidden'
  },
  quantity: {
    disabled: 'form-element-disabled'
  },
  form: {
    formElements: {
      el: 'form-element',
      disabled: 'form-element-disabled'
    }
  }
};

var events = {
  cart: {
    error: 'cart-error',
    reloadStart: 'cart-reload-start',
    reloadFinish: 'cart-reload-finish',
    loadingStart: 'cart-loading-start',
    loadingFinish: 'cart-loading-finish',
    inlineVisible: 'cart-inline-visible',
    item: {
      loadingStart: 'cart-item-loading-start',
      loadingFinish: 'cart-item-loading-finish',
      removingFinished: 'cart-item-removing-finished'
    },
    note: {
      loadingStart: 'cart-note-loading-start',
      loadingFinish: 'cart-note-loading-finish'
    }
  }
};

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};



















var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var ObjectFitPolyfill = function () {
  function ObjectFitPolyfill() {
    var _this = this;

    classCallCheck(this, ObjectFitPolyfill);

    this._onSectionEvent = this._onSectionEvent.bind(this);

    /*
      - Fall back to background images Theme Editor for browsers which don't
      support object-fit
      - Trigger to check element loaded in asynchronously
     */
    jquery$1(document).on('shopify:section:select', this._onSectionEvent).on('shopify:block:select', this._onSectionEvent).on('check-object-fit', function (event, data) {
      return _this._checkElement(data);
    });

    this._init(document.body);
  }

  createClass(ObjectFitPolyfill, [{
    key: '_isObjectFitAvailable',
    value: function _isObjectFitAvailable() {
      return 'objectFit' in document.documentElement.style;
    }
  }, {
    key: '_onSectionEvent',
    value: function _onSectionEvent(event) {
      this._init(event.target);
    }
  }, {
    key: '_checkElement',
    value: function _checkElement(data) {
      if (!data.el) {
        return console.warn('No element specified to check for object-fit');
      }

      this._init(data.el);
    }
  }, {
    key: '_init',
    value: function _init(el) {
      if (this._isObjectFitAvailable()) {
        return;
      }

      var $items = jquery$1('[data-object-fit-item]', el);

      $items.each(function (i, item) {
        var $item = jquery$1(item);
        var $image = jquery$1('img', $item);

        // Don't re-run on processed elements, or if there is no image
        if ($item.hasClass(classes.objectFit.noObjectFit) || !$image.length) {
          return console.warn('Element already has been checked for object fit compatibility');
        }

        var src = $image.attr('src');

        $item.css('background-image', 'url("' + src + '")').addClass(classes.objectFit.noObjectFit);
      });
    }
  }]);
  return ObjectFitPolyfill;
}();

var Newsletter = function Newsletter() {
  classCallCheck(this, Newsletter);

  this.$body = jquery$1(document.body);
  this.$formPosted = this.$body.find(selectors.newsletter.formPosted);

  if (this.$formPosted.length) {
    var scrollTop = this.$formPosted.eq(0).parents('.shopify-section').offset().top;

    jquery$1('html, body').animate({
      scrollTop: scrollTop
    }, 500, 'linear');
  }
};

var observer = new MutationObserver(function (mutations) {
  // Access list of all 'disabled' mutations
  mutations.forEach(function (mutation) {
    var target = mutation.target;

    if (target.classList.contains(classes.form.formElements.el)) {
      var parent = target.parentElement;

      if (target.disabled) {
        parent.classList.add(classes.form.formElements.disabled);
      } else {
        parent.classList.remove(classes.form.formElements.disabled);
      }
    }
  });
});

// Observe the document body, filter to only disabled events
observer.observe(document.body, {
  subtree: true,
  attributes: true,
  attributeFilter: ['disabled']
});

'use strict';

// forEach method, could be shipped as part of an Object Literal/Module
function forEach(array, callback, scope) {
  var index = 0;

  for (index = 0; index < array.length; index += 1) {
    callback.call(scope, array[index], index); // passes back stuff we need
  }
}

function hasClass(el, className) {
  var regex = new RegExp('^' + className + '| +' + className, 'g');

  return el.className.match(regex);
}

function addClass(el, className) {
  // Return if it already has the className
  if (hasClass(el, className)) return;

  el.className += ' ' + className;
}

function removeClass(el, className) {
  // Return if it doesn't already have the className
  if (!hasClass(el, className)) return;

  var regex = new RegExp('^' + className + '| +' + className, 'g');

  el.className = el.className.replace(regex, '');
}

function toggleClass(el, className) {
  if (hasClass(el, className)) {
    removeClass(el, className);
  } else {
    addClass(el, className);
  }
}

function findPairingFromPairingTrigger(pairings, pairingTrigger) {
  var foundPairing = null;

  forEach(pairings, function (pairing) {
    if (pairing.trigger === pairingTrigger) {
      foundPairing = pairing;
    }
  });

  return foundPairing;
}

/**
 * See {@link https://stackoverflow.com/revisions/2117523/11 Stack Overflow}
 * An RFC4122 v4 compliant uuid solution
 */
function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0;
    var v = c === 'x' ? r : r & 0x3 | 0x8;

    return v.toString(16);
  });
}

function init$1(groupedContent) {
  var triggers = groupedContent.triggers;
  var pairings = groupedContent.pairings;

  triggers.setAttribute('role', 'tablist');

  forEach(pairings, function (pairing, index) {
    pairing.trigger.setAttribute('role', 'tab');
    pairing.trigger.setAttribute('aria-controls', groupedContent.namespace + '-' + groupedContent.id + '-' + index + '-content');

    if (pairing.trigger.children.length > 0) {
      forEach(pairing.trigger.children, function (child) {
        child.setAttribute('tabIndex', '-1');
      });
    }

    if (hasClass(pairing.trigger, 'active')) {
      pairing.trigger.setAttribute('aria-selected', 'true');
      pairing.trigger.setAttribute('tabIndex', '0');
    } else {
      pairing.trigger.setAttribute('tabIndex', '-1');
    }

    pairing.content.id = groupedContent.namespace + '-' + groupedContent.id + '-' + index + '-content';
    pairing.content.setAttribute('role', 'tabpanel');

    if (!hasClass(pairing.content, 'active')) {
      pairing.content.setAttribute('aria-hidden', 'true');
    }
  });
}

function update$1(groupedContent) {
  var pairings = groupedContent.pairings;

  forEach(pairings, function (pairing) {
    pairing.trigger.removeAttribute('aria-selected');
    pairing.content.removeAttribute('aria-hidden');

    if (hasClass(pairing.trigger, 'active')) {
      pairing.trigger.setAttribute('aria-selected', 'true');
      pairing.trigger.setAttribute('tabIndex', '0');
    } else {
      pairing.trigger.setAttribute('tabIndex', '-1');
    }

    if (!hasClass(pairing.content, 'active')) {
      pairing.content.setAttribute('aria-hidden', 'true');
    }
  });
}

var a11y = {
  init: init$1,
  update: update$1
};

var asyncGenerator$1 = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck$1 = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass$1 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/** A class for creating, managing, and destroying groupable content as tabs. */

var TabsLayout = function () {
  function TabsLayout(groupedContent) {
    classCallCheck$1(this, TabsLayout);

    this.groupedContent = groupedContent;
    this.pairings = groupedContent.pairings;
    this.events = [];

    this._handleKeydown = this._handleKeydown.bind(this);
    this._handleClick = this._handleClick.bind(this);

    this._init();
    a11y.init(this.groupedContent);
  }

  createClass$1(TabsLayout, [{
    key: 'unload',
    value: function unload() {
      forEach(this.events, function (event) {
        event.trigger.removeEventListener(event.type, event.fn);
      });
    }
  }, {
    key: '_init',
    value: function _init() {
      var _this = this;

      var existingActive = false;

      forEach(this.pairings, function (pairing) {
        var trigger = pairing.trigger;

        if (hasClass(trigger, 'active')) {
          existingActive = true;
        }

        trigger.addEventListener('keydown', _this._handleKeydown);
        trigger.addEventListener('click', _this._handleClick);

        _this.events.push({
          trigger: trigger,
          type: 'keydown',
          fn: _this._handleKeydown
        });

        _this.events.push({
          trigger: trigger,
          type: 'click',
          fn: _this._handleClick
        });
      });

      if (!existingActive) {
        addClass(this.pairings[0].trigger, 'active');
        addClass(this.pairings[0].content, 'active');
      }
    }
  }, {
    key: '_handleKeydown',
    value: function _handleKeydown(event) {
      var trigger = event.currentTarget;
      var pairing = findPairingFromPairingTrigger(this.pairings, trigger);
      var pairingIndex = this.pairings.indexOf(pairing);
      var prevIndex = pairingIndex - 1 < 0 ? this.pairings.length - 1 : pairingIndex - 1;
      var nextIndex = pairingIndex + 1 >= this.pairings.length ? 0 : pairingIndex + 1;

      var nextPairing = null;

      switch (event.key) {
        case 'ArrowLeft':
          nextPairing = this.pairings[prevIndex];
          break;
        case 'ArrowRight':
          nextPairing = this.pairings[nextIndex];
          break;
        default:
          nextPairing = null;
          break;
      }

      // Fast exit if we can't find the tab or tabs
      if (nextPairing === null) return;

      event.preventDefault();

      forEach(this.pairings, function (inactivePairing) {
        removeClass(inactivePairing.trigger, 'active');
        removeClass(inactivePairing.content, 'active');
      });

      addClass(nextPairing.trigger, 'active');
      addClass(nextPairing.content, 'active');

      nextPairing.trigger.focus();

      a11y.update(this.groupedContent);
    }
  }, {
    key: '_handleClick',
    value: function _handleClick(event) {
      var trigger = event.currentTarget;
      var pairing = findPairingFromPairingTrigger(this.pairings, trigger);

      // Fast exit if we can't find the tab or tabs
      if (pairing === null) return;

      event.preventDefault();

      forEach(this.pairings, function (inactivePairing) {
        removeClass(inactivePairing.trigger, 'active');
        removeClass(inactivePairing.content, 'active');
      });

      addClass(pairing.trigger, 'active');
      addClass(pairing.content, 'active');

      a11y.update(this.groupedContent);
    }
  }]);
  return TabsLayout;
}();

function init$1$1(groupedContent) {
  var pairings = groupedContent.pairings;

  forEach(pairings, function (pairing, index) {
    pairing.trigger.setAttribute('role', 'button');
    pairing.trigger.setAttribute('aria-controls', groupedContent.namespace + '-' + groupedContent.id + '-' + index + '-content');
    pairing.trigger.setAttribute('tabIndex', '0');

    if (pairing.trigger.children.length > 0) {
      forEach(pairing.trigger.children, function (child) {
        child.setAttribute('tabIndex', '-1');
      });
    }

    if (hasClass(pairing.trigger, 'active')) {
      pairing.trigger.setAttribute('aria-expanded', 'true');
    } else {
      pairing.trigger.setAttribute('aria-expanded', 'false');
    }

    pairing.content.id = groupedContent.namespace + '-' + groupedContent.id + '-' + index + '-content';

    if (!hasClass(pairing.content, 'active')) {
      pairing.content.setAttribute('aria-hidden', 'true');
    }
  });
}

function update$1$1(groupedContent) {
  var pairings = groupedContent.pairings;

  forEach(pairings, function (pairing) {
    pairing.content.removeAttribute('aria-hidden');

    if (hasClass(pairing.trigger, 'active')) {
      pairing.trigger.setAttribute('aria-expanded', 'true');
    } else {
      pairing.trigger.setAttribute('aria-expanded', 'false');
    }

    if (!hasClass(pairing.content, 'active')) {
      pairing.content.setAttribute('aria-hidden', 'true');
    }
  });
}

var a11y$1 = {
  init: init$1$1,
  update: update$1$1
};

/** A class for creating, managing, and destroying groupable content as an accordion. */

var AccordionLayout = function () {
  function AccordionLayout(groupedContent) {
    classCallCheck$1(this, AccordionLayout);

    this.groupedContent = groupedContent;
    this.pairings = groupedContent.pairings;
    this.events = [];

    this._handleKeydown = this._handleKeydown.bind(this);
    this._handleClick = this._handleClick.bind(this);

    this._init(this.pairings);
    a11y$1.init(this.groupedContent);
  }

  createClass$1(AccordionLayout, [{
    key: 'unload',
    value: function unload() {
      forEach(this.events, function (event) {
        event.trigger.removeEventListener(event.type, event.fn);
      });
    }
  }, {
    key: '_init',
    value: function _init() {
      var _this = this;

      forEach(this.pairings, function (pairing) {
        var trigger = pairing.trigger;
        var content = pairing.content;

        trigger.parentNode.insertBefore(content, trigger.nextSibling);

        trigger.addEventListener('keydown', _this._handleKeydown);
        trigger.addEventListener('click', _this._handleClick);

        _this.events.push({
          trigger: trigger,
          type: 'keydown',
          fn: _this._handleKeydown
        });

        _this.events.push({
          trigger: trigger,
          type: 'click',
          fn: _this._handleClick
        });
      });

      this.groupedContent.contents.remove();
    }
  }, {
    key: '_handleKeydown',
    value: function _handleKeydown(event) {
      var trigger = event.currentTarget;
      var pairing = findPairingFromPairingTrigger(this.pairings, trigger);

      // Fast exit if enter isn't pressed or we can't find the group
      if (event.key !== 'Enter' || pairing === null) return;

      event.preventDefault();

      toggleClass(pairing.trigger, 'active');
      toggleClass(pairing.content, 'active');
      a11y$1.update(this.groupedContent);
    }
  }, {
    key: '_handleClick',
    value: function _handleClick(event) {
      var trigger = event.currentTarget;
      var pairing = findPairingFromPairingTrigger(this.pairings, trigger);

      // Fast exit if we can't find the group
      if (pairing === null) return;

      event.preventDefault();

      toggleClass(pairing.trigger, 'active');
      toggleClass(pairing.content, 'active');
      a11y$1.update(this.groupedContent);
    }
  }]);
  return AccordionLayout;
}();

/**
 * Returns an array of nodes related to the heading node.
 * @param {node} heading - The heading node to search for content from.
 * @returns {node[]}
 */
function getHeadingContent(heading) {
  var headingTagNames = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];
  var tagNameIndex = headingTagNames.indexOf(heading.tagName);
  var content = [];

  var sibling = heading.nextElementSibling;

  while (sibling !== null && (headingTagNames.indexOf(sibling.tagName) === -1 || headingTagNames.indexOf(sibling.tagName) > tagNameIndex)) {
    content.push(sibling);

    sibling = sibling.nextElementSibling;
  }

  return content;
}

/**
 * Returns an object array representing the heading tree from a given node.
 * Root nodes are evaluated differently, and requires the evaluatingRoot flag
 * to be true.
 * @param {node} el - The node being evaluated.
 * @param {node[]} children - The children of the evaluated node.
 * @param {boolean} [evaluatingRoot] - Whether to evaluate as root node.
 * @returns {Object[]}
 */
function getHeadingTree(el, children) {
  var evaluatingRoot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var headingTagNames = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];
  var tagNameIndex = headingTagNames.indexOf(el.tagName);
  var headings = [];

  var currentLowestTagNameIndex = 5;

  for (var i = 0; i < children.length; i += 1) {
    var child = children[i];
    var childTagNameIndex = headingTagNames.indexOf(child.tagName);

    if (childTagNameIndex !== -1 && childTagNameIndex < currentLowestTagNameIndex) {
      currentLowestTagNameIndex = childTagNameIndex;
    }

    if (evaluatingRoot && childTagNameIndex !== -1 && childTagNameIndex <= currentLowestTagNameIndex || !evaluatingRoot && childTagNameIndex !== -1 && childTagNameIndex === tagNameIndex + 1) {
      var siblings = getHeadingContent(child);

      var childNode = {
        el: child,
        content: siblings,
        children: getHeadingTree(child, siblings)
      };

      headings.push(childNode);
    }
  }

  return headings;
}

/**
 * Returns groupings of headings that meet the minimum sequence value
 * and don't contain any invalid headings.
 * @param {Object[]} headings - An array of heading objects.
 * @param {int[]} invalidHeadings - An array of invalid heading integers,
 *                                  representing indexes of headings.
 * @param {*} minInSequence - Minimum headings in sequence before being considered
 *                            as a grouping.
 * @returns {Object[][]}
 */
function getHeadingGroupsInSequence(headings, invalidHeadings, minInSequence) {
  var headingGroupsInSequence = [];
  var currentHeadingGroupInSequence = [];
  var currentSequence = 0;

  for (var i = 0; i < headings.length; i += 1) {
    if (invalidHeadings.indexOf(i) === -1) {
      currentHeadingGroupInSequence.push(headings[i]);
      currentSequence += 1;

      if (i !== headings.length - 1 && headings[i].el.tagName !== headings[i + 1].el.tagName && invalidHeadings.indexOf(i + 1)) {
        currentHeadingGroupInSequence = [];
        currentSequence = 0;
      } else if (i !== 0 && headings[i].el.tagName !== headings[i - 1].el.tagName) {
        currentHeadingGroupInSequence.pop();
        currentSequence -= 1;

        if (currentSequence >= minInSequence) {
          headingGroupsInSequence.push(currentHeadingGroupInSequence);
        }

        currentHeadingGroupInSequence = [headings[i]];
        currentSequence = 1;
      }
    }
  }

  if (currentSequence >= minInSequence) {
    headingGroupsInSequence.push(currentHeadingGroupInSequence);
  }

  return headingGroupsInSequence;
}

/**
 * Generates necessary DOM elements to group related content.
 * Returns a object array representing the grouped content.
 * @param {Object[]} children - An array of objects.
 * @returns {Object[]}
 */
function createGroupedContent(children) {
  var pairings = [];

  var firstChild = children[0].el;
  var triggers = document.createElement('div');
  var contents = document.createElement('div');

  contents = firstChild.parentNode.insertBefore(contents, firstChild.nextSibling);
  triggers = firstChild.parentNode.insertBefore(triggers, firstChild.nextSibling);

  for (var i = 0; i < children.length; i += 1) {
    var child = children[i];
    var trigger = child.el;
    var content = document.createElement('div');

    trigger = triggers.appendChild(trigger);
    content = contents.appendChild(content);

    for (var j = 0; j < child.content.length; j += 1) {
      content.appendChild(child.content[j]);
    }

    pairings.push({
      trigger: trigger,
      content: content
    });
  }

  return {
    triggers: triggers,
    contents: contents,
    pairings: pairings
  };
}

/**
 * Returns all groupable content within the supplied node.
 * @param {node} node - A node to traverse for groupable content.
 * @returns {Object[][]}
 */
/*
 * Recursive function:
 *  Returns all groups of headings that
 *  are elegible to become grouped content.
 */
function getGroupedContentSet(node) {
  var children = node.children;
  var childrenWithGroupableContent = [];
  var groupedContentSet = [];

  if (children.length === 0) {
    return [];
  }

  for (var i = 0; i < children.length; i += 1) {
    var childGroupableContent = getGroupedContentSet(children[i]);

    if (childGroupableContent.length > 0) {
      childrenWithGroupableContent.push(i);
      groupedContentSet = groupedContentSet.concat(childGroupableContent);
    }
  }

  var headingGroupsInSequence = getHeadingGroupsInSequence(children, childrenWithGroupableContent, 3);

  for (var _i = 0; _i < headingGroupsInSequence.length; _i += 1) {
    groupedContentSet.push(createGroupedContent(headingGroupsInSequence[_i]));
  }

  return groupedContentSet;
}

/**
 * When static parsing isn't enough, there's intelliparse™!
 * Searches through dom content to find heading groupings that
 * are elegible to become tab groups.
 * Assumes that content is in a flattened hierarchy in the dom
 * and interprets increasing heading values as a deeper level of nesting.
 * Returns all groupable content as an array of object arrays.
 * @param {node} el - The node who's content will be searched for groupable content.
 * @returns {Object[][]}
 */
function intelliParse(el) {
  var children = el.children;
  var heading = el.querySelector('h1, h2, h3, h4, h5, h6');

  // Fast return if there's no headings
  if (children.length === 0) return [];

  var rootNode = {
    el: el,
    content: null,
    children: getHeadingTree(heading, children, true)
  };

  return getGroupedContentSet(rootNode);
}

/**
 * Parses content from a given node based on a static structure.
 * The structure is as follows:
 * <ul class="tabs">
 *   <li class="active">Tab 1</li>
 *   <li>Tab 2</li>
 *   <li>Tab 3</li>
 * </ul>
 *
 * <ul class="tabs-content">
 *   <li class="active">
 *     <p>Tab 1 content goes here.</p>
 *   </li>
 *   <li>
 *     <p>Tab 2 content goes here.</p>
 *   </li>
 *   <li>
 *     <p>Tab 3 content goes here.</p>
 *   </li>
 * </ul>
 * Returns all groupable content as an array of object arrays.
 * @param {node} el - The node who's content will be searched for groupable content.
 * @returns {Object[][]}
 */
function staticParse(el) {
  var groupedContentSet = [];

  var tabs = el.querySelectorAll('.tabs');

  for (var i = 0; i < tabs.length; i += 1) {
    var triggers = tabs[i].children;
    var contents = tabs[i].nextElementSibling.children;

    // Only add a tab group if equal triggers to contents
    if (triggers.length === contents.length) {
      var length = groupedContentSet.push({
        triggers: tabs[i],
        contents: tabs[i].nextElementSibling,
        pairings: []
      });
      var index = length - 1;

      for (var j = 0; j < triggers.length; j += 1) {
        var trigger = triggers[j];
        var content = contents[j];

        var pairing = {
          trigger: trigger,
          content: content
        };

        groupedContentSet[index].pairings.push(pairing);
      }
    }
  }

  return groupedContentSet;
}

/**
 * Returns all groupable content as an array of object arrays.
 * @param {node} content - The node to parse for groupable content.
 * @param {boolean} intelliparse - Whether to use intelligent parsing.
 * @returns {Object[][]}
 */
function parse(content) {
  var intelliparse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var groupedContentSet = intelliparse ? intelliParse(content) : staticParse(content);

  return groupedContentSet;
}

/** A class for creating, managing, and destroying groupable content. */

var GroupedContent = function () {
  /**
   * Create grouped content
   * @param {node} el - The element to search for groupable content in.
   * @param {Object}  [options] - Additional options
   * @param {string}  [options.layout] - The layout to display groupable content in.
   * @param {boolean} [options.intelliparse] - The parsing algorithm used to find content with.
   */
  function GroupedContent(el) {
    var _this = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    classCallCheck$1(this, GroupedContent);

    this.namespace = 'grouped-content';
    this.el = el;
    this.groupedContentInstances = [];

    var layout = options.layout || 'tabs';
    var intelliparse = !!options.intelliparse;

    forEach(parse(el, intelliparse), function (groupedContent) {
      var id = uuidv4();
      var instance = null;
      var groupedContentWrapper = document.createElement('div');

      groupedContentWrapper = groupedContent.triggers.parentNode.insertBefore(groupedContentWrapper, groupedContent.triggers.nextSibling);

      addClass(groupedContentWrapper, _this.namespace);
      addClass(groupedContentWrapper, _this.namespace + '-layout-' + layout);

      groupedContentWrapper.appendChild(groupedContent.triggers);
      groupedContentWrapper.appendChild(groupedContent.contents);

      groupedContent.namespace = _this.namespace;
      groupedContent.id = id;
      groupedContent.triggers.id = _this.namespace + '-' + id + '-triggers';
      groupedContent.contents.id = _this.namespace + '-' + id + '-contents';

      addClass(groupedContent.triggers, _this.namespace + '-triggers');
      addClass(groupedContent.contents, _this.namespace + '-contents');

      forEach(groupedContent.pairings, function (pairing) {
        addClass(pairing.trigger, _this.namespace + '-trigger');
        addClass(pairing.content, _this.namespace + '-content');
      });

      switch (layout) {
        case 'accordion':
          instance = new AccordionLayout(groupedContent);
          break;
        case 'tabs':
        default:
          instance = new TabsLayout(groupedContent);
          break;
      }

      _this.groupedContentInstances.push({
        groupedContent: groupedContent,
        instance: instance
      });
    });
  }

  /** Unload all grouped content instances */


  createClass$1(GroupedContent, [{
    key: 'unload',
    value: function unload() {
      forEach(this.groupedContentInstances, function (groupedContentInstance) {
        groupedContentInstance.instance.unload();
      });
    }
  }]);
  return GroupedContent;
}();

var dist$1 = GroupedContent;

'use strict';

var selectors$1 = [
	'iframe[src*="player.vimeo.com"]',
	'iframe[src*="youtube.com"]',
	'iframe[src*="youtube-nocookie.com"]',
	'iframe[src*="kickstarter.com"][src*="video.html"]',
	'object'
];

var css = '.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';

var fitvids = function (parentSelector, opts) {
	parentSelector = parentSelector || 'body';
	opts = opts || {};

	if (isObject(parentSelector)) {
		opts = parentSelector;
		parentSelector = 'body';
	}

	opts.ignore = opts.ignore || '';
	opts.players = opts.players || '';

	var containers = queryAll(parentSelector);
	if (!hasLength(containers)) return

	if (!document.getElementById('fit-vids-style')) {
		var head = document.head || document.getElementsByTagName('head')[0];
		head.appendChild(styles());
	}

	var custom = toSelectorArray(opts.players) || [];
	var ignored = toSelectorArray(opts.ignore) || [];
	var selector = selectors$1
		.filter(notIgnored(ignored))
		.concat(custom)
		.join();

	if (!hasLength(selector)) return

	containers.forEach(function (container) {
		var videos = queryAll(container, selector);
		videos.forEach(function (video) {
			wrap(video);
		});
	});
};

function queryAll (el, selector) {
	if (typeof el === 'string') {
		selector = el;
		el = document;
	}
	return Array.prototype.slice.call(el.querySelectorAll(selector))
}

function toSelectorArray (input) {
	if (typeof input === 'string') {
		return input.split(',').map(trim).filter(hasLength)
	} else if (isArray(input)) {
		return flatten(input.map(toSelectorArray).filter(hasLength))
	}
	return input || []
}

function wrap (el) {
	if (/fluid-width-video-wrapper/.test(el.parentNode.className)) return

	var widthAttr = parseInt(el.getAttribute('width'), 10);
	var heightAttr = parseInt(el.getAttribute('height'), 10);

	var width = !isNaN(widthAttr) ? widthAttr : el.clientWidth;
	var height = !isNaN(heightAttr) ? heightAttr : el.clientHeight;
	var aspect = height / width;

	el.removeAttribute('width');
	el.removeAttribute('height');

	var wrapper = document.createElement('div');
	el.parentNode.insertBefore(wrapper, el);
	wrapper.className = 'fluid-width-video-wrapper';
	wrapper.style.paddingTop = (aspect * 100) + '%';
	wrapper.appendChild(el);
}

function styles () {
	var div = document.createElement('div');
	div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + '</style>';
	return div.childNodes[1]
}

function notIgnored (ignored) {
	if (ignored.length < 1) {
		return function () {
			return true
		}
	}
	return function (selector) {
		return ignored.indexOf(selector) === -1
	}
}

function hasLength (input) {
	return input.length > 0
}

function trim (str) {
	return str.replace(/^\s+|\s+$/g, '')
}

function flatten (input) {
	return [].concat.apply([], input)
}

function isObject (input) {
	return Object.prototype.toString.call(input) === '[object Object]'
}

function isArray (input) {
	return Object.prototype.toString.call(input) === '[object Array]'
}

var RichText = function () {
  function RichText(el) {
    var layout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'tabs';
    classCallCheck(this, RichText);

    this.el = el;

    fitvids();
    this.groupedContent = new dist$1(this.el, { layout: layout, intelliparse: false });

    this._initExternalLinks(el);
  }

  createClass(RichText, [{
    key: 'unload',
    value: function unload() {
      this.groupedContent.unload();
    }

    /**
     * Open links within an RTE field in a new window if they point to external domains
     *
     * @private
     */

  }, {
    key: '_initExternalLinks',
    value: function _initExternalLinks(el) {
      var anchors = $(el).find('a[href^="http"]').filter(function (i, el) {
        return el.href.indexOf(location.hostname) === -1;
      });

      anchors.attr('target', '_blank');
    }
  }]);
  return RichText;
}();

var Page = function Page() {
  classCallCheck(this, Page);

  this.rteEl = document.querySelector('[data-rte]');
  this.rte = this.rteEl ? new RichText(this.rteEl) : false;
};

var ScrollLock = function () {
  function ScrollLock() {
    classCallCheck(this, ScrollLock);

    this.body = document.body;
    this.html = document.querySelector('html');
    this.blockScroll = this._blockScroll.bind(this);
  }

  createClass(ScrollLock, [{
    key: 'lock',
    value: function lock() {
      this.html.classList.add(classes.scrollLock.locked);
      this.body.style.top = -1 * window.pageYOffset;
      this.body.addEventListener('scroll', this.blockScroll, false);
    }
  }, {
    key: 'unlock',
    value: function unlock() {
      this.html.classList.remove(classes.scrollLock.locked);
      this.body.style.top = '';
      this.body.removeEventListener('scroll', this.blockScroll, false);
    }
  }, {
    key: '_blockScroll',
    value: function _blockScroll(event) {
      event.preventDefault();
    }
  }]);
  return ScrollLock;
}();

var dist$2 = createCommonjsModule(function (module, exports) {
(function (global, factory) {
  if (typeof undefined === "function" && undefined.amd) {
    undefined(['exports'], factory);
  } else {
    factory(exports);
  }
})(commonjsGlobal, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var defaults = {
    modal: '.modal',
    modalInner: '.modal-inner',
    modalContent: '.modal-content',
    open: '[data-modal-open]',
    close: '[data-modal-close]',
    page: 'body',
    class: 'modal-visible',
    loadClass: 'vanilla-modal',
    clickOutside: true,
    closeKeys: [27],
    transitions: true,
    transitionEnd: null,
    onBeforeOpen: null,
    onBeforeClose: null,
    onOpen: null,
    onClose: null
  };

  function throwError(message) {
    // eslint-disable-next-line no-console
    console.error('VanillaModal: ' + message);
  }

  function find(arr, callback) {
    return function (key) {
      var filteredArray = arr.filter(callback);
      return filteredArray[0] ? filteredArray[0][key] : undefined;
    };
  }

  function transitionEndVendorSniff() {
    var el = document.createElement('div');
    var transitions = [{ key: 'transition', value: 'transitionend' }, { key: 'OTransition', value: 'otransitionend' }, { key: 'MozTransition', value: 'transitionend' }, { key: 'WebkitTransition', value: 'webkitTransitionEnd' }];
    return find(transitions, function (_ref) {
      var key = _ref.key;
      return typeof el.style[key] !== 'undefined';
    })('value');
  }

  function isPopulatedArray(arr) {
    return Object.prototype.toString.call(arr) === '[object Array]' && arr.length;
  }

  function getNode(selector, parent) {
    var targetNode = parent || document;
    var node = targetNode.querySelector(selector);
    if (!node) {
      throwError(selector + ' not found in document.');
    }
    return node;
  }

  function addClass(el, className) {
    if (!(el instanceof HTMLElement)) {
      throwError('Not a valid HTML element.');
    }
    el.setAttribute('class', el.className.split(' ').filter(function (cn) {
      return cn !== className;
    }).concat(className).join(' '));
  }

  function removeClass(el, className) {
    if (!(el instanceof HTMLElement)) {
      throwError('Not a valid HTML element.');
    }
    el.setAttribute('class', el.className.split(' ').filter(function (cn) {
      return cn !== className;
    }).join(' '));
  }

  function getElementContext(e) {
    if (e && typeof e.hash === 'string') {
      return document.querySelector(e.hash);
    } else if (typeof e === 'string') {
      return document.querySelector(e);
    }
    throwError('No selector supplied to open()');
    return null;
  }

  function applyUserSettings(settings) {
    return _extends({}, defaults, settings, {
      transitionEnd: transitionEndVendorSniff()
    });
  }

  function matches(e, selector) {
    var allMatches = (e.target.document || e.target.ownerDocument).querySelectorAll(selector);
    for (var i = 0; i < allMatches.length; i += 1) {
      var node = e.target;
      while (node && node !== document.body) {
        if (node === allMatches[i]) {
          return node;
        }
        node = node.parentNode;
      }
    }
    return null;
  }

  var VanillaModal = function () {
    function VanillaModal(settings) {
      _classCallCheck(this, VanillaModal);

      this.isOpen = false;
      this.current = null;
      this.isListening = false;

      this.settings = applyUserSettings(settings);
      this.dom = this.getDomNodes();

      this.open = this.open.bind(this);
      this.close = this.close.bind(this);
      this.closeKeyHandler = this.closeKeyHandler.bind(this);
      this.outsideClickHandler = this.outsideClickHandler.bind(this);
      this.delegateOpen = this.delegateOpen.bind(this);
      this.delegateClose = this.delegateClose.bind(this);
      this.listen = this.listen.bind(this);
      this.destroy = this.destroy.bind(this);

      this.addLoadedCssClass();
      this.listen();
    }

    _createClass(VanillaModal, [{
      key: 'getDomNodes',
      value: function getDomNodes() {
        var _settings = this.settings,
            modal = _settings.modal,
            page = _settings.page,
            modalInner = _settings.modalInner,
            modalContent = _settings.modalContent;

        return {
          modal: getNode(modal),
          page: getNode(page),
          modalInner: getNode(modalInner, getNode(modal)),
          modalContent: getNode(modalContent, getNode(modal))
        };
      }
    }, {
      key: 'addLoadedCssClass',
      value: function addLoadedCssClass() {
        addClass(this.dom.page, this.settings.loadClass);
      }
    }, {
      key: 'setOpenId',
      value: function setOpenId(id) {
        var page = this.dom.page;

        page.setAttribute('data-current-modal', id || 'anonymous');
      }
    }, {
      key: 'removeOpenId',
      value: function removeOpenId() {
        var page = this.dom.page;

        page.removeAttribute('data-current-modal');
      }
    }, {
      key: 'open',
      value: function open(allMatches, e) {
        var page = this.dom.page;
        var _settings2 = this.settings,
            onBeforeOpen = _settings2.onBeforeOpen,
            onOpen = _settings2.onOpen;

        this.closeModal(e);
        if (!(this.current instanceof HTMLElement === false)) {
          throwError('VanillaModal target must exist on page.');
          return;
        }
        this.releaseNode(this.current);
        this.current = getElementContext(allMatches);
        if (typeof onBeforeOpen === 'function') {
          onBeforeOpen.call(this, e);
        }
        this.captureNode(this.current);
        addClass(page, this.settings.class);
        this.setOpenId(this.current.id);
        this.isOpen = true;
        if (typeof onOpen === 'function') {
          onOpen.call(this, e);
        }
      }
    }, {
      key: 'detectTransition',
      value: function detectTransition() {
        var modal = this.dom.modal;

        var css = window.getComputedStyle(modal, null);
        return Boolean(['transitionDuration', 'oTransitionDuration', 'MozTransitionDuration', 'webkitTransitionDuration'].filter(function (i) {
          return typeof css[i] === 'string' && parseFloat(css[i]) > 0;
        }).length);
      }
    }, {
      key: 'close',
      value: function close(e) {
        var _settings3 = this.settings,
            transitions = _settings3.transitions,
            transitionEnd = _settings3.transitionEnd,
            onBeforeClose = _settings3.onBeforeClose;

        var hasTransition = this.detectTransition();
        if (this.isOpen) {
          this.isOpen = false;
          if (typeof onBeforeClose === 'function') {
            onBeforeClose.call(this, e);
          }
          removeClass(this.dom.page, this.settings.class);
          if (transitions && transitionEnd && hasTransition) {
            this.closeModalWithTransition(e);
          } else {
            this.closeModal(e);
          }
        }
      }
    }, {
      key: 'closeModal',
      value: function closeModal(e) {
        var onClose = this.settings.onClose;

        this.removeOpenId(this.dom.page);
        this.releaseNode(this.current);
        this.isOpen = false;
        this.current = null;
        if (typeof onClose === 'function') {
          onClose.call(this, e);
        }
      }
    }, {
      key: 'closeModalWithTransition',
      value: function closeModalWithTransition(e) {
        var _this = this;

        var modal = this.dom.modal;
        var transitionEnd = this.settings.transitionEnd;

        var closeTransitionHandler = function closeTransitionHandler() {
          modal.removeEventListener(transitionEnd, closeTransitionHandler);
          _this.closeModal(e);
        };
        modal.addEventListener(transitionEnd, closeTransitionHandler);
      }
    }, {
      key: 'captureNode',
      value: function captureNode(node) {
        var modalContent = this.dom.modalContent;

        while (node.childNodes.length) {
          modalContent.appendChild(node.childNodes[0]);
        }
      }
    }, {
      key: 'releaseNode',
      value: function releaseNode(node) {
        var modalContent = this.dom.modalContent;

        while (modalContent.childNodes.length) {
          node.appendChild(modalContent.childNodes[0]);
        }
      }
    }, {
      key: 'closeKeyHandler',
      value: function closeKeyHandler(e) {
        var closeKeys = this.settings.closeKeys;

        if (isPopulatedArray(closeKeys) && closeKeys.indexOf(e.which) > -1 && this.isOpen === true) {
          e.preventDefault();
          this.close(e);
        }
      }
    }, {
      key: 'outsideClickHandler',
      value: function outsideClickHandler(e) {
        var clickOutside = this.settings.clickOutside;
        var modalInner = this.dom.modalInner;

        if (clickOutside) {
          var node = e.target;
          while (node && node !== document.body) {
            if (node === modalInner) {
              return;
            }
            node = node.parentNode;
          }
          this.close(e);
        }
      }
    }, {
      key: 'delegateOpen',
      value: function delegateOpen(e) {
        var open = this.settings.open;

        var matchedNode = matches(e, open);
        if (matchedNode) {
          e.preventDefault();
          this.open(matchedNode, e);
        }
      }
    }, {
      key: 'delegateClose',
      value: function delegateClose(e) {
        var close = this.settings.close;

        if (matches(e, close)) {
          e.preventDefault();
          this.close(e);
        }
      }
    }, {
      key: 'listen',
      value: function listen() {
        var modal = this.dom.modal;

        if (!this.isListening) {
          modal.addEventListener('click', this.outsideClickHandler, false);
          document.addEventListener('keydown', this.closeKeyHandler, false);
          document.addEventListener('click', this.delegateOpen, false);
          document.addEventListener('click', this.delegateClose, false);
          this.isListening = true;
        } else {
          throwError('Event listeners already applied.');
        }
      }
    }, {
      key: 'destroy',
      value: function destroy() {
        var modal = this.dom.modal;

        if (this.isListening) {
          this.close();
          modal.removeEventListener('click', this.outsideClickHandler);
          document.removeEventListener('keydown', this.closeKeyHandler);
          document.removeEventListener('click', this.delegateOpen);
          document.removeEventListener('click', this.delegateClose);
          this.isListening = false;
        } else {
          throwError('Event listeners already removed.');
        }
      }
    }]);

    return VanillaModal;
  }();

  exports.default = VanillaModal;
});
});

var VanillaModal = unwrapExports(dist$2);

var Modal = function () {
  function Modal() {
    var callbacks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, Modal);

    this.$body = jquery$1(document.body);
    this.$window = jquery$1(window);

    this.modal = null;
    this.$modal = jquery$1(selectors.modal.wrapper);

    this.scrollLock = new ScrollLock();

    // Extend default vanilla-modal callbacks back to instantiator of Modal
    this.defaultCallbacks = {
      onOpen: function onOpen() {},
      onClose: function onClose() {},
      onBeforeShow: function onBeforeShow() {},
      onBeforeOpen: function onBeforeOpen() {},
      onBeforeClose: function onBeforeClose() {}
    };

    this.callbacks = jquery$1.extend({}, this.defaultCallbacks, callbacks);

    this._onOpen = this._onOpen.bind(this);
    this._onBeforeOpen = this._onBeforeOpen.bind(this);
    this._onBeforeShow = this._onBeforeShow.bind(this);
    this._onClose = this._onClose.bind(this);
    this._onBeforeClose = this._onBeforeClose.bind(this);

    this.modalOptions = {
      loadClass: '',
      class: 'modal-loaded',
      onOpen: this._onOpen,
      onClose: this._onClose,
      onBeforeOpen: this._onBeforeOpen,
      onBeforeClose: this._onBeforeClose,
      transitions: false
    };
  }

  createClass(Modal, [{
    key: 'unload',
    value: function unload() {
      if (!this.modal || !this.modal.isOpen) {
        return;
      }

      this.modal.destroy();
    }

    /**
     * Open a modal with contents from selector
     *
     * @param selector
     * @param handle
     */

  }, {
    key: 'open',
    value: function open(selector) {
      var handle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'general';

      if (this.modal && this.modal.isOpen) {
        return;
      }

      this._addModalClass(handle);
      this.modal = new VanillaModal(this.modalOptions);
      this.modal.open(selector);
    }
  }, {
    key: 'close',
    value: function close() {
      this.modal.close();
    }
  }, {
    key: 'isOpen',
    value: function isOpen() {
      return this.modal && this.modal.isOpen;
    }

    /**
     * Add a class to the modal for individual styling
     * @param handle
     * @private
     */

  }, {
    key: '_addModalClass',
    value: function _addModalClass(handle) {
      this.$modal.addClass('modal-' + handle);
    }

    /**
     * Remove modal class based on the handle
     * @private
     */

  }, {
    key: '_removeModalClass',
    value: function _removeModalClass() {
      var modalClass = this.$modal.attr('class').match(/modal-[\w-]*\b/);
      if (!modalClass) {
        return;
      }

      this.$modal.removeClass(modalClass[0]);
    }
  }, {
    key: '_onClose',
    value: function _onClose() {
      var _this = this;

      this._removeModalClass();
      this.$modal.revealer('hide').one('trend', function () {
        _this.scrollLock.unlock();
        _this.callbacks.onClose();
      });
    }
  }, {
    key: '_onOpen',
    value: function _onOpen() {
      var _this2 = this;

      this._onBeforeShow();
      this.$modal.revealer('show').one('trend', function () {
        _this2.scrollLock.lock();
        _this2.callbacks.onOpen(_this2.$modal);
      });
    }
  }, {
    key: '_onBeforeClose',
    value: function _onBeforeClose() {
      this.callbacks.onBeforeClose();
    }
  }, {
    key: '_onBeforeShow',
    value: function _onBeforeShow() {
      this.callbacks.onBeforeShow();
    }
  }, {
    key: '_onBeforeOpen',
    value: function _onBeforeOpen() {
      this.callbacks.onBeforeOpen();
    }
  }]);
  return Modal;
}();

var eventHandlers = [];

function getBreakpoint() {
  return window.getComputedStyle(document.documentElement, ':after').getPropertyValue('content').replace(/"/g, '');
}

var previousBreakpoint = getBreakpoint();

jquery$1(window).on('resize', function (event) {
  var currentBreakpoint = getBreakpoint();

  if (previousBreakpoint !== currentBreakpoint) {
    eventHandlers.forEach(function (eventHandler) {
      eventHandler(event, {
        previous: previousBreakpoint,
        current: currentBreakpoint
      });
    });
  }

  previousBreakpoint = currentBreakpoint;
});

function isBreakpoint(breakpoint) {
  return getBreakpoint() === breakpoint;
}

function onBreakpointChange(eventHandler) {
  if (eventHandlers.indexOf(eventHandler) === -1) {
    eventHandlers.push(eventHandler);
  }
}

function offBreakpointChange(eventHandler) {
  var index = eventHandlers.indexOf(eventHandler);

  if (index !== -1) {
    eventHandlers.splice(index, 1);
  }
}

function crossesThreshold() {
  var previous = previousBreakpoint;
  var current = getBreakpoint();

  var mobileSizes = ['XS', 'S'];
  var desktopSizes = ['M', 'L', 'XL'];

  var desktopToMobile = desktopSizes.indexOf(previous) >= 0 && mobileSizes.indexOf(current) >= 0;
  var mobileToDesktop = mobileSizes.indexOf(previous) >= 0 && desktopSizes.indexOf(current) >= 0;

  return desktopToMobile || mobileToDesktop;
}

var layout = {
  getBreakpoint: getBreakpoint,
  isBreakpoint: isBreakpoint,
  onBreakpointChange: onBreakpointChange,
  offBreakpointChange: offBreakpointChange,
  crossesThreshold: crossesThreshold
};

'use strict';

var moneyFormats = {
  USD: {
    'money_format': '${{amount}}',
    'money_with_currency_format': '${{amount}} USD'
  },
  EUR: {
    'money_format': '&euro;{{amount}}',
    'money_with_currency_format': '&euro;{{amount}} EUR'
  },
  GBP: {
    'money_format': '&pound;{{amount}}',
    'money_with_currency_format': '&pound;{{amount}} GBP'
  },
  CAD: {
    'money_format': '${{amount}}',
    'money_with_currency_format': '${{amount}} CAD'
  },
  ALL: {
    'money_format': 'Lek {{amount}}',
    'money_with_currency_format': 'Lek {{amount}} ALL'
  },
  DZD: {
    'money_format': 'DA {{amount}}',
    'money_with_currency_format': 'DA {{amount}} DZD'
  },
  AOA: {
    'money_format': 'Kz{{amount}}',
    'money_with_currency_format': 'Kz{{amount}} AOA'
  },
  ARS: {
    'money_format': '${{amount_with_comma_separator}}',
    'money_with_currency_format': '${{amount_with_comma_separator}} ARS'
  },
  AMD: {
    'money_format': '{{amount}} AMD',
    'money_with_currency_format': '{{amount}} AMD'
  },
  AWG: {
    'money_format': 'Afl{{amount}}',
    'money_with_currency_format': 'Afl{{amount}} AWG'
  },
  AUD: {
    'money_format': '${{amount}}',
    'money_with_currency_format': '${{amount}} AUD'
  },
  BBD: {
    'money_format': '${{amount}}',
    'money_with_currency_format': '${{amount}} Bds'
  },
  AZN: {
    'money_format': 'm.{{amount}}',
    'money_with_currency_format': 'm.{{amount}} AZN'
  },
  BDT: {
    'money_format': 'Tk {{amount}}',
    'money_with_currency_format': 'Tk {{amount}} BDT'
  },
  BSD: {
    'money_format': 'BS${{amount}}',
    'money_with_currency_format': 'BS${{amount}} BSD'
  },
  BHD: {
    'money_format': '{{amount}}0 BD',
    'money_with_currency_format': '{{amount}}0 BHD'
  },
  BYR: {
    'money_format': 'Br {{amount}}',
    'money_with_currency_format': 'Br {{amount}} BYR'
  },
  BZD: {
    'money_format': 'BZ${{amount}}',
    'money_with_currency_format': 'BZ${{amount}} BZD'
  },
  BTN: {
    'money_format': 'Nu {{amount}}',
    'money_with_currency_format': 'Nu {{amount}} BTN'
  },
  BAM: {
    'money_format': 'KM {{amount_with_comma_separator}}',
    'money_with_currency_format': 'KM {{amount_with_comma_separator}} BAM'
  },
  BRL: {
    'money_format': 'R$ {{amount_with_comma_separator}}',
    'money_with_currency_format': 'R$ {{amount_with_comma_separator}} BRL'
  },
  BOB: {
    'money_format': 'Bs{{amount_with_comma_separator}}',
    'money_with_currency_format': 'Bs{{amount_with_comma_separator}} BOB'
  },
  BWP: {
    'money_format': 'P{{amount}}',
    'money_with_currency_format': 'P{{amount}} BWP'
  },
  BND: {
    'money_format': '${{amount}}',
    'money_with_currency_format': '${{amount}} BND'
  },
  BGN: {
    'money_format': '{{amount}} лв',
    'money_with_currency_format': '{{amount}} лв BGN'
  },
  MMK: {
    'money_format': 'K{{amount}}',
    'money_with_currency_format': 'K{{amount}} MMK'
  },
  KHR: {
    'money_format': 'KHR{{amount}}',
    'money_with_currency_format': 'KHR{{amount}}'
  },
  KYD: {
    'money_format': '${{amount}}',
    'money_with_currency_format': '${{amount}} KYD'
  },
  XAF: {
    'money_format': 'FCFA{{amount}}',
    'money_with_currency_format': 'FCFA{{amount}} XAF'
  },
  CLP: {
    'money_format': '${{amount_no_decimals}}',
    'money_with_currency_format': '${{amount_no_decimals}} CLP'
  },
  CNY: {
    'money_format': '&#165;{{amount}}',
    'money_with_currency_format': '&#165;{{amount}} CNY'
  },
  COP: {
    'money_format': '${{amount_with_comma_separator}}',
    'money_with_currency_format': '${{amount_with_comma_separator}} COP'
  },
  CRC: {
    'money_format': '&#8353; {{amount_with_comma_separator}}',
    'money_with_currency_format': '&#8353; {{amount_with_comma_separator}} CRC'
  },
  HRK: {
    'money_format': '{{amount_with_comma_separator}} kn',
    'money_with_currency_format': '{{amount_with_comma_separator}} kn HRK'
  },
  CZK: {
    'money_format': '{{amount_with_comma_separator}} K&#269;',
    'money_with_currency_format': '{{amount_with_comma_separator}} K&#269;'
  },
  DKK: {
    'money_format': '{{amount_with_comma_separator}}',
    'money_with_currency_format': 'kr.{{amount_with_comma_separator}}'
  },
  DOP: {
    'money_format': 'RD$ {{amount}}',
    'money_with_currency_format': 'RD$ {{amount}}'
  },
  XCD: {
    'money_format': '${{amount}}',
    'money_with_currency_format': 'EC${{amount}}'
  },
  EGP: {
    'money_format': 'LE {{amount}}',
    'money_with_currency_format': 'LE {{amount}} EGP'
  },
  ETB: {
    'money_format': 'Br{{amount}}',
    'money_with_currency_format': 'Br{{amount}} ETB'
  },
  XPF: {
    'money_format': '{{amount_no_decimals_with_comma_separator}} XPF',
    'money_with_currency_format': '{{amount_no_decimals_with_comma_separator}} XPF'
  },
  FJD: {
    'money_format': '${{amount}}',
    'money_with_currency_format': 'FJ${{amount}}'
  },
  GMD: {
    'money_format': 'D {{amount}}',
    'money_with_currency_format': 'D {{amount}} GMD'
  },
  GHS: {
    'money_format': 'GH&#8373;{{amount}}',
    'money_with_currency_format': 'GH&#8373;{{amount}}'
  },
  GTQ: {
    'money_format': 'Q{{amount}}',
    'money_with_currency_format': '{{amount}} GTQ'
  },
  GYD: {
    'money_format': 'G${{amount}}',
    'money_with_currency_format': '${{amount}} GYD'
  },
  GEL: {
    'money_format': '{{amount}} GEL',
    'money_with_currency_format': '{{amount}} GEL'
  },
  HNL: {
    'money_format': 'L {{amount}}',
    'money_with_currency_format': 'L {{amount}} HNL'
  },
  HKD: {
    'money_format': '${{amount}}',
    'money_with_currency_format': 'HK${{amount}}'
  },
  HUF: {
    'money_format': '{{amount_no_decimals_with_comma_separator}}',
    'money_with_currency_format': '{{amount_no_decimals_with_comma_separator}} Ft'
  },
  ISK: {
    'money_format': '{{amount_no_decimals}} kr',
    'money_with_currency_format': '{{amount_no_decimals}} kr ISK'
  },
  INR: {
    'money_format': 'Rs. {{amount}}',
    'money_with_currency_format': 'Rs. {{amount}}'
  },
  IDR: {
    'money_format': '{{amount_with_comma_separator}}',
    'money_with_currency_format': 'Rp {{amount_with_comma_separator}}'
  },
  ILS: {
    'money_format': '{{amount}} NIS',
    'money_with_currency_format': '{{amount}} NIS'
  },
  JMD: {
    'money_format': '${{amount}}',
    'money_with_currency_format': '${{amount}} JMD'
  },
  JPY: {
    'money_format': '&#165;{{amount_no_decimals}}',
    'money_with_currency_format': '&#165;{{amount_no_decimals}} JPY'
  },
  JEP: {
    'money_format': '&pound;{{amount}}',
    'money_with_currency_format': '&pound;{{amount}} JEP'
  },
  JOD: {
    'money_format': '{{amount}}0 JD',
    'money_with_currency_format': '{{amount}}0 JOD'
  },
  KZT: {
    'money_format': '{{amount}} KZT',
    'money_with_currency_format': '{{amount}} KZT'
  },
  KES: {
    'money_format': 'KSh{{amount}}',
    'money_with_currency_format': 'KSh{{amount}}'
  },
  KWD: {
    'money_format': '{{amount}}0 KD',
    'money_with_currency_format': '{{amount}}0 KWD'
  },
  KGS: {
    'money_format': 'лв{{amount}}',
    'money_with_currency_format': 'лв{{amount}}'
  },
  LVL: {
    'money_format': 'Ls {{amount}}',
    'money_with_currency_format': 'Ls {{amount}} LVL'
  },
  LBP: {
    'money_format': 'L&pound;{{amount}}',
    'money_with_currency_format': 'L&pound;{{amount}} LBP'
  },
  LTL: {
    'money_format': '{{amount}} Lt',
    'money_with_currency_format': '{{amount}} Lt'
  },
  MGA: {
    'money_format': 'Ar {{amount}}',
    'money_with_currency_format': 'Ar {{amount}} MGA'
  },
  MKD: {
    'money_format': 'ден {{amount}}',
    'money_with_currency_format': 'ден {{amount}} MKD'
  },
  MOP: {
    'money_format': 'MOP${{amount}}',
    'money_with_currency_format': 'MOP${{amount}}'
  },
  MVR: {
    'money_format': 'Rf{{amount}}',
    'money_with_currency_format': 'Rf{{amount}} MRf'
  },
  MXN: {
    'money_format': '$ {{amount}}',
    'money_with_currency_format': '$ {{amount}} MXN'
  },
  MYR: {
    'money_format': 'RM{{amount}} MYR',
    'money_with_currency_format': 'RM{{amount}} MYR'
  },
  MUR: {
    'money_format': 'Rs {{amount}}',
    'money_with_currency_format': 'Rs {{amount}} MUR'
  },
  MDL: {
    'money_format': '{{amount}} MDL',
    'money_with_currency_format': '{{amount}} MDL'
  },
  MAD: {
    'money_format': '{{amount}} dh',
    'money_with_currency_format': 'Dh {{amount}} MAD'
  },
  MNT: {
    'money_format': '{{amount_no_decimals}} &#8366',
    'money_with_currency_format': '{{amount_no_decimals}} MNT'
  },
  MZN: {
    'money_format': '{{amount}} Mt',
    'money_with_currency_format': 'Mt {{amount}} MZN'
  },
  NAD: {
    'money_format': 'N${{amount}}',
    'money_with_currency_format': 'N${{amount}} NAD'
  },
  NPR: {
    'money_format': 'Rs{{amount}}',
    'money_with_currency_format': 'Rs{{amount}} NPR'
  },
  ANG: {
    'money_format': '&fnof;{{amount}}',
    'money_with_currency_format': '{{amount}} NA&fnof;'
  },
  NZD: {
    'money_format': '${{amount}}',
    'money_with_currency_format': '${{amount}} NZD'
  },
  NIO: {
    'money_format': 'C${{amount}}',
    'money_with_currency_format': 'C${{amount}} NIO'
  },
  NGN: {
    'money_format': '&#8358;{{amount}}',
    'money_with_currency_format': '&#8358;{{amount}} NGN'
  },
  NOK: {
    'money_format': 'kr {{amount_with_comma_separator}}',
    'money_with_currency_format': 'kr {{amount_with_comma_separator}} NOK'
  },
  OMR: {
    'money_format': '{{amount_with_comma_separator}} OMR',
    'money_with_currency_format': '{{amount_with_comma_separator}} OMR'
  },
  PKR: {
    'money_format': 'Rs.{{amount}}',
    'money_with_currency_format': 'Rs.{{amount}} PKR'
  },
  PGK: {
    'money_format': 'K {{amount}}',
    'money_with_currency_format': 'K {{amount}} PGK'
  },
  PYG: {
    'money_format': 'Gs. {{amount_no_decimals_with_comma_separator}}',
    'money_with_currency_format': 'Gs. {{amount_no_decimals_with_comma_separator}} PYG'
  },
  PEN: {
    'money_format': 'S/. {{amount}}',
    'money_with_currency_format': 'S/. {{amount}} PEN'
  },
  PHP: {
    'money_format': '&#8369;{{amount}}',
    'money_with_currency_format': '&#8369;{{amount}} PHP'
  },
  PLN: {
    'money_format': '{{amount_with_comma_separator}} zl',
    'money_with_currency_format': '{{amount_with_comma_separator}} zl PLN'
  },
  QAR: {
    'money_format': 'QAR {{amount_with_comma_separator}}',
    'money_with_currency_format': 'QAR {{amount_with_comma_separator}}'
  },
  RON: {
    'money_format': '{{amount_with_comma_separator}} lei',
    'money_with_currency_format': '{{amount_with_comma_separator}} lei RON'
  },
  RUB: {
    'money_format': '&#1088;&#1091;&#1073;{{amount_with_comma_separator}}',
    'money_with_currency_format': '&#1088;&#1091;&#1073;{{amount_with_comma_separator}} RUB'
  },
  RWF: {
    'money_format': '{{amount_no_decimals}} RF',
    'money_with_currency_format': '{{amount_no_decimals}} RWF'
  },
  WST: {
    'money_format': 'WS$ {{amount}}',
    'money_with_currency_format': 'WS$ {{amount}} WST'
  },
  SAR: {
    'money_format': '{{amount}} SR',
    'money_with_currency_format': '{{amount}} SAR'
  },
  STD: {
    'money_format': 'Db {{amount}}',
    'money_with_currency_format': 'Db {{amount}} STD'
  },
  RSD: {
    'money_format': '{{amount}} RSD',
    'money_with_currency_format': '{{amount}} RSD'
  },
  SCR: {
    'money_format': 'Rs {{amount}}',
    'money_with_currency_format': 'Rs {{amount}} SCR'
  },
  SGD: {
    'money_format': '${{amount}}',
    'money_with_currency_format': '${{amount}} SGD'
  },
  SYP: {
    'money_format': 'S&pound;{{amount}}',
    'money_with_currency_format': 'S&pound;{{amount}} SYP'
  },
  ZAR: {
    'money_format': 'R {{amount}}',
    'money_with_currency_format': 'R {{amount}} ZAR'
  },
  KRW: {
    'money_format': '&#8361;{{amount_no_decimals}}',
    'money_with_currency_format': '&#8361;{{amount_no_decimals}} KRW'
  },
  LKR: {
    'money_format': 'Rs {{amount}}',
    'money_with_currency_format': 'Rs {{amount}} LKR'
  },
  SEK: {
    'money_format': '{{amount_no_decimals}} kr',
    'money_with_currency_format': '{{amount_no_decimals}} kr SEK'
  },
  CHF: {
    'money_format': 'SFr. {{amount}}',
    'money_with_currency_format': 'SFr. {{amount}} CHF'
  },
  TWD: {
    'money_format': '${{amount}}',
    'money_with_currency_format': '${{amount}} TWD'
  },
  THB: {
    'money_format': '{{amount}} &#xe3f;',
    'money_with_currency_format': '{{amount}} &#xe3f; THB'
  },
  TZS: {
    'money_format': '{{amount}} TZS',
    'money_with_currency_format': '{{amount}} TZS'
  },
  TTD: {
    'money_format': '${{amount}}',
    'money_with_currency_format': '${{amount}} TTD'
  },
  TND: {
    'money_format': '{{amount}}',
    'money_with_currency_format': '{{amount}} DT'
  },
  TRY: {
    'money_format': '{{amount}}TL',
    'money_with_currency_format': '{{amount}}TL'
  },
  UGX: {
    'money_format': 'Ush {{amount_no_decimals}}',
    'money_with_currency_format': 'Ush {{amount_no_decimals}} UGX'
  },
  UAH: {
    'money_format': '₴{{amount}}',
    'money_with_currency_format': '₴{{amount}} UAH'
  },
  AED: {
    'money_format': 'Dhs. {{amount}}',
    'money_with_currency_format': 'Dhs. {{amount}} AED'
  },
  UYU: {
    'money_format': '${{amount_with_comma_separator}}',
    'money_with_currency_format': '${{amount_with_comma_separator}} UYU'
  },
  VUV: {
    'money_format': '${{amount}}',
    'money_with_currency_format': '${{amount}}VT'
  },
  VEF: {
    'money_format': 'Bs. {{amount_with_comma_separator}}',
    'money_with_currency_format': 'Bs. {{amount_with_comma_separator}} VEF'
  },
  VND: {
    'money_format': '{{amount_no_decimals_with_comma_separator}}&#8363;',
    'money_with_currency_format': '{{amount_no_decimals_with_comma_separator}} VND'
  },
  XBT: {
    'money_format': '{{amount_no_decimals}} BTC',
    'money_with_currency_format': '{{amount_no_decimals}} BTC'
  },
  XOF: {
    'money_format': 'CFA{{amount}}',
    'money_with_currency_format': 'CFA{{amount}} XOF'
  },
  ZMW: {
    'money_format': 'K{{amount_no_decimals_with_comma_separator}}',
    'money_with_currency_format': 'ZMW{{amount_no_decimals_with_comma_separator}}'
  }
};

/**
 * Format a number to a specific format
 *
 * @param number {Number}
 * @param precision {Number}
 * @param thousands {String}
 * @param decimal {String}
 * @returns {String}
 */
function formatWithDelimiters(number) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var thousands = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ',';
  var decimal = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '.';

  if (isNaN(number) || !number) {
    return 0;
  }

  var preciseNumber = (number / 100.0).toFixed(precision);

  var parts = preciseNumber.split(thousands);
  var dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands);
  var centsAmount = parts[1] ? decimal + parts[1] : '';

  return dollarsAmount + centsAmount;
}

/**
 * Convert a money value in cents to a formatted currency string
 *
 * @param cents {Number|String}
 * @param format {String}
 * @returns {String}
 */
function formatMoney(cents, format) {
  if (typeof cents === 'string') {
    cents = cents.replace('.', '');
  }

  var value = '';
  var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;

  switch (format.match(placeholderRegex)[1]) {
    case 'amount':
      value = formatWithDelimiters(cents, 2, ',', '.');
      break;
    case 'amount_with_space_separator':
      value = formatWithDelimiters(cents, 2, ' ', '.');
      break;
    case 'amount_with_comma_separator':
      value = formatWithDelimiters(cents, 2, '.', ',');
      break;
    case 'amount_with_apostrophe_separator':
      value = formatWithDelimiters(cents, 2, '\'', '.');
      break;
    case 'amount_no_decimals':
      value = formatWithDelimiters(cents, 0, ',', '.');
      break;
    case 'amount_no_decimals_with_space_separator':
      value = formatWithDelimiters(cents, 0, ' ', '.');
      break;
    case 'amount_no_decimals_with_comma_separator':
      value = formatWithDelimiters(cents, 0, ',', '.');
      break;
  }

  return format.replace(placeholderRegex, value);
}

/**
 * Return the value of money in cents value
 *
 * @param moneyAmount {Number}
 * @param format {String}
 * @param currency {String}
 * @returns {Number}
 * @private
 */
function getCentsValue(moneyAmount, format, currency) {
  var cents = 0;
  // Convert prices from float values to integers if needed, then convert
  if (format.indexOf('amount_no_decimals') !== -1) {
    cents = moneyAmount * 100;
  } else if (currency === 'JOD' || currency === 'KWD' || currency === 'BHD') {
    cents = moneyAmount / 10;
  } else {
    cents = moneyAmount;
  }

  return cents;
}

/**
 * Converts formatted money to a number
 *
 * @param priceEl {HTMLElement}
 * @returns {Number|String}
 */
function getMoneyValue(priceEl) {
  var price = priceEl.textContent;
  var value = parseInt(price.replace(/[^0-9]/g, ''), 10);

  return !isNaN(value) ? value : '';
}

var classCallCheck$2 = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass$2 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var CurrencyConverter = function () {
  function CurrencyConverter() {
    classCallCheck$2(this, CurrencyConverter);

    /**
     * @property {object} defaults                       - The default configuration for CurrencyConverter
     * @property {string} defaults.switcherSelector      - CSS Selector for dropdown which controls currency conversion
     * @property {string} defaults.priceSelector         - CSS Selector for elements containing prices
     * @property {string} defaults.shopCurrency          - Shop's currency (Currency which prices are printed as)
     * @property {string} defaults.defaultCurrency       - Theme's currency setting, or initial currency to show on the page
     * @property {string} defaults.displayFormat         - `money_with_currency_format` or `money_format`
     * @property {string} defaults.moneyFormat           - Shop's currency formatted using the display format
     * @property {string} defaults.moneyFormatNoCurrency - Shop's currency formatted without showing currency
     * @property {string} defaults.moneyFormatCurrency   - Shop's currency formatted showing currency
     */
    this.defaults = {
      switcherSelector: '[data-currency-converter]',
      priceSelector: '.money',
      shopCurrency: '',
      defaultCurrency: '',
      displayFormat: '',
      moneyFormat: '',
      moneyFormatNoCurrency: '',
      moneyFormatCurrency: ''
    };

    this.options = {};
    this.moneyFormats = moneyFormats;
    this.storage = 'currency';
    this.currentCurrency = null;
    this.isInitialised = false;
  }

  createClass$2(CurrencyConverter, [{
    key: 'init',
    value: function init(settings) {
      var _this = this;

      if (!window.Currency || this.isInitialised) return;

      Object.keys(this.defaults).forEach(function (key) {
        _this.options[key] = settings[key] || _this.defaults[key];
      });

      this.currentCurrency = this._getStoredCurrency() || this.options.defaultCurrency;
      this.moneyFormats[this.options.shopCurrency].money_with_currency_format = this.options.moneyFormatCurrency;
      this.moneyFormats[this.options.shopCurrency].money_format = this.options.moneyFormatNoCurrency;

      this.isInitialised = true;
      this._current();
    }

    /**
     * Change the currency to a new currency using an ISO currency code
     *
     * @param newCurrency
     */

  }, {
    key: 'setCurrency',
    value: function setCurrency(newCurrency) {
      if (!this.isInitialised) return;

      this._convertAll(this.currentCurrency, newCurrency);
    }

    /**
     * Updates a price on the page to use the active Currency, and formatting
     *
     * @param priceEl {HTMLElement}
     */

  }, {
    key: 'update',
    value: function update(priceEl) {
      if (!this.isInitialised) return;

      var attributes = priceEl.attributes;
      for (var attr = 0; attr < attributes.length; attr++) {
        var attribute = attributes[attr];

        if (attribute.name.indexOf('data-currency') === 0) {
          priceEl.setAttribute(attribute.name, '');
        }
      }

      var moneyValue = getMoneyValue(priceEl);
      var centsValue = getCentsValue(moneyValue, this.options.moneyFormat, this.options.shopCurrency);

      // Cents value is empty, but not 0. 0$ is a valid price, while empty is not
      if (centsValue === '') return;

      var priceFormatted = formatMoney(centsValue, this.options.moneyFormat);

      priceEl.innerHTML = priceFormatted;
      priceEl.removeAttribute('data-currency');
      priceEl.setAttribute('data-currency-' + this.options.shopCurrency, priceFormatted);
      priceEl.setAttribute('data-currency', this.options.shopCurrency);

      this._convertEl(priceEl, this.options.shopCurrency, this.currentCurrency);
    }
  }, {
    key: '_getStoredCurrency',
    value: function _getStoredCurrency() {
      try {
        return localStorage.getItem(this.storage);
      } catch (error) {
        console.warn(error);
        return this.options.defaultCurrency;
      }
    }
  }, {
    key: '_setStoredCurrency',
    value: function _setStoredCurrency(currency) {
      try {
        localStorage.setItem(this.storage, currency);
      } catch (error) {
        console.warn(error);
      }
    }

    /**
     * Update the currency switcher to the current currency
     * @private
     */

  }, {
    key: '_current',
    value: function _current() {
      var switchers = document.querySelectorAll(this.options.switcherSelector);
      for (var i = 0; i < switchers.length; i++) {
        var switcher = switchers[i];

        var childrenEls = switcher.querySelectorAll('option');

        for (var _i = 0; _i < childrenEls.length; _i++) {
          var optionEl = childrenEls[_i];

          if (optionEl.selected && optionEl.value !== this.currentCurrency) {
            optionEl.selected = false;
          }

          if (optionEl.value === this.currentCurrency) {
            optionEl.selected = true;
          }
        }
      }

      this._convertAll(this.options.shopCurrency, this.currentCurrency);
    }

    /**
     * Converts an individual price to the new format
     *
     * @param priceEl
     * @param oldCurrency
     * @param newCurrency
     * @private
     */

  }, {
    key: '_convertEl',
    value: function _convertEl(priceEl, oldCurrency, newCurrency) {

      // If the amount has already been converted, we leave it alone.
      if (priceEl.getAttribute('data-currency') === newCurrency) {
        return;
      }

      // If we are converting to a currency that we have saved, we will use the saved amount.
      if (priceEl.getAttribute('data-currency-' + newCurrency)) {
        priceEl.innerHTML = priceEl.getAttribute('data-currency-' + newCurrency);
      } else {
        var oldFormat = this.moneyFormats[oldCurrency][this.options.displayFormat];
        var newFormat = this.moneyFormats[newCurrency][this.options.displayFormat];

        var moneyValue = getMoneyValue(priceEl);
        var centsValue = getCentsValue(moneyValue, oldFormat, oldCurrency);

        // Cents value is empty, but not 0. 0$ is a valid price, while empty is not
        if (centsValue === '') return;

        var cents = window.Currency.convert(centsValue, oldCurrency, newCurrency);
        var priceFormatted = formatMoney(cents, newFormat);

        priceEl.setAttribute('data-currency-' + newCurrency, priceFormatted);
        priceEl.innerHTML = priceFormatted;
      }

      priceEl.setAttribute('data-currency', newCurrency);
    }

    /**
     * Convert all prices on the page to the new currency
     *
     * @param oldCurrency
     * @param newCurrency
     * @private
     */

  }, {
    key: '_convertAll',
    value: function _convertAll(oldCurrency, newCurrency) {
      var priceEls = document.querySelectorAll(this.options.priceSelector);
      if (!priceEls) return;

      this.currentCurrency = newCurrency;
      this._setStoredCurrency(newCurrency);

      for (var i = 0; i < priceEls.length; i++) {
        this._convertEl(priceEls[i], oldCurrency, newCurrency);
      }
    }
  }]);
  return CurrencyConverter;
}();

var CurrencyConverter$1 = new CurrencyConverter();

var dist$3 = CurrencyConverter$1;

var PriceManager = function () {
  function PriceManager(el, moneyFormat) {
    classCallCheck(this, PriceManager);

    this.el = el;
    this.moneyFormat = moneyFormat || null;
    this.prices = el.querySelectorAll('.money');
  }

  /**
   * Update all prices within element
   *
   * TODO: If this needs to be used more abstractly, then change:
   * updateAll() to updateAll(els = this.prices), and update internal references
   */


  createClass(PriceManager, [{
    key: 'updateAll',
    value: function updateAll() {
      for (var i = 0; i < this.prices.length; i++) {
        this.updateCurrency(this.prices[i]);
      }
    }

    /**
     * Update a price to match store formatting
     *
     * @param el
     * @param price
     * @private
     */

  }, {
    key: 'updatePrice',
    value: function updatePrice(el, price) {
      el.innerHTML = Shopify.formatMoney(price, this.moneyFormat);
      this.updateCurrency(el);
    }

    /**
     * Update an element to match selected currency.
     *
     * @param el
     */

  }, {
    key: 'updateCurrency',
    value: function updateCurrency(el) {
      dist$3.update(el);
    }
  }]);
  return PriceManager;
}();

var script = createCommonjsModule(function (module) {
/*!
  * $script.js JS loader & dependency manager
  * https://github.com/ded/script.js
  * (c) Dustin Diaz 2014 | License MIT
  */

(function (name, definition) {
  if ('object' != 'undefined' && module.exports) module.exports = definition();
  else if (typeof undefined == 'function' && undefined.amd) undefined(definition);
  else this[name] = definition();
})('$script', function () {
  var doc = document
    , head = doc.getElementsByTagName('head')[0]
    , s = 'string'
    , f = false
    , push = 'push'
    , readyState = 'readyState'
    , onreadystatechange = 'onreadystatechange'
    , list = {}
    , ids = {}
    , delay = {}
    , scripts = {}
    , scriptpath
    , urlArgs;

  function every(ar, fn) {
    for (var i = 0, j = ar.length; i < j; ++i) if (!fn(ar[i])) return f
    return 1
  }
  function each(ar, fn) {
    every(ar, function (el) {
      return !fn(el)
    });
  }

  function $script(paths, idOrDone, optDone) {
    paths = paths[push] ? paths : [paths];
    var idOrDoneIsDone = idOrDone && idOrDone.call
      , done = idOrDoneIsDone ? idOrDone : optDone
      , id = idOrDoneIsDone ? paths.join('') : idOrDone
      , queue = paths.length;
    function loopFn(item) {
      return item.call ? item() : list[item]
    }
    function callback() {
      if (!--queue) {
        list[id] = 1;
        done && done();
        for (var dset in delay) {
          every(dset.split('|'), loopFn) && !each(delay[dset], loopFn) && (delay[dset] = []);
        }
      }
    }
    setTimeout(function () {
      each(paths, function loading(path, force) {
        if (path === null) return callback()
        
        if (!force && !/^https?:\/\//.test(path) && scriptpath) {
          path = (path.indexOf('.js') === -1) ? scriptpath + path + '.js' : scriptpath + path;
        }
        
        if (scripts[path]) {
          return (scripts[path] == 2) ? callback() : setTimeout(function () { loading(path, true); }, 0)
        }

        scripts[path] = 1;
        create(path, callback);
      });
    }, 0);
    return $script
  }

  function create(path, fn) {
    var el = doc.createElement('script'), loaded;
    el.onload = el.onerror = el[onreadystatechange] = function () {
      if ((el[readyState] && !(/^c|loade/.test(el[readyState]))) || loaded) return;
      el.onload = el[onreadystatechange] = null;
      loaded = 1;
      scripts[path] = 2;
      fn();
    };
    el.async = 1;
    el.src = urlArgs ? path + (path.indexOf('?') === -1 ? '?' : '&') + urlArgs : path;
    head.insertBefore(el, head.lastChild);
  }

  $script.get = create;

  $script.order = function (scripts, id, done) {
    (function callback(s) {
      s = scripts.shift();
      !scripts.length ? $script(s, id, done) : $script(s, callback);
    }());
  };

  $script.path = function (p) {
    scriptpath = p;
  };
  $script.urlArgs = function (str) {
    urlArgs = str;
  };
  $script.ready = function (deps, ready, req) {
    deps = deps[push] ? deps : [deps];
    var missing = [];
    !each(deps, function (dep) {
      list[dep] || missing[push](dep);
    }) && every(deps, function (dep) {return list[dep]}) ?
      ready() : !function (key) {
      delay[key] = delay[key] || [];
      delay[key][push](ready);
      req && req(missing);
    }(deps.join('|'));
    return $script
  };

  $script.done = function (idOrDone) {
    $script([null], idOrDone);
  };

  return $script
});
});

var justDebounce$1 = debounce;

function debounce (fn, delay, at_start, guarantee) {
  var timeout;
  var args;
  var self;

  return function debounced () {
    self = this;
    args = Array.prototype.slice.call(arguments);

    if (timeout && (at_start || guarantee)) {
      return
    } else if (!at_start) {
      clear();

      timeout = setTimeout(run, delay);
      return timeout
    }

    timeout = setTimeout(clear, delay);
    fn.apply(self, args);

    function run () {
      clear();
      fn.apply(self, args);
    }

    function clear () {
      clearTimeout(timeout);
      timeout = null;
    }
  }
}

var evEmitter = createCommonjsModule(function (module) {
/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if ( typeof undefined == 'function' && undefined.amd ) {
    // AMD - RequireJS
    undefined( factory );
  } else if ( 'object' == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory();
  } else {
    // Browser globals
    global.EvEmitter = factory();
  }

}( typeof window != 'undefined' ? window : commonjsGlobal, function() {

"use strict";

function EvEmitter() {}

var proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // set events hash
  var events = this._events = this._events || {};
  // set listeners array
  var listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( listeners.indexOf( listener ) == -1 ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  var onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  // copy over to avoid interference if .off() in listener
  listeners = listeners.slice(0);
  args = args || [];
  // once stuff
  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  for ( var i=0; i < listeners.length; i++ ) {
    var listener = listeners[i];
    var isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
  }

  return this;
};

proto.allOff = function() {
  delete this._events;
  delete this._onceEvents;
};

return EvEmitter;

}));
});

var getSize = createCommonjsModule(function (module) {
/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */
/* globals console: false */

( function( window, factory ) {
  /* jshint strict: false */ /* globals define, module */
  if ( typeof undefined == 'function' && undefined.amd ) {
    // AMD
    undefined( factory );
  } else if ( 'object' == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.getSize = factory();
  }

})( window, function factory() {
'use strict';

// -------------------------- helpers -------------------------- //

// get a number from a string, not a percentage
function getStyleSize( value ) {
  var num = parseFloat( value );
  // not a percent like '100%', and a number
  var isValid = value.indexOf('%') == -1 && !isNaN( num );
  return isValid && num;
}

function noop() {}

var logError = typeof console == 'undefined' ? noop :
  function( message ) {
    console.error( message );
  };

// -------------------------- measurements -------------------------- //

var measurements = [
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'borderBottomWidth'
];

var measurementsLength = measurements.length;

function getZeroSize() {
  var size = {
    width: 0,
    height: 0,
    innerWidth: 0,
    innerHeight: 0,
    outerWidth: 0,
    outerHeight: 0
  };
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    size[ measurement ] = 0;
  }
  return size;
}

// -------------------------- getStyle -------------------------- //

/**
 * getStyle, get style of element, check for Firefox bug
 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */
function getStyle( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    logError( 'Style returned ' + style +
      '. Are you running this code in a hidden iframe on Firefox? ' +
      'See https://bit.ly/getsizebug1' );
  }
  return style;
}

// -------------------------- setup -------------------------- //

var isSetup = false;

var isBoxSizeOuter;

/**
 * setup
 * check isBoxSizerOuter
 * do on first getSize() rather than on page load for Firefox bug
 */
function setup() {
  // setup once
  if ( isSetup ) {
    return;
  }
  isSetup = true;

  // -------------------------- box sizing -------------------------- //

  /**
   * Chrome & Safari measure the outer-width on style.width on border-box elems
   * IE11 & Firefox<29 measures the inner-width
   */
  var div = document.createElement('div');
  div.style.width = '200px';
  div.style.padding = '1px 2px 3px 4px';
  div.style.borderStyle = 'solid';
  div.style.borderWidth = '1px 2px 3px 4px';
  div.style.boxSizing = 'border-box';

  var body = document.body || document.documentElement;
  body.appendChild( div );
  var style = getStyle( div );
  // round value for browser zoom. desandro/masonry#928
  isBoxSizeOuter = Math.round( getStyleSize( style.width ) ) == 200;
  getSize.isBoxSizeOuter = isBoxSizeOuter;

  body.removeChild( div );
}

// -------------------------- getSize -------------------------- //

function getSize( elem ) {
  setup();

  // use querySeletor if elem is string
  if ( typeof elem == 'string' ) {
    elem = document.querySelector( elem );
  }

  // do not proceed on non-objects
  if ( !elem || typeof elem != 'object' || !elem.nodeType ) {
    return;
  }

  var style = getStyle( elem );

  // if hidden, everything is 0
  if ( style.display == 'none' ) {
    return getZeroSize();
  }

  var size = {};
  size.width = elem.offsetWidth;
  size.height = elem.offsetHeight;

  var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

  // get all measurements
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    var value = style[ measurement ];
    var num = parseFloat( value );
    // any 'auto', 'medium' value will be 0
    size[ measurement ] = !isNaN( num ) ? num : 0;
  }

  var paddingWidth = size.paddingLeft + size.paddingRight;
  var paddingHeight = size.paddingTop + size.paddingBottom;
  var marginWidth = size.marginLeft + size.marginRight;
  var marginHeight = size.marginTop + size.marginBottom;
  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
  var borderHeight = size.borderTopWidth + size.borderBottomWidth;

  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

  // overwrite width and height if we can get it from style
  var styleWidth = getStyleSize( style.width );
  if ( styleWidth !== false ) {
    size.width = styleWidth +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
  }

  var styleHeight = getStyleSize( style.height );
  if ( styleHeight !== false ) {
    size.height = styleHeight +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
  }

  size.innerWidth = size.width - ( paddingWidth + borderWidth );
  size.innerHeight = size.height - ( paddingHeight + borderHeight );

  size.outerWidth = size.width + marginWidth;
  size.outerHeight = size.height + marginHeight;

  return size;
}

return getSize;

});
});

var matchesSelector = createCommonjsModule(function (module) {
/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  /*global define: false, module: false */
  'use strict';
  // universal module definition
  if ( typeof undefined == 'function' && undefined.amd ) {
    // AMD
    undefined( factory );
  } else if ( 'object' == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.matchesSelector = factory();
  }

}( window, function factory() {
  'use strict';

  var matchesMethod = ( function() {
    var ElemProto = window.Element.prototype;
    // check for the standard method name first
    if ( ElemProto.matches ) {
      return 'matches';
    }
    // check un-prefixed
    if ( ElemProto.matchesSelector ) {
      return 'matchesSelector';
    }
    // check vendor prefixes
    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];

    for ( var i=0; i < prefixes.length; i++ ) {
      var prefix = prefixes[i];
      var method = prefix + 'MatchesSelector';
      if ( ElemProto[ method ] ) {
        return method;
      }
    }
  })();

  return function matchesSelector( elem, selector ) {
    return elem[ matchesMethod ]( selector );
  };

}));
});

var utils = createCommonjsModule(function (module) {
/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */

  if ( typeof undefined == 'function' && undefined.amd ) {
    // AMD
    undefined( [
      'desandro-matches-selector/matches-selector'
    ], function( matchesSelector$$1 ) {
      return factory( window, matchesSelector$$1 );
    });
  } else if ( 'object' == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      matchesSelector
    );
  } else {
    // browser global
    window.fizzyUIUtils = factory(
      window,
      window.matchesSelector
    );
  }

}( window, function factory( window, matchesSelector$$1 ) {

'use strict';

var utils = {};

// ----- extend ----- //

// extends objects
utils.extend = function( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
};

// ----- modulo ----- //

utils.modulo = function( num, div ) {
  return ( ( num % div ) + div ) % div;
};

// ----- makeArray ----- //

var arraySlice = Array.prototype.slice;

// turn element or nodeList into an array
utils.makeArray = function( obj ) {
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    return obj;
  }
  // return empty array if undefined or null. #6
  if ( obj === null || obj === undefined ) {
    return [];
  }

  var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  if ( isArrayLike ) {
    // convert nodeList to array
    return arraySlice.call( obj );
  }

  // array of single index
  return [ obj ];
};

// ----- removeFrom ----- //

utils.removeFrom = function( ary, obj ) {
  var index = ary.indexOf( obj );
  if ( index != -1 ) {
    ary.splice( index, 1 );
  }
};

// ----- getParent ----- //

utils.getParent = function( elem, selector ) {
  while ( elem.parentNode && elem != document.body ) {
    elem = elem.parentNode;
    if ( matchesSelector$$1( elem, selector ) ) {
      return elem;
    }
  }
};

// ----- getQueryElement ----- //

// use element as selector string
utils.getQueryElement = function( elem ) {
  if ( typeof elem == 'string' ) {
    return document.querySelector( elem );
  }
  return elem;
};

// ----- handleEvent ----- //

// enable .ontype to trigger from .addEventListener( elem, 'type' )
utils.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// ----- filterFindElements ----- //

utils.filterFindElements = function( elems, selector ) {
  // make array of elems
  elems = utils.makeArray( elems );
  var ffElems = [];

  elems.forEach( function( elem ) {
    // check that elem is an actual element
    if ( !( elem instanceof HTMLElement ) ) {
      return;
    }
    // add elem if no selector
    if ( !selector ) {
      ffElems.push( elem );
      return;
    }
    // filter & find items if we have a selector
    // filter
    if ( matchesSelector$$1( elem, selector ) ) {
      ffElems.push( elem );
    }
    // find children
    var childElems = elem.querySelectorAll( selector );
    // concat childElems to filterFound array
    for ( var i=0; i < childElems.length; i++ ) {
      ffElems.push( childElems[i] );
    }
  });

  return ffElems;
};

// ----- debounceMethod ----- //

utils.debounceMethod = function( _class, methodName, threshold ) {
  threshold = threshold || 100;
  // original method
  var method = _class.prototype[ methodName ];
  var timeoutName = methodName + 'Timeout';

  _class.prototype[ methodName ] = function() {
    var timeout = this[ timeoutName ];
    clearTimeout( timeout );

    var args = arguments;
    var _this = this;
    this[ timeoutName ] = setTimeout( function() {
      method.apply( _this, args );
      delete _this[ timeoutName ];
    }, threshold );
  };
};

// ----- docReady ----- //

utils.docReady = function( callback ) {
  var readyState = document.readyState;
  if ( readyState == 'complete' || readyState == 'interactive' ) {
    // do async to allow for other scripts to run. metafizzy/flickity#441
    setTimeout( callback );
  } else {
    document.addEventListener( 'DOMContentLoaded', callback );
  }
};

// ----- htmlInit ----- //

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
utils.toDashed = function( str ) {
  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
    return $1 + '-' + $2;
  }).toLowerCase();
};

var console = window.console;
/**
 * allow user to initialize classes via [data-namespace] or .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-options
 */
utils.htmlInit = function( WidgetClass, namespace ) {
  utils.docReady( function() {
    var dashedNamespace = utils.toDashed( namespace );
    var dataAttr = 'data-' + dashedNamespace;
    var dataAttrElems = document.querySelectorAll( '[' + dataAttr + ']' );
    var jsDashElems = document.querySelectorAll( '.js-' + dashedNamespace );
    var elems = utils.makeArray( dataAttrElems )
      .concat( utils.makeArray( jsDashElems ) );
    var dataOptionsAttr = dataAttr + '-options';
    var jQuery = window.jQuery;

    elems.forEach( function( elem ) {
      var attr = elem.getAttribute( dataAttr ) ||
        elem.getAttribute( dataOptionsAttr );
      var options;
      try {
        options = attr && JSON.parse( attr );
      } catch ( error ) {
        // log error, do not initialize
        if ( console ) {
          console.error( 'Error parsing ' + dataAttr + ' on ' + elem.className +
          ': ' + error );
        }
        return;
      }
      // initialize
      var instance = new WidgetClass( elem, options );
      // make available via $().data('namespace')
      if ( jQuery ) {
        jQuery.data( elem, namespace, instance );
      }
    });

  });
};

// -----  ----- //

return utils;

}));
});

var cell = createCommonjsModule(function (module) {
// Flickity.Cell
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof undefined == 'function' && undefined.amd ) {
    // AMD
    undefined( [
      'get-size/get-size'
    ], function( getSize$$1 ) {
      return factory( window, getSize$$1 );
    });
  } else if ( 'object' == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      getSize
    );
  } else {
    // browser global
    window.Flickity = window.Flickity || {};
    window.Flickity.Cell = factory(
      window,
      window.getSize
    );
  }

}( window, function factory( window, getSize$$1 ) {

'use strict';

function Cell( elem, parent ) {
  this.element = elem;
  this.parent = parent;

  this.create();
}

var proto = Cell.prototype;

proto.create = function() {
  this.element.style.position = 'absolute';
  this.element.setAttribute( 'aria-selected', 'false' );
  this.x = 0;
  this.shift = 0;
};

proto.destroy = function() {
  // reset style
  this.element.style.position = '';
  var side = this.parent.originSide;
  this.element.removeAttribute('aria-selected');
  this.element.style[ side ] = '';
};

proto.getSize = function() {
  this.size = getSize$$1( this.element );
};

proto.setPosition = function( x ) {
  this.x = x;
  this.updateTarget();
  this.renderPosition( x );
};

// setDefaultTarget v1 method, backwards compatibility, remove in v3
proto.updateTarget = proto.setDefaultTarget = function() {
  var marginProperty = this.parent.originSide == 'left' ? 'marginLeft' : 'marginRight';
  this.target = this.x + this.size[ marginProperty ] +
    this.size.width * this.parent.cellAlign;
};

proto.renderPosition = function( x ) {
  // render position of cell with in slider
  var side = this.parent.originSide;
  this.element.style[ side ] = this.parent.getPositionValue( x );
};

/**
 * @param {Integer} factor - 0, 1, or -1
**/
proto.wrapShift = function( shift ) {
  this.shift = shift;
  this.renderPosition( this.x + this.parent.slideableWidth * shift );
};

proto.remove = function() {
  this.element.parentNode.removeChild( this.element );
};

return Cell;

}));
});

var slide = createCommonjsModule(function (module) {
// slide
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof undefined == 'function' && undefined.amd ) {
    // AMD
    undefined( factory );
  } else if ( 'object' == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.Flickity = window.Flickity || {};
    window.Flickity.Slide = factory();
  }

}( window, function factory() {
'use strict';

function Slide( parent ) {
  this.parent = parent;
  this.isOriginLeft = parent.originSide == 'left';
  this.cells = [];
  this.outerWidth = 0;
  this.height = 0;
}

var proto = Slide.prototype;

proto.addCell = function( cell ) {
  this.cells.push( cell );
  this.outerWidth += cell.size.outerWidth;
  this.height = Math.max( cell.size.outerHeight, this.height );
  // first cell stuff
  if ( this.cells.length == 1 ) {
    this.x = cell.x; // x comes from first cell
    var beginMargin = this.isOriginLeft ? 'marginLeft' : 'marginRight';
    this.firstMargin = cell.size[ beginMargin ];
  }
};

proto.updateTarget = function() {
  var endMargin = this.isOriginLeft ? 'marginRight' : 'marginLeft';
  var lastCell = this.getLastCell();
  var lastMargin = lastCell ? lastCell.size[ endMargin ] : 0;
  var slideWidth = this.outerWidth - ( this.firstMargin + lastMargin );
  this.target = this.x + this.firstMargin + slideWidth * this.parent.cellAlign;
};

proto.getLastCell = function() {
  return this.cells[ this.cells.length - 1 ];
};

proto.select = function() {
  this.changeSelected( true );
};

proto.unselect = function() {
  this.changeSelected( false );
};

proto.changeSelected = function( isSelected ) {
  var classMethod = isSelected ? 'add' : 'remove';
  this.cells.forEach( function( cell ) {
    cell.element.classList[ classMethod ]('is-selected');
    cell.element.setAttribute( 'aria-selected', isSelected.toString() );
  });
};

proto.getCellElements = function() {
  return this.cells.map( function( cell ) {
    return cell.element;
  });
};

return Slide;

}));
});

var animate = createCommonjsModule(function (module) {
// animate
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof undefined == 'function' && undefined.amd ) {
    // AMD
    undefined( [
      'fizzy-ui-utils/utils'
    ], function( utils$$1 ) {
      return factory( window, utils$$1 );
    });
  } else if ( 'object' == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      utils
    );
  } else {
    // browser global
    window.Flickity = window.Flickity || {};
    window.Flickity.animatePrototype = factory(
      window,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, utils$$1 ) {

'use strict';

// -------------------------- animate -------------------------- //

var proto = {};

proto.startAnimation = function() {
  if ( this.isAnimating ) {
    return;
  }

  this.isAnimating = true;
  this.restingFrames = 0;
  this.animate();
};

proto.animate = function() {
  this.applyDragForce();
  this.applySelectedAttraction();

  var previousX = this.x;

  this.integratePhysics();
  this.positionSlider();
  this.settle( previousX );
  // animate next frame
  if ( this.isAnimating ) {
    var _this = this;
    requestAnimationFrame( function animateFrame() {
      _this.animate();
    });
  }
};

proto.positionSlider = function() {
  var x = this.x;
  // wrap position around
  if ( this.options.wrapAround && this.cells.length > 1 ) {
    x = utils$$1.modulo( x, this.slideableWidth );
    x = x - this.slideableWidth;
    this.shiftWrapCells( x );
  }

  x = x + this.cursorPosition;
  // reverse if right-to-left and using transform
  x = this.options.rightToLeft ? -x : x;
  var value = this.getPositionValue( x );
  // use 3D tranforms for hardware acceleration on iOS
  // but use 2D when settled, for better font-rendering
  this.slider.style.transform = this.isAnimating ?
    'translate3d(' + value + ',0,0)' : 'translateX(' + value + ')';

  // scroll event
  var firstSlide = this.slides[0];
  if ( firstSlide ) {
    var positionX = -this.x - firstSlide.target;
    var progress = positionX / this.slidesWidth;
    this.dispatchEvent( 'scroll', null, [ progress, positionX ] );
  }
};

proto.positionSliderAtSelected = function() {
  if ( !this.cells.length ) {
    return;
  }
  this.x = -this.selectedSlide.target;
  this.velocity = 0; // stop wobble
  this.positionSlider();
};

proto.getPositionValue = function( position ) {
  if ( this.options.percentPosition ) {
    // percent position, round to 2 digits, like 12.34%
    return ( Math.round( ( position / this.size.innerWidth ) * 10000 ) * 0.01 )+ '%';
  } else {
    // pixel positioning
    return Math.round( position ) + 'px';
  }
};

proto.settle = function( previousX ) {
  // keep track of frames where x hasn't moved
  if ( !this.isPointerDown && Math.round( this.x * 100 ) == Math.round( previousX * 100 ) ) {
    this.restingFrames++;
  }
  // stop animating if resting for 3 or more frames
  if ( this.restingFrames > 2 ) {
    this.isAnimating = false;
    delete this.isFreeScrolling;
    // render position with translateX when settled
    this.positionSlider();
    this.dispatchEvent( 'settle', null, [ this.selectedIndex ] );
  }
};

proto.shiftWrapCells = function( x ) {
  // shift before cells
  var beforeGap = this.cursorPosition + x;
  this._shiftCells( this.beforeShiftCells, beforeGap, -1 );
  // shift after cells
  var afterGap = this.size.innerWidth - ( x + this.slideableWidth + this.cursorPosition );
  this._shiftCells( this.afterShiftCells, afterGap, 1 );
};

proto._shiftCells = function( cells, gap, shift ) {
  for ( var i=0; i < cells.length; i++ ) {
    var cell = cells[i];
    var cellShift = gap > 0 ? shift : 0;
    cell.wrapShift( cellShift );
    gap -= cell.size.outerWidth;
  }
};

proto._unshiftCells = function( cells ) {
  if ( !cells || !cells.length ) {
    return;
  }
  for ( var i=0; i < cells.length; i++ ) {
    cells[i].wrapShift( 0 );
  }
};

// -------------------------- physics -------------------------- //

proto.integratePhysics = function() {
  this.x += this.velocity;
  this.velocity *= this.getFrictionFactor();
};

proto.applyForce = function( force ) {
  this.velocity += force;
};

proto.getFrictionFactor = function() {
  return 1 - this.options[ this.isFreeScrolling ? 'freeScrollFriction' : 'friction' ];
};

proto.getRestingPosition = function() {
  // my thanks to Steven Wittens, who simplified this math greatly
  return this.x + this.velocity / ( 1 - this.getFrictionFactor() );
};

proto.applyDragForce = function() {
  if ( !this.isDraggable || !this.isPointerDown ) {
    return;
  }
  // change the position to drag position by applying force
  var dragVelocity = this.dragX - this.x;
  var dragForce = dragVelocity - this.velocity;
  this.applyForce( dragForce );
};

proto.applySelectedAttraction = function() {
  // do not attract if pointer down or no slides
  var dragDown = this.isDraggable && this.isPointerDown;
  if ( dragDown || this.isFreeScrolling || !this.slides.length ) {
    return;
  }
  var distance = this.selectedSlide.target * -1 - this.x;
  var force = distance * this.options.selectedAttraction;
  this.applyForce( force );
};

return proto;

}));
});

var flickity = createCommonjsModule(function (module) {
// Flickity main
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof undefined == 'function' && undefined.amd ) {
    // AMD
    undefined( [
      'ev-emitter/ev-emitter',
      'get-size/get-size',
      'fizzy-ui-utils/utils',
      './cell',
      './slide',
      './animate'
    ], function( EvEmitter, getSize$$1, utils$$1, Cell, Slide, animatePrototype ) {
      return factory( window, EvEmitter, getSize$$1, utils$$1, Cell, Slide, animatePrototype );
    });
  } else if ( 'object' == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      evEmitter,
      getSize,
      utils,
      cell,
      slide,
      animate
    );
  } else {
    // browser global
    var _Flickity = window.Flickity;

    window.Flickity = factory(
      window,
      window.EvEmitter,
      window.getSize,
      window.fizzyUIUtils,
      _Flickity.Cell,
      _Flickity.Slide,
      _Flickity.animatePrototype
    );
  }

}( window, function factory( window, EvEmitter, getSize$$1,
  utils$$1, Cell, Slide, animatePrototype ) {

'use strict';

// vars
var jQuery = window.jQuery;
var getComputedStyle = window.getComputedStyle;
var console = window.console;

function moveElements( elems, toElem ) {
  elems = utils$$1.makeArray( elems );
  while ( elems.length ) {
    toElem.appendChild( elems.shift() );
  }
}

// -------------------------- Flickity -------------------------- //

// globally unique identifiers
var GUID = 0;
// internal store of all Flickity intances
var instances = {};

function Flickity( element, options ) {
  var queryElement = utils$$1.getQueryElement( element );
  if ( !queryElement ) {
    if ( console ) {
      console.error( 'Bad element for Flickity: ' + ( queryElement || element ) );
    }
    return;
  }
  this.element = queryElement;
  // do not initialize twice on same element
  if ( this.element.flickityGUID ) {
    var instance = instances[ this.element.flickityGUID ];
    instance.option( options );
    return instance;
  }

  // add jQuery
  if ( jQuery ) {
    this.$element = jQuery( this.element );
  }
  // options
  this.options = utils$$1.extend( {}, this.constructor.defaults );
  this.option( options );

  // kick things off
  this._create();
}

Flickity.defaults = {
  accessibility: true,
  // adaptiveHeight: false,
  cellAlign: 'center',
  // cellSelector: undefined,
  // contain: false,
  freeScrollFriction: 0.075, // friction when free-scrolling
  friction: 0.28, // friction when selecting
  namespaceJQueryEvents: true,
  // initialIndex: 0,
  percentPosition: true,
  resize: true,
  selectedAttraction: 0.025,
  setGallerySize: true
  // watchCSS: false,
  // wrapAround: false
};

// hash of methods triggered on _create()
Flickity.createMethods = [];

var proto = Flickity.prototype;
// inherit EventEmitter
utils$$1.extend( proto, EvEmitter.prototype );

proto._create = function() {
  // add id for Flickity.data
  var id = this.guid = ++GUID;
  this.element.flickityGUID = id; // expando
  instances[ id ] = this; // associate via id
  // initial properties
  this.selectedIndex = 0;
  // how many frames slider has been in same position
  this.restingFrames = 0;
  // initial physics properties
  this.x = 0;
  this.velocity = 0;
  this.originSide = this.options.rightToLeft ? 'right' : 'left';
  // create viewport & slider
  this.viewport = document.createElement('div');
  this.viewport.className = 'flickity-viewport';
  this._createSlider();

  if ( this.options.resize || this.options.watchCSS ) {
    window.addEventListener( 'resize', this );
  }

  // add listeners from on option
  for ( var eventName in this.options.on ) {
    var listener = this.options.on[ eventName ];
    this.on( eventName, listener );
  }

  Flickity.createMethods.forEach( function( method ) {
    this[ method ]();
  }, this );

  if ( this.options.watchCSS ) {
    this.watchCSS();
  } else {
    this.activate();
  }

};

/**
 * set options
 * @param {Object} opts
 */
proto.option = function( opts ) {
  utils$$1.extend( this.options, opts );
};

proto.activate = function() {
  if ( this.isActive ) {
    return;
  }
  this.isActive = true;
  this.element.classList.add('flickity-enabled');
  if ( this.options.rightToLeft ) {
    this.element.classList.add('flickity-rtl');
  }

  this.getSize();
  // move initial cell elements so they can be loaded as cells
  var cellElems = this._filterFindCellElements( this.element.children );
  moveElements( cellElems, this.slider );
  this.viewport.appendChild( this.slider );
  this.element.appendChild( this.viewport );
  // get cells from children
  this.reloadCells();

  if ( this.options.accessibility ) {
    // allow element to focusable
    this.element.tabIndex = 0;
    // listen for key presses
    this.element.addEventListener( 'keydown', this );
  }

  this.emitEvent('activate');

  var index;
  var initialIndex = this.options.initialIndex;
  if ( this.isInitActivated ) {
    index = this.selectedIndex;
  } else if ( initialIndex !== undefined ) {
    index = this.cells[ initialIndex ] ? initialIndex : 0;
  } else {
    index = 0;
  }
  // select instantly
  this.select( index, false, true );
  // flag for initial activation, for using initialIndex
  this.isInitActivated = true;
  // ready event. #493
  this.dispatchEvent('ready');
};

// slider positions the cells
proto._createSlider = function() {
  // slider element does all the positioning
  var slider = document.createElement('div');
  slider.className = 'flickity-slider';
  slider.style[ this.originSide ] = 0;
  this.slider = slider;
};

proto._filterFindCellElements = function( elems ) {
  return utils$$1.filterFindElements( elems, this.options.cellSelector );
};

// goes through all children
proto.reloadCells = function() {
  // collection of item elements
  this.cells = this._makeCells( this.slider.children );
  this.positionCells();
  this._getWrapShiftCells();
  this.setGallerySize();
};

/**
 * turn elements into Flickity.Cells
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Flickity Cells
 */
proto._makeCells = function( elems ) {
  var cellElems = this._filterFindCellElements( elems );

  // create new Flickity for collection
  var cells = cellElems.map( function( cellElem ) {
    return new Cell( cellElem, this );
  }, this );

  return cells;
};

proto.getLastCell = function() {
  return this.cells[ this.cells.length - 1 ];
};

proto.getLastSlide = function() {
  return this.slides[ this.slides.length - 1 ];
};

// positions all cells
proto.positionCells = function() {
  // size all cells
  this._sizeCells( this.cells );
  // position all cells
  this._positionCells( 0 );
};

/**
 * position certain cells
 * @param {Integer} index - which cell to start with
 */
proto._positionCells = function( index ) {
  index = index || 0;
  // also measure maxCellHeight
  // start 0 if positioning all cells
  this.maxCellHeight = index ? this.maxCellHeight || 0 : 0;
  var cellX = 0;
  // get cellX
  if ( index > 0 ) {
    var startCell = this.cells[ index - 1 ];
    cellX = startCell.x + startCell.size.outerWidth;
  }
  var len = this.cells.length;
  for ( var i=index; i < len; i++ ) {
    var cell$$1 = this.cells[i];
    cell$$1.setPosition( cellX );
    cellX += cell$$1.size.outerWidth;
    this.maxCellHeight = Math.max( cell$$1.size.outerHeight, this.maxCellHeight );
  }
  // keep track of cellX for wrap-around
  this.slideableWidth = cellX;
  // slides
  this.updateSlides();
  // contain slides target
  this._containSlides();
  // update slidesWidth
  this.slidesWidth = len ? this.getLastSlide().target - this.slides[0].target : 0;
};

/**
 * cell.getSize() on multiple cells
 * @param {Array} cells
 */
proto._sizeCells = function( cells ) {
  cells.forEach( function( cell$$1 ) {
    cell$$1.getSize();
  });
};

// --------------------------  -------------------------- //

proto.updateSlides = function() {
  this.slides = [];
  if ( !this.cells.length ) {
    return;
  }

  var slide$$1 = new Slide( this );
  this.slides.push( slide$$1 );
  var isOriginLeft = this.originSide == 'left';
  var nextMargin = isOriginLeft ? 'marginRight' : 'marginLeft';

  var canCellFit = this._getCanCellFit();

  this.cells.forEach( function( cell$$1, i ) {
    // just add cell if first cell in slide
    if ( !slide$$1.cells.length ) {
      slide$$1.addCell( cell$$1 );
      return;
    }

    var slideWidth = ( slide$$1.outerWidth - slide$$1.firstMargin ) +
      ( cell$$1.size.outerWidth - cell$$1.size[ nextMargin ] );

    if ( canCellFit.call( this, i, slideWidth ) ) {
      slide$$1.addCell( cell$$1 );
    } else {
      // doesn't fit, new slide
      slide$$1.updateTarget();

      slide$$1 = new Slide( this );
      this.slides.push( slide$$1 );
      slide$$1.addCell( cell$$1 );
    }
  }, this );
  // last slide
  slide$$1.updateTarget();
  // update .selectedSlide
  this.updateSelectedSlide();
};

proto._getCanCellFit = function() {
  var groupCells = this.options.groupCells;
  if ( !groupCells ) {
    return function() {
      return false;
    };
  } else if ( typeof groupCells == 'number' ) {
    // group by number. 3 -> [0,1,2], [3,4,5], ...
    var number = parseInt( groupCells, 10 );
    return function( i ) {
      return ( i % number ) !== 0;
    };
  }
  // default, group by width of slide
  // parse '75%
  var percentMatch = typeof groupCells == 'string' &&
    groupCells.match(/^(\d+)%$/);
  var percent = percentMatch ? parseInt( percentMatch[1], 10 ) / 100 : 1;
  return function( i, slideWidth ) {
    return slideWidth <= ( this.size.innerWidth + 1 ) * percent;
  };
};

// alias _init for jQuery plugin .flickity()
proto._init =
proto.reposition = function() {
  this.positionCells();
  this.positionSliderAtSelected();
};

proto.getSize = function() {
  this.size = getSize$$1( this.element );
  this.setCellAlign();
  this.cursorPosition = this.size.innerWidth * this.cellAlign;
};

var cellAlignShorthands = {
  // cell align, then based on origin side
  center: {
    left: 0.5,
    right: 0.5
  },
  left: {
    left: 0,
    right: 1
  },
  right: {
    right: 0,
    left: 1
  }
};

proto.setCellAlign = function() {
  var shorthand = cellAlignShorthands[ this.options.cellAlign ];
  this.cellAlign = shorthand ? shorthand[ this.originSide ] : this.options.cellAlign;
};

proto.setGallerySize = function() {
  if ( this.options.setGallerySize ) {
    var height = this.options.adaptiveHeight && this.selectedSlide ?
      this.selectedSlide.height : this.maxCellHeight;
    this.viewport.style.height = height + 'px';
  }
};

proto._getWrapShiftCells = function() {
  // only for wrap-around
  if ( !this.options.wrapAround ) {
    return;
  }
  // unshift previous cells
  this._unshiftCells( this.beforeShiftCells );
  this._unshiftCells( this.afterShiftCells );
  // get before cells
  // initial gap
  var gapX = this.cursorPosition;
  var cellIndex = this.cells.length - 1;
  this.beforeShiftCells = this._getGapCells( gapX, cellIndex, -1 );
  // get after cells
  // ending gap between last cell and end of gallery viewport
  gapX = this.size.innerWidth - this.cursorPosition;
  // start cloning at first cell, working forwards
  this.afterShiftCells = this._getGapCells( gapX, 0, 1 );
};

proto._getGapCells = function( gapX, cellIndex, increment ) {
  // keep adding cells until the cover the initial gap
  var cells = [];
  while ( gapX > 0 ) {
    var cell$$1 = this.cells[ cellIndex ];
    if ( !cell$$1 ) {
      break;
    }
    cells.push( cell$$1 );
    cellIndex += increment;
    gapX -= cell$$1.size.outerWidth;
  }
  return cells;
};

// ----- contain ----- //

// contain cell targets so no excess sliding
proto._containSlides = function() {
  if ( !this.options.contain || this.options.wrapAround || !this.cells.length ) {
    return;
  }
  var isRightToLeft = this.options.rightToLeft;
  var beginMargin = isRightToLeft ? 'marginRight' : 'marginLeft';
  var endMargin = isRightToLeft ? 'marginLeft' : 'marginRight';
  var contentWidth = this.slideableWidth - this.getLastCell().size[ endMargin ];
  // content is less than gallery size
  var isContentSmaller = contentWidth < this.size.innerWidth;
  // bounds
  var beginBound = this.cursorPosition + this.cells[0].size[ beginMargin ];
  var endBound = contentWidth - this.size.innerWidth * ( 1 - this.cellAlign );
  // contain each cell target
  this.slides.forEach( function( slide$$1 ) {
    if ( isContentSmaller ) {
      // all cells fit inside gallery
      slide$$1.target = contentWidth * this.cellAlign;
    } else {
      // contain to bounds
      slide$$1.target = Math.max( slide$$1.target, beginBound );
      slide$$1.target = Math.min( slide$$1.target, endBound );
    }
  }, this );
};

// -----  ----- //

/**
 * emits events via eventEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */
proto.dispatchEvent = function( type, event, args ) {
  var emitArgs = event ? [ event ].concat( args ) : args;
  this.emitEvent( type, emitArgs );

  if ( jQuery && this.$element ) {
    // default trigger with type if no event
    type += this.options.namespaceJQueryEvents ? '.flickity' : '';
    var $event = type;
    if ( event ) {
      // create jQuery event
      var jQEvent = jQuery.Event( event );
      jQEvent.type = type;
      $event = jQEvent;
    }
    this.$element.trigger( $event, args );
  }
};

// -------------------------- select -------------------------- //

/**
 * @param {Integer} index - index of the slide
 * @param {Boolean} isWrap - will wrap-around to last/first if at the end
 * @param {Boolean} isInstant - will immediately set position at selected cell
 */
proto.select = function( index, isWrap, isInstant ) {
  if ( !this.isActive ) {
    return;
  }
  index = parseInt( index, 10 );
  this._wrapSelect( index );

  if ( this.options.wrapAround || isWrap ) {
    index = utils$$1.modulo( index, this.slides.length );
  }
  // bail if invalid index
  if ( !this.slides[ index ] ) {
    return;
  }
  var prevIndex = this.selectedIndex;
  this.selectedIndex = index;
  this.updateSelectedSlide();
  if ( isInstant ) {
    this.positionSliderAtSelected();
  } else {
    this.startAnimation();
  }
  if ( this.options.adaptiveHeight ) {
    this.setGallerySize();
  }
  // events
  this.dispatchEvent( 'select', null, [ index ] );
  // change event if new index
  if ( index != prevIndex ) {
    this.dispatchEvent( 'change', null, [ index ] );
  }
  // old v1 event name, remove in v3
  this.dispatchEvent('cellSelect');
};

// wraps position for wrapAround, to move to closest slide. #113
proto._wrapSelect = function( index ) {
  var len = this.slides.length;
  var isWrapping = this.options.wrapAround && len > 1;
  if ( !isWrapping ) {
    return index;
  }
  var wrapIndex = utils$$1.modulo( index, len );
  // go to shortest
  var delta = Math.abs( wrapIndex - this.selectedIndex );
  var backWrapDelta = Math.abs( ( wrapIndex + len ) - this.selectedIndex );
  var forewardWrapDelta = Math.abs( ( wrapIndex - len ) - this.selectedIndex );
  if ( !this.isDragSelect && backWrapDelta < delta ) {
    index += len;
  } else if ( !this.isDragSelect && forewardWrapDelta < delta ) {
    index -= len;
  }
  // wrap position so slider is within normal area
  if ( index < 0 ) {
    this.x -= this.slideableWidth;
  } else if ( index >= len ) {
    this.x += this.slideableWidth;
  }
};

proto.previous = function( isWrap, isInstant ) {
  this.select( this.selectedIndex - 1, isWrap, isInstant );
};

proto.next = function( isWrap, isInstant ) {
  this.select( this.selectedIndex + 1, isWrap, isInstant );
};

proto.updateSelectedSlide = function() {
  var slide$$1 = this.slides[ this.selectedIndex ];
  // selectedIndex could be outside of slides, if triggered before resize()
  if ( !slide$$1 ) {
    return;
  }
  // unselect previous selected slide
  this.unselectSelectedSlide();
  // update new selected slide
  this.selectedSlide = slide$$1;
  slide$$1.select();
  this.selectedCells = slide$$1.cells;
  this.selectedElements = slide$$1.getCellElements();
  // HACK: selectedCell & selectedElement is first cell in slide, backwards compatibility
  // Remove in v3?
  this.selectedCell = slide$$1.cells[0];
  this.selectedElement = this.selectedElements[0];
};

proto.unselectSelectedSlide = function() {
  if ( this.selectedSlide ) {
    this.selectedSlide.unselect();
  }
};

/**
 * select slide from number or cell element
 * @param {Element or Number} elem
 */
proto.selectCell = function( value, isWrap, isInstant ) {
  // get cell
  var cell$$1 = this.queryCell( value );
  if ( !cell$$1 ) {
    return;
  }

  var index = this.getCellSlideIndex( cell$$1 );
  this.select( index, isWrap, isInstant );
};

proto.getCellSlideIndex = function( cell$$1 ) {
  // get index of slides that has cell
  for ( var i=0; i < this.slides.length; i++ ) {
    var slide$$1 = this.slides[i];
    var index = slide$$1.cells.indexOf( cell$$1 );
    if ( index != -1 ) {
      return i;
    }
  }
};

// -------------------------- get cells -------------------------- //

/**
 * get Flickity.Cell, given an Element
 * @param {Element} elem
 * @returns {Flickity.Cell} item
 */
proto.getCell = function( elem ) {
  // loop through cells to get the one that matches
  for ( var i=0; i < this.cells.length; i++ ) {
    var cell$$1 = this.cells[i];
    if ( cell$$1.element == elem ) {
      return cell$$1;
    }
  }
};

/**
 * get collection of Flickity.Cells, given Elements
 * @param {Element, Array, NodeList} elems
 * @returns {Array} cells - Flickity.Cells
 */
proto.getCells = function( elems ) {
  elems = utils$$1.makeArray( elems );
  var cells = [];
  elems.forEach( function( elem ) {
    var cell$$1 = this.getCell( elem );
    if ( cell$$1 ) {
      cells.push( cell$$1 );
    }
  }, this );
  return cells;
};

/**
 * get cell elements
 * @returns {Array} cellElems
 */
proto.getCellElements = function() {
  return this.cells.map( function( cell$$1 ) {
    return cell$$1.element;
  });
};

/**
 * get parent cell from an element
 * @param {Element} elem
 * @returns {Flickit.Cell} cell
 */
proto.getParentCell = function( elem ) {
  // first check if elem is cell
  var cell$$1 = this.getCell( elem );
  if ( cell$$1 ) {
    return cell$$1;
  }
  // try to get parent cell elem
  elem = utils$$1.getParent( elem, '.flickity-slider > *' );
  return this.getCell( elem );
};

/**
 * get cells adjacent to a slide
 * @param {Integer} adjCount - number of adjacent slides
 * @param {Integer} index - index of slide to start
 * @returns {Array} cells - array of Flickity.Cells
 */
proto.getAdjacentCellElements = function( adjCount, index ) {
  if ( !adjCount ) {
    return this.selectedSlide.getCellElements();
  }
  index = index === undefined ? this.selectedIndex : index;

  var len = this.slides.length;
  if ( 1 + ( adjCount * 2 ) >= len ) {
    return this.getCellElements();
  }

  var cellElems = [];
  for ( var i = index - adjCount; i <= index + adjCount ; i++ ) {
    var slideIndex = this.options.wrapAround ? utils$$1.modulo( i, len ) : i;
    var slide$$1 = this.slides[ slideIndex ];
    if ( slide$$1 ) {
      cellElems = cellElems.concat( slide$$1.getCellElements() );
    }
  }
  return cellElems;
};

/**
 * select slide from number or cell element
 * @param {Element, Selector String, or Number} selector
 */
proto.queryCell = function( selector ) {
  if ( typeof selector == 'number' ) {
    // use number as index
    return this.cells[ selector ];
  }
  if ( typeof selector == 'string' ) {
    // use string as selector, get element
    selector = this.element.querySelector( selector );
  }
  // get cell from element
  return this.getCell( selector );
};

// -------------------------- events -------------------------- //

proto.uiChange = function() {
  this.emitEvent('uiChange');
};

proto.childUIPointerDown = function( event ) {
  this.emitEvent( 'childUIPointerDown', [ event ] );
};

// ----- resize ----- //

proto.onresize = function() {
  this.watchCSS();
  this.resize();
};

utils$$1.debounceMethod( Flickity, 'onresize', 150 );

proto.resize = function() {
  if ( !this.isActive ) {
    return;
  }
  this.getSize();
  // wrap values
  if ( this.options.wrapAround ) {
    this.x = utils$$1.modulo( this.x, this.slideableWidth );
  }
  this.positionCells();
  this._getWrapShiftCells();
  this.setGallerySize();
  this.emitEvent('resize');
  // update selected index for group slides, instant
  // TODO: position can be lost between groups of various numbers
  var selectedElement = this.selectedElements && this.selectedElements[0];
  this.selectCell( selectedElement, false, true );
};

// watches the :after property, activates/deactivates
proto.watchCSS = function() {
  var watchOption = this.options.watchCSS;
  if ( !watchOption ) {
    return;
  }

  var afterContent = getComputedStyle( this.element, ':after' ).content;
  // activate if :after { content: 'flickity' }
  if ( afterContent.indexOf('flickity') != -1 ) {
    this.activate();
  } else {
    this.deactivate();
  }
};

// ----- keydown ----- //

// go previous/next if left/right keys pressed
proto.onkeydown = function( event ) {
  // only work if element is in focus
  var isNotFocused = document.activeElement && document.activeElement != this.element;
  if ( !this.options.accessibility ||isNotFocused ) {
    return;
  }

  var handler = Flickity.keyboardHandlers[ event.keyCode ];
  if ( handler ) {
    handler.call( this );
  }
};

Flickity.keyboardHandlers = {
  // left arrow
  37: function() {
    var leftMethod = this.options.rightToLeft ? 'next' : 'previous';
    this.uiChange();
    this[ leftMethod ]();
  },
  // right arrow
  39: function() {
    var rightMethod = this.options.rightToLeft ? 'previous' : 'next';
    this.uiChange();
    this[ rightMethod ]();
  },
};

// ----- focus ----- //

proto.focus = function() {
  var prevScrollY = window.pageYOffset;
  this.element.focus();
  // hack to fix scroll jump after focus, #76
  if ( window.pageYOffset != prevScrollY ) {
    window.scrollTo( window.pageXOffset, prevScrollY );
  }
};

// -------------------------- destroy -------------------------- //

// deactivate all Flickity functionality, but keep stuff available
proto.deactivate = function() {
  if ( !this.isActive ) {
    return;
  }
  this.element.classList.remove('flickity-enabled');
  this.element.classList.remove('flickity-rtl');
  this.unselectSelectedSlide();
  // destroy cells
  this.cells.forEach( function( cell$$1 ) {
    cell$$1.destroy();
  });
  this.element.removeChild( this.viewport );
  // move child elements back into element
  moveElements( this.slider.children, this.element );
  if ( this.options.accessibility ) {
    this.element.removeAttribute('tabIndex');
    this.element.removeEventListener( 'keydown', this );
  }
  // set flags
  this.isActive = false;
  this.emitEvent('deactivate');
};

proto.destroy = function() {
  this.deactivate();
  window.removeEventListener( 'resize', this );
  this.emitEvent('destroy');
  if ( jQuery && this.$element ) {
    jQuery.removeData( this.element, 'flickity' );
  }
  delete this.element.flickityGUID;
  delete instances[ this.guid ];
};

// -------------------------- prototype -------------------------- //

utils$$1.extend( proto, animatePrototype );

// -------------------------- extras -------------------------- //

/**
 * get Flickity instance from element
 * @param {Element} elem
 * @returns {Flickity}
 */
Flickity.data = function( elem ) {
  elem = utils$$1.getQueryElement( elem );
  var id = elem && elem.flickityGUID;
  return id && instances[ id ];
};

utils$$1.htmlInit( Flickity, 'flickity' );

if ( jQuery && jQuery.bridget ) {
  jQuery.bridget( 'flickity', Flickity );
}

// set internal jQuery, for Webpack + jQuery v3, #478
Flickity.setJQuery = function( jq ) {
  jQuery = jq;
};

Flickity.Cell = Cell;

return Flickity;

}));
});

var unipointer = createCommonjsModule(function (module) {
/*!
 * Unipointer v2.3.0
 * base class for doing one thing with pointer event
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*global define, module, require */
  if ( typeof undefined == 'function' && undefined.amd ) {
    // AMD
    undefined( [
      'ev-emitter/ev-emitter'
    ], function( EvEmitter ) {
      return factory( window, EvEmitter );
    });
  } else if ( 'object' == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      evEmitter
    );
  } else {
    // browser global
    window.Unipointer = factory(
      window,
      window.EvEmitter
    );
  }

}( window, function factory( window, EvEmitter ) {

'use strict';

function noop() {}

function Unipointer() {}

// inherit EvEmitter
var proto = Unipointer.prototype = Object.create( EvEmitter.prototype );

proto.bindStartEvent = function( elem ) {
  this._bindStartEvent( elem, true );
};

proto.unbindStartEvent = function( elem ) {
  this._bindStartEvent( elem, false );
};

/**
 * Add or remove start event
 * @param {Boolean} isAdd - remove if falsey
 */
proto._bindStartEvent = function( elem, isAdd ) {
  // munge isAdd, default to true
  isAdd = isAdd === undefined ? true : isAdd;
  var bindMethod = isAdd ? 'addEventListener' : 'removeEventListener';

  // default to mouse events
  var startEvent = 'mousedown';
  if ( window.PointerEvent ) {
    // Pointer Events
    startEvent = 'pointerdown';
  } else if ( 'ontouchstart' in window ) {
    // Touch Events. iOS Safari
    startEvent = 'touchstart';
  }
  elem[ bindMethod ]( startEvent, this );
};

// trigger handler methods for events
proto.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// returns the touch that we're keeping track of
proto.getTouch = function( touches ) {
  for ( var i=0; i < touches.length; i++ ) {
    var touch = touches[i];
    if ( touch.identifier == this.pointerIdentifier ) {
      return touch;
    }
  }
};

// ----- start event ----- //

proto.onmousedown = function( event ) {
  // dismiss clicks from right or middle buttons
  var button = event.button;
  if ( button && ( button !== 0 && button !== 1 ) ) {
    return;
  }
  this._pointerDown( event, event );
};

proto.ontouchstart = function( event ) {
  this._pointerDown( event, event.changedTouches[0] );
};

proto.onpointerdown = function( event ) {
  this._pointerDown( event, event );
};

/**
 * pointer start
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
proto._pointerDown = function( event, pointer ) {
  // dismiss right click and other pointers
  // button = 0 is okay, 1-4 not
  if ( event.button || this.isPointerDown ) {
    return;
  }

  this.isPointerDown = true;
  // save pointer identifier to match up touch events
  this.pointerIdentifier = pointer.pointerId !== undefined ?
    // pointerId for pointer events, touch.indentifier for touch events
    pointer.pointerId : pointer.identifier;

  this.pointerDown( event, pointer );
};

proto.pointerDown = function( event, pointer ) {
  this._bindPostStartEvents( event );
  this.emitEvent( 'pointerDown', [ event, pointer ] );
};

// hash of events to be bound after start event
var postStartEvents = {
  mousedown: [ 'mousemove', 'mouseup' ],
  touchstart: [ 'touchmove', 'touchend', 'touchcancel' ],
  pointerdown: [ 'pointermove', 'pointerup', 'pointercancel' ],
};

proto._bindPostStartEvents = function( event ) {
  if ( !event ) {
    return;
  }
  // get proper events to match start event
  var events = postStartEvents[ event.type ];
  // bind events to node
  events.forEach( function( eventName ) {
    window.addEventListener( eventName, this );
  }, this );
  // save these arguments
  this._boundPointerEvents = events;
};

proto._unbindPostStartEvents = function() {
  // check for _boundEvents, in case dragEnd triggered twice (old IE8 bug)
  if ( !this._boundPointerEvents ) {
    return;
  }
  this._boundPointerEvents.forEach( function( eventName ) {
    window.removeEventListener( eventName, this );
  }, this );

  delete this._boundPointerEvents;
};

// ----- move event ----- //

proto.onmousemove = function( event ) {
  this._pointerMove( event, event );
};

proto.onpointermove = function( event ) {
  if ( event.pointerId == this.pointerIdentifier ) {
    this._pointerMove( event, event );
  }
};

proto.ontouchmove = function( event ) {
  var touch = this.getTouch( event.changedTouches );
  if ( touch ) {
    this._pointerMove( event, touch );
  }
};

/**
 * pointer move
 * @param {Event} event
 * @param {Event or Touch} pointer
 * @private
 */
proto._pointerMove = function( event, pointer ) {
  this.pointerMove( event, pointer );
};

// public
proto.pointerMove = function( event, pointer ) {
  this.emitEvent( 'pointerMove', [ event, pointer ] );
};

// ----- end event ----- //


proto.onmouseup = function( event ) {
  this._pointerUp( event, event );
};

proto.onpointerup = function( event ) {
  if ( event.pointerId == this.pointerIdentifier ) {
    this._pointerUp( event, event );
  }
};

proto.ontouchend = function( event ) {
  var touch = this.getTouch( event.changedTouches );
  if ( touch ) {
    this._pointerUp( event, touch );
  }
};

/**
 * pointer up
 * @param {Event} event
 * @param {Event or Touch} pointer
 * @private
 */
proto._pointerUp = function( event, pointer ) {
  this._pointerDone();
  this.pointerUp( event, pointer );
};

// public
proto.pointerUp = function( event, pointer ) {
  this.emitEvent( 'pointerUp', [ event, pointer ] );
};

// ----- pointer done ----- //

// triggered on pointer up & pointer cancel
proto._pointerDone = function() {
  this._pointerReset();
  this._unbindPostStartEvents();
  this.pointerDone();
};

proto._pointerReset = function() {
  // reset properties
  this.isPointerDown = false;
  delete this.pointerIdentifier;
};

proto.pointerDone = noop;

// ----- pointer cancel ----- //

proto.onpointercancel = function( event ) {
  if ( event.pointerId == this.pointerIdentifier ) {
    this._pointerCancel( event, event );
  }
};

proto.ontouchcancel = function( event ) {
  var touch = this.getTouch( event.changedTouches );
  if ( touch ) {
    this._pointerCancel( event, touch );
  }
};

/**
 * pointer cancel
 * @param {Event} event
 * @param {Event or Touch} pointer
 * @private
 */
proto._pointerCancel = function( event, pointer ) {
  this._pointerDone();
  this.pointerCancel( event, pointer );
};

// public
proto.pointerCancel = function( event, pointer ) {
  this.emitEvent( 'pointerCancel', [ event, pointer ] );
};

// -----  ----- //

// utility function for getting x/y coords from event
Unipointer.getPointerPoint = function( pointer ) {
  return {
    x: pointer.pageX,
    y: pointer.pageY
  };
};

// -----  ----- //

return Unipointer;

}));
});

var unidragger = createCommonjsModule(function (module) {
/*!
 * Unidragger v2.3.0
 * Draggable base class
 * MIT license
 */

/*jshint browser: true, unused: true, undef: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */

  if ( typeof undefined == 'function' && undefined.amd ) {
    // AMD
    undefined( [
      'unipointer/unipointer'
    ], function( Unipointer ) {
      return factory( window, Unipointer );
    });
  } else if ( 'object' == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      unipointer
    );
  } else {
    // browser global
    window.Unidragger = factory(
      window,
      window.Unipointer
    );
  }

}( window, function factory( window, Unipointer ) {

'use strict';

// -------------------------- Unidragger -------------------------- //

function Unidragger() {}

// inherit Unipointer & EvEmitter
var proto = Unidragger.prototype = Object.create( Unipointer.prototype );

// ----- bind start ----- //

proto.bindHandles = function() {
  this._bindHandles( true );
};

proto.unbindHandles = function() {
  this._bindHandles( false );
};

/**
 * Add or remove start event
 * @param {Boolean} isAdd
 */
proto._bindHandles = function( isAdd ) {
  // munge isAdd, default to true
  isAdd = isAdd === undefined ? true : isAdd;
  // bind each handle
  var bindMethod = isAdd ? 'addEventListener' : 'removeEventListener';
  var touchAction = isAdd ? this._touchActionValue : '';
  for ( var i=0; i < this.handles.length; i++ ) {
    var handle = this.handles[i];
    this._bindStartEvent( handle, isAdd );
    handle[ bindMethod ]( 'click', this );
    // touch-action: none to override browser touch gestures. metafizzy/flickity#540
    if ( window.PointerEvent ) {
      handle.style.touchAction = touchAction;
    }
  }
};

// prototype so it can be overwriteable by Flickity
proto._touchActionValue = 'none';

// ----- start event ----- //

/**
 * pointer start
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
proto.pointerDown = function( event, pointer ) {
  var isOkay = this.okayPointerDown( event );
  if ( !isOkay ) {
    return;
  }
  // track start event position
  this.pointerDownPointer = pointer;

  event.preventDefault();
  this.pointerDownBlur();
  // bind move and end events
  this._bindPostStartEvents( event );
  this.emitEvent( 'pointerDown', [ event, pointer ] );
};

// nodes that have text fields
var cursorNodes = {
  TEXTAREA: true,
  INPUT: true,
  SELECT: true,
  OPTION: true,
};

// input types that do not have text fields
var clickTypes = {
  radio: true,
  checkbox: true,
  button: true,
  submit: true,
  image: true,
  file: true,
};

// dismiss inputs with text fields. flickity#403, flickity#404
proto.okayPointerDown = function( event ) {
  var isCursorNode = cursorNodes[ event.target.nodeName ];
  var isClickType = clickTypes[ event.target.type ];
  var isOkay = !isCursorNode || isClickType;
  if ( !isOkay ) {
    this._pointerReset();
  }
  return isOkay;
};

// kludge to blur previously focused input
proto.pointerDownBlur = function() {
  var focused = document.activeElement;
  // do not blur body for IE10, metafizzy/flickity#117
  var canBlur = focused && focused.blur && focused != document.body;
  if ( canBlur ) {
    focused.blur();
  }
};

// ----- move event ----- //

/**
 * drag move
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
proto.pointerMove = function( event, pointer ) {
  var moveVector = this._dragPointerMove( event, pointer );
  this.emitEvent( 'pointerMove', [ event, pointer, moveVector ] );
  this._dragMove( event, pointer, moveVector );
};

// base pointer move logic
proto._dragPointerMove = function( event, pointer ) {
  var moveVector = {
    x: pointer.pageX - this.pointerDownPointer.pageX,
    y: pointer.pageY - this.pointerDownPointer.pageY
  };
  // start drag if pointer has moved far enough to start drag
  if ( !this.isDragging && this.hasDragStarted( moveVector ) ) {
    this._dragStart( event, pointer );
  }
  return moveVector;
};

// condition if pointer has moved far enough to start drag
proto.hasDragStarted = function( moveVector ) {
  return Math.abs( moveVector.x ) > 3 || Math.abs( moveVector.y ) > 3;
};

// ----- end event ----- //

/**
 * pointer up
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
proto.pointerUp = function( event, pointer ) {
  this.emitEvent( 'pointerUp', [ event, pointer ] );
  this._dragPointerUp( event, pointer );
};

proto._dragPointerUp = function( event, pointer ) {
  if ( this.isDragging ) {
    this._dragEnd( event, pointer );
  } else {
    // pointer didn't move enough for drag to start
    this._staticClick( event, pointer );
  }
};

// -------------------------- drag -------------------------- //

// dragStart
proto._dragStart = function( event, pointer ) {
  this.isDragging = true;
  // prevent clicks
  this.isPreventingClicks = true;
  this.dragStart( event, pointer );
};

proto.dragStart = function( event, pointer ) {
  this.emitEvent( 'dragStart', [ event, pointer ] );
};

// dragMove
proto._dragMove = function( event, pointer, moveVector ) {
  // do not drag if not dragging yet
  if ( !this.isDragging ) {
    return;
  }

  this.dragMove( event, pointer, moveVector );
};

proto.dragMove = function( event, pointer, moveVector ) {
  event.preventDefault();
  this.emitEvent( 'dragMove', [ event, pointer, moveVector ] );
};

// dragEnd
proto._dragEnd = function( event, pointer ) {
  // set flags
  this.isDragging = false;
  // re-enable clicking async
  setTimeout( function() {
    delete this.isPreventingClicks;
  }.bind( this ) );

  this.dragEnd( event, pointer );
};

proto.dragEnd = function( event, pointer ) {
  this.emitEvent( 'dragEnd', [ event, pointer ] );
};

// ----- onclick ----- //

// handle all clicks and prevent clicks when dragging
proto.onclick = function( event ) {
  if ( this.isPreventingClicks ) {
    event.preventDefault();
  }
};

// ----- staticClick ----- //

// triggered after pointer down & up with no/tiny movement
proto._staticClick = function( event, pointer ) {
  // ignore emulated mouse up clicks
  if ( this.isIgnoringMouseUp && event.type == 'mouseup' ) {
    return;
  }

  this.staticClick( event, pointer );

  // set flag for emulated clicks 300ms after touchend
  if ( event.type != 'mouseup' ) {
    this.isIgnoringMouseUp = true;
    // reset flag after 300ms
    setTimeout( function() {
      delete this.isIgnoringMouseUp;
    }.bind( this ), 400 );
  }
};

proto.staticClick = function( event, pointer ) {
  this.emitEvent( 'staticClick', [ event, pointer ] );
};

// ----- utils ----- //

Unidragger.getPointerPoint = Unipointer.getPointerPoint;

// -----  ----- //

return Unidragger;

}));
});

var drag = createCommonjsModule(function (module) {
// drag
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof undefined == 'function' && undefined.amd ) {
    // AMD
    undefined( [
      './flickity',
      'unidragger/unidragger',
      'fizzy-ui-utils/utils'
    ], function( Flickity, Unidragger, utils$$2 ) {
      return factory( window, Flickity, Unidragger, utils$$2 );
    });
  } else if ( 'object' == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      flickity,
      unidragger,
      utils
    );
  } else {
    // browser global
    window.Flickity = factory(
      window,
      window.Flickity,
      window.Unidragger,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, Flickity, Unidragger, utils$$2 ) {

'use strict';

// ----- defaults ----- //

utils$$2.extend( Flickity.defaults, {
  draggable: '>1',
  dragThreshold: 3,
});

// ----- create ----- //

Flickity.createMethods.push('_createDrag');

// -------------------------- drag prototype -------------------------- //

var proto = Flickity.prototype;
utils$$2.extend( proto, Unidragger.prototype );
proto._touchActionValue = 'pan-y';

// --------------------------  -------------------------- //

var isTouch = 'createTouch' in document;
var isTouchmoveScrollCanceled = false;

proto._createDrag = function() {
  this.on( 'activate', this.onActivateDrag );
  this.on( 'uiChange', this._uiChangeDrag );
  this.on( 'childUIPointerDown', this._childUIPointerDownDrag );
  this.on( 'deactivate', this.unbindDrag );
  this.on( 'cellChange', this.updateDraggable );
  // TODO updateDraggable on resize? if groupCells & slides change
  // HACK - add seemingly innocuous handler to fix iOS 10 scroll behavior
  // #457, RubaXa/Sortable#973
  if ( isTouch && !isTouchmoveScrollCanceled ) {
    window.addEventListener( 'touchmove', function() {});
    isTouchmoveScrollCanceled = true;
  }
};

proto.onActivateDrag = function() {
  this.handles = [ this.viewport ];
  this.bindHandles();
  this.updateDraggable();
};

proto.onDeactivateDrag = function() {
  this.unbindHandles();
  this.element.classList.remove('is-draggable');
};

proto.updateDraggable = function() {
  // disable dragging if less than 2 slides. #278
  if ( this.options.draggable == '>1' ) {
    this.isDraggable = this.slides.length > 1;
  } else {
    this.isDraggable = this.options.draggable;
  }
  if ( this.isDraggable ) {
    this.element.classList.add('is-draggable');
  } else {
    this.element.classList.remove('is-draggable');
  }
};

// backwards compatibility
proto.bindDrag = function() {
  this.options.draggable = true;
  this.updateDraggable();
};

proto.unbindDrag = function() {
  this.options.draggable = false;
  this.updateDraggable();
};

proto._uiChangeDrag = function() {
  delete this.isFreeScrolling;
};

proto._childUIPointerDownDrag = function( event ) {
  // allow focus & preventDefault even when not draggable
  // so child UI elements keep focus on carousel. #721
  event.preventDefault();
  this.pointerDownFocus( event );
};

// -------------------------- pointer events -------------------------- //

proto.pointerDown = function( event, pointer ) {
  if ( !this.isDraggable ) {
    this._pointerDownDefault( event, pointer );
    return;
  }
  var isOkay = this.okayPointerDown( event );
  if ( !isOkay ) {
    return;
  }

  this._pointerDownPreventDefault( event );
  this.pointerDownFocus( event );
  // blur
  if ( document.activeElement != this.element ) {
    // do not blur if already focused
    this.pointerDownBlur();
  }

  // stop if it was moving
  this.dragX = this.x;
  this.viewport.classList.add('is-pointer-down');
  // track scrolling
  this.pointerDownScroll = getScrollPosition();
  window.addEventListener( 'scroll', this );

  this._pointerDownDefault( event, pointer );
};

// default pointerDown logic, used for staticClick
proto._pointerDownDefault = function( event, pointer ) {
  // track start event position
  this.pointerDownPointer = pointer;
  // bind move and end events
  this._bindPostStartEvents( event );
  this.dispatchEvent( 'pointerDown', event, [ pointer ] );
};

var focusNodes = {
  INPUT: true,
  TEXTAREA: true,
  SELECT: true,
};

proto.pointerDownFocus = function( event ) {
  var isFocusNode = focusNodes[ event.target.nodeName ];
  if ( !isFocusNode ) {
    this.focus();
  }
};

proto._pointerDownPreventDefault = function( event ) {
  var isTouchStart = event.type == 'touchstart';
  var isTouchPointer = event.pointerType == 'touch';
  var isFocusNode = focusNodes[ event.target.nodeName ];
  if ( !isTouchStart && !isTouchPointer && !isFocusNode ) {
    event.preventDefault();
  }
};

// ----- move ----- //

proto.hasDragStarted = function( moveVector ) {
  return Math.abs( moveVector.x ) > this.options.dragThreshold;
};

// ----- up ----- //

proto.pointerUp = function( event, pointer ) {
  delete this.isTouchScrolling;
  this.viewport.classList.remove('is-pointer-down');
  this.dispatchEvent( 'pointerUp', event, [ pointer ] );
  this._dragPointerUp( event, pointer );
};

proto.pointerDone = function() {
  window.removeEventListener( 'scroll', this );
  delete this.pointerDownScroll;
};

// -------------------------- dragging -------------------------- //

proto.dragStart = function( event, pointer ) {
  if ( !this.isDraggable ) {
    return;
  }
  this.dragStartPosition = this.x;
  this.startAnimation();
  window.removeEventListener( 'scroll', this );
  this.dispatchEvent( 'dragStart', event, [ pointer ] );
};

proto.pointerMove = function( event, pointer ) {
  var moveVector = this._dragPointerMove( event, pointer );
  this.dispatchEvent( 'pointerMove', event, [ pointer, moveVector ] );
  this._dragMove( event, pointer, moveVector );
};

proto.dragMove = function( event, pointer, moveVector ) {
  if ( !this.isDraggable ) {
    return;
  }
  event.preventDefault();

  this.previousDragX = this.dragX;
  // reverse if right-to-left
  var direction = this.options.rightToLeft ? -1 : 1;
  if ( this.options.wrapAround ) {
    // wrap around move. #589
    moveVector.x = moveVector.x % this.slideableWidth;
  }
  var dragX = this.dragStartPosition + moveVector.x * direction;

  if ( !this.options.wrapAround && this.slides.length ) {
    // slow drag
    var originBound = Math.max( -this.slides[0].target, this.dragStartPosition );
    dragX = dragX > originBound ? ( dragX + originBound ) * 0.5 : dragX;
    var endBound = Math.min( -this.getLastSlide().target, this.dragStartPosition );
    dragX = dragX < endBound ? ( dragX + endBound ) * 0.5 : dragX;
  }

  this.dragX = dragX;

  this.dragMoveTime = new Date();
  this.dispatchEvent( 'dragMove', event, [ pointer, moveVector ] );
};

proto.dragEnd = function( event, pointer ) {
  if ( !this.isDraggable ) {
    return;
  }
  if ( this.options.freeScroll ) {
    this.isFreeScrolling = true;
  }
  // set selectedIndex based on where flick will end up
  var index = this.dragEndRestingSelect();

  if ( this.options.freeScroll && !this.options.wrapAround ) {
    // if free-scroll & not wrap around
    // do not free-scroll if going outside of bounding slides
    // so bounding slides can attract slider, and keep it in bounds
    var restingX = this.getRestingPosition();
    this.isFreeScrolling = -restingX > this.slides[0].target &&
      -restingX < this.getLastSlide().target;
  } else if ( !this.options.freeScroll && index == this.selectedIndex ) {
    // boost selection if selected index has not changed
    index += this.dragEndBoostSelect();
  }
  delete this.previousDragX;
  // apply selection
  // TODO refactor this, selecting here feels weird
  // HACK, set flag so dragging stays in correct direction
  this.isDragSelect = this.options.wrapAround;
  this.select( index );
  delete this.isDragSelect;
  this.dispatchEvent( 'dragEnd', event, [ pointer ] );
};

proto.dragEndRestingSelect = function() {
  var restingX = this.getRestingPosition();
  // how far away from selected slide
  var distance = Math.abs( this.getSlideDistance( -restingX, this.selectedIndex ) );
  // get closet resting going up and going down
  var positiveResting = this._getClosestResting( restingX, distance, 1 );
  var negativeResting = this._getClosestResting( restingX, distance, -1 );
  // use closer resting for wrap-around
  var index = positiveResting.distance < negativeResting.distance ?
    positiveResting.index : negativeResting.index;
  return index;
};

/**
 * given resting X and distance to selected cell
 * get the distance and index of the closest cell
 * @param {Number} restingX - estimated post-flick resting position
 * @param {Number} distance - distance to selected cell
 * @param {Integer} increment - +1 or -1, going up or down
 * @returns {Object} - { distance: {Number}, index: {Integer} }
 */
proto._getClosestResting = function( restingX, distance, increment ) {
  var index = this.selectedIndex;
  var minDistance = Infinity;
  var condition = this.options.contain && !this.options.wrapAround ?
    // if contain, keep going if distance is equal to minDistance
    function( d, md ) { return d <= md; } : function( d, md ) { return d < md; };
  while ( condition( distance, minDistance ) ) {
    // measure distance to next cell
    index += increment;
    minDistance = distance;
    distance = this.getSlideDistance( -restingX, index );
    if ( distance === null ) {
      break;
    }
    distance = Math.abs( distance );
  }
  return {
    distance: minDistance,
    // selected was previous index
    index: index - increment
  };
};

/**
 * measure distance between x and a slide target
 * @param {Number} x
 * @param {Integer} index - slide index
 */
proto.getSlideDistance = function( x, index ) {
  var len = this.slides.length;
  // wrap around if at least 2 slides
  var isWrapAround = this.options.wrapAround && len > 1;
  var slideIndex = isWrapAround ? utils$$2.modulo( index, len ) : index;
  var slide = this.slides[ slideIndex ];
  if ( !slide ) {
    return null;
  }
  // add distance for wrap-around slides
  var wrap = isWrapAround ? this.slideableWidth * Math.floor( index / len ) : 0;
  return x - ( slide.target + wrap );
};

proto.dragEndBoostSelect = function() {
  // do not boost if no previousDragX or dragMoveTime
  if ( this.previousDragX === undefined || !this.dragMoveTime ||
    // or if drag was held for 100 ms
    new Date() - this.dragMoveTime > 100 ) {
    return 0;
  }

  var distance = this.getSlideDistance( -this.dragX, this.selectedIndex );
  var delta = this.previousDragX - this.dragX;
  if ( distance > 0 && delta > 0 ) {
    // boost to next if moving towards the right, and positive velocity
    return 1;
  } else if ( distance < 0 && delta < 0 ) {
    // boost to previous if moving towards the left, and negative velocity
    return -1;
  }
  return 0;
};

// ----- staticClick ----- //

proto.staticClick = function( event, pointer ) {
  // get clickedCell, if cell was clicked
  var clickedCell = this.getParentCell( event.target );
  var cellElem = clickedCell && clickedCell.element;
  var cellIndex = clickedCell && this.cells.indexOf( clickedCell );
  this.dispatchEvent( 'staticClick', event, [ pointer, cellElem, cellIndex ] );
};

// ----- scroll ----- //

proto.onscroll = function() {
  var scroll = getScrollPosition();
  var scrollMoveX = this.pointerDownScroll.x - scroll.x;
  var scrollMoveY = this.pointerDownScroll.y - scroll.y;
  // cancel click/tap if scroll is too much
  if ( Math.abs( scrollMoveX ) > 3 || Math.abs( scrollMoveY ) > 3 ) {
    this._pointerDone();
  }
};

// ----- utils ----- //

function getScrollPosition() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}

// -----  ----- //

return Flickity;

}));
});

var tapListener = createCommonjsModule(function (module) {
/*!
 * Tap listener v2.0.0
 * listens to taps
 * MIT license
 */

/*jshint browser: true, unused: true, undef: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false*/ /*globals define, module, require */

  if ( typeof undefined == 'function' && undefined.amd ) {
    // AMD
    undefined( [
      'unipointer/unipointer'
    ], function( Unipointer ) {
      return factory( window, Unipointer );
    });
  } else if ( 'object' == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      unipointer
    );
  } else {
    // browser global
    window.TapListener = factory(
      window,
      window.Unipointer
    );
  }

}( window, function factory( window, Unipointer ) {

'use strict';

// --------------------------  TapListener -------------------------- //

function TapListener( elem ) {
  this.bindTap( elem );
}

// inherit Unipointer & EventEmitter
var proto = TapListener.prototype = Object.create( Unipointer.prototype );

/**
 * bind tap event to element
 * @param {Element} elem
 */
proto.bindTap = function( elem ) {
  if ( !elem ) {
    return;
  }
  this.unbindTap();
  this.tapElement = elem;
  this._bindStartEvent( elem, true );
};

proto.unbindTap = function() {
  if ( !this.tapElement ) {
    return;
  }
  this._bindStartEvent( this.tapElement, true );
  delete this.tapElement;
};

/**
 * pointer up
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
proto.pointerUp = function( event, pointer ) {
  // ignore emulated mouse up clicks
  if ( this.isIgnoringMouseUp && event.type == 'mouseup' ) {
    return;
  }

  var pointerPoint = Unipointer.getPointerPoint( pointer );
  var boundingRect = this.tapElement.getBoundingClientRect();
  var scrollX = window.pageXOffset;
  var scrollY = window.pageYOffset;
  // calculate if pointer is inside tapElement
  var isInside = pointerPoint.x >= boundingRect.left + scrollX &&
    pointerPoint.x <= boundingRect.right + scrollX &&
    pointerPoint.y >= boundingRect.top + scrollY &&
    pointerPoint.y <= boundingRect.bottom + scrollY;
  // trigger callback if pointer is inside element
  if ( isInside ) {
    this.emitEvent( 'tap', [ event, pointer ] );
  }

  // set flag for emulated clicks 300ms after touchend
  if ( event.type != 'mouseup' ) {
    this.isIgnoringMouseUp = true;
    // reset flag after 300ms
    var _this = this;
    setTimeout( function() {
      delete _this.isIgnoringMouseUp;
    }, 400 );
  }
};

proto.destroy = function() {
  this.pointerDone();
  this.unbindTap();
};

// -----  ----- //

return TapListener;

}));
});

var prevNextButton = createCommonjsModule(function (module) {
// prev/next buttons
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof undefined == 'function' && undefined.amd ) {
    // AMD
    undefined( [
      './flickity',
      'tap-listener/tap-listener',
      'fizzy-ui-utils/utils'
    ], function( Flickity, TapListener, utils$$2 ) {
      return factory( window, Flickity, TapListener, utils$$2 );
    });
  } else if ( 'object' == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      flickity,
      tapListener,
      utils
    );
  } else {
    // browser global
    factory(
      window,
      window.Flickity,
      window.TapListener,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, Flickity, TapListener, utils$$2 ) {
'use strict';

var svgURI = 'http://www.w3.org/2000/svg';

// -------------------------- PrevNextButton -------------------------- //

function PrevNextButton( direction, parent ) {
  this.direction = direction;
  this.parent = parent;
  this._create();
}

PrevNextButton.prototype = Object.create( TapListener.prototype );

PrevNextButton.prototype._create = function() {
  // properties
  this.isEnabled = true;
  this.isPrevious = this.direction == -1;
  var leftDirection = this.parent.options.rightToLeft ? 1 : -1;
  this.isLeft = this.direction == leftDirection;

  var element = this.element = document.createElement('button');
  element.className = 'flickity-button flickity-prev-next-button';
  element.className += this.isPrevious ? ' previous' : ' next';
  // prevent button from submitting form http://stackoverflow.com/a/10836076/182183
  element.setAttribute( 'type', 'button' );
  // init as disabled
  this.disable();

  element.setAttribute( 'aria-label', this.isPrevious ? 'Previous' : 'Next' );

  // create arrow
  var svg = this.createSVG();
  element.appendChild( svg );
  // events
  this.on( 'tap', this.onTap );
  this.parent.on( 'select', this.update.bind( this ) );
  this.on( 'pointerDown', this.parent.childUIPointerDown.bind( this.parent ) );
};

PrevNextButton.prototype.activate = function() {
  this.bindTap( this.element );
  // click events from keyboard
  this.element.addEventListener( 'click', this );
  // add to DOM
  this.parent.element.appendChild( this.element );
};

PrevNextButton.prototype.deactivate = function() {
  // remove from DOM
  this.parent.element.removeChild( this.element );
  // do regular TapListener destroy
  TapListener.prototype.destroy.call( this );
  // click events from keyboard
  this.element.removeEventListener( 'click', this );
};

PrevNextButton.prototype.createSVG = function() {
  var svg = document.createElementNS( svgURI, 'svg');
  svg.setAttribute( 'class', 'flickity-button-icon' );
  svg.setAttribute( 'viewBox', '0 0 100 100' );
  var path = document.createElementNS( svgURI, 'path');
  var pathMovements = getArrowMovements( this.parent.options.arrowShape );
  path.setAttribute( 'd', pathMovements );
  path.setAttribute( 'class', 'arrow' );
  // rotate arrow
  if ( !this.isLeft ) {
    path.setAttribute( 'transform', 'translate(100, 100) rotate(180) ' );
  }
  svg.appendChild( path );
  return svg;
};

// get SVG path movmement
function getArrowMovements( shape ) {
  // use shape as movement if string
  if ( typeof shape == 'string' ) {
    return shape;
  }
  // create movement string
  return 'M ' + shape.x0 + ',50' +
    ' L ' + shape.x1 + ',' + ( shape.y1 + 50 ) +
    ' L ' + shape.x2 + ',' + ( shape.y2 + 50 ) +
    ' L ' + shape.x3 + ',50 ' +
    ' L ' + shape.x2 + ',' + ( 50 - shape.y2 ) +
    ' L ' + shape.x1 + ',' + ( 50 - shape.y1 ) +
    ' Z';
}

PrevNextButton.prototype.onTap = function() {
  if ( !this.isEnabled ) {
    return;
  }
  this.parent.uiChange();
  var method = this.isPrevious ? 'previous' : 'next';
  this.parent[ method ]();
};

PrevNextButton.prototype.handleEvent = utils$$2.handleEvent;

PrevNextButton.prototype.onclick = function( event ) {
  // only allow clicks from keyboard
  var focused = document.activeElement;
  if ( focused && focused == this.element ) {
    this.onTap( event, event );
  }
};

// -----  ----- //

PrevNextButton.prototype.enable = function() {
  if ( this.isEnabled ) {
    return;
  }
  this.element.disabled = false;
  this.isEnabled = true;
};

PrevNextButton.prototype.disable = function() {
  if ( !this.isEnabled ) {
    return;
  }
  this.element.disabled = true;
  this.isEnabled = false;
};

PrevNextButton.prototype.update = function() {
  // index of first or last slide, if previous or next
  var slides = this.parent.slides;
  // enable is wrapAround and at least 2 slides
  if ( this.parent.options.wrapAround && slides.length > 1 ) {
    this.enable();
    return;
  }
  var lastIndex = slides.length ? slides.length - 1 : 0;
  var boundIndex = this.isPrevious ? 0 : lastIndex;
  var method = this.parent.selectedIndex == boundIndex ? 'disable' : 'enable';
  this[ method ]();
};

PrevNextButton.prototype.destroy = function() {
  this.deactivate();
};

// -------------------------- Flickity prototype -------------------------- //

utils$$2.extend( Flickity.defaults, {
  prevNextButtons: true,
  arrowShape: {
    x0: 10,
    x1: 60, y1: 50,
    x2: 70, y2: 40,
    x3: 30
  }
});

Flickity.createMethods.push('_createPrevNextButtons');
var proto = Flickity.prototype;

proto._createPrevNextButtons = function() {
  if ( !this.options.prevNextButtons ) {
    return;
  }

  this.prevButton = new PrevNextButton( -1, this );
  this.nextButton = new PrevNextButton( 1, this );

  this.on( 'activate', this.activatePrevNextButtons );
};

proto.activatePrevNextButtons = function() {
  this.prevButton.activate();
  this.nextButton.activate();
  this.on( 'deactivate', this.deactivatePrevNextButtons );
};

proto.deactivatePrevNextButtons = function() {
  this.prevButton.deactivate();
  this.nextButton.deactivate();
  this.off( 'deactivate', this.deactivatePrevNextButtons );
};

// --------------------------  -------------------------- //

Flickity.PrevNextButton = PrevNextButton;

return Flickity;

}));
});

var pageDots = createCommonjsModule(function (module) {
// page dots
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof undefined == 'function' && undefined.amd ) {
    // AMD
    undefined( [
      './flickity',
      'tap-listener/tap-listener',
      'fizzy-ui-utils/utils'
    ], function( Flickity, TapListener, utils$$2 ) {
      return factory( window, Flickity, TapListener, utils$$2 );
    });
  } else if ( 'object' == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      flickity,
      tapListener,
      utils
    );
  } else {
    // browser global
    factory(
      window,
      window.Flickity,
      window.TapListener,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, Flickity, TapListener, utils$$2 ) {

// -------------------------- PageDots -------------------------- //

'use strict';

function PageDots( parent ) {
  this.parent = parent;
  this._create();
}

PageDots.prototype = new TapListener();

PageDots.prototype._create = function() {
  // create holder element
  this.holder = document.createElement('ol');
  this.holder.className = 'flickity-page-dots';
  // create dots, array of elements
  this.dots = [];
  // events
  this.on( 'tap', this.onTap );
  this.on( 'pointerDown', this.parent.childUIPointerDown.bind( this.parent ) );
};

PageDots.prototype.activate = function() {
  this.setDots();
  this.bindTap( this.holder );
  // add to DOM
  this.parent.element.appendChild( this.holder );
};

PageDots.prototype.deactivate = function() {
  // remove from DOM
  this.parent.element.removeChild( this.holder );
  TapListener.prototype.destroy.call( this );
};

PageDots.prototype.setDots = function() {
  // get difference between number of slides and number of dots
  var delta = this.parent.slides.length - this.dots.length;
  if ( delta > 0 ) {
    this.addDots( delta );
  } else if ( delta < 0 ) {
    this.removeDots( -delta );
  }
};

PageDots.prototype.addDots = function( count ) {
  var fragment = document.createDocumentFragment();
  var newDots = [];
  var length = this.dots.length;
  var max = length + count;

  for ( var i = length; i < max; i++ ) {
    var dot = document.createElement('li');
    dot.className = 'dot';
    dot.setAttribute( 'aria-label', 'Page dot ' + ( i + 1 ) );
    fragment.appendChild( dot );
    newDots.push( dot );
  }

  this.holder.appendChild( fragment );
  this.dots = this.dots.concat( newDots );
};

PageDots.prototype.removeDots = function( count ) {
  // remove from this.dots collection
  var removeDots = this.dots.splice( this.dots.length - count, count );
  // remove from DOM
  removeDots.forEach( function( dot ) {
    this.holder.removeChild( dot );
  }, this );
};

PageDots.prototype.updateSelected = function() {
  // remove selected class on previous
  if ( this.selectedDot ) {
    this.selectedDot.className = 'dot';
    this.selectedDot.removeAttribute('aria-current');
  }
  // don't proceed if no dots
  if ( !this.dots.length ) {
    return;
  }
  this.selectedDot = this.dots[ this.parent.selectedIndex ];
  this.selectedDot.className = 'dot is-selected';
  this.selectedDot.setAttribute( 'aria-current', 'step' );
};

PageDots.prototype.onTap = function( event ) {
  var target = event.target;
  // only care about dot clicks
  if ( target.nodeName != 'LI' ) {
    return;
  }

  this.parent.uiChange();
  var index = this.dots.indexOf( target );
  this.parent.select( index );
};

PageDots.prototype.destroy = function() {
  this.deactivate();
};

Flickity.PageDots = PageDots;

// -------------------------- Flickity -------------------------- //

utils$$2.extend( Flickity.defaults, {
  pageDots: true
});

Flickity.createMethods.push('_createPageDots');

var proto = Flickity.prototype;

proto._createPageDots = function() {
  if ( !this.options.pageDots ) {
    return;
  }
  this.pageDots = new PageDots( this );
  // events
  this.on( 'activate', this.activatePageDots );
  this.on( 'select', this.updateSelectedPageDots );
  this.on( 'cellChange', this.updatePageDots );
  this.on( 'resize', this.updatePageDots );
  this.on( 'deactivate', this.deactivatePageDots );
};

proto.activatePageDots = function() {
  this.pageDots.activate();
};

proto.updateSelectedPageDots = function() {
  this.pageDots.updateSelected();
};

proto.updatePageDots = function() {
  this.pageDots.setDots();
};

proto.deactivatePageDots = function() {
  this.pageDots.deactivate();
};

// -----  ----- //

Flickity.PageDots = PageDots;

return Flickity;

}));
});

var player = createCommonjsModule(function (module) {
// player & autoPlay
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof undefined == 'function' && undefined.amd ) {
    // AMD
    undefined( [
      'ev-emitter/ev-emitter',
      'fizzy-ui-utils/utils',
      './flickity'
    ], function( EvEmitter, utils$$2, Flickity ) {
      return factory( EvEmitter, utils$$2, Flickity );
    });
  } else if ( 'object' == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      evEmitter,
      utils,
      flickity
    );
  } else {
    // browser global
    factory(
      window.EvEmitter,
      window.fizzyUIUtils,
      window.Flickity
    );
  }

}( window, function factory( EvEmitter, utils$$2, Flickity ) {

'use strict';

// -------------------------- Player -------------------------- //

function Player( parent ) {
  this.parent = parent;
  this.state = 'stopped';
  // visibility change event handler
  this.onVisibilityChange = this.visibilityChange.bind( this );
  this.onVisibilityPlay = this.visibilityPlay.bind( this );
}

Player.prototype = Object.create( EvEmitter.prototype );

// start play
Player.prototype.play = function() {
  if ( this.state == 'playing' ) {
    return;
  }
  // do not play if page is hidden, start playing when page is visible
  var isPageHidden = document.hidden;
  if ( isPageHidden ) {
    document.addEventListener( 'visibilitychange', this.onVisibilityPlay );
    return;
  }

  this.state = 'playing';
  // listen to visibility change
  document.addEventListener( 'visibilitychange', this.onVisibilityChange );
  // start ticking
  this.tick();
};

Player.prototype.tick = function() {
  // do not tick if not playing
  if ( this.state != 'playing' ) {
    return;
  }

  var time = this.parent.options.autoPlay;
  // default to 3 seconds
  time = typeof time == 'number' ? time : 3000;
  var _this = this;
  // HACK: reset ticks if stopped and started within interval
  this.clear();
  this.timeout = setTimeout( function() {
    _this.parent.next( true );
    _this.tick();
  }, time );
};

Player.prototype.stop = function() {
  this.state = 'stopped';
  this.clear();
  // remove visibility change event
  document.removeEventListener( 'visibilitychange', this.onVisibilityChange );
};

Player.prototype.clear = function() {
  clearTimeout( this.timeout );
};

Player.prototype.pause = function() {
  if ( this.state == 'playing' ) {
    this.state = 'paused';
    this.clear();
  }
};

Player.prototype.unpause = function() {
  // re-start play if paused
  if ( this.state == 'paused' ) {
    this.play();
  }
};

// pause if page visibility is hidden, unpause if visible
Player.prototype.visibilityChange = function() {
  var isPageHidden = document.hidden;
  this[ isPageHidden ? 'pause' : 'unpause' ]();
};

Player.prototype.visibilityPlay = function() {
  this.play();
  document.removeEventListener( 'visibilitychange', this.onVisibilityPlay );
};

// -------------------------- Flickity -------------------------- //

utils$$2.extend( Flickity.defaults, {
  pauseAutoPlayOnHover: true
});

Flickity.createMethods.push('_createPlayer');
var proto = Flickity.prototype;

proto._createPlayer = function() {
  this.player = new Player( this );

  this.on( 'activate', this.activatePlayer );
  this.on( 'uiChange', this.stopPlayer );
  this.on( 'pointerDown', this.stopPlayer );
  this.on( 'deactivate', this.deactivatePlayer );
};

proto.activatePlayer = function() {
  if ( !this.options.autoPlay ) {
    return;
  }
  this.player.play();
  this.element.addEventListener( 'mouseenter', this );
};

// Player API, don't hate the ... thanks I know where the door is

proto.playPlayer = function() {
  this.player.play();
};

proto.stopPlayer = function() {
  this.player.stop();
};

proto.pausePlayer = function() {
  this.player.pause();
};

proto.unpausePlayer = function() {
  this.player.unpause();
};

proto.deactivatePlayer = function() {
  this.player.stop();
  this.element.removeEventListener( 'mouseenter', this );
};

// ----- mouseenter/leave ----- //

// pause auto-play on hover
proto.onmouseenter = function() {
  if ( !this.options.pauseAutoPlayOnHover ) {
    return;
  }
  this.player.pause();
  this.element.addEventListener( 'mouseleave', this );
};

// resume auto-play on hover off
proto.onmouseleave = function() {
  this.player.unpause();
  this.element.removeEventListener( 'mouseleave', this );
};

// -----  ----- //

Flickity.Player = Player;

return Flickity;

}));
});

var addRemoveCell = createCommonjsModule(function (module) {
// add, remove cell
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof undefined == 'function' && undefined.amd ) {
    // AMD
    undefined( [
      './flickity',
      'fizzy-ui-utils/utils'
    ], function( Flickity, utils$$2 ) {
      return factory( window, Flickity, utils$$2 );
    });
  } else if ( 'object' == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      flickity,
      utils
    );
  } else {
    // browser global
    factory(
      window,
      window.Flickity,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, Flickity, utils$$2 ) {

'use strict';

// append cells to a document fragment
function getCellsFragment( cells ) {
  var fragment = document.createDocumentFragment();
  cells.forEach( function( cell ) {
    fragment.appendChild( cell.element );
  });
  return fragment;
}

// -------------------------- add/remove cell prototype -------------------------- //

var proto = Flickity.prototype;

/**
 * Insert, prepend, or append cells
 * @param {Element, Array, NodeList} elems
 * @param {Integer} index
 */
proto.insert = function( elems, index ) {
  var cells = this._makeCells( elems );
  if ( !cells || !cells.length ) {
    return;
  }
  var len = this.cells.length;
  // default to append
  index = index === undefined ? len : index;
  // add cells with document fragment
  var fragment = getCellsFragment( cells );
  // append to slider
  var isAppend = index == len;
  if ( isAppend ) {
    this.slider.appendChild( fragment );
  } else {
    var insertCellElement = this.cells[ index ].element;
    this.slider.insertBefore( fragment, insertCellElement );
  }
  // add to this.cells
  if ( index === 0 ) {
    // prepend, add to start
    this.cells = cells.concat( this.cells );
  } else if ( isAppend ) {
    // append, add to end
    this.cells = this.cells.concat( cells );
  } else {
    // insert in this.cells
    var endCells = this.cells.splice( index, len - index );
    this.cells = this.cells.concat( cells ).concat( endCells );
  }

  this._sizeCells( cells );
  this.cellChange( index, true );
};

proto.append = function( elems ) {
  this.insert( elems, this.cells.length );
};

proto.prepend = function( elems ) {
  this.insert( elems, 0 );
};

/**
 * Remove cells
 * @param {Element, Array, NodeList} elems
 */
proto.remove = function( elems ) {
  var cells = this.getCells( elems );
  if ( !cells || !cells.length ) {
    return;
  }

  var minCellIndex = this.cells.length - 1;
  // remove cells from collection & DOM
  cells.forEach( function( cell ) {
    cell.remove();
    var index = this.cells.indexOf( cell );
    minCellIndex = Math.min( index, minCellIndex );
    utils$$2.removeFrom( this.cells, cell );
  }, this );

  this.cellChange( minCellIndex, true );
};

/**
 * logic to be run after a cell's size changes
 * @param {Element} elem - cell's element
 */
proto.cellSizeChange = function( elem ) {
  var cell = this.getCell( elem );
  if ( !cell ) {
    return;
  }
  cell.getSize();

  var index = this.cells.indexOf( cell );
  this.cellChange( index );
};

/**
 * logic any time a cell is changed: added, removed, or size changed
 * @param {Integer} changedCellIndex - index of the changed cell, optional
 */
proto.cellChange = function( changedCellIndex, isPositioningSlider ) {
  var prevSelectedElem = this.selectedElement;
  this._positionCells( changedCellIndex );
  this._getWrapShiftCells();
  this.setGallerySize();
  // update selectedIndex
  // try to maintain position & select previous selected element
  var cell = this.getCell( prevSelectedElem );
  if ( cell ) {
    this.selectedIndex = this.getCellSlideIndex( cell );
  }
  this.selectedIndex = Math.min( this.slides.length - 1, this.selectedIndex );

  this.emitEvent( 'cellChange', [ changedCellIndex ] );
  // position slider
  this.select( this.selectedIndex );
  // do not position slider after lazy load
  if ( isPositioningSlider ) {
    this.positionSliderAtSelected();
  }
};

// -----  ----- //

return Flickity;

}));
});

var lazyload = createCommonjsModule(function (module) {
// lazyload
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof undefined == 'function' && undefined.amd ) {
    // AMD
    undefined( [
      './flickity',
      'fizzy-ui-utils/utils'
    ], function( Flickity, utils$$2 ) {
      return factory( window, Flickity, utils$$2 );
    });
  } else if ( 'object' == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      flickity,
      utils
    );
  } else {
    // browser global
    factory(
      window,
      window.Flickity,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, Flickity, utils$$2 ) {
'use strict';

Flickity.createMethods.push('_createLazyload');
var proto = Flickity.prototype;

proto._createLazyload = function() {
  this.on( 'select', this.lazyLoad );
};

proto.lazyLoad = function() {
  var lazyLoad = this.options.lazyLoad;
  if ( !lazyLoad ) {
    return;
  }
  // get adjacent cells, use lazyLoad option for adjacent count
  var adjCount = typeof lazyLoad == 'number' ? lazyLoad : 0;
  var cellElems = this.getAdjacentCellElements( adjCount );
  // get lazy images in those cells
  var lazyImages = [];
  cellElems.forEach( function( cellElem ) {
    var lazyCellImages = getCellLazyImages( cellElem );
    lazyImages = lazyImages.concat( lazyCellImages );
  });
  // load lazy images
  lazyImages.forEach( function( img ) {
    new LazyLoader( img, this );
  }, this );
};

function getCellLazyImages( cellElem ) {
  // check if cell element is lazy image
  if ( cellElem.nodeName == 'IMG' ) {
    var lazyloadAttr = cellElem.getAttribute('data-flickity-lazyload');
    var srcAttr = cellElem.getAttribute('data-flickity-lazyload-src');
    var srcsetAttr = cellElem.getAttribute('data-flickity-lazyload-srcset');
    if ( lazyloadAttr || srcAttr || srcsetAttr ) {
      return [ cellElem ];
    }
  }
  // select lazy images in cell
  var lazySelector = 'img[data-flickity-lazyload], ' +
    'img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]';
  var imgs = cellElem.querySelectorAll( lazySelector );
  return utils$$2.makeArray( imgs );
}

// -------------------------- LazyLoader -------------------------- //

/**
 * class to handle loading images
 */
function LazyLoader( img, flickity$$2 ) {
  this.img = img;
  this.flickity = flickity$$2;
  this.load();
}

LazyLoader.prototype.handleEvent = utils$$2.handleEvent;

LazyLoader.prototype.load = function() {
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  // get src & srcset
  var src = this.img.getAttribute('data-flickity-lazyload') ||
    this.img.getAttribute('data-flickity-lazyload-src');
  var srcset = this.img.getAttribute('data-flickity-lazyload-srcset');
  // set src & serset
  this.img.src = src;
  if ( srcset ) {
    this.img.setAttribute( 'srcset', srcset );
  }
  // remove attr
  this.img.removeAttribute('data-flickity-lazyload');
  this.img.removeAttribute('data-flickity-lazyload-src');
  this.img.removeAttribute('data-flickity-lazyload-srcset');
};

LazyLoader.prototype.onload = function( event ) {
  this.complete( event, 'flickity-lazyloaded' );
};

LazyLoader.prototype.onerror = function( event ) {
  this.complete( event, 'flickity-lazyerror' );
};

LazyLoader.prototype.complete = function( event, className ) {
  // unbind events
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );

  var cell = this.flickity.getParentCell( this.img );
  var cellElem = cell && cell.element;
  this.flickity.cellSizeChange( cellElem );

  this.img.classList.add( className );
  this.flickity.dispatchEvent( 'lazyLoad', event, cellElem );
};

// -----  ----- //

Flickity.LazyLoader = LazyLoader;

return Flickity;

}));
});

var js$1 = createCommonjsModule(function (module) {
/*!
 * Flickity v2.1.1
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2018 Metafizzy
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof undefined == 'function' && undefined.amd ) {
    // AMD
    undefined( [
      './flickity',
      './drag',
      './prev-next-button',
      './page-dots',
      './player',
      './add-remove-cell',
      './lazyload'
    ], factory );
  } else if ( 'object' == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      flickity,
      drag,
      prevNextButton,
      pageDots,
      player,
      addRemoveCell,
      lazyload
    );
  }

})( window, function factory( Flickity ) {
  /*jshint strict: false*/
  return Flickity;
});
});

var hammer = createCommonjsModule(function (module) {
/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(window, document, exportName, undefined) {
  'use strict';

var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = document.createElement('div');

var TYPE_FUNCTION = 'function';

var round = Math.round;
var abs = Math.abs;
var now = Date.now;

/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
}

/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
    }
    return false;
}

/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
    var i;

    if (!obj) {
        return;
    }

    if (obj.forEach) {
        obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
        i = 0;
        while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
        }
    } else {
        for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
    }
}

/**
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */
function deprecate(method, name, message) {
    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
    return function() {
        var e = new Error('get-stack-trace');
        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
            .replace(/^\s+at\s+/gm, '')
            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

        var log = window.console && (window.console.warn || window.console.log);
        if (log) {
            log.call(window.console, deprecationMessage, stack);
        }
        return method.apply(this, arguments);
    };
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */
var assign;
if (typeof Object.assign !== 'function') {
    assign = function assign(target) {
        if (target === undefined || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        var output = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source !== undefined && source !== null) {
                for (var nextKey in source) {
                    if (source.hasOwnProperty(nextKey)) {
                        output[nextKey] = source[nextKey];
                    }
                }
            }
        }
        return output;
    };
} else {
    assign = Object.assign;
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge=false]
 * @returns {Object} dest
 */
var extend = deprecate(function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
        if (!merge || (merge && dest[keys[i]] === undefined)) {
            dest[keys[i]] = src[keys[i]];
        }
        i++;
    }
    return dest;
}, 'extend', 'Use `assign`.');

/**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
var merge = deprecate(function merge(dest, src) {
    return extend(dest, src, true);
}, 'merge', 'Use `assign`.');

/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;

    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;

    if (properties) {
        assign(childP, properties);
    }
}

/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
    return function boundFn() {
        return fn.apply(context, arguments);
    };
}

/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
}

/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
    return (val1 === undefined) ? val2 : val1;
}

/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.addEventListener(type, handler, false);
    });
}

/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.removeEventListener(type, handler, false);
    });
}

/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
    while (node) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
    return str.indexOf(find) > -1;
}

/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
    return str.trim().split(/\s+/g);
}

/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
        return src.indexOf(find);
    } else {
        var i = 0;
        while (i < src.length) {
            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                return i;
            }
            i++;
        }
        return -1;
    }
}

/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}

/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
        var val = key ? src[i][key] : src[i];
        if (inArray(values, val) < 0) {
            results.push(src[i]);
        }
        values[i] = val;
        i++;
    }

    if (sort) {
        if (!key) {
            results = results.sort();
        } else {
            results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
    }

    return results;
}

/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);

    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = (prefix) ? prefix + camelProp : property;

        if (prop in obj) {
            return prop;
        }
        i++;
    }
    return undefined;
}

/**
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
    return _uniqueId++;
}

/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return (doc.defaultView || doc.parentWindow || window);
}

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

var SUPPORT_TOUCH = ('ontouchstart' in window);
var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';

var COMPUTE_INTERVAL = 25;

var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;

var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;

var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];

/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function(ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
        }
    };

    this.init();

}

Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function() { },

    /**
     * bind the events
     */
    init: function() {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },

    /**
     * unbind the events
     */
    destroy: function() {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
};

/**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;

    if (inputClass) {
        Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
    } else {
        Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
}

/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;

    if (isFirst) {
        manager.session = {};
    }

    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;

    // compute scale, rotation etc
    computeInputData(manager, input);

    // emit secret event
    manager.emit('hammer.input', input);

    manager.recognize(input);
    manager.session.prevInput = input;
}

/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;

    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
    }

    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
        session.firstMultiple = false;
    }

    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;

    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);

    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

    computeIntervalInputData(session, input);

    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
    }
    input.target = target;
}

function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
        };

        offset = session.offsetDelta = {
            x: center.x,
            y: center.y
        };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
}

/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity, velocityX, velocityY, direction;

    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
        var deltaX = input.deltaX - last.deltaX;
        var deltaY = input.deltaY - last.deltaY;

        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);

        session.lastInterval = input;
    } else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
}

/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
        pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
        };
        i++;
    }

    return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
    };
}

/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
    var pointersLength = pointers.length;

    // no need to loop when only one touch
    if (pointersLength === 1) {
        return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
    }

    var x = 0, y = 0, i = 0;
    while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
    }

    return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
    };
}

/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
    return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
    };
}

/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }

    if (abs(x) >= abs(y)) {
        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];

    return Math.sqrt((x * x) + (y * y));
}

/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
}

/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
};

var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;

    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
}

inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type];

        // on start we want to have the left mouse button down
        if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
        }

        if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
        }

        // mouse must be down
        if (!this.pressed) {
            return;
        }

        if (eventType & INPUT_END) {
            this.pressed = false;
        }

        this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
        });
    }
});

var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
};

// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
};

var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

// IE10 has prefixed support, and case-sensitive
if (window.MSPointerEvent && !window.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}

/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;

    Input.apply(this, arguments);

    this.store = (this.manager.session.pointerEvents = []);
}

inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;

        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

        // get index of the event in the store
        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

        // start and mouse must be down
        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
                store.push(ev);
                storeIndex = store.length - 1;
            }
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
        }

        // it not found, so the pointer hasn't been down (so it's probably a hover)
        if (storeIndex < 0) {
            return;
        }

        // update the event in the store
        store[storeIndex] = ev;

        this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
        });

        if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
        }
    }
});

var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;

    Input.apply(this, arguments);
}

inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

        // should we handle the touch events?
        if (type === INPUT_START) {
            this.started = true;
        }

        if (!this.started) {
            return;
        }

        var touches = normalizeSingleTouches.call(this, ev, type);

        // when done, reset the started state
        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);

    if (type & (INPUT_END | INPUT_CANCEL)) {
        all = uniqueArray(all.concat(changed), 'identifier', true);
    }

    return [all, changed];
}

var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */
function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};

    Input.apply(this, arguments);
}

inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);
        if (!touches) {
            return;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
    }

    var i,
        targetTouches,
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [],
        target = this.target;

    // get target touches from touches
    targetTouches = allTouches.filter(function(touch) {
        return hasParent(touch.target, target);
    });

    // collect touches
    if (type === INPUT_START) {
        i = 0;
        while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
        }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
        }

        // cleanup removed touches
        if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
        }
        i++;
    }

    if (!changedTargetTouches.length) {
        return;
    }

    return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
        changedTargetTouches
    ];
}

/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */

var DEDUP_TIMEOUT = 2500;
var DEDUP_DISTANCE = 25;

function TouchMouseInput() {
    Input.apply(this, arguments);

    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);

    this.primaryTouch = null;
    this.lastTouches = [];
}

inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
            return;
        }

        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
        if (isTouch) {
            recordTouches.call(this, inputEvent, inputData);
        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
            return;
        }

        this.callback(manager, inputEvent, inputData);
    },

    /**
     * remove the event listeners
     */
    destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
    }
});

function recordTouches(eventType, eventData) {
    if (eventType & INPUT_START) {
        this.primaryTouch = eventData.changedPointers[0].identifier;
        setLastTouch.call(this, eventData);
    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        setLastTouch.call(this, eventData);
    }
}

function setLastTouch(eventData) {
    var touch = eventData.changedPointers[0];

    if (touch.identifier === this.primaryTouch) {
        var lastTouch = {x: touch.clientX, y: touch.clientY};
        this.lastTouches.push(lastTouch);
        var lts = this.lastTouches;
        var removeLastTouch = function() {
            var i = lts.indexOf(lastTouch);
            if (i > -1) {
                lts.splice(i, 1);
            }
        };
        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
    }
}

function isSyntheticEvent(eventData) {
    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
    for (var i = 0; i < this.lastTouches.length; i++) {
        var t = this.lastTouches[i];
        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
            return true;
        }
    }
    return false;
}

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

// magical touchAction value
var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';
var TOUCH_ACTION_MAP = getTouchActionProps();

/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
}

TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function(value) {
        // find out the touch-action by the event handlers
        if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
        }

        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }
        this.actions = value.toLowerCase().trim();
    },

    /**
     * just re-set the touchAction value
     */
    update: function() {
        this.set(this.manager.options.touchAction);
    },

    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function() {
        var actions = [];
        each(this.manager.recognizers, function(recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
            }
        });
        return cleanTouchActions(actions.join(' '));
    },

    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function(input) {
        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection;

        // if the touch action did prevented once this session
        if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
        }

        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

        if (hasNone) {
            //do not prevent defaults if this is a tap gesture

            var isTapPointer = input.pointers.length === 1;
            var isTapMovement = input.distance < 2;
            var isTapTouchTime = input.deltaTime < 250;

            if (isTapPointer && isTapMovement && isTapTouchTime) {
                return;
            }
        }

        if (hasPanX && hasPanY) {
            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
        }

        if (hasNone ||
            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
            (hasPanX && direction & DIRECTION_VERTICAL)) {
            return this.preventSrc(srcEvent);
        }
    },

    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function(srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
    }
};

/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    // if both pan-x and pan-y are set (different recognizers
    // for different directions, e.g. horizontal pan but vertical swipe?)
    // we need none (as otherwise with pan-x pan-y combined none of these
    // recognizers will work, since the browser would handle all panning
    if (hasPanX && hasPanY) {
        return TOUCH_ACTION_NONE;
    }

    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
}

function getTouchActionProps() {
    if (!NATIVE_TOUCH_ACTION) {
        return false;
    }
    var touchMap = {};
    var cssSupports = window.CSS && window.CSS.supports;
    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {

        // If css.supports is not supported but there is native touch-action assume it supports
        // all values. This is the case for IE 10 and 11.
        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
    });
    return touchMap;
}

/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function Recognizer(options) {
    this.options = assign({}, this.defaults, options || {});

    this.id = uniqueId();

    this.manager = null;

    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);

    this.state = STATE_POSSIBLE;

    this.simultaneous = {};
    this.requireFail = [];
}

Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},

    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function(options) {
        assign(this.options, options);

        // also update the touchAction, in case something changed about the directions/enabled state
        this.manager && this.manager.touchAction.update();
        return this;
    },

    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
        }

        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
        }
        return this;
    },

    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
    },

    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
        }

        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
        }
        return this;
    },

    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);
        if (index > -1) {
            this.requireFail.splice(index, 1);
        }
        return this;
    },

    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function() {
        return this.requireFail.length > 0;
    },

    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function(otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
    },

    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function(input) {
        var self = this;
        var state = this.state;

        function emit(event) {
            self.manager.emit(event, input);
        }

        // 'panstart' and 'panmove'
        if (state < STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }

        emit(self.options.event); // simple 'eventName' events

        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
            emit(input.additionalEvent);
        }

        // panend and pancancel
        if (state >= STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }
    },

    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function(input) {
        if (this.canEmit()) {
            return this.emit(input);
        }
        // it's failing anyway
        this.state = STATE_FAILED;
    },

    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function() {
        var i = 0;
        while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
            }
            i++;
        }
        return true;
    },

    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = assign({}, inputData);

        // is is enabled and allow recognizing?
        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
        }

        // reset when we've reached the end
        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
        }

        this.state = this.process(inputDataClone);

        // the recognizer has recognized a gesture
        // so trigger an event
        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
        }
    },

    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function(inputData) { }, // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function() { },

    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function() { }
};

/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function stateStr(state) {
    if (state & STATE_CANCELLED) {
        return 'cancel';
    } else if (state & STATE_ENDED) {
        return 'end';
    } else if (state & STATE_CHANGED) {
        return 'move';
    } else if (state & STATE_BEGAN) {
        return 'start';
    }
    return '';
}

/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
        return 'down';
    } else if (direction == DIRECTION_UP) {
        return 'up';
    } else if (direction == DIRECTION_LEFT) {
        return 'left';
    } else if (direction == DIRECTION_RIGHT) {
        return 'right';
    }
    return '';
}

/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
        return manager.get(otherRecognizer);
    }
    return otherRecognizer;
}

/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function AttrRecognizer() {
    Recognizer.apply(this, arguments);
}

inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
    },

    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function(input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
    },

    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function(input) {
        var state = this.state;
        var eventType = input.eventType;

        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input);

        // on cancel input and we've recognized before, return STATE_CANCELLED
        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
        } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
                return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
        }
        return STATE_FAILED;
    }
});

/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);

    this.pX = null;
    this.pY = null;
}

inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
    },

    getTouchAction: function() {
        var direction = this.options.direction;
        var actions = [];
        if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
        }
        if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
        }
        return actions;
    },

    directionTest: function(input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY;

        // lock to axis?
        if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
            } else {
                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
            }
        }
        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
    },

    attrTest: function(input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) &&
            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },

    emit: function(input) {

        this.pX = input.deltaX;
        this.pY = input.deltaY;

        var direction = directionStr(input.direction);

        if (direction) {
            input.additionalEvent = this.options.event + direction;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },

    emit: function(input) {
        if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            input.additionalEvent = this.options.event + inOut;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function PressRecognizer() {
    Recognizer.apply(this, arguments);

    this._timer = null;
    this._input = null;
}

inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
        event: 'press',
        pointers: 1,
        time: 251, // minimal time of the pointer to be pressed
        threshold: 9 // a minimal movement is ok, but keep it low
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_AUTO];
    },

    process: function(input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;

        this._input = input;

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
            this.reset();
        } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function() {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
            }, options.time, this);
        } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
        }
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function(input) {
        if (this.state !== STATE_RECOGNIZED) {
            return;
        }

        if (input && (input.eventType & INPUT_END)) {
            this.manager.emit(this.options.event + 'up', input);
        } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
});

/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.3,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
    },

    getTouchAction: function() {
        return PanRecognizer.prototype.getTouchAction.call(this);
    },

    attrTest: function(input) {
        var direction = this.options.direction;
        var velocity;

        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.overallVelocity;
        } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.overallVelocityX;
        } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.overallVelocityY;
        }

        return this._super.attrTest.call(this, input) &&
            direction & input.offsetDirection &&
            input.distance > this.options.threshold &&
            input.maxPointers == this.options.pointers &&
            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },

    emit: function(input) {
        var direction = directionStr(input.offsetDirection);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this.manager.emit(this.options.event, input);
    }
});

/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function TapRecognizer() {
    Recognizer.apply(this, arguments);

    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;

    this._timer = null;
    this._input = null;
    this.count = 0;
}

inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300, // max time between the multi-tap taps
        time: 250, // max time of the pointer to be down (like finger on the screen)
        threshold: 9, // a minimal movement is ok, but keep it low
        posThreshold: 10 // a multi-tap can be a bit off the initial position
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_MANIPULATION];
    },

    process: function(input) {
        var options = this.options;

        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;

        this.reset();

        if ((input.eventType & INPUT_START) && (this.count === 0)) {
            return this.failTimeout();
        }

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
                return this.failTimeout();
            }

            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

            this.pTime = input.timeStamp;
            this.pCenter = input.center;

            if (!validMultiTap || !validInterval) {
                this.count = 1;
            } else {
                this.count += 1;
            }

            this._input = input;

            // if tap count matches we have recognized it,
            // else it has began recognizing...
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
                // no failing requirements, immediately trigger the tap event
                // or wait as long as the multitap interval to trigger
                if (!this.hasRequireFailures()) {
                    return STATE_RECOGNIZED;
                } else {
                    this._timer = setTimeoutContext(function() {
                        this.state = STATE_RECOGNIZED;
                        this.tryEmit();
                    }, options.interval, this);
                    return STATE_BEGAN;
                }
            }
        }
        return STATE_FAILED;
    },

    failTimeout: function() {
        this._timer = setTimeoutContext(function() {
            this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function() {
        if (this.state == STATE_RECOGNIZED) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
}

/**
 * @const {string}
 */
Hammer.VERSION = '2.0.7';

/**
 * default settings
 * @namespace
 */
Hammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,

    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,

    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,

    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,

    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,

    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, {enable: false}],
        [PinchRecognizer, {enable: false}, ['rotate']],
        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
        [TapRecognizer],
        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
        [PressRecognizer]
    ],

    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: 'none',

        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: 'none',

        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: 'none',

        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: 'none',

        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: 'none',

        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: 'rgba(0,0,0,0)'
    }
};

var STOP = 1;
var FORCED_STOP = 2;

/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Manager(element, options) {
    this.options = assign({}, Hammer.defaults, options || {});

    this.options.inputTarget = this.options.inputTarget || element;

    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.oldCssProps = {};

    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);

    toggleCssProps(this, true);

    each(this.options.recognizers, function(item) {
        var recognizer = this.add(new (item[0])(item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
    }, this);
}

Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function(options) {
        assign(this.options, options);

        // Options that need a little more setup
        if (options.touchAction) {
            this.touchAction.update();
        }
        if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
        }
        return this;
    },

    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function(force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
    },

    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        var session = this.session;
        if (session.stopped) {
            return;
        }

        // run the touch-action polyfill
        this.touchAction.preventDefaults(inputData);

        var recognizer;
        var recognizers = this.recognizers;

        // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`
        var curRecognizer = session.curRecognizer;

        // reset when the last recognizer is recognized
        // or when we're in a new session
        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
            curRecognizer = session.curRecognizer = null;
        }

        var i = 0;
        while (i < recognizers.length) {
            recognizer = recognizers[i];

            // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.
            if (session.stopped !== FORCED_STOP && ( // 1
                    !curRecognizer || recognizer == curRecognizer || // 2
                    recognizer.canRecognizeWith(curRecognizer))) { // 3
                recognizer.recognize(inputData);
            } else {
                recognizer.reset();
            }

            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
        }
    },

    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function(recognizer) {
        if (recognizer instanceof Recognizer) {
            return recognizer;
        }

        var recognizers = this.recognizers;
        for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
            }
        }
        return null;
    },

    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function(recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
        }

        // remove existing
        var existing = this.get(recognizer.options.event);
        if (existing) {
            this.remove(existing);
        }

        this.recognizers.push(recognizer);
        recognizer.manager = this;

        this.touchAction.update();
        return recognizer;
    },

    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function(recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
        }

        recognizer = this.get(recognizer);

        // let's make sure this recognizer exists
        if (recognizer) {
            var recognizers = this.recognizers;
            var index = inArray(recognizers, recognizer);

            if (index !== -1) {
                recognizers.splice(index, 1);
                this.touchAction.update();
            }
        }

        return this;
    },

    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function(events, handler) {
        if (events === undefined) {
            return;
        }
        if (handler === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
        });
        return this;
    },

    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function(events, handler) {
        if (events === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            if (!handler) {
                delete handlers[event];
            } else {
                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            }
        });
        return this;
    },

    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function(event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
            triggerDomEvent(event, data);
        }

        // no handlers, so skip it all
        var handlers = this.handlers[event] && this.handlers[event].slice();
        if (!handlers || !handlers.length) {
            return;
        }

        data.type = event;
        data.preventDefault = function() {
            data.srcEvent.preventDefault();
        };

        var i = 0;
        while (i < handlers.length) {
            handlers[i](data);
            i++;
        }
    },

    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function() {
        this.element && toggleCssProps(this, false);

        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
    }
};

/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function toggleCssProps(manager, add) {
    var element = manager.element;
    if (!element.style) {
        return;
    }
    var prop;
    each(manager.options.cssProps, function(value, name) {
        prop = prefixed(element.style, name);
        if (add) {
            manager.oldCssProps[prop] = element.style[prop];
            element.style[prop] = value;
        } else {
            element.style[prop] = manager.oldCssProps[prop] || '';
        }
    });
    if (!add) {
        manager.oldCssProps = {};
    }
}

/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
}

assign(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,

    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,

    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,

    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,

    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,

    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,

    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    assign: assign,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
});

// this prevents errors when Hammer is loaded in the presence of an AMD
//  style loader but by script tag, not by the loader.
var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
freeGlobal.Hammer = Hammer;

if (typeof undefined === 'function' && undefined.amd) {
    undefined(function() {
        return Hammer;
    });
} else if ('object' != 'undefined' && module.exports) {
    module.exports = Hammer;
} else {
    window[exportName] = Hammer;
}

})(window, document, 'Hammer');
});

var CardsPlayer = function () {
  function CardsPlayer(el) {
    classCallCheck(this, CardsPlayer);

    this.el = el;
    this.speedThreshold = 2; // px/ms threshold before snapping off screen when released
    this.minSpeed = 1; // Minimum px/ms to trigger snap threshold
    this.snapThreshold = 1; // Distance percentage between card and cards container

    this.hintShown = false;

    this.cards = this.el.querySelectorAll(selectors.cardsPlayer.card);
    this.deck = null;
    this.hand = null;
    this.mc = null;
    this.panningCard = null;
    this.translatingCards = [];
    this.requestAnimationFrameId = null;

    this._onResize = this._onResize.bind(this);
    this._onScroll = this._onScroll.bind(this);
    this._onHintRotateOut = this._onHintRotateOut.bind(this);
    this._onHintRotateIn = this._onHintRotateIn.bind(this);
    this._onPanStart = this._onPanStart.bind(this);
    this._onPan = this._onPan.bind(this);
    this._onPanEnd = this._onPanEnd.bind(this);
    this._onTap = this._onTap.bind(this);
    this._translateElementsOffScreen = this._translateElementsOffScreen.bind(this);

    this.init();
  }

  createClass(CardsPlayer, [{
    key: 'init',
    value: function init() {
      this._createElements();
      this._setCardsContainerHeight();

      window.addEventListener('resize', this._onResize);

      if (this.cards.length <= 1) {
        return;
      }

      window.addEventListener('scroll', this._onScroll);

      this.pan = new hammer.Pan('pan', { direction: hammer.DIRECTION_HORIZONTAL, threshold: 0 });

      this.mc = new hammer.Manager(this.cardsContainer, {
        touchAction: 'pan-y',
        recognizers: [[hammer.Tap]]
      });

      this.mc.add(this.pan);

      this.mc.on('panstart', this._onPanStart);
      this.mc.on('panleft panright', this._onPan);
      this.mc.on('panend pancancel', this._onPanEnd);
      this.mc.on('tap', this._onTap);

      this._onScroll();
    }
  }, {
    key: 'getTopCardIndex',
    value: function getTopCardIndex() {
      var card = this.deck.querySelector(selectors.cardsPlayer.card);

      if (card) {
        for (var i = 0; i < this.cards.length; i += 1) {
          if (this.cards[i] === card) return i;
        }
      }

      return false;
    }
  }, {
    key: 'drawToCardIndex',
    value: function drawToCardIndex(index) {
      if (index > this.cards.length - 1) {
        return;
      }

      var card = this.cards[index];
      var maxIterations = 1000;

      for (var i = this.translatingCards.length - 1; i >= 0; i -= 1) {
        var el = this.translatingCards[i].el;

        this.translatingCards.splice(i, 1);
        this.deck.appendChild(el);
      }

      for (var _i = 0; _i < this.cards.length; _i += 1) {
        var _el = this.cards[_i];
        var elVisual = _el.querySelector(selectors.cardsPlayer.cardVisual);

        _el.classList.remove(classes.cardsPlayer.repositioning);
        _el.style.transform = '';
        elVisual.classList.remove(classes.cardsPlayer.hintingStart);
        elVisual.classList.remove(classes.cardsPlayer.hintingEnd);
        elVisual.classList.remove(classes.cardsPlayer.visualFirst);
      }

      var topCard = this.deck.querySelector(selectors.cardsPlayer.card);
      var iterations = 0;

      while (iterations <= maxIterations && topCard !== card) {
        this.deck.appendChild(topCard);

        iterations += 1;
        topCard = this.deck.querySelector(selectors.cardsPlayer.card);
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      window.removeEventListener('resize', this._onResize);
      window.removeEventListener('scroll', this._onScroll);

      if (this.mc) {
        this.mc.off('panstart', this._onPanStart);
        this.mc.off('panleft panright', this._onPan);
        this.mc.off('panend pancancel', this._onPanEnd);
        this.mc.destroy();
      }

      if (this.requestAnimationFrameId) {
        window.cancelAnimationFrame(this.requestAnimationFrameId);
      }

      this.drawToCardIndex(0);
      this._destroyElements();
    }
  }, {
    key: '_createElements',
    value: function _createElements() {
      this.cardsContainer = document.createElement('div');
      this.cardsContentContainer = document.createElement('div');
      this.deck = document.createElement('div');
      this.hand = document.createElement('div');

      for (var i = 0; i < this.cards.length; i += 1) {
        var card = this.cards[i];

        if (i === 0) {
          var cardVisual = card.querySelector(selectors.cardsPlayer.cardVisual);
          var cardContent = card.querySelector(selectors.cardsPlayer.cardContent);

          if (cardContent) {
            var contentClone = cardContent.cloneNode(true);

            this.cardsContentContainer.appendChild(contentClone);
          }

          cardVisual.classList.add(classes.cardsPlayer.visualFirst);
        }

        this.deck.appendChild(card);
      }

      this.cardsContainer.classList.add(classes.cardsPlayer.player);
      this.cardsContentContainer.classList.add(classes.cardsPlayer.content);
      this.deck.classList.add(classes.cardsPlayer.deck);
      this.hand.classList.add(classes.cardsPlayer.hand);

      this.cardsContainer.appendChild(this.deck);
      this.cardsContainer.appendChild(this.hand);
      this.el.appendChild(this.cardsContainer);
      this.el.appendChild(this.cardsContentContainer);
    }
  }, {
    key: '_setCardsContainerHeight',
    value: function _setCardsContainerHeight() {
      var maxHeight = 0;

      for (var i = 0; i < this.cards.length; i += 1) {
        var card = this.cards[i];
        var height = card.getBoundingClientRect().height;

        maxHeight = maxHeight < height ? height : maxHeight;
      }

      this.cardsContainer.style.paddingBottom = maxHeight + 'px';
    }
  }, {
    key: '_onResize',
    value: function _onResize() {
      this._setCardsContainerHeight();
    }
  }, {
    key: '_onScroll',
    value: function _onScroll() {
      var elemRect = this.cardsContainer.getBoundingClientRect();
      var elemMiddle = elemRect.top + elemRect.height / 2;

      var isVisible = elemMiddle <= (window.innerHeight || document.documentElement.clientHeight);

      if (isVisible && !this.hintShown) {
        var card = this.cards[0];
        var cardVisual = card.querySelector(selectors.cardsPlayer.cardVisual);

        window.removeEventListener('scroll', this._onScroll);
        card.addEventListener('transitionend', this._onHintRotateOut);

        cardVisual.classList.add(classes.cardsPlayer.hintingStart);

        this.hintShown = true;
      }
    }
  }, {
    key: '_onHintRotateOut',
    value: function _onHintRotateOut(event) {
      var card = event.currentTarget;
      var cardVisual = card.querySelector(selectors.cardsPlayer.cardVisual);

      card.removeEventListener('transitionend', this._onHintRotateOut);
      card.addEventListener('transitionend', this._onHintRotateIn);
      cardVisual.classList.remove(classes.cardsPlayer.hintingStart);
      cardVisual.classList.add(classes.cardsPlayer.hintingEnd);
    }
  }, {
    key: '_onHintRotateIn',
    value: function _onHintRotateIn(event) {
      var card = event.currentTarget;
      var cardVisual = card.querySelector(selectors.cardsPlayer.cardVisual);

      card.removeEventListener('transitionend', this._onHintRotateIn);
      cardVisual.classList.remove(classes.cardsPlayer.hintingEnd);
    }
  }, {
    key: '_onPanStart',
    value: function _onPanStart() {
      if (this.panningCard !== null) {
        return;
      }

      var card = this.deck.querySelector(selectors.cardsPlayer.card);
      var cardVisual = card.querySelector(selectors.cardsPlayer.cardVisual);

      if (!card) {
        return;
      }

      card.removeEventListener('transitionend', this._onHintRotateOut);
      card.removeEventListener('transitionend', this._onHintRotateIn);
      card.classList.remove(classes.cardsPlayer.hintingStart);
      card.classList.remove(classes.cardsPlayer.hintingEnd);
      cardVisual.classList.remove(classes.cardsPlayer.visualFirst);

      this.panningCard = card;
      this.hand.appendChild(this.panningCard);
      this.panningCard.classList.remove(classes.cardsPlayer.repositioning);

      var topCard = this.deck.querySelector(selectors.cardsPlayer.card);
      var topCardVisual = topCard.querySelector(selectors.cardsPlayer.cardVisual);

      topCardVisual.classList.add(classes.cardsPlayer.visualFirst);
    }
  }, {
    key: '_onPan',
    value: function _onPan(event) {
      var _this = this;

      var center = event.center,
          deltaX = event.deltaX,
          isFinal = event.isFinal;


      if (this.panningCard && isFinal) {
        this.pan = new hammer.Pan('pan', { direction: hammer.DIRECTION_HORIZONTAL, threshold: 0 });

        this.mc.emit('panend', event);
        this.mc.add(this.pan);
      }

      if (!this.panningCard || center.x === 0 && center.y === 0) {
        return;
      }

      justDebounce$1(window.requestAnimationFrame(function () {
        var translate = 'translateX(' + deltaX + ')';

        if (!_this.panningCard || translate === _this.panningCard.style.transform) {
          return;
        }

        var containerRect = _this.cardsContainer.getBoundingClientRect();
        var containerWidth = containerRect.width;
        var containerCenter = containerRect.left + containerWidth / 2;

        var panningCardRect = _this.panningCard.getBoundingClientRect();
        var panningCardWidth = panningCardRect.width;
        var panningCardCenter = panningCardRect.left + panningCardWidth / 2;

        var threshold = 0;

        if (panningCardCenter / containerCenter >= 1) {
          var thresholdValue = 1 + _this.snapThreshold - 1;
          threshold = 1 - (panningCardCenter / containerCenter / thresholdValue - 1);
        } else {
          var _thresholdValue = 1 - (1 - _this.snapThreshold);
          threshold = panningCardCenter / containerCenter / _thresholdValue;
        }

        threshold = Math.max(0, threshold) || 1;

        var card = threshold === 1 ? _this.deck.querySelector(selectors.cardsPlayer.card) : _this.panningCard;
        var cardContent = card.querySelector(selectors.cardsPlayer.cardContent);

        if (cardContent) {
          var contentClone = cardContent.cloneNode(true);

          _this.cardsContentContainer.innerHTML = '';
          _this.cardsContentContainer.appendChild(contentClone);
          _this.cardsContentContainer.style.opacity = threshold;
        }

        _this.panningCard.style.transform = 'translateX(' + deltaX + 'px)';
      }), 16);
    }
  }, {
    key: '_onPanEnd',
    value: function _onPanEnd(event) {
      var _this2 = this;

      var center = event.center;
      var deltaX = event.deltaX,
          velocity = event.velocity;


      if (!this.panningCard) {
        return;
      }

      var isCenter = center.x === 0 && center.y === 0;

      deltaX = isCenter ? 0 : deltaX;
      velocity = isCenter ? 0 : velocity;

      var containerRect = this.cardsContainer.getBoundingClientRect();
      var containerWidth = containerRect.width;
      var containerCenter = containerRect.left + containerWidth / 2;

      var panningCardRect = this.panningCard.getBoundingClientRect();
      var panningCardWidth = panningCardRect.width;
      var panningCardCenter = panningCardRect.left + panningCardWidth / 2;

      var metSpeedThreshold = Math.abs(velocity) >= this.speedThreshold;
      var metSnapThreshold = Math.abs(velocity) <= this.minSpeed && (panningCardCenter / containerCenter <= 1 - this.snapThreshold || panningCardCenter / containerCenter >= 1 + this.snapThreshold);

      if (metSpeedThreshold || metSnapThreshold) {
        var translateVelocity = panningCardCenter / containerCenter >= 1 ? Math.max(velocity, 5) : Math.min(velocity, -5);

        var card = this.deck.querySelector(selectors.cardsPlayer.card);
        var cardContent = card.querySelector(selectors.cardsPlayer.cardContent);

        if (cardContent) {
          var contentClone = cardContent.cloneNode(true);

          this.cardsContentContainer.innerHTML = '';
          this.cardsContentContainer.appendChild(contentClone);
          this.cardsContentContainer.style.opacity = 1;
        }

        this.translatingCards.push({
          el: this.panningCard,
          offset: deltaX,
          velocity: translateVelocity,
          prevTimestamp: null
        });

        this._translateElementsOffScreen();
        this.panningCard = null;
      } else {
        window.requestAnimationFrame(function () {
          var topCard = _this2.deck.querySelector(selectors.cardsPlayer.card);
          var topCardVisual = topCard.querySelector(selectors.cardsPlayer.cardVisual);
          var panningCardVisual = _this2.panningCard.querySelector(selectors.cardsPlayer.cardVisual);

          topCardVisual.classList.remove(classes.cardsPlayer.visualFirst);
          _this2.deck.insertBefore(_this2.panningCard, _this2.deck.firstChild);
          _this2.panningCard.classList.add(classes.cardsPlayer.repositioning);
          _this2.panningCard.style.transform = 'translateX(' + deltaX + 'px)';

          topCardVisual.classList.remove(classes.cardsPlayer.visualFirst);
          panningCardVisual.classList.add(classes.cardsPlayer.visualFirst);

          window.requestAnimationFrame(function () {
            if (_this2.panningCard) {
              var _cardContent = _this2.panningCard.querySelector(selectors.cardsPlayer.cardContent);

              if (_cardContent) {
                var _contentClone = _cardContent.cloneNode(true);

                _this2.cardsContentContainer.innerHTML = '';
                _this2.cardsContentContainer.appendChild(_contentClone);
                _this2.cardsContentContainer.style.opacity = 1;
              }

              _this2.panningCard.style.transform = 'translateX(0)';
              _this2.panningCard = null;
            }
          });
        });
      }
    }
  }, {
    key: '_onTap',
    value: function _onTap() {
      var element = this.deck.querySelector(selectors.cardsPlayer.card);
      var url = element.getAttribute('data-cards-player-card-url');

      if (url) {
        window.location.href = url;
      }
    }
  }, {
    key: '_translateElementsOffScreen',
    value: function _translateElementsOffScreen(timestamp) {
      for (var i = this.translatingCards.length - 1; i >= 0; i -= 1) {
        var translatingElement = this.translatingCards[i];
        var el = translatingElement.el,
            offset = translatingElement.offset,
            velocity = translatingElement.velocity,
            prevTimestamp = translatingElement.prevTimestamp;

        var elapsedTimeMilli = prevTimestamp ? timestamp - prevTimestamp : 0;
        var distance = velocity * elapsedTimeMilli;
        var newOffset = offset + distance;

        el.style.transform = 'translateX(' + newOffset + 'px)';
        translatingElement.offset = newOffset;
        translatingElement.prevTimestamp = timestamp;

        if (el.getBoundingClientRect().right < 0 || el.getBoundingClientRect().left > document.body.getBoundingClientRect().right) {
          this.translatingCards.splice(i, 1);
          this.deck.appendChild(el);
          el.style.transform = 'translateX(0)';
        }
      }

      if (this.translatingCards.length === 0) return;

      this.requestAnimationFrameId = justDebounce$1(window.requestAnimationFrame(this._translateElementsOffScreen), 16);
    }
  }, {
    key: '_destroyElements',
    value: function _destroyElements() {
      for (var i = 0; i < this.cards.length; i += 1) {
        var card = this.cards[i];

        this.el.appendChild(card);
      }

      this.cardsContainer.remove();
      this.cardsContentContainer.remove();
    }
  }]);
  return CardsPlayer;
}();

var ProductGallery = function () {
  function ProductGallery() {
    var _this = this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, ProductGallery);

    this.el = options.el || null;

    if (!this.el) {
      return console.warn('Unable to initiate ProductGallery.js');
    }

    this.cardsPlayer = null;

    this.flickity = null;
    this.flickitySelect = this._flickitySelect.bind(this);
    this.flickityStaticClick = this._flickityStaticClick.bind(this);
    this.flickityPrev = function () {
      return _this.flickity.previous();
    };
    this.flickityNext = function () {
      return _this.flickity.next();
    };

    this.staticGallery = false;

    this.onThumbnailClick = this._onThumbnailClick.bind(this);
    this.onThumbnailKeyPress = this._onThumbnailKeyPress.bind(this);

    this.$thumbnailsWrapper = jquery$1(selectors.product.galleryThumbnailsWrapper, this.el);

    this.imageContainer = this.el.querySelector(selectors.product.galleryImages);
    this.thumbnailContainer = this.el.querySelector(selectors.product.galleryThumbnails);

    this.$images = jquery$1(selectors.product.galleryImage, this.el);
    this.$thumbnails = jquery$1(selectors.product.galleryThumbnail, this.el);

    this.thumbnailPrev = this.el.querySelector(selectors.product.galleryThumbnailsPrev);
    this.thumbnailNext = this.el.querySelector(selectors.product.galleryThumbnailsNext);

    this.$selectedThumbnail = jquery$1(selectors.product.galleryThumbnailSelected, this.thumbnailContainer);
    this.selectedThumbnailIndex = this.$thumbnails.index(this.$selectedThumbnail);

    this.onResize = justDebounce$1(this._onResize, 15).bind(this);

    this._init();
  }

  createClass(ProductGallery, [{
    key: 'switchImage',
    value: function switchImage(id) {
      var $image = jquery$1('[data-product-gallery-image="' + id + '"]', this.el);
      var $thumbnail = jquery$1('[data-product-gallery-thumbnail="' + id + '"]', this.el);

      this.$images.removeClass(classes.product.galleryImageSelected);
      this.$thumbnails.removeClass(classes.product.galleryThumbnailSelected);

      $image.addClass(classes.product.galleryImageSelected);
      $thumbnail.addClass(classes.product.galleryThumbnailSelected);

      this.$selectedThumbnail = $thumbnail;
      this.selectedThumbnailIndex = this.$thumbnails.index(this.$selectedThumbnail);

      if (this.cardsPlayer) {
        this.cardsPlayer.drawToCardIndex(this.selectedThumbnailIndex);
      }
    }
  }, {
    key: 'unload',
    value: function unload() {
      window.removeEventListener('resize', this.onResize);
      this._destroyCardsPlayer();
      this._destroyFlickity();
      this._destroyStaticGallery();
    }
  }, {
    key: '_init',
    value: function _init() {
      if (layout.isBreakpoint('XS') || layout.isBreakpoint('S')) {
        this._initCardsPlayer();
      } else if (this._shouldInitFlickity()) {
        this._initFlickity();
      } else if (this._shouldInitStaticGallery()) {
        this._initStaticGallery();
      }

      window.addEventListener('resize', this.onResize);
    }
  }, {
    key: '_onResize',
    value: function _onResize() {
      if (layout.isBreakpoint('XS') || layout.isBreakpoint('S')) {
        if (this.cardsPlayer) {
          return;
        }

        if (this.flickity) {
          this._destroyFlickity();
        }

        if (this.staticGallery) {
          this._destroyStaticGallery();
        }

        this._initCardsPlayer();
        this.cardsPlayer.drawToCardIndex(this.selectedThumbnailIndex);
      } else if (!(layout.isBreakpoint('XS') || layout.isBreakpoint('S'))) {
        if (this.cardsPlayer) {
          this.selectedThumbnailIndex = this.cardsPlayer.getTopCardIndex();
          this.$selectedThumbnail = jquery$1(this.$thumbnails.get(this.selectedThumbnailIndex));
          this._destroyCardsPlayer();
        }

        if (this._shouldInitFlickity()) {
          if (this.staticGallery) {
            this._destroyStaticGallery();
          }

          this._initFlickity();
          this.flickity.select(this.selectedThumbnailIndex);
        } else if (this._shouldInitStaticGallery()) {
          if (this.flickity) {
            this._destroyFlickity();
          }

          this._initStaticGallery();
          this.$selectedThumbnail.trigger('click');
        }
      }
    }
  }, {
    key: '_initCardsPlayer',
    value: function _initCardsPlayer() {
      this.cardsPlayer = new CardsPlayer(this.imageContainer);
      this.cardsPlayer.drawToCardIndex(this.selectedThumbnailIndex);
    }
  }, {
    key: '_destroyCardsPlayer',
    value: function _destroyCardsPlayer() {
      if (this.cardsPlayer) {
        this.cardsPlayer.destroy();
        this.cardsPlayer = null;
      }
    }
  }, {
    key: '_shouldInitStaticGallery',
    value: function _shouldInitStaticGallery() {
      return !!this.thumbnailContainer;
    }
  }, {
    key: '_shouldInitFlickity',
    value: function _shouldInitFlickity() {
      if (!this.thumbnailContainer) {
        return false;
      }

      var containerWidth = this.thumbnailContainer.getBoundingClientRect().width;

      var thumbnailsWidth = 0;

      this.$thumbnails.each(function (index, el) {
        thumbnailsWidth += jquery$1(el).outerWidth(true);
      });

      return thumbnailsWidth > containerWidth;
    }
  }, {
    key: '_initFlickity',
    value: function _initFlickity() {
      if (this.flickity) {
        return;
      }

      this.$selectedThumbnail = jquery$1(selectors.product.galleryThumbnailSelected, this.thumbnailContainer);
      this.selectedThumbnailIndex = this.$thumbnails.index(this.$selectedThumbnail);

      this.flickity = new js$1(this.thumbnailContainer, {
        cellAlign: 'left',
        imagesLoaded: true,
        prevNextButtons: false,
        pageDots: false,
        initialIndex: this.selectedThumbnailIndex
      });
      this.flickity.reloadCells();

      this.flickity.on('select', this.flickitySelect);
      this.flickity.on('staticClick', this.flickityStaticClick);

      this.thumbnailPrev.addEventListener('click', this.flickityPrev);
      this.thumbnailNext.addEventListener('click', this.flickityNext);

      this.$thumbnailsWrapper.addClass(classes.product.galleryThumbnailsFlickityEnabled);
    }
  }, {
    key: '_flickitySelect',
    value: function _flickitySelect() {
      var $selectedElement = jquery$1(this.flickity.selectedElement);
      var imageId = $selectedElement.data('product-gallery-thumbnail');
      var $image = jquery$1('[data-product-gallery-image="' + imageId + '"]', this.el);
      var $thumbnail = jquery$1('[data-product-gallery-thumbnail="' + imageId + '"]', this.el);

      this.$images.removeClass(classes.product.galleryImageSelected);
      this.$thumbnails.removeClass(classes.product.galleryThumbnailSelected);

      $image.addClass(classes.product.galleryImageSelected);
      $thumbnail.addClass(classes.product.galleryThumbnailSelected);

      this.$selectedThumbnail = $thumbnail;
      this.selectedThumbnailIndex = this.$thumbnails.index(this.$selectedThumbnail);
    }
  }, {
    key: '_flickityStaticClick',
    value: function _flickityStaticClick(event, pointer, cellElement, cellIndex) {
      if (!cellElement) {
        return;
      }

      this.flickity.select(cellIndex);
    }
  }, {
    key: '_destroyFlickity',
    value: function _destroyFlickity() {
      if (this.flickity) {
        this.flickity.off('select', this.flickitySelect);
        this.flickity.off('staticClick', this.flickityStaticClick);
        this.thumbnailPrev.removeEventListener('click', this.flickityPrev);
        this.thumbnailNext.removeEventListener('click', this.flickityNext);
        this.$thumbnailsWrapper.removeClass(classes.product.galleryThumbnailsFlickityEnabled);
        this.flickity.destroy();
        this.flickity = null;
      }
    }
  }, {
    key: '_initStaticGallery',
    value: function _initStaticGallery() {
      var _this2 = this;

      if (this.staticGallery) {
        return;
      }

      this.$thumbnails.each(function (index, el) {
        return el.addEventListener('click', _this2.onThumbnailClick);
      });
      this.$thumbnails.each(function (index, el) {
        return el.addEventListener('keypress', _this2.onThumbnailKeyPress);
      });
      this.staticGallery = true;
    }
  }, {
    key: '_destroyStaticGallery',
    value: function _destroyStaticGallery() {
      var _this3 = this;

      if (this.staticGallery) {
        this.$thumbnails.each(function (index, el) {
          return el.removeEventListener('click', _this3.onThumbnailClick);
        });
        this.$thumbnails.each(function (index, el) {
          return el.removeEventListener('keypress', _this3.onThumbnailKeyPress);
        });
        this.staticGallery = false;
      }
    }
  }, {
    key: '_onThumbnailKeyPress',
    value: function _onThumbnailKeyPress(event) {
      if (event.key === ' ' || event.key === 'Enter') {
        // Prevent the default action to stop scrolling when space is pressed
        event.preventDefault();

        var imageId = jquery$1(event.currentTarget).data('product-gallery-thumbnail');

        this.switchImage(imageId);
      }
    }
  }, {
    key: '_onThumbnailClick',
    value: function _onThumbnailClick(event) {
      var imageId = jquery$1(event.currentTarget).data('product-gallery-thumbnail');

      this.switchImage(imageId);
    }
  }]);
  return ProductGallery;
}();

var Node$1 = function () {
  function Node(variant) {
    classCallCheck(this, Node);

    this.variant = variant;
    this.optionsCount = this.variant.options.length;
    this.neighbors = [];

    for (var i = 0; i < this.optionsCount; i++) {
      this.neighbors.push([]);
    }
  }

  createClass(Node, [{
    key: "addNeighbor",
    value: function addNeighbor(variant) {
      for (var i = 0; i < this.optionsCount; i++) {
        if (this.variant.options[i] !== variant.options[i]) {
          this.neighbors[i].push(variant);
          break;
        }
      }
    }
  }, {
    key: "getValidOptions",
    value: function getValidOptions() {
      var _this = this;

      var options = [];

      var _loop = function _loop(i) {
        var variants = [_this.variant].concat(toConsumableArray(_this.neighbors[i]));
        options[i] = {};

        variants.forEach(function (item) {
          var variant = item;
          var option = variant.options[i];

          options[i][option] = {
            available: options[i][option] && options[i][option].available || variant.available
          };
        });
      };

      for (var i = 0; i < this.optionsCount; i++) {
        _loop(i);
      }

      return options;
    }
  }]);
  return Node;
}();

var ProductOptions = function () {
  function ProductOptions(product) {
    classCallCheck(this, ProductOptions);

    this.productHandle = product.handle;
    this.optionsCount = product.options.length;
    this.variants = product.variants;
    this.nodeMap = {};

    this._generateNodeMap(product);
  }

  createClass(ProductOptions, [{
    key: "_generateNodeMap",
    value: function _generateNodeMap() {
      var _this2 = this;

      this.variants.forEach(function (variant) {
        _this2.nodeMap[variant.id] = new Node$1(variant);

        _this2.variants.forEach(function (variant2) {
          _this2.nodeMap[variant.id].addNeighbor(variant2);
        });
      });
    }
  }, {
    key: "_getVariant",
    value: function _getVariant(options) {
      for (var i = 0; i < this.variants.length; i++) {
        var variant = this.variants[i];
        var found = true;

        for (var j = 0; j < variant.options.length; j++) {
          if (options[j] !== variant.options[j]) {
            found = false;
          }
        }

        if (found) {
          return variant;
        }
      }

      return false;
    }
  }, {
    key: "_getClosestVariant",
    value: function _getClosestVariant(options) {
      var closestVariant = null;
      var matchingValues = 0;

      this.variants.forEach(function (variant) {
        var tempMatchingValues = 0;

        for (var i = 0; i < variant.options.length; i++) {
          if (options[i] === variant.options[i]) {
            tempMatchingValues++;
          } else {
            break;
          }
        }

        if (tempMatchingValues > matchingValues) {
          closestVariant = variant;
          matchingValues = tempMatchingValues;
        } else if (tempMatchingValues === matchingValues && (!closestVariant || !closestVariant.available)) {
          closestVariant = variant;
          matchingValues = tempMatchingValues;
        }
      });

      return closestVariant || false;
    }
  }, {
    key: "getVariant",
    value: function getVariant(options) {
      return this._getVariant(options) || this._getClosestVariant(options);
    }
  }, {
    key: "getValidOptions",
    value: function getValidOptions(variant) {
      return this.nodeMap[variant.id].getValidOptions();
    }
  }]);
  return ProductOptions;
}();

var VariantHelper = function () {
  function VariantHelper(product, $variants, $options) {
    var _this = this;

    classCallCheck(this, VariantHelper);

    this.product = product;
    this.optionsCount = this.product.options.length;
    this.$variants = $variants;
    this.$options = $options;
    this.productOptions = new ProductOptions(this.product);
    this.optionsTypes = {
      select: 'select',
      radio: 'input[type="radio"]'
    };

    this.$radioOptions = this.$options.filter(function (index, option) {
      return jquery$1(option).is(_this.optionsTypes.radio);
    });
    this.$selectOptions = this.$options.filter(function (index, option) {
      return jquery$1(option).is(_this.optionsTypes.select);
    });

    this._bindEvents();

    if (this.$radioOptions.length === 0 && this.$selectOptions.length === 0) {
      console.warn('Variant helper: Option set is not a valid type');
      this._unbindEvents();
      return;
    }

    this._switchVariant(true);
  }

  createClass(VariantHelper, [{
    key: '_bindEvents',
    value: function _bindEvents() {
      var _this2 = this;

      this.$options.on('change.variant-helper', function (event) {
        return _this2._switchVariant(false, event);
      });
    }
  }, {
    key: '_unbindEvents',
    value: function _unbindEvents() {
      this.$options.off('change.variant-helper');
    }
  }, {
    key: '_switchVariant',
    value: function _switchVariant() {
      var firstLoad = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var event = arguments[1];

      var options = [];
      var product = this.product;
      var $currentTarget = event ? jquery$1(event.currentTarget) : null;
      var variant = null;
      var availableOptions = null;

      if (!$currentTarget || $currentTarget.is(this.optionsTypes.radio)) {
        this.$radioOptions.filter(':checked').each(function (index, option) {
          options.push(option.value);
        });
      } else if ($currentTarget.is(this.optionsTypes.select)) {
        this.$selectOptions.each(function (index, option) {
          options.push(option.value);
        });
      } else {
        return;
      }

      variant = this.productOptions.getVariant(options);

      if (variant) {
        availableOptions = this.productOptions.getValidOptions(variant);
      } else {
        return;
      }

      this._switchVariantSelect(variant, availableOptions);
      this._switchVariantRadio(variant, availableOptions);

      this.$variants.val(variant.id);
      jquery$1(window).trigger('product-variant-switch', { product: product, variant: variant, firstLoad: firstLoad });
    }
  }, {
    key: '_switchVariantSelect',
    value: function _switchVariantSelect(variant, availableOptions) {
      var _this3 = this;

      var _loop = function _loop(i) {
        // Corresponding select dropdown
        var $select = jquery$1(_this3.$selectOptions[i]);
        var $optionEls = $select.find('option');

        // Iterate over each option on dropdown
        $optionEls.each(function (index, option) {
          var $option = jquery$1(option);
          var value = option.value;

          var isUnavailable = !availableOptions[i][value] || !availableOptions[i][value].available;

          // Not an available option
          $option.prop('disabled', isUnavailable).prop('selected', false);

          // Dropdown option matches variant option
          if (variant.options[i] === value) {
            $option.prop('disabled', isUnavailable).prop('selected', true);
          }
        });
      };

      // Iterate over each option type
      for (var i = 0; i < this.product.options.length; i++) {
        _loop(i);
      }
    }
  }, {
    key: '_switchVariantRadio',
    value: function _switchVariantRadio(variant, availableOptions) {
      var _this4 = this;

      this.$radioOptions.attr('disabled', true).prop('checked', false).attr('data-soldout', false);

      var _loop2 = function _loop2(i) {
        var $options = _this4.$radioOptions.filter('[name="' + _this4.product.options[i] + '"]');
        $options.each(function (index, option) {
          var $option = jquery$1(option);

          if (variant.options[i] === $option.val()) {
            $option.prop('checked', true).attr('disabled', false);
          }

          if (availableOptions[i][$option.val()]) {
            $option.attr('disabled', false);

            if (!availableOptions[i][$option.val()].available) {
              $option.attr('data-soldout', true);
            }
          }
        });
      };

      for (var i = 0; i < this.product.options.length; i++) {
        _loop2(i);
      }
    }
  }, {
    key: 'isDefault',
    value: function isDefault() {
      if (this.product.variants[0].title === 'Default Title' && this.product.variants[0].option1 === 'Default Title') {
        return true;
      }

      return false;
    }
  }, {
    key: 'getSelectedVariant',
    value: function getSelectedVariant() {
      if (this.isDefault()) {
        return this.product.variants[0];
      }

      // Read selected options from the product form
      var options = [];

      this.$options.filter(':checked').each(function (index, option) {
        options.push(option.value);
      });

      return this.productOptions.getVariant(options);
    }
  }, {
    key: 'unload',
    value: function unload() {
      this._unbindEvents();
    }
  }]);
  return VariantHelper;
}();

var Quantity = function () {
  function Quantity(el) {
    var _this = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    classCallCheck(this, Quantity);

    this.el = el;
    this.callback = options.callback;
    this.decrementButton = this.el.querySelector(selectors.quantity.decrement);
    this.$formElement = jquery$1(selectors.quantity.element, this.el);
    this.$input = jquery$1(selectors.quantity.input, this.el);
    this.min = this.$input.attr('min') ? parseInt(this.$input.attr('min'), 10) : 0;
    this.max = this.$input.attr('max') ? parseInt(this.$input.attr('max'), 10) : Infinity;
    this.incrementButton = this.el.querySelector(selectors.quantity.increment);

    this.decrementInput = function () {
      return _this._adjustInput(-1);
    };
    this.incrementInput = function () {
      return _this._adjustInput(+1);
    };

    this.onInputChange = function (event) {
      return _this._onInputChange(event);
    };

    this.decrementButton.addEventListener('click', this.decrementInput);
    this.$input.on('change.quantity', this.onInputChange);
    this.incrementButton.addEventListener('click', this.incrementInput);
  }

  createClass(Quantity, [{
    key: 'setDisable',
    value: function setDisable(disable) {
      this.$input.prop('disabled', disable);
    }
  }, {
    key: 'setQuantity',
    value: function setQuantity(quantity) {
      var triggerEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      this._setValue(quantity);

      if (triggerEvent) {
        this.$input.trigger('change');
      }
    }
  }, {
    key: 'unload',
    value: function unload() {
      this.decrementButton.removeEventListener('click', this.decrementInput);
      this.$input.off('change.quantity', this.onInputChange);
      this.incrementButton.removeEventListener('click', this.incrementInput);
    }
  }, {
    key: '_onInputChange',
    value: function _onInputChange(event) {
      var quantity = this._setValue(this.$input.val());

      if (this.callback) {
        this.callback(event, { quantity: quantity });
      }
    }

    /**
     * Make sure that value is a number
     *
     * @param {number|string} value
     * @returns {number}
     * @private
     */

  }, {
    key: '_formatValue',
    value: function _formatValue(value) {
      var baseValue = parseInt(value, 10);
      return isNaN(baseValue) ? this.min : baseValue;
    }

    /**
     * Increment or decrement input based on adjustment
     *
     * @param {number} adjustment
     * @private
     */

  }, {
    key: '_adjustInput',
    value: function _adjustInput(adjustment) {
      if (this.$input.prop('disabled')) {
        return;
      }

      var value = this._formatValue(this.$input.val()) + adjustment;

      this.$input.val(value);
      this.$input.trigger('change');
    }

    /**
     * Restrict input to be within a valid number range
     *
     * @param {number} value
     * @returns {number}
     * @private
     */

  }, {
    key: '_restrictValue',
    value: function _restrictValue(value) {
      var val = Math.min(this.max, value); // Make sure value isn't larger than maximum
      val = Math.max(this.min, val); // Make sure value isn't lower than minimum

      return val;
    }

    /**
     * Set the value of the input to a sanitized state
     *
     * @param {number|string} value
     * @returns {number}
     * @private
     */

  }, {
    key: '_setValue',
    value: function _setValue(value) {
      var formatted = this._formatValue(value);
      var constrainedValue = this._restrictValue(formatted);

      // If value is empty, or initial value doesn't match constrained value
      if (!value || value !== constrainedValue) {
        this.$input.val(constrainedValue);
      }

      return constrainedValue;
    }
  }]);
  return Quantity;
}();

var QuantitySubmit = function (_Quantity) {
  inherits(QuantitySubmit, _Quantity);

  function QuantitySubmit(el) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    classCallCheck(this, QuantitySubmit);

    var _this = possibleConstructorReturn(this, (QuantitySubmit.__proto__ || Object.getPrototypeOf(QuantitySubmit)).call(this, el, options));

    _this.text = options.text;
    _this.disableText = options.disableText;
    _this.submit = _this.el.querySelector(selectors.quantity.submitEl);
    _this.disabled = false;

    _this.$input.trigger('change');
    return _this;
  }

  createClass(QuantitySubmit, [{
    key: 'setDisable',
    value: function setDisable(disable) {
      if (disable) {
        this._setText(this.disableText);
        this.submit.setAttribute('disabled', 'disabled');
      } else {
        this.submit.removeAttribute('disabled');

        if (this.text && this.text.indexOf('** amount **') !== -1) {
          var text = this.text.replace('** amount **', this.$input.val());

          this._setText(text);
        }
      }

      get(QuantitySubmit.prototype.__proto__ || Object.getPrototypeOf(QuantitySubmit.prototype), 'setDisable', this).call(this, disable);
    }
  }, {
    key: 'unload',
    value: function unload() {
      get(QuantitySubmit.prototype.__proto__ || Object.getPrototypeOf(QuantitySubmit.prototype), 'unload', this).call(this);
    }
  }, {
    key: '_onInputChange',
    value: function _onInputChange(event) {
      get(QuantitySubmit.prototype.__proto__ || Object.getPrototypeOf(QuantitySubmit.prototype), '_onInputChange', this).call(this, event);

      if (this.text && this.text.indexOf('** amount **') !== -1) {
        var text = this.text.replace('** amount **', this.$input.val());

        this._setText(text);
      }
    }
  }, {
    key: '_setText',
    value: function _setText(text) {
      this.submit.value = text;
    }
  }]);
  return QuantitySubmit;
}(Quantity);

var instance$1 = null;
var target = document.body;
var dismissIcon = '<svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M18.707 4.707a1 1 0 0 0-1.414 0l-5.585 5.586-5.586-5.586a1 1 0 1 0-1.415 1.414l5.586 5.586-5.586 5.586a1 1 0 0 0 0 1.414 1 1 0 0 0 1.415 0l5.586-5.586 5.585 5.586a1 1 0 1 0 1.415-1.414l-5.586-5.586 5.586-5.586a1 1 0 0 0 0-1.414z"/></svg>';
var maxConcurrentBanners = 3;

var Type = {
  success: 'success',
  error: 'error',
  warning: 'warning'
};

var Priority = {
  high: 0,
  medium: 1,
  low: 2
};

var Banner = function () {
  function Banner(message, type, options) {
    var _this = this;

    classCallCheck(this, Banner);

    this.message = message;
    this.type = type;
    this.autoDismiss = options.autoDismiss === undefined || options.autoDismiss;

    this.creationTime = Date.now();

    this._dismissed = false;
    this._dismissing = false;
    this.dismissPromise = null;
    this.onDismiss = this._onDismiss.bind(this);

    this.onTransitionEnd = this._onTransitionEnd.bind(this);

    this.bannerMessage = document.createElement('span');
    this.bannerMessage.classList.add('banner-message');
    this.bannerMessage.innerHTML = this.message;

    this.bannerDismiss = document.createElement('button');
    this.bannerDismiss.classList.add('banner-dismiss');
    this.bannerDismiss.innerHTML = dismissIcon;

    this.el = document.createElement('div');
    this.el.classList.add('banner');
    this.el.classList.add('banner-type-' + this.type);
    this.el.classList.add('banner-animating');
    this.el.classList.add('banner-animating-in');

    this.el.appendChild(this.bannerMessage);
    this.el.appendChild(this.bannerDismiss);

    target.appendChild(this.el);

    var hasTransition = !!window.getComputedStyle(this.el).getPropertyValue('transition');

    this.el.classList.remove('banner-animating');
    this.el.classList.remove('banner-animating-in');

    if (hasTransition) {
      this.el.addEventListener('transitionend', this.onTransitionEnd);

      setTimeout(function () {
        _this.el.classList.add('banner-animating');
        _this.el.classList.add('banner-animating-in');
      }, 10);
    } else {
      this.el.classList.add('banner-visible');
    }

    this.bannerDismiss.addEventListener('click', this.onDismiss);
  }

  createClass(Banner, [{
    key: 'update',
    value: function update() {
      var deferred = jquery$1.Deferred();

      if (this._dismissing || this._dismissed) {
        deferred.resolve();
      } else if (this.autoDismiss && (Date.now() - this.creationTime) / 1000 >= this.autoDismiss) {
        this._dismiss().then(function () {
          return deferred.resolve();
        });
      } else {
        deferred.resolve();
      }

      return deferred.promise();
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.bannerDismiss.removeEventListener('click', this.onDismiss);
      target.removeChild(this.el);
    }
  }, {
    key: '_dismiss',
    value: function _dismiss() {
      var _this2 = this;

      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var deferred = jquery$1.Deferred();

      if (this._dismissing || !force && !this.autoDismiss) {
        deferred.resolve();
      } else {
        this._dismissing = true;
        this.dismissPromise = deferred.resolve;
        this.el.classList.add('banner-animating');
        this.el.classList.add('banner-animating-out');

        var hasTransition = !!window.getComputedStyle(this.el).getPropertyValue('transition');

        this.el.classList.remove('banner-animating');
        this.el.classList.remove('banner-animating-out');

        if (hasTransition) {
          this.el.addEventListener('transitionend', this.onTransitionEnd);

          setTimeout(function () {
            _this2.el.classList.remove('banner-visible');
            _this2.el.classList.add('banner-animating');
            _this2.el.classList.add('banner-animating-out');
          }, 10);
        } else {
          this._dismissed = true;
          this.el.classList.remove('banner-visible');
          deferred.resolve();
        }
      }

      return deferred.promise();
    }
  }, {
    key: '_onDismiss',
    value: function _onDismiss() {
      this._dismiss(true);
    }
  }, {
    key: '_onTransitionEnd',
    value: function _onTransitionEnd() {
      this.el.removeEventListener('transitionend', this.onTransitionEnd);
      this.el.classList.remove('banner-animating');

      if (this.el.classList.contains('banner-animating-in')) {
        this.el.classList.remove('banner-animating-in');
        this.el.classList.add('banner-visible');
      }

      if (this.el.classList.contains('banner-animating-out')) {
        this.el.classList.remove('banner-animating-out');
      }

      if (this.dismissPromise) {
        this._dismissed = true;
        this.dismissPromise();
      }
    }
  }, {
    key: 'dismissed',
    get: function get$$1() {
      return this._dismissed;
    }
  }]);
  return Banner;
}();

var BannerManager = function () {
  function BannerManager() {
    var _this3 = this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, BannerManager);

    if (!instance$1) {
      instance$1 = this;
    } else {
      return instance$1;
    }

    target = options.target || target;
    maxConcurrentBanners = options.maxConcurrentBanners || maxConcurrentBanners;
    dismissIcon = options.dismissIcon || dismissIcon;

    this.queue = [];
    this.banners = [];
    this.adjustBannerLocation = this._adjustBannerLocation.bind(this);

    this.interval = setInterval(function () {
      _this3._update();
    }, 100);

    jquery$1(window).on('sticky-header.banner-manager', this.adjustBannerLocation);

    return instance$1;
  }

  createClass(BannerManager, [{
    key: 'add',
    value: function add(message, type, priority) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      this.queue.push({
        message: message,
        type: type,
        priority: priority,
        options: options
      });
      this.queue.sort(function (a, b) {
        return a.priority - b.priority;
      });
    }
  }, {
    key: 'unload',
    value: function unload() {
      jquery$1(window).off('sticky-header.banner-manager');
      clearInterval(this.interval);
      this.banners.forEach(function (banner) {
        return banner.destroy();
      });
    }
  }, {
    key: '_update',
    value: function _update() {
      var _this4 = this;

      this.banners.forEach(function (banner) {
        banner.update().then(function () {
          if (banner.dismissed) {
            _this4.banners.splice(_this4.banners.indexOf(banner), 1);
            banner.destroy();
          }
        });
      });

      if (this.queue.length && this.banners.length < maxConcurrentBanners) {
        var _queue$shift = this.queue.shift(),
            message = _queue$shift.message,
            type = _queue$shift.type,
            options = _queue$shift.options;

        this.banners.push(new Banner(message, type, options));
      }
    }
  }, {
    key: '_adjustBannerLocation',
    value: function _adjustBannerLocation(event, data) {
      var state = data.state,
          stickyOffset = data.stickyOffset;


      if (state) {
        target.classList.add('banners-sticky');
      } else {
        target.classList.remove('banners-sticky');
      }

      target.style.top = (stickyOffset || 0) + 'px';
    }
  }]);
  return BannerManager;
}();

var instance = null;

var CartRequests = function () {
  function CartRequests() {
    classCallCheck(this, CartRequests);

    if (!instance) {
      instance = this;
    } else {
      return instance;
    }

    this.$window = jquery$1(window);
    this.interval = null;
    this.handlerHelpers = {};
    this.postRequests = this._postRequests.bind(this);
    this.handleResponse = this._handleResponse.bind(this);
    this.handleError = this._handleError.bind(this);

    this.additionalHandlers = {
      onResponse: null,
      onError: null
    };

    this.lastRequestTimestamp = Math.floor(Date.now());
    this.postAfterLastRequestMillis = 1000;

    this.noteRequest = null;
    this.itemRequests = [];
    this.inProgressItemRequests = [];

    this.triggerCartReload = false;
    this.recentItem = null;
    this.lockSubmission = false;

    this.bannerManager = new BannerManager();

    this._init();

    return instance;
  }

  createClass(CartRequests, [{
    key: 'submitItemRequest',
    value: function submitItemRequest(variant, quantity) {
      var triggerCartReload = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var itemRequest = this._findExistingItemRequest(variant);

      if (itemRequest) {
        itemRequest.quantity = quantity;
      } else {
        itemRequest = {
          variant: variant,
          quantity: quantity
        };

        this.itemRequests.push(itemRequest);
      }

      itemRequest.quantity = Math.max(0, itemRequest.quantity);

      this.itemsRemoving = this._countItemsRemoving();
      this.triggerCartReload = this.triggerCartReload || triggerCartReload;
      this.recentItem = triggerCartReload ? variant : this.recentItem;
      this.lastRequestTimestamp = Math.floor(Date.now());

      this._triggerStartLoadingEvents();
    }
  }, {
    key: 'submitNoteRequest',
    value: function submitNoteRequest(note) {
      this.noteRequest = note;
      this.lastRequestTimestamp = Math.floor(Date.now());
      this._triggerStartLoadingEvents();
    }
  }, {
    key: 'unload',
    value: function unload() {
      if (this.interval) {
        clearInterval(this.interval);
      }
    }
  }, {
    key: 'setHandlers',
    value: function setHandlers(responseHandlers) {
      instance.handlerHelpers = jquery$1.extend({}, instance.additionalHandlers, responseHandlers);
    }
  }, {
    key: 'restoreHandlers',
    value: function restoreHandlers() {
      this.handlerHelpers = this.additionalHandlers;
    }
  }, {
    key: '_init',
    value: function _init() {
      this.interval = setInterval(this.postRequests, this.postAfterLastRequestMillis);
    }
  }, {
    key: '_countItemsRemoving',
    value: function _countItemsRemoving() {
      return this.itemRequests.reduce(function (removing, itemRequest) {
        var quantity = itemRequest.quantity;

        return quantity === 0 ? removing + 1 : removing;
      }, 0);
    }
  }, {
    key: '_triggerStartLoadingEvents',
    value: function _triggerStartLoadingEvents() {
      var _this = this;

      this.itemRequests.forEach(function (itemRequest) {
        var request = itemRequest;

        _this.$window.trigger(events.cart.item.loadingStart, { request: request });
      });

      if (this.note) {
        var request = this.note;

        this.$window.trigger(events.cart.note.loadingStart, { request: request });
      }

      this.$window.trigger(events.cart.loadingStart, {
        affectsTotal: this.itemRequests.length,
        reload: this.triggerCartReload,
        removing: this.itemsRemoving
      });
    }
  }, {
    key: '_triggerFinishLoadingEvent',
    value: function _triggerFinishLoadingEvent(cartResponse, itemResponses) {
      var _this2 = this;

      var error = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      itemResponses.forEach(function (itemResponse) {
        var response = itemResponse;

        _this2.$window.trigger(events.cart.item.loadingFinish, { response: response });
      });

      this.$window.trigger(events.cart.note.loadingFinish);

      this.$window.trigger(events.cart.loadingFinish, {
        reponse: cartResponse,
        reload: this.triggerCartReload,
        removing: this.itemsRemoving,
        subtotal: cartResponse.original_total_price,
        recentItem: this.recentItem,
        error: error
      });

      this.triggerCartReload = false;
      this.itemsRemoving = 0;
    }
  }, {
    key: '_parseItemResponses',
    value: function _parseItemResponses(cartResponse) {
      var itemResponses = [];

      for (var i = 0; i < this.inProgressItemRequests.length; i += 1) {
        var itemRequest = this.inProgressItemRequests[i];
        var itemResponse = {
          variant: itemRequest.variant,
          quantity: 0,
          total: 0
        };

        for (var j = 0; j < cartResponse.items.length; j += 1) {
          var item = cartResponse.items[j];

          if (itemRequest.variant === item.variant_id) {
            itemResponse.variant = item.variant_id;
            itemResponse.quantity = item.quantity;
            itemResponse.total = item.original_line_price;
          }
        }

        itemResponses.push(itemResponse);
      }

      return itemResponses;
    }
  }, {
    key: '_handleResponse',
    value: function _handleResponse(cartResponse) {
      var itemResponses = this._parseItemResponses(cartResponse);

      this._triggerFinishLoadingEvent(cartResponse, itemResponses);

      this.inProgressItemRequests = [];
      this.lockSubmission = false;

      if (this.handlerHelpers.onResponse) {
        this.handlerHelpers.onResponse(cartResponse);
      }
    }
  }, {
    key: '_handleError',
    value: function _handleError(error) {
      var _this3 = this;

      var get$$1 = jquery$1.get({
        url: '/cart.js',
        success: null,
        dataType: 'json'
      });

      get$$1.done(function (cartResponse) {
        var itemResponses = _this3._parseItemResponses(cartResponse);

        if (_this3.handlerHelpers.onError) {
          _this3.handlerHelpers.onError(error);
        } else {
          _this3.bannerManager.add(error.responseJSON.description, Type.error, Priority.high, { autoDismiss: 5 });
        }

        _this3._triggerFinishLoadingEvent(cartResponse, itemResponses, true);

        _this3.inProgressItemRequests = [];
        _this3.lockSubmission = false;
      });
    }
  }, {
    key: '_shouldPostRequests',
    value: function _shouldPostRequests() {
      return !this.lockSubmission && (this.itemRequests.length > 0 || this.noteRequest !== null) && Math.floor(Date.now()) - this.lastRequestTimestamp >= this.postAfterLastRequestMillis;
    }
  }, {
    key: '_postRequests',
    value: function _postRequests() {
      if (!this._shouldPostRequests()) {
        return;
      }

      var post = null;
      var request = {
        note: this.noteRequest,
        updates: {}
      };

      this.itemRequests.forEach(function (itemRequest) {
        request.updates[itemRequest.variant] = itemRequest.quantity;
      });

      this.inProgressItemRequests = this.itemRequests;
      this.lockSubmission = true;
      this.noteRequest = null;
      this.itemRequests = [];

      post = jquery$1.post({
        url: '/cart/update.js',
        data: request,
        success: function success() {},
        error: function error() {},
        dataType: 'json'
      });

      post.done(this.handleResponse).fail(this.handleError);
    }
  }, {
    key: '_findExistingItemRequest',
    value: function _findExistingItemRequest(variant) {
      var itemRequest = null;

      this.itemRequests.forEach(function (iRequest) {
        if (iRequest.variant === variant) {
          itemRequest = iRequest;
        }
      });

      return itemRequest;
    }
  }]);
  return CartRequests;
}();

var CartItem = function () {
  function CartItem(el, cart, options) {
    classCallCheck(this, CartItem);

    this.$window = jquery$1(window);
    this.el = el;
    this.$el = jquery$1(el);
    this.cart = cart;
    this.moneyFormat = options.moneyFormat;
    this.variant = el.getAttribute('data-cart-item') ? parseInt(el.getAttribute('data-cart-item'), 10) : null;
    this.quantityEl = el.querySelector(selectors.quantity.el);
    this.$removeEls = jquery$1(selectors.cart.item.remove, el);
    this.$priceEls = jquery$1(selectors.cart.item.price, el);
    this.totalEls = el.querySelectorAll(selectors.cart.item.total);
    this.priceManager = null;
    this.cartRequests = null;
    this.slideUpComplete = false;

    if (!this.variant) {
      this.cart.removeCartItem(this);
      this._destroy();
    }

    this.onClickRemove = this._onClickRemove.bind(this);
    this.onQuantityChange = this._onQuantityChange.bind(this);
    this.onCartItemLoadingStart = this._onCartItemLoadingStart.bind(this);
    this.onCartItemLoadingFinish = this._onCartItemLoadingFinish.bind(this);
    this.onSlideUpComplete = this._onSlideUpComplete.bind(this);

    this._init();
  }

  createClass(CartItem, [{
    key: '_init',
    value: function _init() {
      this.priceManager = new PriceManager(this.el, this.moneyFormat);
      this.cartRequests = new CartRequests();
      this.quantity = new Quantity(this.quantityEl, {
        callback: this.onQuantityChange
      });

      this.priceManager.updateAll();

      this._bindEvents();
    }
  }, {
    key: '_bindEvents',
    value: function _bindEvents() {
      this.$removeEls.on('click', this.onClickRemove);
      this.$window.on(events.cart.item.loadingStart, this.onCartItemLoadingStart);
      this.$window.on(events.cart.item.loadingFinish, this.onCartItemLoadingFinish);
    }
  }, {
    key: '_unbindEvents',
    value: function _unbindEvents() {
      this.$removeEls.off('click', this.onClickRemove);
      this.$window.off(events.cart.item.loadingStart, this.onCartItemLoadingStart);
      this.$window.off(events.cart.item.loadingFinish, this.onCartItemLoadingFinish);
    }
  }, {
    key: '_onClickRemove',
    value: function _onClickRemove() {
      this.cartRequests.submitItemRequest(this.variant, 0);
    }
  }, {
    key: '_onQuantityChange',
    value: function _onQuantityChange(event, data) {
      var quantity = data.quantity;

      this.cartRequests.submitItemRequest(this.variant, quantity);
    }
  }, {
    key: '_onCartItemLoadingStart',
    value: function _onCartItemLoadingStart(event, data) {
      var _data$request = data.request,
          variant = _data$request.variant,
          quantity = _data$request.quantity;


      if (this.variant === variant) {
        // Reset visuals, in case we were already loading
        this.$el.removeClass(classes.cart.item.loading).removeClass(classes.cart.item.totalLoading);

        // Fade entire cart item, or just totals depending on context
        if (quantity === 0) {
          this.$el.addClass(classes.cart.item.loading);
        } else {
          this.quantity.setQuantity(quantity, false);
          this.$el.addClass(classes.cart.item.totalLoading);
        }
      }
    }
  }, {
    key: '_onCartItemLoadingFinish',
    value: function _onCartItemLoadingFinish(event, data) {
      var _data$response = data.response,
          variant = _data$response.variant,
          quantity = _data$response.quantity,
          total = _data$response.total;


      if (this.variant === variant) {
        if (quantity === 0) {
          // If quantity is 0, begin process of removing cart item from DOM
          this.$el.removeClass(classes.cart.item.loading).removeClass(classes.cart.item.totalLoading).addClass(classes.cart.item.sliding);

          jquery$1(selectors.cart.item.slide, this.$el).slideUp(this.onSlideUpComplete);
        } else {
          this.quantity.setQuantity(quantity, false);

          // Otherwise, update all prices with the new value and remove loading animation
          for (var i = 0; i < this.totalEls.length; i++) {
            var totalEl = this.totalEls[i];

            this.priceManager.updatePrice(totalEl, total);
          }

          this.$el.removeClass(classes.cart.item.loading).removeClass(classes.cart.item.totalLoading);
        }
      }
    }
  }, {
    key: '_onSlideUpComplete',
    value: function _onSlideUpComplete() {
      if (this.slideUpComplete) {
        return;
      }

      // Emit trigger for components to react to removal
      this.$window.trigger(events.cart.item.removingFinished, { cart: this.cart });

      this.slideUpComplete = true;
      // Remove the item from the cart instance
      this.cart.removeCartItem(this);
      // Remove the item from the DOM
      this._destroy();
    }
  }, {
    key: '_destroy',
    value: function _destroy() {
      this.unload();
      this.$el.remove();
    }
  }, {
    key: 'unload',
    value: function unload() {
      this._unbindEvents();
      this.quantity.unload();
    }
  }]);
  return CartItem;
}();

// TODO: Handle cart/vs mini-cart differences
// TODO: Additional cart buttons

var Cart = function () {
  function Cart(el) {
    var _this = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    classCallCheck(this, Cart);

    this.el = el;
    this.$el = jquery$1(el);
    this.moneyFormat = options.moneyFormat;
    this.shipping = options.shipping;
    this.$window = jquery$1(window);
    this.isInline = this.$el.hasClass(classes.cart.inline);
    this.hasShipping = jquery$1(selectors.cart.shipping.el, el).length;

    this.cartRequests = new CartRequests();

    this.onExpandClick = this._onExpandClick.bind(this);
    this.onOtherItemsClick = this._onOtherItemsClick.bind(this);
    this.onNoteChange = this._onNoteChange.bind(this);
    this.onLoadingStart = this._onLoadingStart.bind(this);
    this.onLoadingFinish = this._onLoadingFinish.bind(this);
    this.onShippingSubmit = this._onShippingSubmit.bind(this);
    this.renderShippingResponse = this._renderShippingResponse.bind(this);

    this.$scripts = jquery$1('[data-scripts]');

    script(this.$scripts.data('shopify-api-url'), function () {
      if (_this.hasShipping) {
        Shopify.onError = _this._onError.bind(_this);

        script(_this.$scripts.data('shopify-countries'), function () {
          script(_this.$scripts.data('shopify-common'), function () {
            script(_this.$scripts.data('shopify-jquery-cart'), function () {
              _this._initShippingCalc();
            });
          });
        });
      }
    });

    this._init();
  }

  createClass(Cart, [{
    key: 'removeCartItem',
    value: function removeCartItem(cartItem) {
      var index = this.items.indexOf(cartItem);

      this.items.splice(index, 1);
    }
  }, {
    key: 'unload',
    value: function unload() {
      if (this.note) {
        this.note.removeEventListener('change', this.onNoteChange);
      }

      this.$expandButtons.off('click', this.onExpandClick);
      this.$window.off(events.cart.loadingStart, this.onLoadingStart);
      this.$window.off(events.cart.loadingFinish, this.onLoadingFinish);

      for (var i = 0; i < this.items.length; i += 1) {
        this.items[i].unload();
      }
    }
  }, {
    key: '_init',
    value: function _init() {
      this.$expandButtons = jquery$1(selectors.cart.expand, this.el);
      this.note = this.el.querySelector(selectors.cart.note);
      this.items = this._createItems();
      this.hasItems = this.items.length;
      this.$otherItemsButton = jquery$1(selectors.cart.otherItemsButton, this.el);
      this.totals = this.el.querySelector(selectors.cart.totals);
      this.subtotal = this.el.querySelector(selectors.cart.subtotal);

      this.priceManager = new PriceManager(this.totals, this.moneyFormat);
      this.priceManager.updateAll();

      if (this.note) {
        this.note.addEventListener('change', this.onNoteChange);
      }

      this.$expandButtons.on('click', this.onExpandClick);
      this.$otherItemsButton.on('click', this.onOtherItemsClick);
      this.$window.on(events.cart.loadingStart, this.onLoadingStart);
      this.$window.on(events.cart.loadingFinish, this.onLoadingFinish);

      this.$el.removeClass(classes.cart.expanded);
      this.$el.toggleClass(classes.cart.empty, !this.hasItems);
    }
  }, {
    key: '_initShippingCalc',
    value: function _initShippingCalc() {
      this.$shippingResponse = jquery$1(selectors.cart.shipping.response, this.el);
      this.$shippingResponseMessage = jquery$1(selectors.cart.shipping.message, this.el);
      this.$shippingResponseRates = jquery$1(selectors.cart.shipping.rates, this.el);
      this.$shippingSubmit = jquery$1(selectors.cart.shipping.submit, this.el);

      Shopify.Cart.ShippingCalculator.show({
        submitButton: this.shipping.submitText,
        submitButtonDisabled: this.shipping.submittingText,
        customerIsLoggedIn: this.shipping.customerIsLoggedIn,
        moneyFormat: this.moneyFormat
      });

      this.$shippingSubmit.on('click', this.onShippingSubmit);
    }
  }, {
    key: '_createItems',
    value: function _createItems() {
      var itemEls = this.el.querySelectorAll(selectors.cart.item.el);
      var items = [];

      for (var i = 0; i < itemEls.length; i += 1) {
        items.push(new CartItem(itemEls[i], this, { moneyFormat: this.moneyFormat }));
      }

      return items;
    }
  }, {
    key: '_onExpandClick',
    value: function _onExpandClick(event) {
      var $target = jquery$1(event.currentTarget);
      var $expandable = jquery$1($target.siblings(selectors.cart.expandable));

      $target.toggleClass(classes.cart.expandable.expanded);
      $expandable.slideToggle();
    }
  }, {
    key: '_onOtherItemsClick',
    value: function _onOtherItemsClick(event) {
      event.preventDefault();

      this.$otherItemsButton.remove();
      this.$el.addClass(classes.cart.expanded);

      for (var i = 0; i < this.items.length; i += 1) {
        var $itemEl = jquery$1('[data-cart-item="' + this.items[i].variant + '"]', this.el);
        $itemEl.addClass(classes.cart.item.inlineVisible);
      }

      jquery$1(window).trigger(events.cart.inlineVisible);
    }
  }, {
    key: '_onNoteChange',
    value: function _onNoteChange(event) {
      var $target = jquery$1(event.currentTarget);
      var note = jquery$1.trim($target.val());

      this.cartRequests.submitNoteRequest(note);
    }
  }, {
    key: '_onLoadingStart',
    value: function _onLoadingStart(event, data) {
      var affectsTotal = data.affectsTotal,
          reload = data.reload,
          removing = data.removing;


      jquery$1(selectors.cart.submit, this.$el).prop('disabled', true);

      this.$el.addClass(classes.cart.loading);

      if (affectsTotal) {
        this.$el.addClass(classes.cart.loadingAffectsTotal);
      }

      if (reload) {
        this.$el.addClass(classes.cart.reloading);
        this.$el.trigger(events.cart.reloadStart);
      }

      if (this.items.length === removing) {
        this.$el.css('min-height', this.$el.height());
        this.$el.addClass(classes.cart.reloading);
      }
    }
  }, {
    key: '_onLoadingFinish',
    value: function _onLoadingFinish(event, data) {
      var _this2 = this;

      var reload = data.reload,
          removing = data.removing,
          subtotal = data.subtotal,
          recentItem = data.recentItem,
          error = data.error;


      this.priceManager.updatePrice(this.subtotal, subtotal);
      this.priceManager.updateAll();

      jquery$1(selectors.cart.submit, this.$el).prop('disabled', false);

      this.$el.removeClass(classes.cart.loading);
      this.$el.removeClass(classes.cart.loadingAffectsTotal);

      if (reload) {
        this.unload();

        jquery$1.ajax({
          url: document.location.origin + '/cart',
          data: {
            view: this.isInline ? 'inline' : 'mini-cart'
          },
          dataType: 'html',
          method: 'GET'
        }).done(function (response) {
          var $response = jquery$1(response);
          var $form = $response.find(selectors.cart.form);

          $form.replaceAll(_this2.$el.find(selectors.cart.form));

          _this2._init();

          if (_this2.isInline && recentItem) {
            var $recentItemEl = jquery$1('[data-cart-item="' + recentItem + '"]', _this2.el);
            _this2.$el.find(selectors.cart.atcSuccess).show();

            $recentItemEl.addClass(classes.cart.item.inlineRecentlyAdded);
          }

          _this2.$el.removeClass(classes.cart.reloading);
          _this2.$el.trigger(events.cart.reloadFinish, { error: error });
        });
      }

      if (this.items.length === removing) {
        this.$el.css('min-height', '');
        this.$el.removeClass(classes.cart.reloading);
        this.$el.addClass(classes.cart.empty);
      }
    }
  }, {
    key: '_onShippingSubmit',
    value: function _onShippingSubmit(event) {
      event.preventDefault();

      this._disableShippingButton();

      var shippingAddress = {};
      shippingAddress.country = jquery$1('#address_country').val() || '';
      shippingAddress.province = jquery$1('#address_province').val() || '';
      shippingAddress.zip = jquery$1('#address_zip').val() || '';

      // Creates an ajax request which returns shipping information
      Shopify.getCartShippingRatesForDestination(shippingAddress, this.renderShippingResponse);
    }

    /**
     * Handle Errors returned from Shopify
     *
     * @param xhr
     * @private
     */

  }, {
    key: '_onError',
    value: function _onError() {
      var xhr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (!xhr) {
        return;
      }

      var errors = jquery$1.parseJSON(xhr.responseText);

      if (errors.zip.length > 0) {
        // Hide the response so that it can be populated smoothly
        this._hideShippingResponse();

        // Empty out contents
        this.$shippingResponseMessage.empty();
        this.$shippingResponseRates.empty();

        if (errors.zip[0].indexOf('is not valid') !== -1 || errors.zip[0].indexOf('can\'t be blank') !== -1) {
          this.$shippingResponseMessage.html(this.shipping.postalcode + ' ' + errors.zip);
        }

        this._showShippingResponse();
        this._enableShippingButton();
      }
    }
  }, {
    key: '_renderShippingResponse',
    value: function _renderShippingResponse(response, shippingAddress) {
      var addressBase = [];

      if (shippingAddress.zip.length) {
        addressBase.push(shippingAddress.zip.trim());
      }

      if (shippingAddress.province.length) {
        addressBase.push(shippingAddress.province);
      }

      if (shippingAddress.country.length) {
        addressBase.push(shippingAddress.country);
      }

      var address = addressBase.join(', ');

      // Hide the response so that it can be populated smoothly
      this._hideShippingResponse();

      // Empty out contents
      this.$shippingResponseMessage.empty();
      this.$shippingResponseRates.empty();

      var responseText = '';

      if (response.length > 1) {
        var firstRate = Shopify.Cart.ShippingCalculator.formatRate(response[0].price);
        responseText = this.shipping.multiple_rates.replace('*address*', address).replace('*number_of_rates*', response.length).replace('*rate*', '<span class="money">' + firstRate + '</span>');
      } else if (response.length === 1) {
        responseText = this.shipping.one_rate.replace('*address*', address);
      } else {
        responseText = this.shipping.no_rates;
      }

      this.$shippingResponseMessage.html(responseText);

      for (var i = 0; i < response.length; i++) {
        var rate = response[i];
        var price = Shopify.Cart.ShippingCalculator.formatRate(rate.price);
        var rateValue = this.shipping.rate_value.replace('*rate_title*', rate.name).replace('*rate*', '<span class="money">' + price + '</span>');

        this.$shippingResponseRates.append('<li>' + rateValue + '</li>');
      }

      // Reset the calculating button so it can be used again
      this._enableShippingButton();

      // Show the response
      this._showShippingResponse();
    }
  }, {
    key: '_enableShippingButton',
    value: function _enableShippingButton() {
      this.$shippingSubmit.text(this.shipping.submit_text).attr('disabled', false);
    }
  }, {
    key: '_disableShippingButton',
    value: function _disableShippingButton() {
      this.$shippingSubmit.text(this.shipping.submitting_text).attr('disabled', true);
    }
  }, {
    key: '_showShippingResponse',
    value: function _showShippingResponse() {
      this.$shippingResponse.addClass(classes.cart.shipping.responseVisible);
    }
  }, {
    key: '_hideShippingResponse',
    value: function _hideShippingResponse() {
      this.$shippingResponse.removeClass(classes.cart.shipping.responseVisible);
    }
  }]);
  return Cart;
}();

var Popover = function () {
  function Popover(reference, attachment) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popover);

    var defaults = {
      animateHeight: true,
      fixed: true,
      attach: 'top',
      boundaryElement: null
    };

    this.reference = reference;
    this.attachment = attachment;
    this.$attachment = jquery$1(attachment);
    this.options = jquery$1.extend({}, defaults, options);

    this.onClick = this._onClick.bind(this);

    this.deferred = {
      action: 'none',
      object: jquery$1.Deferred()
    };
    this.isEnabled = false;
    this.isOpen = false;
    this.referencePoint = 0;
    this.viewportHeight = 0;
  }

  createClass(Popover, [{
    key: 'enable',
    value: function enable() {
      if (this.isEnabled) {
        return;
      }

      this.attachment.addEventListener('click', this.onClick);
      this.reference.classList.add('popover-reference');
      this.attachment.classList.add('popover-attachment');

      if (this.options.fixed) {
        this.reference.classList.add('popover-reference-fixed');
        this.attachment.classList.add('popover-attachment-fixed');
      }

      this.isEnabled = true;
    }
  }, {
    key: 'disable',
    value: function disable() {
      var _this = this;

      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (!this.isEnabled) {
        return jquery$1.Deferred.reject().promise();
      }

      if (this.isOpen) {
        return this.close(force).then(function () {
          _this.attachment.removeEventListener('click', _this.onClick);
          _this.reference.classList.remove('popover-reference');
          _this.attachment.classList.remove('popover-attachment');

          if (_this.options.fixed) {
            _this.reference.classList.remove('popover-reference-fixed');
            _this.attachment.classList.remove('popover-attachment-fixed');
          }

          _this.isEnabled = false;
        });
      }

      this.attachment.removeEventListener('click', this.onClick);
      this.reference.classList.remove('popover-reference');
      this.attachment.classList.remove('popover-attachment');

      if (this.options.fixed) {
        this.reference.classList.remove('popover-reference-fixed');
        this.attachment.classList.remove('popover-attachment-fixed');
      }

      this.attachment.setAttribute('style', '');
      this.isEnabled = false;

      return jquery$1.Deferred().resolve().promise();
    }
  }, {
    key: 'open',
    value: function open() {
      var _this2 = this;

      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var deferred = jquery$1.Deferred();

      if (!this.isEnabled) {
        return jquery$1.Deferred().reject().promise();
      }

      if (this.deferred.action === 'open' && this.deferred.object.state() === 'pending') {
        return jquery$1.Deferred().reject().promise();
      }

      if (this.deferred.object.state() === 'pending') {
        this.deferred.object.reject();
      }

      this.deferred = {
        action: 'open',
        object: deferred
      };
      this.isOpen = true;

      if (this.options.fixed) {
        this._fixToReference();
      } else {
        this._absoluteToReference();
      }

      this.$attachment.revealer('show', force).one('transitionend', function () {
        if (deferred.state() !== 'pending') {
          return;
        }

        _this2.reference.classList.add('popover-open');
        _this2.attachment.classList.add('popover-open');

        if (_this2.options.animateHeight) {
          var height = _this2.attachment.getBoundingClientRect().height;

          _this2.attachment.style.height = height + 'px';
        }

        deferred.resolve();
      });

      return deferred.promise();
    }
  }, {
    key: 'close',
    value: function close() {
      var _this3 = this;

      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var deferred = jquery$1.Deferred();

      if (!this.isEnabled) {
        return jquery$1.Deferred().reject().promise();
      }

      if (this.deferred.action === 'close' && this.deferred.object.state() === 'pending') {
        return jquery$1.Deferred().reject().promise();
      }

      if (this.deferred.object.state() === 'pending') {
        this.deferred.object.reject();
      }

      this.deferred = {
        action: 'close',
        object: deferred
      };
      this.isOpen = false;

      this.$attachment.revealer('hide', force).one('trend', function () {
        if (deferred.state() !== 'pending') {
          return;
        }

        _this3.reference.classList.remove('popover-open');
        _this3.attachment.classList.remove('popover-open');
        _this3.attachment.setAttribute('style', '');

        deferred.resolve();
      });

      return deferred.promise();
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      if (!this.isEnabled) {
        return jquery$1.Deferred().reject().promise();
      }

      if (this.isOpen) {
        return this.close();
      }

      return this.open();
    }
  }, {
    key: 'update',
    value: function update() {
      if (!this.isEnabled) {
        return jquery$1.Deferred().reject().promise();
      }

      var currentHeight = this.attachment.getBoundingClientRect().height;
      this.attachment.style.height = '';

      if (this.options.fixed) {
        this._fixToReference();
      } else {
        this._absoluteToReference();
      }

      if (this.options.animateHeight) {
        var toHeight = this.attachment.getBoundingClientRect().height;

        return this._animateHeight(currentHeight, toHeight);
      }

      this.attachment.style.height = currentHeight + 'px';

      return jquery$1.Deferred().resolve().promise();
    }
  }, {
    key: 'unload',
    value: function unload() {
      this.disable();
    }
  }, {
    key: '_onClick',
    value: function _onClick(event) {
      event.stopPropagation();
    }
  }, {
    key: '_fixToReference',
    value: function _fixToReference() {
      var height = document.documentElement.getBoundingClientRect().height;

      this.attachment.style.position = 'fixed';

      if (!this.viewportHeight) {
        this.referencePoint = this.options.attach === 'top' ? this.reference.getBoundingClientRect().top : this.reference.getBoundingClientRect().bottom;
        this.viewportHeight = height;
      }

      // If the available document element height is still the same,
      // the iOS or other overlay is changing, so don't change position
      if (this.viewportHeight === height) {
        this.attachment.style.bottom = height - this.referencePoint + 'px';
        return;
      }

      this.referencePoint = this.options.attach === 'top' ? this.reference.getBoundingClientRect().top : this.reference.getBoundingClientRect().bottom;
      this.viewportHeight = height;
      this.attachment.style.bottom = height - this.referencePoint + 'px';
    }
  }, {
    key: '_absoluteToReference',
    value: function _absoluteToReference() {
      this.attachment.style.position = 'absolute';
      this.attachment.style.bottom = 0;

      if (this.options.boundaryElement) {
        this._constrainToBoundary();
      }
    }
  }, {
    key: '_constrainToBoundary',
    value: function _constrainToBoundary() {
      var boundaryRect = this.options.boundaryElement.getBoundingClientRect();
      var boundaryHeight = boundaryRect.height;
      var boundaryTop = boundaryRect.top;

      var currentBottom = this.attachment.style.bottom;

      // We can't get the box shadow of elements, subtract arbitrary value
      // to accomodate box shadows
      this.attachment.style.maxHeight = boundaryHeight - 2 + 'px';
      this.attachment.style.transition = 'none';
      this.attachment.style.bottom = 0;
      this.attachment.classList.add('popover-open');

      var attachmentRect = this.attachment.getBoundingClientRect();
      var attachmentTop = attachmentRect.top;

      var offset = 0;

      if (boundaryTop > attachmentTop) {
        offset = boundaryTop - attachmentTop;
      }

      this.attachment.classList.remove('popover-open');
      this.attachment.style.bottom = currentBottom;
      this.attachment.style.transition = '';
      this.attachment.style.bottom = '-' + offset + 'px';
    }
  }, {
    key: '_animateHeight',
    value: function _animateHeight(from, to) {
      var _this4 = this;

      var deferred = jquery$1.Deferred();

      if (this.deferred.object.state() === 'pending') {
        return jquery$1.Deferred().reject().promise();
      }

      this.deferred = {
        action: 'animate-height',
        object: deferred
      };
      this.attachment.style.height = from + 'px';

      window.requestAnimationFrame(function () {
        if (deferred.state() !== 'pending') {
          return;
        }

        jquery$1(_this4.attachment).one('transitionend', function () {
          return deferred.resolve();
        });
        _this4.attachment.style.height = to + 'px';

        // Automatically resolve after 1 second if no transition is applied
        setTimeout(function () {
          if (deferred.state() === 'pending') {
            deferred.resolve();
          }
        }, 2500);
      });

      return deferred.promise();
    }
  }, {
    key: 'enabled',
    get: function get$$1() {
      return this.isEnabled;
    }
  }]);
  return Popover;
}();

var ScrollHinter = function () {
  function ScrollHinter(el) {
    classCallCheck(this, ScrollHinter);

    this.el = el;
    this.parent = this.el.parentNode;

    this.checkScroll = this._checkScroll.bind(this);
    this._bindEvents();

    this._checkScroll();
  }

  createClass(ScrollHinter, [{
    key: '_checkScroll',
    value: function _checkScroll() {
      var _el = this.el,
          scrollLeft = _el.scrollLeft,
          scrollWidth = _el.scrollWidth;

      var _el$getBoundingClient = this.el.getBoundingClientRect(),
          width = _el$getBoundingClient.width;

      var overflowsLeft = scrollLeft > 0;
      var overflowsRight = scrollLeft < scrollWidth - width;

      this._toggleClasses({ overflowsLeft: overflowsLeft, overflowsRight: overflowsRight });
    }
  }, {
    key: 'unload',
    value: function unload() {
      this.el.removeEventListener('scroll', this.checkScroll);

      this._toggleClasses({ overflowsLeft: false, overflowsRight: false });
    }
  }, {
    key: '_bindEvents',
    value: function _bindEvents() {
      this.el.addEventListener('scroll', this.checkScroll);
    }
  }, {
    key: '_toggleClass',
    value: function _toggleClass(el, className, condition) {
      if (condition) {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    }
  }, {
    key: '_toggleClasses',
    value: function _toggleClasses() {
      var overflows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var overflowsLeft = overflows.overflowsLeft,
          overflowsRight = overflows.overflowsRight;


      this._toggleClass(this.parent, 'overflows-left', overflowsLeft);
      this._toggleClass(this.parent, 'overflows-right', overflowsRight);
    }
  }]);
  return ScrollHinter;
}();

var ProductAtc = function () {
  function ProductAtc() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, ProductAtc);

    this.$window = jquery$1(window);

    var defaults = {
      el: null,
      container: null,
      moneyFormat: null,
      product: null,
      cartRedirect: null,
      variantAvailable: null,
      textStrings: {
        add_to_cart: '',
        quantity_text: '',
        quantity_disable: ''
      },
      onATCSubmit: function onATCSubmit() {},
      onATCSuccess: function onATCSuccess() {}
    };

    this.config = jquery$1.extend(true, {}, defaults, options);

    if (!this.config.el || !this.config.product || !this.config.textStrings) {
      return console.warn('Unable to initiate ProductAtc.js');
    }

    this.$el = jquery$1(this.config.el);
    this.cartEl = this.config.el.querySelector(selectors.cart.el);
    this.$cartEl = jquery$1(this.cartEl);
    this.form = this.config.el.querySelector(selectors.product.form.el);
    this.quantityEl = this.config.el.querySelector(selectors.quantity.input);
    this.trigger = this.config.el.querySelector(selectors.popover.triggers.atcSteps);
    this.triggers = this.config.el.querySelectorAll(selectors.popover.triggers.atcToggle);
    this.contentForm = this.config.el.querySelector(selectors.popover.contents.atcStepForm);
    this.contentCart = this.config.el.querySelector(selectors.popover.contents.atcStepCart);
    this.dcbSubmit = this.config.el.querySelector(selectors.product.form.dcbSubmit);
    this.$dcbSubmit = jquery$1(this.dcbSubmit);
    this.$dcbSubmitText = this.$dcbSubmit.find(selectors.product.form.dcbSubmitText);

    this.optionGroups = this.form.querySelectorAll('.option-value-group');
    this.scrollHinters = [];

    this.triggerFormPopover = new Popover(this.trigger, this.contentForm);
    this.triggerCartPopover = new Popover(this.trigger, this.contentCart);
    this.formCartPopoverFixed = new Popover(this.contentForm, this.contentCart);
    this.formCartPopoverAbsolute = new Popover(this.contentForm, this.contentCart, {
      fixed: false,
      boundaryElement: this.config.container
    });
    this.activePopover = this.formCartPopoverAbsolute;
    this.activePopover.enable();

    this.formAtc = this.config.el.querySelector(selectors.product.form.atc);
    this.isStatic = this.$el.hasClass(classes.product.atc.static);
    this.isDefaultVariant = this.$el.hasClass(classes.product.atc.defaultVariant);
    this.submitting = false;

    this.variantHelper = null;
    this.quantity = null;
    this.cart = null;

    this.onTriggerClick = this._onTriggerClick.bind(this);
    this.onBodyClick = this._onBodyClick.bind(this);
    this.onSubmit = this._onSubmit.bind(this);
    this.onCartReloadFinish = this._onCartReloadFinish.bind(this);
    this.onCartItemRemoveFinish = this._onCartItemRemoveFinish.bind(this);
    this.onVariantSwitch = this._onVariantSwitch.bind(this);
    this.updatePopper = this._updatePopper.bind(this);

    this._init();
  }

  createClass(ProductAtc, [{
    key: 'unload',
    value: function unload() {
      if (this.variantHelper) {
        this.variantHelper.unload();
        this.variantHelper = null;
      }

      this.quantity.unload();
      this.quantity = null;

      this.cart.cartRequests.restoreHandlers();

      if (this.triggers.length > 0) {
        for (var i = 0; i < this.triggers.length; i++) {
          this.triggers[i].removeEventListener('click', this.onTriggerClick);
        }
      }

      this.scrollHinters.forEach(function (hinter) {
        hinter.unload();
      });

      if (!this.isStatic) {
        layout.offBreakpointChange(this._onBreakpointChange);
      }

      document.body.removeEventListener('click', this.onBodyClick);
      this.form.removeEventListener('submit', this.onSubmit);
      this.$window.off('resize', this.updatePopper);
      this.$window.off(events.cart.inlineVisible, this.updatePopper);
      this.$cartEl.off(events.cart.reloadFinish, this.onCartReloadFinish);
      this.$window.off(events.cart.item.removingFinished, this.onCartItemRemoveFinish);
      this.$window.off('product-variant-switch', this.onVariantSwitch);
    }
  }, {
    key: '_init',
    value: function _init() {
      var $productVariants = jquery$1(selectors.product.form.variants, this.form);
      var $productOptions = jquery$1(selectors.product.form.productOption, this.form);

      this.cart = new Cart(this.cartEl, {
        moneyFormat: this.config.moneyFormat
      });

      this.variantHelper = $productOptions.length ? new VariantHelper(this.config.product, $productVariants, $productOptions) : null;

      if (this.dcbSubmit) {
        this.quantity = new Quantity(this.form.querySelector(selectors.product.form.quantity));
      } else {
        this.quantity = new QuantitySubmit(this.form.querySelector(selectors.product.form.quantity), {
          submitCallback: this.onSubmit,
          text: this.config.textStrings.quantity_text,
          disableText: this.config.textStrings.quantity_disable
        });
      }

      this._atcState(this.config.variantAvailable);

      if (this.triggers.length > 0) {
        for (var i = 0; i < this.triggers.length; i++) {
          this.triggers[i].addEventListener('click', this.onTriggerClick);
        }
      }

      if (!this.isStatic) {
        this._onBreakpointChange = this._onBreakpointChange.bind(this);
        layout.onBreakpointChange(this._onBreakpointChange);

        this._enablePopoverByBreakpoint(layout.getBreakpoint());
        this._addScrollHinters();
      }

      document.body.addEventListener('click', this.onBodyClick);
      this.form.addEventListener('submit', this.onSubmit);
      this.$window.on('resize', this.updatePopper);
      this.$window.on(events.cart.inlineVisible, this.updatePopper);
      this.$cartEl.on(events.cart.reloadFinish, this.onCartReloadFinish);
      this.$window.on(events.cart.item.removingFinished, this.onCartItemRemoveFinish);
      this.$window.on('product-variant-switch', this.onVariantSwitch);
    }
  }, {
    key: '_addScrollHinters',
    value: function _addScrollHinters() {
      for (var i = 0; i < this.optionGroups.length; i += 1) {
        this.scrollHinters.push(new ScrollHinter(this.optionGroups[i]));
      }
    }
  }, {
    key: '_checkScrollHinters',
    value: function _checkScrollHinters() {
      this.scrollHinters.forEach(function (hinter) {
        hinter.checkScroll();
      });
    }
  }, {
    key: '_onBreakpointChange',
    value: function _onBreakpointChange(events$$1) {
      var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      this._enablePopoverByBreakpoint(breakpoints.current);
    }
  }, {
    key: '_changePopover',
    value: function _changePopover(popover) {
      var _this = this;

      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var deferred = jquery$1.Deferred();

      if (this.activePopover === popover) {
        return deferred.resolve().promise();
      }

      this.activePopover.disable(force).then(function () {
        _this.activePopover = popover;
        _this.activePopover.enable();

        deferred.resolve();
      });

      return deferred.promise();
    }
  }, {
    key: '_enablePopoverByBreakpoint',
    value: function _enablePopoverByBreakpoint(breakpoint) {
      var popover = null;

      switch (breakpoint) {
        case 'XS':
        case 'S':
          popover = this.isDefaultVariant ? this.formCartPopoverFixed : this.triggerFormPopover;
          break;
        case 'M':
        case 'L':
        case 'XL':
        default:
          popover = this.formCartPopoverAbsolute;
          break;
      }

      this._changePopover(popover, true);
    }
  }, {
    key: '_onTriggerClick',
    value: function _onTriggerClick(event) {
      var _this2 = this;

      event.stopPropagation();

      if (this.activePopover === this.triggerCartPopover) {
        this._changePopover(this.triggerFormPopover);
      } else {
        this.activePopover.toggle().then(function () {
          if (_this2.activePopover.attachment === _this2.contentForm) {
            _this2._checkScrollHinters();
          }
        });
      }
    }
  }, {
    key: '_onBodyClick',
    value: function _onBodyClick() {
      this.activePopover.close();
    }
  }, {
    key: '_onSubmit',
    value: function _onSubmit(event) {
      if (this.config.cartRedirect) {
        return;
      }

      event.preventDefault();

      if (this.quantityEl.getAttribute('disabled')) {
        return;
      }

      if (this.config.onATCSubmit) {
        this.config.onATCSubmit();
      }

      var form = jquery$1(this.form).serializeArray();

      var variant = null;
      var quantity = null;

      form.forEach(function (data) {
        switch (data.name) {
          case 'id':
            variant = data.value;
            break;
          case 'quantity':
            quantity = data.value;
            break;
          default:
            break;
        }
      });

      if (!variant || !quantity) {
        // TODO: Better error messaging
        console.error('Error submitting product form.');
        return;
      }

      this.formAtc.classList.add(classes.product.atc.loading);
      this.cart.cartRequests.submitItemRequest(variant, quantity, true);

      this.submitting = true;
    }
  }, {
    key: '_updatePopper',
    value: function _updatePopper() {
      this.activePopover.update();
    }
  }, {
    key: '_onCartReloadFinish',
    value: function _onCartReloadFinish(event, data) {
      var _this3 = this;

      if (!this.submitting) {
        return;
      }

      var error = data.error;

      this.formAtc.classList.remove(classes.product.atc.loading);

      if (error) {
        return;
      }

      if (this.triggers.length > 0) {
        for (var i = 0; i < this.triggers.length; i++) {
          this.triggers[i].removeEventListener('click', this.onTriggerClick);
        }

        this.triggers = this.config.el.querySelectorAll(selectors.popover.triggers.atcToggle);

        for (var _i = 0; _i < this.triggers.length; _i++) {
          this.triggers[_i].addEventListener('click', this.onTriggerClick);
        }
      }

      if (this.config.onATCSuccess) {
        this.config.onATCSuccess();
      }

      if (this.activePopover === this.triggerFormPopover) {
        this._changePopover(this.triggerCartPopover).then(function () {
          return _this3.activePopover.open();
        });
      } else {
        this.activePopover.open();
      }

      this.submitting = false;
    }
  }, {
    key: '_onCartItemRemoveFinish',
    value: function _onCartItemRemoveFinish(event, data) {
      var cart = data.cart;

      if (this.cart !== cart) {
        return;
      }

      this.activePopover.update();
    }
  }, {
    key: '_onVariantSwitch',
    value: function _onVariantSwitch(event, data) {
      var variant = data.variant;

      this._atcState(variant.available);
    }
  }, {
    key: '_atcState',
    value: function _atcState(available) {
      this.quantity.setDisable(!available);

      if (this.$dcbSubmit.length) {
        this.$dcbSubmit.prop('disabled', !available);
        this.$dcbSubmitText.text(available ? this.config.textStrings.add_to_cart : this.config.textStrings.quantity_disable);
      }
    }
  }]);
  return ProductAtc;
}();

var ProductLayout = function () {
  function ProductLayout() {
    var _this = this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, ProductLayout);

    this.$window = jquery$1(window);

    var defaults = {
      el: null,
      moneyFormat: null,
      product: null,
      variantAvailable: null,
      textStrings: null,
      enableHistory: false,
      onATCSubmit: function onATCSubmit() {},
      onATCSuccess: function onATCSuccess() {}
    };

    this.config = jquery$1.extend({}, defaults, options);

    if (!this.config.el || !this.config.moneyFormat || !this.config.product || !this.config.textStrings) {
      return console.warn('Unable to initiate ProductLayout.js');
    }

    this.product = this.config.product;

    this.description = this.config.el.querySelector(selectors.product.description);
    this.$productEl = jquery$1(this.config.el).find(selectors.product.el).addBack(selectors.product.el);
    this.atc = this.config.el.querySelector(selectors.product.atc);
    this.gallery = this.config.el.querySelector(selectors.product.gallery);

    this.richText = null;
    this.productGallery = null;
    this.productAtc = null;

    this.$scripts = jquery$1('[data-scripts]');

    script(this.$scripts.data('shopify-api-url'), function () {
      _this._init();
    });
  }

  createClass(ProductLayout, [{
    key: 'unload',
    value: function unload() {
      if (this.richText) {
        this.richText.unload();
        this.richText = null;
      }

      if (this.productGallery) {
        this.productGallery.unload();
        this.productGallery = null;
      }

      if (this.productAtc) {
        this.productAtc.unload();
        this.productAtc = null;
      }

      this.$window.off('product-variant-switch.product-layout-' + this.product.id);
    }
  }, {
    key: '_init',
    value: function _init() {
      var _this2 = this;

      if (this.description) {
        this.richText = new RichText(this.description);
      }

      if (this.gallery) {
        this.productGallery = new ProductGallery({
          el: this.gallery
        });
      }

      if (this.atc) {
        this.productAtc = new ProductAtc({
          el: this.atc,
          container: this.$productEl[0],
          product: this.config.product,
          cartRedirect: this.config.cartRedirect,
          moneyFormat: this.config.moneyFormat,
          variantAvailable: this.config.variantAvailable,
          textStrings: this.config.textStrings,
          onATCSubmit: this.config.onATCSubmit,
          onATCSuccess: this.config.onATCSuccess
        });
      }

      this.priceManager = new PriceManager(this.config.el, this.config.moneyFormat);

      this.$window.on('product-variant-switch.product-layout-' + this.product.id, function (event, data) {
        return _this2._switchVariant(event, data);
      });
    }
  }, {
    key: '_switchVariant',
    value: function _switchVariant(event, data) {
      if (data.product.id !== this.product.id) return;

      var variant = data.variant;
      var firstLoad = data.firstLoad;

      if (firstLoad) {
        return;
      }

      // Update gallery image
      if (this.gallery && this.productGallery && variant.featured_image) {
        this.productGallery.switchImage(variant.featured_image.id);
      }

      // Update Variant information
      this._updatePrice(variant);

      if (this.config.enableHistory) {
        var url = this.config.product.handle + '?' + jquery$1.param({ variant: variant.id });
        history.replaceState({}, 'variant', url);
      }
    }
  }, {
    key: '_updatePrice',
    value: function _updatePrice(variant) {
      var _this3 = this;

      var $compareAtPrice = jquery$1(selectors.price.compareAt, this.config.el);
      var $price = jquery$1(selectors.price.price, this.config.el);

      var $compareAtPriceMoney = jquery$1('.money', $compareAtPrice);
      var $priceMoney = jquery$1('.money', $price);

      var hasComparePrice = !!variant.compare_at_price && variant.compare_at_price > variant.price;

      // Update compare at price
      $compareAtPrice.toggleClass('visible', hasComparePrice);
      $compareAtPriceMoney.each(function (i, el) {
        _this3.priceManager.updatePrice(el, variant.compare_at_price);
      });

      // Update price
      $priceMoney.each(function (i, el) {
        _this3.priceManager.updatePrice(el, variant.price);
      });
    }
  }]);
  return ProductLayout;
}();

var QuickShop = function () {
  function QuickShop(options) {
    classCallCheck(this, QuickShop);

    this.el = options.el || null;
    this.productUrl = options.url || null;
    this.productID = options.id || null;
    this.trigger = options.trigger || null;
    this.cartRequests = new CartRequests();

    if (!this.el || !this.productUrl || !this.productID || !this.trigger) {
      return console.warn('Unable to initiate QuickShop.js');
    }

    this.$window = jquery$1(window);
    this.$document = jquery$1(document);
    this.$trigger = jquery$1(this.trigger);

    // Build up selectors
    this.selectorTag = selectors.product.quickshop.selectorAttr + '="' + this.productID + '"';
    this.selector = '[' + this.selectorTag + ']';

    // Default out globals
    this.productLoaded = false;
    this.productEl = null;
    this.$formAtc = null;
    this.$errorMessage = jquery$1('<div ' + selectors.product.quickshop.errorAttr + ' class="' + classes.product.quickshop.error + '"/>');
    this.data = null;
    this.modal = null;
    this.priceManager = null;

    this._handleBeforeShow = this._handleBeforeShow.bind(this);
    this._handleOpen = this._handleOpen.bind(this);
    this._handleClose = this._handleClose.bind(this);
    this._handleError = this._handleError.bind(this);
    this._resetError = this._resetError.bind(this);
    this._onATCSubmit = this._onATCSubmit.bind(this);
    this._onATCSuccess = this._onATCSuccess.bind(this);

    this._onBreakpointChange = this._onBreakpointChange.bind(this);
    layout.onBreakpointChange(this._onBreakpointChange);
  }

  createClass(QuickShop, [{
    key: 'open',
    value: function open() {
      var _this = this;

      this.trigger.setAttribute('disabled', 'disabled');

      if (!this.productLoaded) {
        jquery$1.ajax({
          url: this.productUrl,
          data: 'view=quickshop',
          dataType: 'html',
          success: function success(data) {
            var $wrapper = jquery$1('<div class="' + classes.product.quickshop.wrapper + '" ' + _this.selectorTag + '/>');
            var $contents = $wrapper.append(data);

            try {
              _this.data = JSON.parse($wrapper.find(selectors.product.quickshop.data).text());
            } catch (error) {
              return console.warn('Quickshop: invalid quickshop data found. ' + error.message);
            }

            jquery$1(_this.el).append($contents);

            // Bind productEl to node of contents, which gets moved into Modal
            _this.productEl = _this.el.querySelector(selectors.product.quickshop.contents);
            _this.productLoaded = true;

            _this._openQuickShop();
          },
          error: function error(jqXHR, textStatus, errorThrown) {
            console.warn('Unable to Quickshop with error: ' + errorThrown);
          }
        });
      } else {
        this._openQuickShop();
      }
    }
  }, {
    key: 'unload',
    value: function unload() {
      this._handleClose();
      layout.offBreakpointChange(this._onBreakpointChange);
    }
  }, {
    key: '_openQuickShop',
    value: function _openQuickShop() {
      var modalCallbacks = {
        onBeforeShow: this._handleBeforeShow,
        onOpen: this._handleOpen,
        onClose: this._handleClose
      };

      this.modal = new Modal(modalCallbacks);
      this.modal.open(this.selector, 'quickshop');
    }
  }, {
    key: '_handleBeforeShow',
    value: function _handleBeforeShow() {
      // Set object fit for IE11
      this.$document.trigger('check-object-fit', {
        el: this.productEl
      });

      // Update prices to current currency
      this.priceManager = new PriceManager(this.productEl, this.data.money_format);
      this.priceManager.updateAll();

      // Set up error handling
      this.$formAtc = jquery$1(this.productEl.querySelector(selectors.product.form.atc));

      // Clear errors on variant switch
      this.$window.on('product-variant-switch.product-quickshop', this._resetError);

      // Instantiate Product JS
      this.productLayout = new ProductLayout({
        el: this.productEl,
        moneyFormat: this.data.money_format,
        product: this.data.product,
        variantAvailable: this.data.variant_available,
        cartRedirect: this.data.cart_redirect,
        textStrings: this.data.text_strings,
        onATCSubmit: this._onATCSubmit,
        onATCSuccess: this._onATCSuccess
      });
    }
  }, {
    key: '_handleError',
    value: function _handleError(error) {
      this.$errorMessage.text(error.responseJSON.description);
      this.$formAtc.prepend(this.$errorMessage);
    }
  }, {
    key: '_handleOpen',
    value: function _handleOpen($modal) {
      $modal.find('a:visible:first').eq(0).focus();

      if (window.Shopify && Shopify.PaymentButton) {
        Shopify.PaymentButton.init();
      }
    }
  }, {
    key: '_handleClose',
    value: function _handleClose() {
      if (this.modal) {
        this.productLayout.unload();
        this.modal.unload();
        this.$trigger.removeAttr('disabled').focus();
        this.$window.off('product-variant-switch.product-quickshop');
      }
    }
  }, {
    key: '_onBreakpointChange',
    value: function _onBreakpointChange() {
      if (layout.isBreakpoint('XS') || layout.isBreakpoint('S')) {
        this._handleClose();
      }
    }

    /**
     * Actions to perform when submitting ATC to Shopify
     *
     * @private
     */

  }, {
    key: '_onATCSubmit',
    value: function _onATCSubmit() {
      this._resetError();

      this.cartRequests.setHandlers({
        onError: this._handleError
      });
    }
  }, {
    key: '_resetError',
    value: function _resetError() {
      if (this.$errorMessage.length) {
        this.$errorMessage.remove();
      }
    }

    /**
     * Actions to perform on a successful ATC
     * @private
     */

  }, {
    key: '_onATCSuccess',
    value: function _onATCSuccess() {
      this.cartRequests.restoreHandlers();
    }
  }]);
  return QuickShop;
}();

var ProductItem = function () {
  function ProductItem(el) {
    classCallCheck(this, ProductItem);

    // Scrape product information
    this.productUrl = el.getAttribute(selectors.product.item.urlAttr);
    this.productID = el.getAttribute(selectors.product.item.idAttr);

    this.quickShopTrigger = el.querySelector(selectors.product.quickshop.trigger);
    this.quickShop = null;
    this.openQuickShop = this._onOpenQuickshop.bind(this);

    if (this.quickShopTrigger) {
      this.quickShop = new QuickShop({
        el: el,
        trigger: this.quickShopTrigger,
        url: this.productUrl,
        id: this.productID
      });

      this.quickShopTrigger.addEventListener('click', this.openQuickShop);
    }
  }

  createClass(ProductItem, [{
    key: '_onOpenQuickshop',
    value: function _onOpenQuickshop() {
      this.quickShop.open();
    }
  }, {
    key: 'unload',
    value: function unload() {
      if (this.quickShop) {
        this.quickShop.unload();
        this.quickShopTrigger.removeEventListener('click', this.openQuickShop);
      }
    }
  }]);
  return ProductItem;
}();

var SearchPage = function SearchPage() {
  classCallCheck(this, SearchPage);

  var searchPage = document.querySelector('.search-page');

  if (!searchPage) {
    return;
  }

  this.productItemEls = searchPage.querySelectorAll(selectors.product.item.el);

  for (var i = 0; i < this.productItemEls.length; i += 1) {
    new ProductItem(this.productItemEls[i]);
  }
};

function initAddresses() {
  var deferred = jquery$1.Deferred();

  if (!jquery$1('[data-account-template="addresses"]').length) {
    deferred.resolve();
  } else {
    var $themeScripts = jquery$1('[data-scripts]');

    script($themeScripts.data('shopify-common'), function () {
      script($themeScripts.data('shopify-customer'), function () {
        var id = jquery$1('[data-address-id]').data('address-id');
        // Initiate provinces for the New Address form
        new Shopify.CountryProvinceSelector('customer-addr-' + id + '-country', 'customer-addr-' + id + '-province', {
          hideElement: 'customer-addr-' + id + '-province-wrapper'
        });

        deferred.resolve();
      });
    });
  }

  return deferred.promise();
}

var Sections = function () {
  function Sections() {
    classCallCheck(this, Sections);

    this.handlers = {};
    this.instances = {};
    this._onSectionEvent = this._onSectionEvent.bind(this);

    document.addEventListener('shopify:section:load', this._onSectionEvent);
    document.addEventListener('shopify:section:unload', this._onSectionEvent);
    document.addEventListener('shopify:section:select', this._onSectionEvent);
    document.addEventListener('shopify:section:deselect', this._onSectionEvent);
    document.addEventListener('shopify:section:reorder', this._onSectionEvent);
    document.addEventListener('shopify:block:select', this._onSectionEvent);
    document.addEventListener('shopify:block:deselect', this._onSectionEvent);
  }

  /**
   * Stop listening for section events, and unbind all handlers.
   */


  createClass(Sections, [{
    key: 'unbind',
    value: function unbind() {
      document.removeEventListener('shopify:section:load', this._onSectionEvent);
      document.removeEventListener('shopify:section:unload', this._onSectionEvent);
      document.removeEventListener('shopify:section:select', this._onSectionEvent);
      document.removeEventListener('shopify:section:deselect', this._onSectionEvent);
      document.removeEventListener('shopify:section:reorder', this._onSectionEvent);
      document.removeEventListener('shopify:block:select', this._onSectionEvent);
      document.removeEventListener('shopify:block:deselect', this._onSectionEvent);

      // Unload all instances
      for (var i = 0; i < this.instances.length; i++) {
        this._triggerInstanceEvent(this.instances[i], 'onSectionUnload');
      }

      this.handlers = {};
      this.instances = {};
    }

    /**
     * Register a section handler.
     *
     * @param {string} type
     *        The section type to handle. The handler will be called for all
     *        sections with this type.
     *
     * @param {function} handler
     *        The handler function is passed information about a specific section
     *        instance. The handler is expected to return an object that will be
     *        associated with the section instance.
     *
     *        Section handlers are passed an object with the following parameters:
     *          {string} id
     *          An ID that maps to a specific section instance. Typically the
     *          section's filename for static sections, or a generated ID for
     *          dynamic sections.
     *
     *          {string} type
     *          The section type, as supplied when registered.
     *
     *          {Element} el
     *          The root DOM element for the section instance.
     *
     *          {Object} data
     *          Data loaded from the section script element. Defaults to an
     *          empty object.
     *
     *          {Function} postMessage
     *          A function that can be called to pass messages between sections.
     *          The function should be called with a message "name", and
     *          optionally some data.
     */

  }, {
    key: 'register',
    value: function register(type, handler) {
      if (this.handlers[type]) {
        console.warn('Sections: section handler already exists of type \'' + type + '\'.');
      }

      // Store the section handler
      this.handlers[type] = handler;

      // Init sections for this type
      this._initSections(type);
    }

    /**
     * Initialize sections already on the page.
     */

  }, {
    key: '_initSections',
    value: function _initSections(type) {
      // Fetch all existing sections of our type on the page
      var dataEls = document.querySelectorAll('[data-section-type="' + type + '"]');
      if (!dataEls) return;

      // Create an instance for each section
      for (var i = 0; i < dataEls.length; i++) {
        var dataEl = dataEls[i];
        var el = dataEl.parentNode;

        // Get instance ID
        var idEl = el.querySelector('[data-section-id]');

        if (!idEl) {
          console.warn('Sections: unable to find section id for \'' + type + '\'.', el);
          continue;
        }

        var sectionId = idEl.getAttribute('data-section-id');
        if (!sectionId) {
          console.warn('Sections: unable to find section id for \'' + type + '\'.', el);
          continue;
        }

        this._createInstance(sectionId, el);
      }
    }
  }, {
    key: '_onSectionEvent',
    value: function _onSectionEvent(event) {
      var el = event.target;
      var sectionId = event.detail.sectionId;
      var blockId = event.detail.blockId;
      var instance = this.instances[sectionId];

      switch (event.type) {
        case 'shopify:section:load':
          this._createInstance(sectionId, el);
          break;

        case 'shopify:section:unload':
          this._triggerInstanceEvent(instance, 'onSectionUnload', { el: el, id: sectionId });
          delete this.instances[sectionId];
          break;

        case 'shopify:section:select':
          this._triggerInstanceEvent(instance, 'onSectionSelect', { el: el, id: sectionId });
          break;

        case 'shopify:section:deselect':
          this._triggerInstanceEvent(instance, 'onSectionDeselect', { el: el, id: sectionId });
          break;

        case 'shopify:section:reorder':
          this._triggerInstanceEvent(instance, 'onSectionReorder', { el: el, id: sectionId });
          break;

        case 'shopify:block:select':
          this._triggerInstanceEvent(instance, 'onSectionBlockSelect', { el: el, id: blockId });
          break;

        case 'shopify:block:deselect':
          this._triggerInstanceEvent(instance, 'onSectionBlockDeselect', { el: el, id: blockId });
          break;
      }
    }
  }, {
    key: '_triggerInstanceEvent',
    value: function _triggerInstanceEvent(instance, eventName) {
      if (instance && instance[eventName]) {
        for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          args[_key - 2] = arguments[_key];
        }

        instance[eventName].apply(instance, args);
      }
    }
  }, {
    key: '_postMessage',
    value: function _postMessage(name, data) {
      var _this = this;

      Object.keys(this.instances).forEach(function (id) {
        _this._triggerInstanceEvent(_this.instances[id], 'onSectionMessage', name, data);
      });
    }
  }, {
    key: '_createInstance',
    value: function _createInstance(id, el) {
      var typeEl = el.querySelector('[data-section-type]');
      if (!typeEl) return;

      var type = typeEl.getAttribute('data-section-type');
      if (!type) return;

      var handler = this.handlers[type];
      if (!handler) return console.warn('Sections: unable to find section handler for type \'' + type + '\'.');

      var data = this._loadData(el);
      var postMessage = this._postMessage.bind(this);

      this.instances[id] = handler({ id: id, type: type, el: el, data: data, postMessage: postMessage });
    }
  }, {
    key: '_loadData',
    value: function _loadData(el) {
      var dataEl = el.querySelector('[data-section-data]');
      if (!dataEl) return {};

      // Load data from attribute, or innerHTML
      var data = dataEl.getAttribute('data-section-data') || dataEl.innerHTML;

      try {
        return JSON.parse(data);
      } catch (error) {
        console.warn('Sections: invalid section data found. ' + error.message);
        return {};
      }
    }
  }]);
  return Sections;
}();

var MobileScrollers = function () {
  function MobileScrollers(section) {
    classCallCheck(this, MobileScrollers);

    this.el = section.el;
    this.flickity = null;
    this.slider = null;
    this.flickityDefaults = {
      contain: true,
      freeScroll: true,
      cellAlign: 'left',
      prevNextButtons: false,
      pageDots: false
    };

    this._onBreakpointChange = this._onBreakpointChange.bind(this);
    layout.onBreakpointChange(this._onBreakpointChange);
  }

  /**
   * Initialize MobileScrollers
   *
   * @param {String} selector - String which can be queried to find element containing slides
   * @param {Object} flickityOptions - Options to initalize Flickity with
   */


  createClass(MobileScrollers, [{
    key: 'init',
    value: function init(selector) {
      var flickityOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      this.slider = this.el.querySelector(selector);
      this.flickityOptions = jquery$1.extend({}, this.flickityDefaults, flickityOptions);
      this.initFlickity();
    }
  }, {
    key: 'initFlickity',
    value: function initFlickity() {
      if (layout.isBreakpoint('L') || layout.isBreakpoint('XL')) {
        return this.destroyFlickity();
      }

      if (this.flickity || !this.slider) {
        return;
      }

      this.flickity = new js$1(this.slider, this.flickityOptions);
      this.flickity.reloadCells();
    }
  }, {
    key: 'destroyFlickity',
    value: function destroyFlickity() {
      if (!this.flickity) {
        return;
      }

      this.flickity.destroy();
      this.flickity = null;
    }
  }, {
    key: 'onSectionUnload',
    value: function onSectionUnload() {
      this.destroyFlickity();
    }
  }, {
    key: '_onBreakpointChange',
    value: function _onBreakpointChange() {
      this.initFlickity();
    }
  }]);
  return MobileScrollers;
}();

var DynamicBlogPosts = function (_MobileScrollers) {
  inherits(DynamicBlogPosts, _MobileScrollers);

  function DynamicBlogPosts(section) {
    classCallCheck(this, DynamicBlogPosts);

    var _this = possibleConstructorReturn(this, (DynamicBlogPosts.__proto__ || Object.getPrototypeOf(DynamicBlogPosts)).call(this, section));

    var cellAlign = _this.el.querySelectorAll('.article-excerpt').length > 2 ? 'left' : 'center';

    _this.init('[data-blog-posts]', {
      cellAlign: cellAlign
    });
    return _this;
  }

  return DynamicBlogPosts;
}(MobileScrollers);

var Gallery = function (_MobileScrollers) {
  inherits(Gallery, _MobileScrollers);

  function Gallery(container) {
    classCallCheck(this, Gallery);

    var _this = possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call(this, container));

    _this.init(selectors.gallery.container, {
      cellSelector: selectors.gallery.slide,
      cellAlign: 'center',
      imagesLoaded: true
    });
    return _this;
  }

  return Gallery;
}(MobileScrollers);

var DynamicInstagramFeed = function (_Gallery) {
  inherits(DynamicInstagramFeed, _Gallery);

  function DynamicInstagramFeed(section) {
    classCallCheck(this, DynamicInstagramFeed);

    var _this = possibleConstructorReturn(this, (DynamicInstagramFeed.__proto__ || Object.getPrototypeOf(DynamicInstagramFeed)).call(this, section));

    _this.settings = section.data;
    _this.accessToken = _this.settings.access_token;
    _this.gallery = section.el.querySelector(selectors.instagram.container);
    _this.$gallery = jquery$1(_this.gallery);
    _this.$galleryImages = _this.$gallery.find(selectors.instagram.galleryImage);
    _this.$placeholders = _this.$gallery.find(selectors.instagram.placeholder);

    _this.photos = [];
    _this.processPhotos = _this._processPhotos.bind(_this);

    state.instance.track(_this.gallery);

    if (!_this.accessToken || !_this.accessToken.length) {
      return possibleConstructorReturn(_this);
    }

    _this.$gallery.on('rimg:enter', function () {
      _this._processPhotos();
    });

    _this._getPhotos().fail(function (error) {
      console.warn('Instagram: ' + error);
    });
    return _this;
  }

  createClass(DynamicInstagramFeed, [{
    key: 'onSectionUnload',
    value: function onSectionUnload() {
      state.instance.untrack(this.gallery);
      this.$gallery.off('rimg:enter');

      get(DynamicInstagramFeed.prototype.__proto__ || Object.getPrototypeOf(DynamicInstagramFeed.prototype), 'onSectionUnload', this).call(this);
    }
  }, {
    key: '_getPhotos',
    value: function _getPhotos() {
      var _this2 = this;

      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      var url = 'https://api.instagram.com/v1/users/self/media/recent?access_token=' + this.accessToken + '&count=6&callback=';
      var photoPromise = jquery$1.ajax(url, {
        dataType: 'jsonp'
      });

      return photoPromise.then(function (response) {
        if (response.meta.code !== 200) {
          var error = response.meta.error_message + ' (' + response.meta.error_type + ')';
          return jquery$1.Deferred().reject(error).promise();
        }

        _this2.photos = response.data;

        if (callback) {
          return callback();
        }
      });
    }
  }, {
    key: '_processPhotos',
    value: function _processPhotos() {
      var _this3 = this;

      if (!this.photos.length) {
        return this._getPhotos(this.processPhotos);
      }

      var deferred = jquery$1.Deferred();

      this.$galleryImages.each(function (i, el) {
        if (!_this3.photos[i]) {
          return;
        }

        var photo = _this3.photos[i];

        var $link = jquery$1('<a \n        class="' + classes.instagram.image + ' ' + classes.instagram.hidden + '"\n        target="_blank" \n        href="' + photo.link + '"></a>');
        var $photo = jquery$1('<img src="' + photo.images.standard_resolution.url + '">');

        /*
        TODO:
          - Retina suppport
            - Update pxu-instagram-squared to return large format
            - Get appropriate size of image for if is large/small
           const lowResolution = photo.images.low_resolution;
          const standardResolution = photo.images.standard_resolution;
          if (standardResolution.width >= (lowResolution.width * 2)) {
            $photo.attr('srcset', `${ srcLarge } 2x`);
          } else {
            $photo.attr('src', `${ srcLarge }`);
          }
        */

        $photo.one('load', function () {
          $link.append($photo).appendTo(jquery$1(el));

          if (i === _this3.photos.length - 1) {
            deferred.resolve();
          }
        });
      });

      return deferred.done(function () {
        _this3._renderPhotos();
      });
    }
  }, {
    key: '_renderPhotos',
    value: function _renderPhotos() {
      var _this4 = this;

      // Lock height to prevent screen jumping
      this.$gallery.height(this.$gallery.outerHeight(true));

      this.$placeholders.fadeOut().promise().then(function () {
        _this4.$placeholders.each(function (i, el) {
          var $el = jquery$1(el);
          var $imageContainer = $el.parent();
          var $slide = $el.parents(selectors.gallery.slide);
          var hasImage = $el.next().length;

          // Remove placeholder
          $el.remove();

          // If there is no element after the placeholder, remove container
          if (!hasImage) {
            $imageContainer.remove();
          }

          // Remove slide if no images or placeholder
          if (!$slide.children().length) {
            if (_this4.flickity) {
              _this4.flickity.remove($slide[0]);
              _this4.flickity.resize();
            } else {
              $slide.remove();
            }
          }
        });

        _this4.$gallery.css('height', '').find('.' + classes.instagram.hidden).removeClass(classes.instagram.hidden);

        if (_this4.flickity) {
          _this4.flickity.reloadCells();
        }
      });
    }
  }]);
  return DynamicInstagramFeed;
}(Gallery);

var DeckCase = function () {
  function DeckCase(cardsContainer) {
    classCallCheck(this, DeckCase);

    this.cardsContainer = cardsContainer;
    this.cardsPlayer = null;

    this._onBreakpointChange = this._onBreakpointChange.bind(this);

    layout.onBreakpointChange(this._onBreakpointChange);

    if (layout.isBreakpoint('XS') || layout.isBreakpoint('S')) {
      this.cardsPlayer = new CardsPlayer(this.cardsContainer);
    }
  }

  createClass(DeckCase, [{
    key: '_onBreakpointChange',
    value: function _onBreakpointChange(events) {
      var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var current = breakpoints.current;

      if ((current === 'S' || current === 'XS') && !this.cardsPlayer) {
        this.cardsPlayer = new CardsPlayer(this.cardsContainer);
      } else if (current !== 'S' && current !== 'XS' && this.cardsPlayer) {
        this.cardsPlayer.destroy();
        this.cardsPlayer = null;
      }
    }
  }, {
    key: 'onSectionUnload',
    value: function onSectionUnload() {
      if (this.cardsPlayer) {
        this.cardsPlayer.destroy();
        this.cardsPlayer = null;
      }
    }
  }]);
  return DeckCase;
}();

var DynamicListCollections = function () {
  function DynamicListCollections(section) {
    classCallCheck(this, DynamicListCollections);

    this.deckCase = new DeckCase(section.el.querySelector('[data-cards]'));
  }

  createClass(DynamicListCollections, [{
    key: 'onSectionUnload',
    value: function onSectionUnload() {
      this.deckCase.onSectionUnload();
    }
  }]);
  return DynamicListCollections;
}();

var DynamicProduct = function () {
  function DynamicProduct(section) {
    classCallCheck(this, DynamicProduct);
    var el = section.el;
    var product = section.data.product;

    var variantAvailable = section.data.variant_available;
    var moneyFormat = section.data.money_format;
    var textStrings = section.data.text_strings;
    var cartRedirect = section.data.cart_redirect;

    this.priceManager = new PriceManager(section.el);
    this.priceManager.updateAll();
    this.productLayout = null;

    if (!product) {
      return;
    }

    this.productLayout = new ProductLayout({
      el: el,
      moneyFormat: moneyFormat,
      product: product,
      variantAvailable: variantAvailable,
      cartRedirect: cartRedirect,
      textStrings: textStrings
    });
  }

  createClass(DynamicProduct, [{
    key: 'onSectionUnload',
    value: function onSectionUnload() {
      if (this.productLayout) {
        this.productLayout.unload();
      }
    }
  }]);
  return DynamicProduct;
}();

var imagesloaded = createCommonjsModule(function (module) {
/*!
 * imagesLoaded v4.1.3
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

( function( window, factory ) { 'use strict';
  // universal module definition

  /*global define: false, module: false, require: false */

  if ( typeof undefined == 'function' && undefined.amd ) {
    // AMD
    undefined( [
      'ev-emitter/ev-emitter'
    ], function( EvEmitter ) {
      return factory( window, EvEmitter );
    });
  } else if ( 'object' == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      evEmitter
    );
  } else {
    // browser global
    window.imagesLoaded = factory(
      window,
      window.EvEmitter
    );
  }

})( typeof window !== 'undefined' ? window : commonjsGlobal,

// --------------------------  factory -------------------------- //

function factory( window, EvEmitter ) {

'use strict';

var $ = window.jQuery;
var console = window.console;

// -------------------------- helpers -------------------------- //

// extend objects
function extend( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
}

// turn element or nodeList into an array
function makeArray( obj ) {
  var ary = [];
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    ary = obj;
  } else if ( typeof obj.length == 'number' ) {
    // convert nodeList to array
    for ( var i=0; i < obj.length; i++ ) {
      ary.push( obj[i] );
    }
  } else {
    // array of single index
    ary.push( obj );
  }
  return ary;
}

// -------------------------- imagesLoaded -------------------------- //

/**
 * @param {Array, Element, NodeList, String} elem
 * @param {Object or Function} options - if function, use as callback
 * @param {Function} onAlways - callback function
 */
function ImagesLoaded( elem, options, onAlways ) {
  // coerce ImagesLoaded() without new, to be new ImagesLoaded()
  if ( !( this instanceof ImagesLoaded ) ) {
    return new ImagesLoaded( elem, options, onAlways );
  }
  // use elem as selector string
  if ( typeof elem == 'string' ) {
    elem = document.querySelectorAll( elem );
  }

  this.elements = makeArray( elem );
  this.options = extend( {}, this.options );

  if ( typeof options == 'function' ) {
    onAlways = options;
  } else {
    extend( this.options, options );
  }

  if ( onAlways ) {
    this.on( 'always', onAlways );
  }

  this.getImages();

  if ( $ ) {
    // add jQuery Deferred object
    this.jqDeferred = new $.Deferred();
  }

  // HACK check async to allow time to bind listeners
  setTimeout( function() {
    this.check();
  }.bind( this ));
}

ImagesLoaded.prototype = Object.create( EvEmitter.prototype );

ImagesLoaded.prototype.options = {};

ImagesLoaded.prototype.getImages = function() {
  this.images = [];

  // filter & find items if we have an item selector
  this.elements.forEach( this.addElementImages, this );
};

/**
 * @param {Node} element
 */
ImagesLoaded.prototype.addElementImages = function( elem ) {
  // filter siblings
  if ( elem.nodeName == 'IMG' ) {
    this.addImage( elem );
  }
  // get background image on element
  if ( this.options.background === true ) {
    this.addElementBackgroundImages( elem );
  }

  // find children
  // no non-element nodes, #143
  var nodeType = elem.nodeType;
  if ( !nodeType || !elementNodeTypes[ nodeType ] ) {
    return;
  }
  var childImgs = elem.querySelectorAll('img');
  // concat childElems to filterFound array
  for ( var i=0; i < childImgs.length; i++ ) {
    var img = childImgs[i];
    this.addImage( img );
  }

  // get child background images
  if ( typeof this.options.background == 'string' ) {
    var children = elem.querySelectorAll( this.options.background );
    for ( i=0; i < children.length; i++ ) {
      var child = children[i];
      this.addElementBackgroundImages( child );
    }
  }
};

var elementNodeTypes = {
  1: true,
  9: true,
  11: true
};

ImagesLoaded.prototype.addElementBackgroundImages = function( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    // Firefox returns null if in a hidden iframe https://bugzil.la/548397
    return;
  }
  // get url inside url("...")
  var reURL = /url\((['"])?(.*?)\1\)/gi;
  var matches = reURL.exec( style.backgroundImage );
  while ( matches !== null ) {
    var url = matches && matches[2];
    if ( url ) {
      this.addBackground( url, elem );
    }
    matches = reURL.exec( style.backgroundImage );
  }
};

/**
 * @param {Image} img
 */
ImagesLoaded.prototype.addImage = function( img ) {
  var loadingImage = new LoadingImage( img );
  this.images.push( loadingImage );
};

ImagesLoaded.prototype.addBackground = function( url, elem ) {
  var background = new Background( url, elem );
  this.images.push( background );
};

ImagesLoaded.prototype.check = function() {
  var _this = this;
  this.progressedCount = 0;
  this.hasAnyBroken = false;
  // complete if no images
  if ( !this.images.length ) {
    this.complete();
    return;
  }

  function onProgress( image, elem, message ) {
    // HACK - Chrome triggers event before object properties have changed. #83
    setTimeout( function() {
      _this.progress( image, elem, message );
    });
  }

  this.images.forEach( function( loadingImage ) {
    loadingImage.once( 'progress', onProgress );
    loadingImage.check();
  });
};

ImagesLoaded.prototype.progress = function( image, elem, message ) {
  this.progressedCount++;
  this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
  // progress event
  this.emitEvent( 'progress', [ this, image, elem ] );
  if ( this.jqDeferred && this.jqDeferred.notify ) {
    this.jqDeferred.notify( this, image );
  }
  // check if completed
  if ( this.progressedCount == this.images.length ) {
    this.complete();
  }

  if ( this.options.debug && console ) {
    console.log( 'progress: ' + message, image, elem );
  }
};

ImagesLoaded.prototype.complete = function() {
  var eventName = this.hasAnyBroken ? 'fail' : 'done';
  this.isComplete = true;
  this.emitEvent( eventName, [ this ] );
  this.emitEvent( 'always', [ this ] );
  if ( this.jqDeferred ) {
    var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
    this.jqDeferred[ jqMethod ]( this );
  }
};

// --------------------------  -------------------------- //

function LoadingImage( img ) {
  this.img = img;
}

LoadingImage.prototype = Object.create( EvEmitter.prototype );

LoadingImage.prototype.check = function() {
  // If complete is true and browser supports natural sizes,
  // try to check for image status manually.
  var isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    // report based on naturalWidth
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    return;
  }

  // If none of the checks above matched, simulate loading on detached element.
  this.proxyImage = new Image();
  this.proxyImage.addEventListener( 'load', this );
  this.proxyImage.addEventListener( 'error', this );
  // bind to image as well for Firefox. #191
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.proxyImage.src = this.img.src;
};

LoadingImage.prototype.getIsImageComplete = function() {
  return this.img.complete && this.img.naturalWidth !== undefined;
};

LoadingImage.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.img, message ] );
};

// ----- events ----- //

// trigger specified handler for event type
LoadingImage.prototype.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

LoadingImage.prototype.onload = function() {
  this.confirm( true, 'onload' );
  this.unbindEvents();
};

LoadingImage.prototype.onerror = function() {
  this.confirm( false, 'onerror' );
  this.unbindEvents();
};

LoadingImage.prototype.unbindEvents = function() {
  this.proxyImage.removeEventListener( 'load', this );
  this.proxyImage.removeEventListener( 'error', this );
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

// -------------------------- Background -------------------------- //

function Background( url, element ) {
  this.url = url;
  this.element = element;
  this.img = new Image();
}

// inherit LoadingImage prototype
Background.prototype = Object.create( LoadingImage.prototype );

Background.prototype.check = function() {
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.img.src = this.url;
  // check if image is already complete
  var isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    this.unbindEvents();
  }
};

Background.prototype.unbindEvents = function() {
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

Background.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.element, message ] );
};

// -------------------------- jQuery -------------------------- //

ImagesLoaded.makeJQueryPlugin = function( jQuery ) {
  jQuery = jQuery || window.jQuery;
  if ( !jQuery ) {
    return;
  }
  // set local variable
  $ = jQuery;
  // $().imagesLoaded()
  $.fn.imagesLoaded = function( options, callback ) {
    var instance = new ImagesLoaded( this, options, callback );
    return instance.jqDeferred.promise( $(this) );
  };
};
// try making plugin
ImagesLoaded.makeJQueryPlugin();

// --------------------------  -------------------------- //

return ImagesLoaded;

});
});

var flickityImagesloaded = createCommonjsModule(function (module) {
/*!
 * Flickity imagesLoaded v2.0.0
 * enables imagesLoaded option for Flickity
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */
  if ( typeof undefined == 'function' && undefined.amd ) {
    // AMD
    undefined( [
      'flickity/js/index',
      'imagesloaded/imagesloaded'
    ], function( Flickity, imagesLoaded ) {
      return factory( window, Flickity, imagesLoaded );
    });
  } else if ( 'object' == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      js$1,
      imagesloaded
    );
  } else {
    // browser global
    window.Flickity = factory(
      window,
      window.Flickity,
      window.imagesLoaded
    );
  }

}( window, function factory( window, Flickity, imagesLoaded ) {
'use strict';

Flickity.createMethods.push('_createImagesLoaded');

var proto = Flickity.prototype;

proto._createImagesLoaded = function() {
  this.on( 'activate', this.imagesLoaded );
};

proto.imagesLoaded = function() {
  if ( !this.options.imagesLoaded ) {
    return;
  }
  var _this = this;
  function onImagesLoadedProgress( instance, image ) {
    var cell = _this.getParentCell( image.img );
    _this.cellSizeChange( cell && cell.element );
    if ( !_this.options.freeScroll ) {
      _this.positionSliderAtSelected();
    }
  }
  imagesLoaded( this.slider ).on( 'progress', onImagesLoadedProgress );
};

return Flickity;

}));
});

var DynamicSlideshow = function () {
  function DynamicSlideshow(section) {
    classCallCheck(this, DynamicSlideshow);

    this.$el = jquery$1(section.el);
    this.$body = jquery$1(document.body);
    this.data = section.data;

    this.$slideshow = this.$el.find(selectors.slideshow.container);
    this.$slides = this.$el.find(selectors.slideshow.slide);
    this.$paginationNext = this.$el.find(selectors.slideshow.paginationNext);
    this.$paginationPrev = this.$el.find(selectors.slideshow.paginationPrev);

    this._setCellHeights = this._setCellHeights.bind(this);
    this._onSlideSettle = this._onSlideSettle.bind(this);
    this.selectSlide = this.selectSlide.bind(this);

    this.flickity = null;
    this.events = null;
    this.autoplay = this.data.autoplay ? this.data.autoplay * 1000 : this.data.autoplay;

    // Only start Slideshow if container exists
    if (!this.$slideshow.length) {
      return;
    }

    window.addEventListener('resize', this._setCellHeights);

    this._initFlickity();
  }

  createClass(DynamicSlideshow, [{
    key: 'onSectionBlockSelect',
    value: function onSectionBlockSelect(block) {
      if (!this.flickity) {
        return;
      }

      var slideIndex = this._getSlideIndex(block.el);
      this.selectSlide(slideIndex, true, false);

      if (this.autoplay) {
        this.flickity.stopPlayer();
      }
    }
  }, {
    key: 'onSectionBlockDeselect',
    value: function onSectionBlockDeselect() {
      if (!this.flickity) {
        return;
      }

      if (this.autoplay) {
        this.flickity.playPlayer();
      }
    }
  }, {
    key: 'onSectionUnload',
    value: function onSectionUnload() {
      if (!this.flickity) {
        return;
      }

      if (this.events) {
        this.events.forEach(function ($el) {
          return $el.off('.slideshow');
        });
      }

      this.flickity.off('settle', this._onSlideSettle);
      this.flickity.destroy();

      window.removeEventListener('resize', this._setCellHeights);
    }

    /**
     *  Move to the active slide
     * @param slideIndex
     * @param isWrap
     * @param isInstant
     */

  }, {
    key: 'selectSlide',
    value: function selectSlide(slideIndex) {
      var isWrap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var isInstant = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (slideIndex === this.flickity.selectedIndex) {
        return;
      }

      this.flickity.select(slideIndex, isWrap, isInstant);
      this.flickity.reloadCells();

      var cell = this.$slides[slideIndex];
      var $focusable = jquery$1(cell).find(selectors.slideshow.pagination + ', ' + selectors.slideshow.linkButton).eq(0);
      $focusable.focus();
    }

    /**
     * Get the index of the slide from the element
     *
     * @param el
     * @returns {Number}
     * @private
     */

  }, {
    key: '_getSlideIndex',
    value: function _getSlideIndex(el) {
      return parseInt(el.getAttribute('data-slide'), 10);
    }

    /**
     * Tabbing through can cause weird positioning, this makes sure active slide
     * is always properly positioned
     * @private
     */

  }, {
    key: '_onSlideSettle',
    value: function _onSlideSettle() {
      var cell = this.$slides[this.flickity.selectedIndex];

      this._minCellHeight(cell);
      this.flickity.reposition();
    }

    /**
     *
     * @private
     */

  }, {
    key: '_setCellHeights',
    value: function _setCellHeights() {
      var _this = this;

      this.flickity.cells.forEach(function (cell) {
        _this._minCellHeight(cell.element);
      });
    }

    /**
     * Set the minimum height of the cell (via the image) to be height of the
     * content
     *
     * @param {Element} el
     * @private
     */

  }, {
    key: '_minCellHeight',
    value: function _minCellHeight(el) {
      // Only perform on full-width slides
      if (el.getAttribute('data-slide-layout') !== 'full-width') {
        return;
      }

      var content = el.querySelector(selectors.slideshow.slideContent);
      var image = el.querySelector(selectors.slideshow.slideImage);

      if (!content || !image) {
        return;
      }

      var contentHeight = content.getBoundingClientRect().height;
      var imageHeight = image.getBoundingClientRect().height;

      var $image = jquery$1(image);

      if (layout.isBreakpoint('XS') || layout.isBreakpoint('S')) {
        $image.css('min-height', '');

        this.flickity.reposition();
      } else {
        if (contentHeight === imageHeight) {
          return;
        }

        if (contentHeight > imageHeight) {
          $image.css('min-height', contentHeight);
        } else {
          $image.css('min-height', '');
        }

        this.flickity.reposition();
      }
    }
  }, {
    key: '_initFlickity',
    value: function _initFlickity() {
      this.flickity = new js$1(this.$slideshow[0], {
        accessibility: true,
        adaptiveHeight: true,
        autoPlay: this.autoplay,
        cellAlign: 'left',
        cellSelector: selectors.slideshow.slide,
        friction: 0.8,
        pageDots: false,
        pauseAutoPlayOnHover: true,
        prevNextButtons: false,
        selectedAttraction: 0.2,
        wrapAround: true
      });

      this._setCellHeights();
      this._bindEvents();
    }
  }, {
    key: '_bindEvents',
    value: function _bindEvents() {
      var _this2 = this;

      this.events = [this.$slides.on('focusin.slideshow', function (event) {
        event.preventDefault();
        event.stopPropagation();

        var slideIndex = _this2._getSlideIndex(event.currentTarget);

        // Instant transitions confuse Flickity going back
        // Non-instant transitions confuse Flickity going forward
        var isInstant = slideIndex > _this2.flickity.selectedIndex;

        _this2.selectSlide(slideIndex, false, isInstant);
      }), this.$paginationNext.on('click.slideshow', function () {
        return _this2.flickity.next();
      }), this.$paginationPrev.on('click.slideshow', function () {
        return _this2.flickity.previous();
      })];

      this.flickity.on('settle', this._onSlideSettle);
    }
  }]);
  return DynamicSlideshow;
}();

var twitterFetcher_min = createCommonjsModule(function (module, exports) {
/*********************************************************************
*  #### Twitter Post Fetcher v18.0.2 ####
*  Coded by Jason Mayes 2015. A present to all the developers out there.
*  www.jasonmayes.com
*  Please keep this disclaimer with my code if you use it. Thanks. :-)
*  Got feedback or questions, ask here:
*  http://www.jasonmayes.com/projects/twitterApi/
*  Github: https://github.com/jasonmayes/Twitter-Post-Fetcher
*  Updates will be posted to this site.
*********************************************************************/
(function(root,factory){if(typeof undefined==='function'&&undefined.amd){undefined([],factory);}else {module.exports=factory();}}(commonjsGlobal,function(){var domNode='';var maxTweets=20;var parseLinks=true;var queue=[];var inProgress=false;var printTime=true;var printUser=true;var formatterFunction=null;var supportsClassName=true;var showRts=true;var customCallbackFunction=null;var showInteractionLinks=true;var showImages=false;var useEmoji=false;var targetBlank=true;var lang='en';var permalinks=true;var dataOnly=false;var script=null;function handleTweets(tweets){if(customCallbackFunction===null){var x=tweets.length;var n=0;var element=document.getElementById(domNode);var html='<ul>';while(n<x){html+='<li>'+tweets[n]+'</li>';n++;}
html+='</ul>';element.innerHTML=html;}else{customCallbackFunction(tweets);}}
function strip(data){return data.replace(/<b[^>]*>(.*?)<\/b>/gi,function(a,s){return s;}).replace(/class="(?!(tco-hidden|tco-display|tco-ellipsis))+.*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi,'');}
function targetLinksToNewWindow(el){var links=el.getElementsByTagName('a');for(var i=links.length-1;i>=0;i--){links[i].setAttribute('target','_blank');links[i].setAttribute('rel','noopener');}}
function getElementsByClassName(node,classname){var a=[];var regex=new RegExp('(^| )'+classname+'( |$)');var elems=node.getElementsByTagName('*');for(var i=0,j=elems.length;i<j;i++){if(regex.test(elems[i].className)){a.push(elems[i]);}}
return a;}
function extractImageUrl(image_data){if(image_data!==undefined&&image_data.innerHTML.indexOf('data-image')>=0){var data_src=image_data.innerHTML.match(/data-image=\"([A-z0-9]+:\/\/[A-z0-9]+\.[A-z0-9]+\.[A-z0-9]+\/[A-z0-9]+\/[A-z0-9\-]+)/i)[1];return decodeURIComponent(data_src)+'.jpg';}}
var twitterFetcher={fetch:function(config){if(config.maxTweets===undefined){config.maxTweets=20;}
if(config.enableLinks===undefined){config.enableLinks=true;}
if(config.showUser===undefined){config.showUser=true;}
if(config.showTime===undefined){config.showTime=true;}
if(config.dateFunction===undefined){config.dateFunction='default';}
if(config.showRetweet===undefined){config.showRetweet=true;}
if(config.customCallback===undefined){config.customCallback=null;}
if(config.showInteraction===undefined){config.showInteraction=true;}
if(config.showImages===undefined){config.showImages=false;}
if(config.useEmoji===undefined){config.useEmoji=false;}
if(config.linksInNewWindow===undefined){config.linksInNewWindow=true;}
if(config.showPermalinks===undefined){config.showPermalinks=true;}
if(config.dataOnly===undefined){config.dataOnly=false;}
if(inProgress){queue.push(config);}else{inProgress=true;domNode=config.domId;maxTweets=config.maxTweets;parseLinks=config.enableLinks;printUser=config.showUser;printTime=config.showTime;showRts=config.showRetweet;formatterFunction=config.dateFunction;customCallbackFunction=config.customCallback;showInteractionLinks=config.showInteraction;showImages=config.showImages;useEmoji=config.useEmoji;targetBlank=config.linksInNewWindow;permalinks=config.showPermalinks;dataOnly=config.dataOnly;var head=document.getElementsByTagName('head')[0];if(script!==null){head.removeChild(script);}
script=document.createElement('script');script.type='text/javascript';if(config.list!==undefined){script.src='https://syndication.twitter.com/timeline/list?'+'callback=__twttrf.callback&dnt=false&list_slug='+
config.list.listSlug+'&screen_name='+config.list.screenName+'&suppress_response_codes=true&lang='+(config.lang||lang)+'&rnd='+Math.random();}else if(config.profile!==undefined){script.src='https://syndication.twitter.com/timeline/profile?'+'callback=__twttrf.callback&dnt=false'+'&screen_name='+config.profile.screenName+'&suppress_response_codes=true&lang='+(config.lang||lang)+'&rnd='+Math.random();}else if(config.likes!==undefined){script.src='https://syndication.twitter.com/timeline/likes?'+'callback=__twttrf.callback&dnt=false'+'&screen_name='+config.likes.screenName+'&suppress_response_codes=true&lang='+(config.lang||lang)+'&rnd='+Math.random();}else{script.src='https://cdn.syndication.twimg.com/widgets/timelines/'+
config.id+'?&lang='+(config.lang||lang)+'&callback=__twttrf.callback&'+'suppress_response_codes=true&rnd='+Math.random();}
head.appendChild(script);}},callback:function(data){if(data===undefined||data.body===undefined){inProgress=false;if(queue.length>0){twitterFetcher.fetch(queue[0]);queue.splice(0,1);}
return;}
if(!useEmoji){data.body=data.body.replace(/(<img[^c]*class="Emoji[^>]*>)|(<img[^c]*class="u-block[^>]*>)/g,'');}
if(!showImages){data.body=data.body.replace(/(<img[^c]*class="NaturalImage-image[^>]*>|(<img[^c]*class="CroppedImage-image[^>]*>))/g,'');}
if(!printUser){data.body=data.body.replace(/(<img[^c]*class="Avatar"[^>]*>)/g,'');}
var div=document.createElement('div');div.innerHTML=data.body;if(typeof(div.getElementsByClassName)==='undefined'){supportsClassName=false;}
function swapDataSrc(element){var avatarImg=element.getElementsByTagName('img')[0];if(avatarImg){avatarImg.src=avatarImg.getAttribute('data-src-2x');}else{var screenName=element.getElementsByTagName('a')[0].getAttribute('href').split('twitter.com/')[1];var img=document.createElement('img');img.setAttribute('src','https://twitter.com/'+screenName+'/profile_image?size=bigger');element.prepend(img);}
return element;}
var tweets=[];var authors=[];var times=[];var images=[];var rts=[];var tids=[];var permalinksURL=[];var x=0;if(supportsClassName){var tmp=div.getElementsByClassName('timeline-Tweet');while(x<tmp.length){if(tmp[x].getElementsByClassName('timeline-Tweet-retweetCredit').length>0){rts.push(true);}else{rts.push(false);}
if(!rts[x]||rts[x]&&showRts){tweets.push(tmp[x].getElementsByClassName('timeline-Tweet-text')[0]);tids.push(tmp[x].getAttribute('data-tweet-id'));if(printUser){authors.push(swapDataSrc(tmp[x].getElementsByClassName('timeline-Tweet-author')[0]));}
times.push(tmp[x].getElementsByClassName('dt-updated')[0]);permalinksURL.push(tmp[x].getElementsByClassName('timeline-Tweet-timestamp')[0]);if(tmp[x].getElementsByClassName('timeline-Tweet-media')[0]!==undefined){images.push(tmp[x].getElementsByClassName('timeline-Tweet-media')[0]);}else{images.push(undefined);}}
x++;}}else{var tmp=getElementsByClassName(div,'timeline-Tweet');while(x<tmp.length){if(getElementsByClassName(tmp[x],'timeline-Tweet-retweetCredit').length>0){rts.push(true);}else{rts.push(false);}
if(!rts[x]||rts[x]&&showRts){tweets.push(getElementsByClassName(tmp[x],'timeline-Tweet-text')[0]);tids.push(tmp[x].getAttribute('data-tweet-id'));if(printUser){authors.push(swapDataSrc(getElementsByClassName(tmp[x],'timeline-Tweet-author')[0]));}
times.push(getElementsByClassName(tmp[x],'dt-updated')[0]);permalinksURL.push(getElementsByClassName(tmp[x],'timeline-Tweet-timestamp')[0]);if(getElementsByClassName(tmp[x],'timeline-Tweet-media')[0]!==undefined){images.push(getElementsByClassName(tmp[x],'timeline-Tweet-media')[0]);}else{images.push(undefined);}}
x++;}}
if(tweets.length>maxTweets){tweets.splice(maxTweets,(tweets.length-maxTweets));authors.splice(maxTweets,(authors.length-maxTweets));times.splice(maxTweets,(times.length-maxTweets));rts.splice(maxTweets,(rts.length-maxTweets));images.splice(maxTweets,(images.length-maxTweets));permalinksURL.splice(maxTweets,(permalinksURL.length-maxTweets));}
var arrayTweets=[];var x=tweets.length;var n=0;if(dataOnly){while(n<x){arrayTweets.push({tweet:tweets[n].innerHTML,author:authors[n]?authors[n].innerHTML:'Unknown Author',author_data:{profile_url:authors[n]?authors[n].querySelector('[data-scribe="element:user_link"]').href:null,profile_image:authors[n]?'https://twitter.com/'+authors[n].querySelector('[data-scribe="element:screen_name"]').title.split('@')[1]+'/profile_image?size=bigger':null,profile_image_2x:authors[n]?'https://twitter.com/'+authors[n].querySelector('[data-scribe="element:screen_name"]').title.split('@')[1]+'/profile_image?size=original':null,screen_name:authors[n]?authors[n].querySelector('[data-scribe="element:screen_name"]').title:null,name:authors[n]?authors[n].querySelector('[data-scribe="element:name"]').title:null},time:times[n].textContent,timestamp:times[n].getAttribute('datetime').replace('+0000','Z').replace(/([\+\-])(\d\d)(\d\d)/,'$1$2:$3'),image:extractImageUrl(images[n]),rt:rts[n],tid:tids[n],permalinkURL:(permalinksURL[n]===undefined)?'':permalinksURL[n].href});n++;}}else{while(n<x){if(typeof(formatterFunction)!=='string'){var datetimeText=times[n].getAttribute('datetime');var newDate=new Date(times[n].getAttribute('datetime').replace(/-/g,'/').replace('T',' ').split('+')[0]);var dateString=formatterFunction(newDate,datetimeText);times[n].setAttribute('aria-label',dateString);if(tweets[n].textContent){if(supportsClassName){times[n].textContent=dateString;}else{var h=document.createElement('p');var t=document.createTextNode(dateString);h.appendChild(t);h.setAttribute('aria-label',dateString);times[n]=h;}}else{times[n].textContent=dateString;}}
var op='';if(parseLinks){if(targetBlank){targetLinksToNewWindow(tweets[n]);if(printUser){targetLinksToNewWindow(authors[n]);}}
if(printUser){op+='<div class="user">'+strip(authors[n].innerHTML)+'</div>';}
op+='<p class="tweet">'+strip(tweets[n].innerHTML)+'</p>';if(printTime){if(permalinks){op+='<p class="timePosted"><a href="'+permalinksURL[n]+'">'+times[n].getAttribute('aria-label')+'</a></p>';}else{op+='<p class="timePosted">'+
times[n].getAttribute('aria-label')+'</p>';}}}else{if(tweets[n].textContent){if(printUser){op+='<p class="user">'+authors[n].textContent+'</p>';}
op+='<p class="tweet">'+tweets[n].textContent+'</p>';if(printTime){op+='<p class="timePosted">'+times[n].textContent+'</p>';}}else{if(printUser){op+='<p class="user">'+authors[n].textContent+'</p>';}
op+='<p class="tweet">'+tweets[n].textContent+'</p>';if(printTime){op+='<p class="timePosted">'+times[n].textContent+'</p>';}}}
if(showInteractionLinks){op+='<p class="interact"><a href="https://twitter.com/intent/'+'tweet?in_reply_to='+tids[n]+'" class="twitter_reply_icon"'+
(targetBlank?' target="_blank" rel="noopener">':'>')+'Reply</a><a href="https://twitter.com/intent/retweet?'+'tweet_id='+tids[n]+'" class="twitter_retweet_icon"'+
(targetBlank?' target="_blank" rel="noopener">':'>')+'Retweet</a>'+'<a href="https://twitter.com/intent/favorite?tweet_id='+
tids[n]+'" class="twitter_fav_icon"'+
(targetBlank?' target="_blank" rel="noopener">':'>')+'Favorite</a></p>';}
if(showImages&&images[n]!==undefined&&extractImageUrl(images[n])!==undefined){op+='<div class="media">'+'<img src="'+extractImageUrl(images[n])+'" alt="Image from tweet" />'+'</div>';}
if(showImages){arrayTweets.push(op);}else if(!showImages&&tweets[n].textContent.length){arrayTweets.push(op);}
n++;}}
handleTweets(arrayTweets);inProgress=false;if(queue.length>0){twitterFetcher.fetch(queue[0]);queue.splice(0,1);}}};window.__twttrf=twitterFetcher;window.twitterFetcher=twitterFetcher;return twitterFetcher;}));(function(arr){arr.forEach(function(item){if(item.hasOwnProperty('prepend')){return;}
Object.defineProperty(item,'prepend',{configurable:true,enumerable:true,writable:true,value:function prepend(){var argArr=Array.prototype.slice.call(arguments),docFrag=document.createDocumentFragment();argArr.forEach(function(argItem){var isNode=argItem instanceof Node;docFrag.appendChild(isNode?argItem:document.createTextNode(String(argItem)));});this.insertBefore(docFrag,this.firstChild);}});});})([Element.prototype,Document.prototype,DocumentFragment.prototype]);
});

var DynamicTwitterFeed = function (_MobileScrollers) {
  inherits(DynamicTwitterFeed, _MobileScrollers);

  function DynamicTwitterFeed(section) {
    classCallCheck(this, DynamicTwitterFeed);

    var _this = possibleConstructorReturn(this, (DynamicTwitterFeed.__proto__ || Object.getPrototypeOf(DynamicTwitterFeed)).call(this, section));

    _this.$el = jquery$1(section.el);
    _this.settings = section.data;
    _this.flickity = null;

    _this.$content = _this.$el.find(selectors.twitter.container);
    _this.$tweets = _this.$el.find(selectors.twitter.tweet);

    _this.$template = jquery$1(_this.settings.template);

    var onboarding = _this.settings.onboarding;
    var username = _this.settings.username;
    var retweets = _this.settings.retweets;
    var images = _this.settings.images;
    var locale = _this.settings.locale || 'en';

    _this.init(selectors.twitter.container, {
      cellSelector: selectors.twitter.tweet
    });

    if (onboarding || !username) {
      return possibleConstructorReturn(_this);
    }

    twitterFetcher_min.fetch({
      'profile': {
        'screenName': username
      },
      'maxTweets': 3,
      'enableLinks': true,
      'showUser': true,
      'showTime': true,
      'dataOnly': false,
      'useEmoji': true,
      'showImages': images,
      'showRetweet': retweets,
      'lang': locale,
      'customCallback': function customCallback(tweets) {
        return _this._renderTweets(tweets);
      },
      'showInteraction': false
    });
    return _this;
  }

  /**
   * Retrieve information about user who tweeted
   *
   * @param el
   * @returns {{$avatar: *, link: *, name, screenName}}
   * @private
   */


  createClass(DynamicTwitterFeed, [{
    key: '_extractAuthor',
    value: function _extractAuthor(el) {
      var $el = jquery$1(el);

      var link = $el.find('a').attr('href');
      var name = $el.find('[data-scribe="element:name"]').text();
      var screenName = $el.find('[data-scribe="element:screen_name"]').text();
      var $avatar = $el.find('img');

      return { $avatar: $avatar, link: link, name: name, screenName: screenName };
    }

    /**
     * Retrieve link to tweet, and when it was tweeted
     *
     * @param el
     * @returns {{link: *, postedAt: *}}
     * @private
     */

  }, {
    key: '_extractMeta',
    value: function _extractMeta(el) {
      var $el = jquery$1(el);

      var link = $el.find('a').attr('href');
      var postedAt = $el.text();

      return { link: link, postedAt: postedAt };
    }
  }, {
    key: '_renderTweets',
    value: function _renderTweets(tweets) {
      var _this2 = this;

      var tweetsLength = tweets.length;

      if (!tweets || !tweetsLength) return;

      var tweetsArray = [];

      tweets.forEach(function (tweet) {
        var $tweet = jquery$1(tweet);

        var $template = _this2.$template.clone();
        var authorInfo = _this2._extractAuthor($tweet[0]);
        var meta = _this2._extractMeta($tweet[2]);

        var content = $tweet[1];

        // Render header
        $template.find('.tweet-header').attr('href', authorInfo.link);

        $template.find('.tweet-header-image').html(authorInfo.$avatar);

        $template.find('.tweet-header-name').text(authorInfo.name);

        $template.find('.tweet-header-screenname').text(authorInfo.screenName);

        // Render content
        $template.find('.tweet-content').append($tweet[3] ? $tweet[3] : null).append(content);

        // Render footer
        $template.find('.tweet-footer').attr('href', meta.link).find('.tweet-footer-posted').text(meta.postedAt);

        tweetsArray.push($template);
      });

      // Lock content height to prevent the screen from jumping
      this.$content.css('min-height', this.$content.height());

      this.$tweets.fadeOut().promise().then(function () {
        _this2.destroyFlickity();
        _this2.$tweets.remove();

        _this2.$content.append(tweetsArray).css('min-height', '');

        _this2.$tweets = _this2.$el.find('[data-tweet-content]');
        _this2.initFlickity();
      });
    }
  }]);
  return DynamicTwitterFeed;
}(MobileScrollers);

var FeaturedProducts = function () {
  function FeaturedProducts(section) {
    classCallCheck(this, FeaturedProducts);

    this.section = section;
    this.cardsEl = this.section.el.querySelector('[data-cards]');
    this.productItems = [];

    if (!this.cardsEl) {
      return;
    }

    this.deckCase = new DeckCase(this.cardsEl);

    this.priceManager = new PriceManager(this.section.el);
    this.priceManager.updateAll();

    this.productItemEls = this.section.el.querySelectorAll(selectors.product.item.el);

    for (var i = 0; i < this.productItemEls.length; i += 1) {
      this.productItems.push(new ProductItem(this.productItemEls[i]));
    }
  }

  createClass(FeaturedProducts, [{
    key: 'onSectionUnload',
    value: function onSectionUnload() {
      if (this.deckCase) {
        this.deckCase.onSectionUnload();
      }

      for (var i = 0; i < this.productItems.length; i += 1) {
        this.productItems[i].unload();
      }
    }
  }]);
  return FeaturedProducts;
}();

var ImageWithTextOverlay = function () {
  function ImageWithTextOverlay(container) {
    classCallCheck(this, ImageWithTextOverlay);

    this.el = container.el.querySelector('[data-image-block]');
    this.image = this.el.querySelector('[data-image-block-image]');
    this.$image = jquery$1(this.image);
    this.content = this.el.querySelector('[data-image-block-content]');

    this.onResize = justDebounce$1(this._checkHeights, 15).bind(this);
    window.addEventListener('resize', this.onResize);

    this._checkHeights();
  }

  createClass(ImageWithTextOverlay, [{
    key: 'onSectionUnload',
    value: function onSectionUnload() {
      window.removeEventListener('resize', this.onResize);
    }
  }, {
    key: '_checkHeights',
    value: function _checkHeights() {
      var imageHeight = this.image.getBoundingClientRect().height;
      var contentHeight = this.content.getBoundingClientRect().height;

      if (contentHeight === imageHeight) {
        return;
      }

      if (contentHeight > imageHeight) {
        this.$image.css('min-height', contentHeight);
      } else {
        this.$image.css('min-height', '');
      }
    }
  }]);
  return ImageWithTextOverlay;
}();

/*!
 * pxs-map v2.0.0
 * (c) 2018 undefined
 */

var justDebounce$2 = debounce$2;

function debounce$2(fn, delay, at_start, guarantee) {
  var timeout;
  var args;
  var self;

  return function debounced() {
    self = this;
    args = Array.prototype.slice.call(arguments);

    if (timeout && (at_start || guarantee)) {
      return;
    } else if (!at_start) {
      clear();

      timeout = setTimeout(run, delay);
      return timeout;
    }

    timeout = setTimeout(clear, delay);
    fn.apply(self, args);

    function run() {
      clear();
      fn.apply(self, args);
    }

    function clear() {
      clearTimeout(timeout);
      timeout = null;
    }
  };
}

var classCallCheck$3 = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass$3 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var PxsMap = function () {
  function PxsMap(section) {
    var _this = this;

    classCallCheck$3(this, PxsMap);

    this.$el = jquery$1('[data-map]', section.el);
    this.settings = section.data;
    this.map = null;
    this.center = null;

    this.$container = jquery$1('[data-map-container]', this.$el);

    // Scale so range is 12 ~ 17, rather than 1 to 6
    this.zoom = 11 + parseInt(this.settings.zoom, 10);
    if (isNaN(this.zoom)) this.zoom = 13;

    this.colors = null;

    if (this.settings.colors) {
      this.colors = this.settings.colors;
    }

    this.resize = this.resize.bind(this);

    this.address = this.settings.address;
    this.apiKey = this.settings.api_key;

    if (this.apiKey) {
      if (window.googleMaps === undefined) {
        window.googleMaps = true;

        jquery$1.getScript('https://maps.googleapis.com/maps/api/js?key=' + this.apiKey).done(function () {
          _this._createMap();
        }).fail(function (status) {
          console.error(status);
        });
      } else {
        this._createMap();
      }
    }
  }

  createClass$3(PxsMap, [{
    key: '_createMap',
    value: function _createMap() {
      var _this2 = this;

      return this.geolocate().done(function (results) {
        _this2.map = new google.maps.Map(_this2.$container.get(0), {
          center: results[0].geometry.location,
          clickableIcons: false,
          disableDefaultUI: true,
          disableDoubleClickZoom: true,
          gestureHandling: 'none',
          keyboardShortcuts: false,
          maxZoom: _this2.zoom,
          minZoom: _this2.zoom,
          scrollWheel: false,
          styles: _this2._getMapStyles(),
          zoom: _this2.zoom,
          zoomControl: false
        });
        _this2.center = _this2.map.getCenter();
        _this2.map.panBy(0, 0);

        new google.maps.Marker({
          clickable: false,
          map: _this2.map,
          position: _this2.center
        });

        google.maps.event.addDomListener(window, 'resize', justDebounce$2(_this2.resize, 250, true, true));
      }).fail(function (status) {
        var usageLimits = 'https://developers.google.com/maps/faq#usagelimits';
        var errorMessage = void 0;

        switch (status) {
          case 'ZERO_RESULTS':
            errorMessage = '<p>Unable to find the address:</p> ' + _this2.address;
            break;
          case 'OVER_QUERY_LIMIT':
            errorMessage = '\n              <p>Unable to load Google Maps, you have reached your usage limit.</p>\n              <p>\n                Please visit\n                <a href="' + usageLimits + '" target="_blank">' + usageLimits + '</a>\n                for more details.\n              </p>\n            ';
            break;
          default:
            errorMessage = 'Unable to load Google Maps.';
            break;
        }

        _this2.displayErrorInThemeEditor(errorMessage, status);
      });
    }
  }, {
    key: 'geolocate',
    value: function geolocate() {
      var deferred = jquery$1.Deferred();
      var geocoder = new google.maps.Geocoder();

      geocoder.geocode({ address: this.address }, function (results, status) {
        if (status !== google.maps.GeocoderStatus.OK) {
          deferred.reject(status);
        }

        deferred.resolve(results);
      });

      return deferred;
    }
  }, {
    key: 'resize',
    value: function resize() {
      if (this.map) {
        google.maps.event.trigger(this.map, 'resize');
        this.map.setCenter(this.center);
        this.map.panBy(0, 100);
      }
    }
  }, {
    key: 'onSectionUnload',
    value: function onSectionUnload() {
      if (this.map) {
        google.maps.event.clearListeners(this.map, 'resize');
      }
    }
  }, {
    key: '_getMapStyles',
    value: function _getMapStyles() {
      if (!this.colors) {
        return;
      }

      return [{ elementType: 'geometry', stylers: [{ color: this.colors.e }] }, { elementType: 'labels.icon', stylers: [{ visibility: 'off' }] }, { elementType: 'labels.text.fill', stylers: [{ color: this.colors.a }] }, { elementType: 'labels.text.stroke', stylers: [{ color: this.colors.e }] }, { featureType: 'administrative', elementType: 'geometry', stylers: [{ visibility: 'off' }] }, { featureType: 'administrative.country', stylers: [{ visibility: 'off' }] }, { featureType: 'administrative.land_parcel', stylers: [{ visibility: 'off' }] }, { featureType: 'administrative.neighborhood', stylers: [{ visibility: 'off' }] }, { featureType: 'administrative.locality', stylers: [{ visibility: 'off' }] }, { featureType: 'poi', stylers: [{ visibility: 'off' }] }, { featureType: 'road', elementType: 'geometry.fill', stylers: [{ color: this.colors.d }] }, { featureType: 'road', elementType: 'labels.icon', stylers: [{ visibility: 'off' }] }, { featureType: 'road.arterial', elementType: 'geometry', stylers: [{ color: this.colors.c }] }, { featureType: 'road.highway', elementType: 'geometry', stylers: [{ color: this.colors.b }] }, { featureType: 'road.highway.controlled_access', stylers: [{ visibility: 'off' }] }, { featureType: 'road.local', elementType: 'labels.text.fill', stylers: [{ color: this.colors.b }] }, { featureType: 'road.local', elementType: 'labels.text.stroke', stylers: [{ color: this.colors.e }] }, { featureType: 'transit', stylers: [{ visibility: 'off' }] }, { featureType: 'water', elementType: 'geometry', stylers: [{ color: this.colors.f }] }];
    }
  }, {
    key: 'displayErrorInThemeEditor',
    value: function displayErrorInThemeEditor(errorMessage) {
      var isThemeEditor = window.Shopify && window.Shopify.designMode;

      if (!isThemeEditor) {
        return;
      }

      this.$container.html('<div class="map-error-message">' + errorMessage + '</div>');
    }
  }]);
  return PxsMap;
}();

/*!
 * pxs-announcement-bar v0.0.0
 * (c) 2018 Pixel Union
 */

/**
 * Trigger a custom event.
 *
 * Note: this approach is deprecated, but still required to support older
 * browsers such as IE 10.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
 * @param {*} el The element to trigger the event on.
 * @param {*} name The event name.
 * @returns {Boolean} True if the event was canceled.
 */
function trigger$1(el, name) {
  var event = document.createEvent('Event');
  event.initEvent(name, true, true);
  return !el.dispatchEvent(event);
}

var classCallCheck$4 = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass$4 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var PxsAnnouncementBar = function () {
  function PxsAnnouncementBar(section) {
    classCallCheck$4(this, PxsAnnouncementBar);

    this.el = section.el;
    this.scrolledPast = false;

    this._onScroll = this._onScroll.bind(this);
    this._bindEvents();
  }

  createClass$4(PxsAnnouncementBar, [{
    key: 'onSectionUnload',
    value: function onSectionUnload() {
      window.removeEventListener('scroll', this._onScroll);
    }
  }, {
    key: '_bindEvents',
    value: function _bindEvents() {
      window.addEventListener('scroll', this._onScroll);
    }
  }, {
    key: '_onScroll',
    value: function _onScroll() {
      var _window = window,
          pageYOffset = _window.pageYOffset;

      var _el$getBoundingClient = this.el.getBoundingClientRect(),
          height = _el$getBoundingClient.height;

      var scrolledPast = pageYOffset > height;

      // Trigger a hide event when viewport has scrolled past
      if (!this.scrolledPast && scrolledPast) {
        this.scrolledPast = true;
        trigger$1(this.el, 'pxs-ab-hide');
      }

      // Trigger a show announcement bar is back in view
      if (this.scrolledPast && !scrolledPast) {
        this.scrolledPast = false;
        trigger$1(this.el, 'pxs-ab-show');
      }
    }
  }]);
  return PxsAnnouncementBar;
}();

var StaticAnnouncementBar = function () {
  function StaticAnnouncementBar(section) {
    classCallCheck(this, StaticAnnouncementBar);

    // Load in PxsAnnouncementBar to future proof dependency updates
    this.announcementBar = new PxsAnnouncementBar(section);
    jquery$1(window).trigger('announcement-bar');
  }

  createClass(StaticAnnouncementBar, [{
    key: 'onSectionUnload',
    value: function onSectionUnload() {
      this.announcementBar.onSectionUnload();
    }
  }]);
  return StaticAnnouncementBar;
}();

var StaticCart = function () {
  function StaticCart(section) {
    classCallCheck(this, StaticCart);

    this.el = section.el;
    this.moneyFormat = section.data.money_format;
    this.shipping = section.data.shipping;
    this.quantityText = section.data.quantity_text;
    this.cartEl = this.el.querySelector('[data-cart]');

    this._init();
  }

  createClass(StaticCart, [{
    key: '_init',
    value: function _init() {
      this.cart = new Cart(this.cartEl, {
        moneyFormat: this.moneyFormat,
        shipping: this.shipping
      });
    }
  }, {
    key: 'onSectionUnload',
    value: function onSectionUnload() {
      this.cart.unload();
    }
  }]);
  return StaticCart;
}();

/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.14.3
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce$3 = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var css = getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize$2(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? html['offset' + axis] + computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')] + computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')] : 0);
}

function getWindowSizes() {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize$2('Height', body, html, computedStyle),
    width: getSize$2('Width', body, html, computedStyle)
  };
}

var classCallCheck$5 = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass$5 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty$1 = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends$1 = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends$1({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes() : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && parent.nodeName === 'HTML') {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  return isFixed(getParentNode(element));
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  boundaries.left += padding;
  boundaries.top += padding;
  boundaries.right -= padding;
  boundaries.bottom -= padding;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends$1({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var styles = getComputedStyle(element);
  var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
  var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update$2() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroy the popper
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger onUpdate callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  // Avoid blurry text by using full pixel integers.
  // For pixel-perfect positioning, top/bottom prefers rounded
  // values, while left/right prefers floored values.
  var offsets = {
    left: Math.floor(popper.left),
    top: Math.round(popper.top),
    bottom: Math.round(popper.bottom),
    right: Math.floor(popper.right)
  };

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    top = -offsetParentRect.height + offsets.bottom;
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    left = -offsetParentRect.width + offsets.right;
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends$1({}, attributes, data.attributes);
  data.styles = _extends$1({}, styles, data.styles);
  data.arrowStyles = _extends$1({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjuction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty$1(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty$1(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-right` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends$1({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty$1({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty$1({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends$1({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty$1({}, side, reference[side]),
      end: defineProperty$1({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends$1({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unitless, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the height.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * An scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper this makes sure the popper has always a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier, can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near eachothers
   * without leaving any gap between the two. Expecially useful when the arrow is
   * enabled and you want to assure it to point to its reference element.
   * It cares only about the first axis, you can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjuction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations).
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position,
     * the popper will never be placed outside of the defined boundaries
     * (except if keepTogether is enabled)
     */
    boundariesElement: 'viewport'
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define you own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the informations used by Popper.js
 * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overriden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass as 3rd argument an object with the same
 * structure of this object, example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated, this callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Create a new Popper.js instance
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper.
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck$5(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce$3(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends$1({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends$1({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends$1({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends$1({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass$5(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update$2.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedule an update, it will run on the next UI update available
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

var Popover$2 = function () {
  function Popover() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, Popover);

    this.content = options.content;
    this.trigger = options.trigger;
    this.perfectCenter = options.perfectCenter || false;
    this.$content = jquery$1(this.content);
    this.$trigger = jquery$1(this.trigger);
    this.$window = jquery$1(window);
    this.$body = jquery$1(document.body);
    this.popper = null;

    this.onPopoverOpen = this._onPopoverOpen.bind(this);
    this.onPopoverClose = this._onPopoverClose.bind(this);
    this.toggle = this._togglePopover.bind(this);
    this.computeStyle = this._computeStyle.bind(this);
    this.onCreate = this._onCreate.bind(this);

    var defaultCallbacks = {
      onShow: function onShow() {},
      onHide: function onHide() {}
    };

    this.callbacks = jquery$1.extend({}, defaultCallbacks, options.callbacks);

    this.defaultOptions = {
      placement: 'top',
      modifiers: {
        preventOverflow: {
          order: 700,
          enabled: true,
          priority: ['top', 'bottom', 'right', 'left'],
          boundariesElement: 'window'
        },
        computeStyle: {
          order: 750,
          gpuAcceleration: false,
          fn: this.computeStyle,
          x: 'top'
        },
        flip: {
          enabled: false
        },
        arrow: {
          enabled: false
        },
        hide: {
          enabled: false
        },
        keepTogether: {
          enabled: false
        }
      },
      onCreate: this.onCreate
    };

    this.options = jquery$1.extend(true, {}, this.defaultOptions, options.popperOptions);

    this._initPopover();
    this._bindEvents();
  }

  createClass(Popover, [{
    key: 'destroy',
    value: function destroy() {
      this._unbindEvents();
      this.hidePopover();
      this.popper.destroy();
      this.popper = null;

      this.$content.removeClass(classes.popover.created).css({
        height: '',
        top: '',
        right: '',
        bottom: '',
        left: '',
        willChange: ''
      });
    }
  }, {
    key: 'update',
    value: function update() {
      if (!this.popper) {
        return;
      }

      this.popper.update();
    }
  }, {
    key: '_initPopover',
    value: function _initPopover() {
      this.popper = new Popper(this.trigger, this.content, this.options);
    }
  }, {
    key: '_togglePopover',
    value: function _togglePopover() {
      if (this.$trigger.parent().hasClass(classes.popover.buttonActive)) {
        this.hidePopover();
      } else {
        this._showPopover();
      }
    }

    /**
     * Create and open a Popper
     */

  }, {
    key: '_showPopover',
    value: function _showPopover() {
      var _this = this;

      this.$window.trigger('popover-open', [this.trigger]);
      this.$body.addClass(classes.popover.active);
      this.callbacks.onShow();

      this.$trigger.parent().addClass(classes.popover.buttonActive).one('trend', function () {
        _this.popper.update();
        _this.$trigger.ariaExpanded(true);
        _this.$content.ariaHidden(false).revealer('show').one('revealer-show', function () {
          return _this.popper.update();
        });
      });
    }

    /**
     * Close and remove Popper
     */

  }, {
    key: 'hidePopover',
    value: function hidePopover() {
      var _this2 = this;

      this.callbacks.onHide();

      this.$content.removeClass(classes.popover.scrolls).ariaHidden(true).revealer('hide').one('revealer-animating', function () {
        _this2.$body.removeClass(classes.popover.active);
        _this2.$trigger.ariaExpanded(false).parent().removeClass(classes.popover.buttonActive);
        _this2.$window.trigger('popover-close', [_this2.trigger]);
      });
    }
  }, {
    key: '_bindEvents',
    value: function _bindEvents() {
      this.trigger.addEventListener('click', this.toggle);
      this.$window.on('popover-open', this.onPopoverOpen);
      this.$window.on('popover-close', this.onPopoverClose);
    }
  }, {
    key: '_unbindEvents',
    value: function _unbindEvents() {
      this.trigger.removeEventListener('click', this.toggle);
      this.$window.off('popover-open', this.onPopoverOpen);
      this.$window.off('popover-close', this.onPopoverClose);
    }
  }, {
    key: '_onCreate',
    value: function _onCreate() {
      this.$content.addClass(classes.popover.created);
    }

    /**
     * Get style information from Popover for placement logic, and visual enhancement
     *
     * @param baseHeight
     * @returns {{height: number, innerHeight: number, minLeft: Number}}
     * @private
     */

  }, {
    key: '_popoverInfo',
    value: function _popoverInfo(baseHeight) {
      var _getComputedStyle = getComputedStyle(this.content),
          left = _getComputedStyle.left,
          paddingTop = _getComputedStyle.paddingTop,
          paddingBottom = _getComputedStyle.paddingBottom,
          marginTop = _getComputedStyle.marginTop,
          marginBottom = _getComputedStyle.marginBottom;

      var minLeft = parseInt(left, 10);
      var height = baseHeight - parseInt(marginBottom, 10) - parseInt(marginTop, 10);
      var innerHeight = height - parseInt(paddingBottom, 10) - parseInt(paddingTop, 10);

      return {
        height: height,
        innerHeight: innerHeight,
        minLeft: !isNaN(minLeft) ? minLeft : 0
      };
    }

    /**
     * Determine if a Popover's contents exceeds its possible height, and apply a scrolling class
     *
     * @param innerHeight
     * @returns {boolean}
     * @private
     */

  }, {
    key: '_popoverScrolls',
    value: function _popoverScrolls(innerHeight) {
      var $children = jquery$1(this.content.querySelector('div')).children();

      var childrenHeight = 0;
      $children.each(function (i, el) {
        childrenHeight += jquery$1(el).outerHeight(true);
      });

      return Math.ceil(childrenHeight) > innerHeight;
    }
  }, {
    key: '_perfectCenter',
    value: function _perfectCenter() {
      return (this.$window.width() - this.$content.outerWidth()) / 2;
    }

    /**
     * Sets Popper placement
     *
     * @param data
     * @returns {*}
     * @private
     */

  }, {
    key: '_computeStyle',
    value: function _computeStyle(data) {
      if (!data) {
        return {};
      }

      var popper = data.offsets.popper;

      var _popoverInfo2 = this._popoverInfo(popper.height),
          height = _popoverInfo2.height,
          innerHeight = _popoverInfo2.innerHeight,
          minLeft = _popoverInfo2.minLeft;

      var popoverScrolls = this._popoverScrolls(innerHeight);

      // If needing to perfectly center, use custom logic
      // Popper will attach to center by the trigger, but doesn't account for translateX
      var left = this.perfectCenter ? Math.round(this._perfectCenter()) : Math.max(Math.round(popper.left), minLeft);
      var top = Math.round(popper.top);

      this.$content.toggleClass(classes.popover.scrolls, popoverScrolls);

      var styles = {
        position: popper.position,
        left: left,
        top: top,
        height: height
      };

      data.styles = jquery$1.extend(true, {}, data.styles, styles);

      return data;
    }

    /**
     * Toggle popover trigger as hidden if other popovers open
     *
     * @param event
     * @param trigger
     * @private
     */

  }, {
    key: '_onPopoverOpen',
    value: function _onPopoverOpen(event, trigger) {
      if (this.trigger === trigger) {
        return;
      }

      this.$trigger.parent().addClass(classes.popover.buttonHidden);
    }

    /**
     * Toggle popover trigger as visible if other popovers closed
     *
     * @param event
     * @param trigger
     * @private
     */

  }, {
    key: '_onPopoverClose',
    value: function _onPopoverClose(event, trigger) {
      if (this.trigger === trigger) {
        return;
      }

      this.$trigger.parent().removeClass(classes.popover.buttonHidden);
    }
  }]);
  return Popover;
}();

var StaticCollectionPages = function () {
  function StaticCollectionPages(section) {
    classCallCheck(this, StaticCollectionPages);

    this.el = section.el;
    this.$el = jquery$1(this.el);
    this.$document = jquery$1(document);
    this.$mainHeader = jquery$1(selectors.header.main);

    this.filterGroups = this.el.querySelectorAll('.popover-list-filter-groups');
    this.scrollHinters = [];

    this.productItemEls = this.el.querySelectorAll(selectors.product.item.el);
    this.productItems = [];

    this.filterPopover = null;
    this.sortByPopover = null;
    this.events = null;

    this.utilityBars = {
      $utils: this.$el.find(selectors.collectionUtils.utils),
      $narrow: this.$el.find(selectors.collectionUtils.narrow),
      $wide: this.$el.find(selectors.collectionUtils.wide)
    };

    this.$filterItem = this.$el.find(selectors.collectionPopover.filterItem);
    this.$filterItemAdvanced = this.$el.find(selectors.collectionPopover.filterItemAdvanced);
    this.$sortTriggerButton = this.$el.find(selectors.collectionPopover.sortByItem);

    this._onBreakpointChange = this._onBreakpointChange.bind(this);
    layout.onBreakpointChange(this._onBreakpointChange);

    this.onPopoverShow = this._onPopoverShow.bind(this);
    this.onPopoverHide = this._onPopoverHide.bind(this);
    this.onFiltersShow = this._onFiltersShow.bind(this);

    this._init();
  }

  createClass(StaticCollectionPages, [{
    key: 'onSectionUnload',
    value: function onSectionUnload() {
      this.$document.off('action-bar:toggle');
      layout.offBreakpointChange(this._onBreakpointChange);

      if (this.events) {
        this.events.forEach(function ($el) {
          return $el.off('.collection');
        });
      }

      if (this.filterPopover) {
        this.filterPopover.destroy();
      }

      if (this.sortByPopover) {
        this.sortByPopover.destroy();
      }

      for (var i = 0; i < this.productItems.length; i += 1) {
        this.productItems[i].unload();
      }

      this.scrollHinters.forEach(function (hinter) {
        hinter.unload();
      });
    }
  }, {
    key: '_init',
    value: function _init() {
      this._moveUtilityBar();
      this._bindEvents();
      this._initPopovers();
      this._addScrollHinters();
      this._setSortByQueryParameters();

      for (var i = 0; i < this.productItemEls.length; i += 1) {
        this.productItems.push(new ProductItem(this.productItemEls[i]));
      }
    }
  }, {
    key: '_bindEvents',
    value: function _bindEvents() {
      var _this = this;

      this.$document.on('action-bar:toggle', function () {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _this._toggleUtilityBar(data.hide);
      });

      this.events = [this.$filterItem.on('click.collection', function (event) {
        return _this._toggleTag(event.currentTarget);
      }), this.$filterItemAdvanced.on('click.collection', function (event) {
        return _this._advancedTags(event);
      }), this.$sortTriggerButton.on('click.collection', function (event) {
        return _this._changeSortingButton(event.currentTarget);
      })];
    }
  }, {
    key: '_onBreakpointChange',
    value: function _onBreakpointChange() {
      if (layout.crossesThreshold()) {
        this._initPopovers();
      }

      this._moveUtilityBar();
    }

    /**
     * Initiate Popovers
     *
     * @private
     */

  }, {
    key: '_initPopovers',
    value: function _initPopovers() {
      if (!this.utilityBars.$utils.length) {
        return;
      }

      var popperOptions = {};
      var isMobile = layout.isBreakpoint('XS') || layout.isBreakpoint('S');

      // Popovers assumes content is top oriented by default
      if (!isMobile) {
        popperOptions = {
          placement: 'bottom',
          modifiers: {
            computeStyle: {
              x: 'bottom'
            }
          }
        };
      }

      var filterTrigger = this.el.querySelector(selectors.popover.triggers.collectionFilter);
      var filterContent = this.el.querySelector(selectors.popover.contents.collectionFilter);

      var sortByTrigger = this.el.querySelector(selectors.popover.triggers.collectionSortBy);
      var sortByContent = this.el.querySelector(selectors.popover.contents.collectionSortBy);

      if (filterTrigger && filterContent) {
        if (this.filterPopover) {
          this.filterPopover.destroy();
        }

        var popoverOptions = {
          popperOptions: popperOptions,
          callbacks: {
            onShow: this.onFiltersShow,
            onHide: this.onPopoverHide
          },
          content: filterContent,
          trigger: filterTrigger,
          perfectCenter: isMobile
        };

        this.filterPopover = new Popover$2(popoverOptions);
      }

      if (sortByTrigger && sortByContent) {
        if (this.sortByPopover) {
          this.sortByPopover.destroy();
        }
        var _popoverOptions = {
          popperOptions: popperOptions,
          callbacks: {
            onShow: this.onPopoverShow,
            onHide: this.onPopoverHide
          },
          content: sortByContent,
          trigger: sortByTrigger,
          perfectCenter: isMobile
        };

        this.sortByPopover = new Popover$2(_popoverOptions);
      }
    }
  }, {
    key: '_onPopoverShow',
    value: function _onPopoverShow() {
      var _this2 = this;

      this.$mainHeader.addClass(classes.popover.hideHeader).one('trend', function () {
        if (_this2.filterPopover) {
          _this2.filterPopover.update();
        }

        if (_this2.sortByPopover) {
          _this2.sortByPopover.update();
        }
      });
    }
  }, {
    key: '_onFiltersShow',
    value: function _onFiltersShow() {
      this.scrollHinters.forEach(function (hinter) {
        hinter.checkScroll();
      });

      this._onPopoverShow();
    }
  }, {
    key: '_onPopoverHide',
    value: function _onPopoverHide() {
      this.$mainHeader.removeClass(classes.popover.hideHeader);
    }
  }, {
    key: '_addScrollHinters',
    value: function _addScrollHinters() {
      for (var i = 0; i < this.filterGroups.length; i += 1) {
        this.scrollHinters.push(new ScrollHinter(this.filterGroups[i]));
      }
    }

    /**
     * Move utility bar in the DOM as needed for layout
     *
     * @private
     */

  }, {
    key: '_moveUtilityBar',
    value: function _moveUtilityBar() {
      if (!this.utilityBars.$utils.length) {
        return;
      }

      if (layout.isBreakpoint('L') || layout.isBreakpoint('XL')) {
        if (jquery$1.contains(this.utilityBars.$narrow[0], this.utilityBars.$utils[0])) {
          return;
        }

        var $utils = this.utilityBars.$utils.detach();
        this.utilityBars.$narrow.append($utils);
        this._toggleUtilityBar(false);
      } else {
        if (jquery$1.contains(this.utilityBars.$wide[0], this.utilityBars.$utils[0])) {
          return;
        }

        var _$utils = this.utilityBars.$utils.detach();
        this.utilityBars.$wide.append(_$utils);
        this._toggleUtilityBar(false);
      }
    }

    /**
     * Show or hide utility bar
     *
     * @param state
     * @private
     */

  }, {
    key: '_toggleUtilityBar',
    value: function _toggleUtilityBar(state) {
      this.utilityBars.$utils.toggleClass('hidden', state);

      if (this.filterPopover) {
        this.filterPopover.hidePopover();
      }

      if (this.sortByPopover) {
        this.sortByPopover.hidePopover();
      }
    }

    /**
     * Make Shopify aware of relevent collection search info
     *  - tag
     *  - vendor
     *  - pagination
     *  - sorting criteria
     *
     * @private
     */

  }, {
    key: '_setSortByQueryParameters',
    value: function _setSortByQueryParameters() {
      Shopify.queryParams = {};
      if (location.search.length) {
        for (var i = 0, aCouples = location.search.substr(1).split('&'); i < aCouples.length; i++) {
          var aKeyValue = aCouples[i].split('=');
          // Reset the page number when we apply (i.e. don't add it to params)
          if (aKeyValue.length > 1 && aKeyValue[0] !== 'page') {
            Shopify.queryParams[decodeURIComponent(aKeyValue[0])] = decodeURIComponent(aKeyValue[1]);
          }
        }
      }
    }

    /**
     * Update buttons styles when changing collection sorting
     *
     * @param target
     * @private
     */

  }, {
    key: '_changeSortingButton',
    value: function _changeSortingButton(target) {
      jquery$1(target).parent().addClass(classes.popover.listItemActive).siblings('.' + classes.popover.listItemActive).removeClass(classes.popover.listItemActive);

      this._changeSorting(target);
    }

    /**
     * Change sorting of collection
     *
     * @param target
     * @private
     */

  }, {
    key: '_changeSorting',
    value: function _changeSorting(target) {
      var $target = jquery$1(target);

      Shopify.queryParams.sort_by = $target.val();
      location.search = jQuery.param(Shopify.queryParams).replace(/\+/g, '%20');
    }

    /**
     * Toggle tag active state before page transition
     *
     * @param target
     * @private
     */

  }, {
    key: '_toggleTag',
    value: function _toggleTag(target) {
      jquery$1(target).parent().addClass(classes.popover.listItemActive).siblings('.' + classes.popover.listItemActive).removeClass(classes.popover.listItemActive);
    }
  }, {
    key: '_advancedTags',
    value: function _advancedTags(event) {
      var target = event.currentTarget;
      var $parent = jquery$1(target).parent();

      var tagGroup = $parent.attr('data-group');
      var tagHandle = $parent.attr('data-handle');
      var $activeGroup = jquery$1('.' + classes.popover.listItemActive + '[data-group=' + tagGroup + ']');

      // If item is active, perform as normal
      // If there are there no active items in group, perform as normal
      if ($parent.hasClass(classes.popover.listItemActive) || !$activeGroup.length) {
        return this._toggleTag(target);
      }

      // Item is not active, and there are no items active in group
      event.preventDefault();
      this._toggleTag(target);

      location.href = location.href
      // swap tag
      .replace($activeGroup.attr('data-handle'), tagHandle)
      // go back to page 1
      .replace(/(&page=\d+)|(page=\d+&)|(\?page=\d+$)/, '');
    }
  }]);
  return StaticCollectionPages;
}();

var StaticFaq = function () {
  function StaticFaq(section) {
    classCallCheck(this, StaticFaq);

    this.faq = section.el ? new RichText(section.el, 'accordion') : false;
  }

  createClass(StaticFaq, [{
    key: 'onSectionUnload',
    value: function onSectionUnload() {
      if (this.faq) {
        this.faq.unload();
      }
    }
  }, {
    key: 'onSectionBlockSelect',
    value: function onSectionBlockSelect(block) {
      var $trigger = jquery$1(block.el);

      if (!$trigger.hasClass('active')) {
        $trigger.trigger('click');
      }
    }
  }]);
  return StaticFaq;
}();

var StaticGiftCard = function () {
  function StaticGiftCard(section) {
    var _this = this;

    classCallCheck(this, StaticGiftCard);

    var $scripts = jquery$1('[data-scripts]');
    var qrCodeEl = section.el.querySelector('[data-qrcode]');

    if (!qrCodeEl) return;

    this.selectText = this._selectText.bind(this);
    this.qrCodeText = section.el.querySelector('[data-select-code]');

    script($scripts.data('shopify-qrcode'), function () {
      var qrCode = qrCodeEl.getAttribute('data-qrcode');

      _this.qrCode = new QRCode(qrCodeEl, {
        text: qrCode,
        width: 120,
        height: 120
      });
    });

    this.qrCodeText.addEventListener('click', this.selectText);
  }

  createClass(StaticGiftCard, [{
    key: 'onSectionUnload',
    value: function onSectionUnload() {
      this.qrCodeText.removeEventListener('click', this.selectText);
      this.qrCode = null;
    }
  }, {
    key: '_selectText',
    value: function _selectText() {
      var range = '';

      if (document.body.createTextRange) {
        // ms method
        range = document.body.createTextRange();
        range.moveToElementText(this.qrCodeText);
        range.select();
      } else if (window.getSelection) {
        // moz, opera, webkit method
        var selection = window.getSelection();
        range = document.createRange();
        range.selectNodeContents(this.qrCodeText);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  }]);
  return StaticGiftCard;
}();

var HeaderCart = function () {
  function HeaderCart(options) {
    classCallCheck(this, HeaderCart);

    var defaults = {
      $mainHeader: null,
      $drawer: null,
      currency: '',
      isMobile: function isMobile() {}
    };

    this.config = jquery$1.extend({}, defaults, options);
    this.isMobile = this.config.isMobile;

    this.$drawer = this.config.$drawer;
    this.$mainHeader = this.config.$mainHeader;
    this.mainHeader = this.$mainHeader[0];

    this.afterOpen = this._afterOpen.bind(this);
    this.afterClose = this._afterClose.bind(this);

    this.$window = jquery$1(window);
    this.$document = jquery$1(document);

    this.cart = new Cart(this.$drawer[0].querySelector(selectors.cart.el), {
      moneyFormat: this.config.currency.money_format
    });

    this._bindEvents();
  }

  createClass(HeaderCart, [{
    key: 'unload',
    value: function unload() {
      this.cart.unload();
    }
  }, {
    key: '_bindEvents',
    value: function _bindEvents() {
      var _this = this;

      this.$window.on(events.cart.loadingFinish + '.header-cart', function () {
        return _this._toggleCartHeight(true);
      });
      this.$window.on(events.cart.item.removingFinished + '.header-cart', function () {
        return _this._repositionCart();
      });
    }
  }, {
    key: '_toggleCartHeight',
    value: function _toggleCartHeight() {
      var on = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (force || this.isMobile() && this.$drawer.hasClass('visible')) {
        this.$drawer.css('height', on ? this.$drawer.outerHeight() : '');
      }
    }
  }, {
    key: '_repositionCart',
    value: function _repositionCart() {
      if (!this.isMobile() || !this.$drawer.hasClass('visible')) {
        return;
      }

      var drawerHeight = this.$drawer.find(selectors.cart.el).outerHeight();
      var headerRect = this.mainHeader.getBoundingClientRect();

      // Calculate relative offsets
      var fromBottom = drawerHeight;
      var fromTop = window.innerHeight - (headerRect.height + drawerHeight);

      // Get offset types from existing _openHeader action
      var offsetType = this.$mainHeader.data('offset-type');
      var offset = offsetType === 'top' ? fromTop : fromBottom;

      // Move header to new position
      this.$mainHeader.css(offsetType, offset);

      // Set height of drawer to height of new contents
      this.$drawer.css('height', drawerHeight);
    }
  }, {
    key: '_afterClose',
    value: function _afterClose() {
      this._toggleCartHeight(false, true);
      this.$drawer.off('click.header-cart');
    }
  }, {
    key: '_afterOpen',
    value: function _afterOpen() {
      var _this2 = this;

      this.$drawer.on('click.header-cart', selectors.cart.expand, function (event) {
        var $target = jquery$1(event.currentTarget);
        _this2._toggleCartHeight($target.hasClass(classes.cart.expandable.expanded));
      });
    }
  }]);
  return HeaderCart;
}();

var FeaturesList = function () {
  function FeaturesList(container) {
    classCallCheck(this, FeaturesList);

    this.features = container.el.querySelector('[data-features-list-items]');
    this.flickity = null;

    this._onBreakpointChange = this._onBreakpointChange.bind(this);
    layout.onBreakpointChange(this._onBreakpointChange);

    this._initFlickity();
  }

  createClass(FeaturesList, [{
    key: '_initFlickity',
    value: function _initFlickity() {
      if (!layout.isBreakpoint('XS') && !layout.isBreakpoint('S')) {
        return this._destroyFlickity();
      }

      if (this.flickity) {
        return;
      }

      this.flickity = new js$1(this.features, {
        cellAlign: 'left',
        contain: true,
        freeScroll: true,
        prevNextButtons: false,
        pageDots: false
      });
    }
  }, {
    key: '_destroyFlickity',
    value: function _destroyFlickity() {
      if (!this.flickity) {
        return;
      }

      this.flickity.destroy();
      this.flickity = null;
    }
  }, {
    key: '_onBreakpointChange',
    value: function _onBreakpointChange() {
      this._initFlickity();
    }
  }, {
    key: 'onSectionUnload',
    value: function onSectionUnload() {
      this._destroyFlickity();
    }
  }]);
  return FeaturesList;
}();

var VideoWithText = function () {
  function VideoWithText(container) {
    classCallCheck(this, VideoWithText);

    this.el = container.el;
    this.videoEl = this.el.querySelector(selectors.videoBlock.videoEl);

    this.playButton = this.videoEl.querySelector(selectors.videoBlock.playButton);
    this.video = this.videoEl.querySelector('iframe');

    this.$blockingLayer = jquery$1(this.videoEl.querySelector(selectors.videoBlock.blockingLayer));

    this.playVideo = this._playVideo.bind(this);
    this.onVideoLoad = this._onVideoLoad.bind(this);

    this._bindEvents();
  }

  createClass(VideoWithText, [{
    key: 'onSectionUnload',
    value: function onSectionUnload() {
      this.video.removeEventListener('load', this.onVideoLoad);

      if (this.playButton) {
        this.playButton.removeEventListener('click', this.playVideo);
      }
    }
  }, {
    key: '_bindEvents',
    value: function _bindEvents() {
      this.video.addEventListener('load', this.onVideoLoad);

      if (this.playButton) {
        this.playButton.addEventListener('click', this.playVideo);
      }
    }
  }, {
    key: '_playVideo',
    value: function _playVideo() {
      var src = this.video.getAttribute('src');
      var newSrc = src + '&autoplay=1';

      this.playButton.classList.add('loading');
      this.playButton.setAttribute('disabled', '');
      this.video.setAttribute('src', newSrc);
    }
  }, {
    key: '_onVideoLoad',
    value: function _onVideoLoad() {
      var _this = this;

      if (this.video.getAttribute('src').indexOf('autoplay') === -1) {
        return;
      }

      setTimeout(function () {
        _this.$blockingLayer.addClass('hidden').one('trend', function () {
          _this.$blockingLayer.addClass('disabled');
        });
      }, 600);
    }
  }]);
  return VideoWithText;
}();

var ShareBlock = function (_ImageWithTextOverlay) {
  inherits(ShareBlock, _ImageWithTextOverlay);

  function ShareBlock(container) {
    classCallCheck(this, ShareBlock);

    var _this = possibleConstructorReturn(this, (ShareBlock.__proto__ || Object.getPrototypeOf(ShareBlock)).call(this, container));

    _this.popover = new Popover$2({
      content: _this.el.querySelector(selectors.popover.contents.share),
      trigger: _this.el.querySelector(selectors.popover.triggers.share),
      perfectCenter: true
    });
    return _this;
  }

  createClass(ShareBlock, [{
    key: 'onSectionUnload',
    value: function onSectionUnload() {
      // Unload event binding in ImageWithTextOverlay
      get(ShareBlock.prototype.__proto__ || Object.getPrototypeOf(ShareBlock.prototype), 'onSectionUnload', this).call(this);

      this.popover.destroy();
    }
  }]);
  return ShareBlock;
}(ImageWithTextOverlay);

var Testimonials = function (_MobileScrollers) {
  inherits(Testimonials, _MobileScrollers);

  function Testimonials(container) {
    classCallCheck(this, Testimonials);

    var _this = possibleConstructorReturn(this, (Testimonials.__proto__ || Object.getPrototypeOf(Testimonials)).call(this, container));

    _this.priceManager = new PriceManager(_this.el);
    _this.priceManager.updateAll();

    var cellAlign = _this.el.querySelectorAll('.testimonial').length > 2 ? 'left' : 'center';

    _this.init('[data-testimonials]', {
      cellAlign: cellAlign
    });
    return _this;
  }

  return Testimonials;
}(MobileScrollers);

var StaticStory = function () {
  function StaticStory(section) {
    classCallCheck(this, StaticStory);

    this.el = section.el;
    this.blocks = this.el.querySelectorAll('[data-story-block]');
    this.instances = {};

    this.instanceTypes = {
      'features-list': FeaturesList,
      'gallery': Gallery,
      'video-with-text': VideoWithText,
      'image-with-text-overlay': ImageWithTextOverlay,
      'share': ShareBlock,
      'testimonials': Testimonials
    };

    if (this.blocks) {
      this._initBlocks();
    }
  }

  createClass(StaticStory, [{
    key: 'onSectionUnload',
    value: function onSectionUnload() {
      var _this = this;

      Object.keys(this.instances).forEach(function (id) {
        if (_this.instances[id] && _this.instances[id].onSectionUnload) {
          // Each Block in Story is treated as a Section
          _this.instances[id].onSectionUnload();
        }
      });

      this.instances = {};
    }

    /**
     * Block information
     * - block.el: Used for compatibility with Section events
     * - block.type: Used to map to appropriate JS Class
     * - block.id: For possible future usage for block event handling
     *
     * @param block
     * @returns {{el: *, type: (string|*), id: (string|*)}}
     * @private
     */

  }, {
    key: '_getBlockInfo',
    value: function _getBlockInfo(block) {
      return {
        el: block,
        type: block.getAttribute('data-story-block'),
        id: block.getAttribute('data-story-id')
      };
    }
  }, {
    key: '_initBlocks',
    value: function _initBlocks() {
      for (var i = 0; i < this.blocks.length; i++) {
        var block = this.blocks[i];
        var blockInfo = this._getBlockInfo(block);

        if (this.instanceTypes[blockInfo.type]) {
          this.instances[blockInfo.id] = new this.instanceTypes[blockInfo.type](blockInfo);
        }
      }
    }
  }]);
  return StaticStory;
}();

var HeaderStory = function () {
  function HeaderStory(options) {
    classCallCheck(this, HeaderStory);

    this.$document = jquery$1(document);

    var defaults = {
      $mainHeader: null,
      $drawer: null,
      $toggle: null,
      storyHandle: null
    };

    this.config = jquery$1.extend({}, defaults, options);

    this.story = null;
  }

  createClass(HeaderStory, [{
    key: 'init',
    value: function init() {
      var _this = this;

      var storyHandle = this.config.storyHandle;
      var storyTemplate = 'story.ajax';

      jquery$1.ajax({
        url: '/pages/' + storyHandle,
        data: 'view=' + storyTemplate,
        dataType: 'html',
        success: function success(data) {
          var el = _this.config.$drawer[0];
          _this.config.$toggle.parent().removeClass(classes.drawerToggles.disabled);
          _this.config.$drawer.html(data);

          _this.story = new StaticStory({ el: el });
          _this.$document.trigger('check-object-fit', { el: el });
        },
        error: function error(jqXHR, textStatus, errorThrown) {
          console.warn('Unable to retrieve Story with error: ' + errorThrown);
        }
      });
    }
  }, {
    key: 'unload',
    value: function unload() {
      if (this.story) {
        this.story.onSectionUnload();
      }
    }
  }]);
  return HeaderStory;
}();

function getHeaderHeight(header) {
  var _header$getBoundingCl = header.getBoundingClientRect(),
      height = _header$getBoundingCl.height;

  return Math.ceil(height);
}

function getAnnouncementBarHeight() {
  var el = document.querySelector(selectors.announcementBar.main);

  if (!el) {
    return 0;
  }

  var _el$getBoundingClient = el.getBoundingClientRect(),
      height = _el$getBoundingClient.height;

  return Math.ceil(height);
}

var HeaderNotification = function () {
  function HeaderNotification(options) {
    classCallCheck(this, HeaderNotification);

    var defaults = {
      $drawer: null,
      $mainHeader: null,
      showNotification: false
    };

    this.config = jquery$1.extend({}, defaults, options);
    this.$notificationDismiss = this.config.$mainHeader.find('[data-notification-dismiss]');
    this.notificationKey = 'pxu_notification_seen';

    this.dismissNotification = this._dismissNotification.bind(this);
    this._bindEvents();
  }

  createClass(HeaderNotification, [{
    key: '_bindEvents',
    value: function _bindEvents() {
      var _this = this;

      this.$notificationDismiss.on('click.header-drawers', function (event) {
        event.preventDefault();

        _this._dismissNotification();
        _this._hideNotification();
      });
    }
  }, {
    key: 'unload',
    value: function unload() {
      this.$notificationDismiss.off('click.header-drawers');
    }
  }, {
    key: 'openNotification',
    value: function openNotification() {
      var skipClose = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var forceOpen = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var showNotification = true;
      var isDismissed = this.isNotificationDismissed();

      // Only attempt to open notification if is enabled
      if (!this.config.showNotification || isDismissed) {
        showNotification = false;
      }

      // Force notification open
      if (forceOpen && !this.config.$drawer.revealer('isVisible')) {
        showNotification = true;
      }

      if (!showNotification) {
        return;
      }

      this.config.$mainHeader.trigger('header-drawers:open', {
        drawer: 'notification',
        skipClose: skipClose
      });
    }
  }, {
    key: 'isNotificationDismissed',
    value: function isNotificationDismissed() {
      // Amount of days notification should be dismissed for
      var lastSeen = this._lastSeenNotification();
      var dismissalPeriod = 30;

      var now = new Date().getTime();
      var diff = Math.round((now - lastSeen) / 1000);

      // Days since notification was dismissed
      var elapsedDays = Math.floor(diff / (24 * 60 * 60));

      return dismissalPeriod > elapsedDays;
    }

    /**
     * When the notification last seen.
     *
     * @returns {number}
     * @private
     */

  }, {
    key: '_lastSeenNotification',
    value: function _lastSeenNotification() {
      try {
        return localStorage.getItem(this.notificationKey) || 0;
      } catch (error) {
        console.warn(error);
        return 0;
      }
    }
  }, {
    key: '_setNotificationTime',
    value: function _setNotificationTime(timestamp) {
      try {
        localStorage.setItem(this.notificationKey, timestamp);
      } catch (error) {
        console.warn(error);
      }
    }
  }, {
    key: '_dismissNotification',
    value: function _dismissNotification() {
      if (this.isNotificationDismissed()) {
        return;
      }

      var now = new Date().getTime();
      this._setNotificationTime(now);
    }
  }, {
    key: '_hideNotification',
    value: function _hideNotification() {
      this.config.$mainHeader.trigger('header-drawers:close', {
        drawer: 'notification'
      });
    }
  }]);
  return HeaderNotification;
}();

/**
 * Traps the focus in a particular container
 *
 * @param {object} options - Options to be used
 * @property {jQuery} options.$container - Container to trap focus within
 * @property {string} options.namespace - Namespace used for new focus event handler
 */
function trapFocus() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { namespace: null, focusParent: false };
  var $container = options.$container,
      namespace = options.namespace,
      focusParent = options.focusParent;

  var eventName = namespace ? 'focusin.' + namespace : 'focusin';
  var $focusable = focusParent ? $container : $container.find('a:visible:first').eq(0);

  $container.attr('tabindex', '-1');
  $focusable.focus();

  jquery$1(document).on(eventName, function (event) {
    if ($container[0] !== event.target && !$container.has(event.target).length) {
      $focusable.focus();
    }
  });
}

/**
 * Removes the trap of focus in a particular container
 *
 * @param {object} options - Options to be used
 * @property {jQuery} options.$container - Container of trapped focus
 * @property {string} options.namespace - Namespace used for new focus event handler
 */

function removeTrapFocus() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var $container = options.$container,
      namespace = options.namespace;

  var eventName = namespace ? 'focusin.' + namespace : 'focusin';

  if ($container && $container.length) {
    $container.attr('tabindex', '0');
  }

  jquery$1(document).off(eventName);
}

var HeaderDrawers = function () {
  function HeaderDrawers(options) {
    classCallCheck(this, HeaderDrawers);

    this.settings = options.settings;
    this.currency = options.currency;
    this.$mainHeader = options.$mainHeader;
    this.mainHeader = this.$mainHeader[0];
    this.$window = jquery$1(window);
    this.$document = jquery$1(document);
    this.$drawerToggle = this.$mainHeader.find(selectors.header.drawerToggle);
    this.$drawers = this.$mainHeader.find('[' + selectors.header.drawerItemAttr + ']');

    this.isMobile = this._isMobile.bind(this);
    this._menuAfterOpen = this._menuAfterOpen.bind(this);
    this._menuAfterClose = this._menuAfterClose.bind(this);
    this._searchAfterOpen = this._searchAfterOpen.bind(this);
    this._storyAfterOpen = this._storyAfterOpen.bind(this);
    this._drawerBreakPoints = this._drawerBreakPoints.bind(this);
    layout.onBreakpointChange(this._drawerBreakPoints);

    this.$toggles = {
      account: this._getDrawerObject(selectors.header.drawerToggleAttr, 'account'),
      cart: this._getDrawerObject(selectors.header.drawerToggleAttr, 'cart'),
      menu: this._getDrawerObject(selectors.header.drawerToggleAttr, 'menu'),
      notification: this._getDrawerObject(selectors.header.drawerToggleAttr, 'notification'),
      story: this._getDrawerObject(selectors.header.drawerToggleAttr, 'story'),
      search: this._getDrawerObject(selectors.header.drawerToggleAttr, 'search')
    };

    this.$drawerItems = {
      account: this._getDrawerObject(selectors.header.drawerItemAttr, 'account'),
      cart: this._getDrawerObject(selectors.header.drawerItemAttr, 'cart'),
      menu: this._getDrawerObject(selectors.header.drawerItemAttr, 'menu'),
      notification: this._getDrawerObject(selectors.header.drawerItemAttr, 'notification'),
      story: this._getDrawerObject(selectors.header.drawerItemAttr, 'story'),
      search: this._getDrawerObject(selectors.header.drawerItemAttr, 'search')
    };

    this.headerStory = new HeaderStory({
      $mainHeader: this.$mainHeader,
      $drawer: this.$drawerItems.story,
      $toggle: this.$toggles.story,
      storyHandle: this.settings.story_handle
    });

    this.headerCart = new HeaderCart({
      $mainHeader: this.$mainHeader,
      $drawer: this.$drawerItems.cart,
      currency: this.currency,
      isMobile: this.isMobile
    });

    this.headerNotification = new HeaderNotification({
      $mainHeader: this.$mainHeader,
      $drawer: this.$drawerItems.notification,
      showNotification: this.settings.show_notification
    });

    this.drawerConfigs = this._configureDrawers();

    this.scrollLock = new ScrollLock();

    this._bindEvents();
    this._positionDrawers();

    if (this.settings.story_handle) {
      this.headerStory.init();
      this.headerNotification.openNotification();
    }
  }

  createClass(HeaderDrawers, [{
    key: 'unload',
    value: function unload() {
      this.$drawerToggle.off('.header-drawers');
      this.$drawers.off('.header-drawers');
      this.$mainHeader.off('header-drawers:close');
      this.$mainHeader.off('header-drawers:open');
      this.$window.off('.relative-drawers');

      this.headerStory.unload();
      this.headerNotification.unload();
      this.headerCart.unload();
      this._closeAllDrawers();
    }

    /**
     * When notification block is selected
     */

  }, {
    key: 'notificationSelect',
    value: function notificationSelect() {
      this.headerNotification.openNotification(false, true);
    }

    /**
     * When notification block is deselected
     */

  }, {
    key: 'notificationDeselect',
    value: function notificationDeselect() {
      var isDismissed = this.headerNotification.isNotificationDismissed();

      if (isDismissed) {
        this._closeDrawer({ drawerToClose: 'notification' });
      }
    }
  }, {
    key: '_configureDrawers',
    value: function _configureDrawers() {
      var defaultDrawerConfig = {
        afterOpen: function afterOpen() {},
        afterClose: function afterClose() {},
        belowMobileHeader: true,
        canTrapFocus: true,
        scrollLock: true,
        focusParent: false
      };

      var menuConfig = jquery$1.extend({}, defaultDrawerConfig, {
        afterOpen: this._menuAfterOpen,
        afterClose: this._menuAfterClose
      });

      var accountConfig = jquery$1.extend({}, defaultDrawerConfig, {
        belowMobileHeader: false,
        scrollLock: false
      });

      var notificationConfig = jquery$1.extend({}, defaultDrawerConfig, {
        belowMobileHeader: false,
        canTrapFocus: false,
        scrollLock: false
      });

      var storyConfig = jquery$1.extend({}, defaultDrawerConfig, {
        afterOpen: this._storyAfterOpen,
        focusParent: true
      });

      var searchConfig = jquery$1.extend({}, defaultDrawerConfig, {
        afterOpen: this._searchAfterOpen
      });

      var cartConfig = jquery$1.extend({}, defaultDrawerConfig, {
        afterOpen: this.headerCart.afterOpen,
        afterClose: this.headerCart.afterClose
      });

      return {
        account: accountConfig,
        cart: cartConfig,
        menu: menuConfig,
        notification: notificationConfig,
        story: storyConfig,
        search: searchConfig
      };
    }
  }, {
    key: '_bindEvents',
    value: function _bindEvents() {
      var _this = this;

      this.$window.on('resize.relative-drawers', justDebounce$1(function () {
        return _this._positionDrawers();
      }, 15));

      this.$drawerToggle.on('click.header-drawers keypress.header-drawers', function (event) {
        event.preventDefault();
        event.stopImmediatePropagation();

        var shouldFocus = false;

        if (event.type === 'keypress') {
          var code = event.charCode || event.keyCode;

          if (code === 32 || code === 13) {
            shouldFocus = true;
          }
        }

        var drawerType = jquery$1(event.currentTarget).attr(selectors.header.drawerToggleAttr);
        _this._toggleDrawer(drawerType, shouldFocus);
      });

      this.$mainHeader.on('header-drawers:close', function (event, data) {
        if (!data.drawer) {
          return console.warn('No drawer specified to close');
        }

        _this._closeDrawer({ drawerToClose: data.drawer });
      });

      this.$mainHeader.on('header-drawers:open', function (event, data) {
        if (!data.drawer) {
          return console.warn('No drawer specified to open');
        }

        var drawerToOpen = data.drawer;
        var skipClose = data.skipClose || false;

        _this._openDrawer(drawerToOpen, skipClose);
      });

      this.$drawers.on('revealer-hide.header-drawers', function (event) {
        var closingDrawer = event.currentTarget.getAttribute(selectors.header.drawerItemAttr);
        var $openDrawers = _this.$drawers.filter('.visible, .animating');
        if (closingDrawer === 'notification') {
          return;
        }

        if (!$openDrawers.length) {
          _this.headerNotification.openNotification(true);
        }
      });
    }
  }, {
    key: '_getDrawerSelector',
    value: function _getDrawerSelector(dataAttr, handle) {
      return '[' + dataAttr + '="' + handle + '"]';
    }
  }, {
    key: '_getDrawerObject',
    value: function _getDrawerObject(dataAttr, handle) {
      return this.$mainHeader.find(this._getDrawerSelector(dataAttr, handle));
    }
  }, {
    key: '_isMobile',
    value: function _isMobile() {
      return layout.isBreakpoint('XS') || layout.isBreakpoint('S');
    }
  }, {
    key: '_positionDrawers',
    value: function _positionDrawers() {
      this._positionDrawer('account', 'account');
      this._positionDrawer('notification', 'story');
    }

    /**
     * Position drawers relative to their toggle
     *
     * @param {string} drawerItem - Name of drawer to position
     * @param {string} drawerToggle - Name of drawer to tether to
     * @private
     */

  }, {
    key: '_positionDrawer',
    value: function _positionDrawer(drawerItem, drawerToggle) {
      var $drawer = this.$drawerItems[drawerItem];
      var $toggle = this.$toggles[drawerToggle];
      var rightGutter = 16;
      var clientWidth = document.body.clientWidth;

      if (!$drawer.length || !$toggle.length) {
        return;
      }

      var toggleRect = $toggle[0].getBoundingClientRect();
      var toggleMiddle = toggleRect.left + toggleRect.width / 2;
      var drawerWidth = parseInt(window.getComputedStyle($drawer[0]).width, 10);
      var drawerLeft = toggleMiddle - drawerWidth / 2;
      var exceedsWindow = drawerLeft + rightGutter + drawerWidth > clientWidth;

      // Update position
      var left = drawerLeft;
      var transformOrigin = '50% 0%'; // Desktop transform origin, if fits

      if (exceedsWindow) {
        left = clientWidth - drawerWidth - rightGutter;
      }

      if (!this._isMobile() && exceedsWindow) {
        // Use calculated left edge of drawer
        var offsetX = (toggleMiddle - drawerLeft) / drawerWidth * 100;
        transformOrigin = offsetX + '% 0%';
      }

      if (this._isMobile()) {
        // Unset right offset on mobile
        left = '';
        transformOrigin = '50% 100%';
      }

      $drawer.css({ left: left, transformOrigin: transformOrigin });
    }

    /**
     * Debounce method to close drawers when transitioning over to different displays
     *
     * @private
     */

  }, {
    key: '_drawerBreakPoints',
    value: function _drawerBreakPoints() {
      if (layout.crossesThreshold()) {
        this._closeAllDrawers('notification');
      }
    }
  }, {
    key: '_toggleButton',
    value: function _toggleButton(drawerType, state) {
      var $toggle = this.$toggles[drawerType];

      if (!$toggle || !$toggle.length) {
        return;
      }

      $toggle.ariaExpanded(state).parent(selectors.header.drawerToggleParent).toggleClass(classes.drawerToggles.active, state);
    }

    /**
     * Toggle visibility of a drawer
     *
     * @param drawerType
     * @private
     */

  }, {
    key: '_toggleDrawer',
    value: function _toggleDrawer(drawerType) {
      var shouldFocus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (this.$mainHeader.hasClass(classes.drawerVisibility[drawerType])) {
        this._closeDrawer({
          drawerToClose: drawerType,
          focusOnToggle: shouldFocus
        });
      } else {
        this._openDrawer(drawerType, false, shouldFocus);
      }
    }

    /**
     * Open a specific drawer
     *
     * @param {string} drawerToOpen - Name of drawer to open
     * @param {boolean} skipClose - Skip closing of open menus
     * @private
     */

  }, {
    key: '_openDrawer',
    value: function _openDrawer(drawerToOpen) {
      var _this2 = this;

      var skipClose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var shouldFocus = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var toggleExists = this.$toggles[drawerToOpen].length;
      var toggleDisabled = this.$toggles[drawerToOpen].parent().hasClass(classes.drawerToggles.disabled);

      if (toggleExists && toggleDisabled) {
        return;
      }

      var headerHeight = getHeaderHeight(this.mainHeader);
      var config = this.drawerConfigs[drawerToOpen];
      this.$drawerItems[drawerToOpen].css('max-height', window.innerHeight - headerHeight);

      if (!skipClose) {
        this._closeAllDrawers(drawerToOpen);
      }

      if (config.scrollLock) {
        this.scrollLock.lock();
      }

      if (this._isMobile()) {
        this.$document.trigger('action-bar:toggle', { hide: true });
      }

      this._openHeader(drawerToOpen);

      this.$drawerItems[drawerToOpen].revealer('show').ariaHidden(false).one('revealer-show', function () {
        config.afterOpen();

        _this2.$mainHeader.trigger('header-drawers:toggled', {
          drawer: drawerToOpen,
          headerBorder: true
        });

        if (config.canTrapFocus && shouldFocus) {
          trapFocus({
            $container: _this2.$drawerItems[drawerToOpen],
            namespace: 'header-drawers-' + drawerToOpen,
            focusParent: config.focusParent
          });
        }

        _this2._bindDrawerClose(drawerToOpen);
      });
    }

    /**
     * Close a specific drawer.
     *
     * @param options
     * @property {string} options.drawerToClose - Drawer to close
     * @property {boolean} options.focusOnToggle - Should the closing drawer's toggle be focused
     * @private
     */

  }, {
    key: '_closeDrawer',
    value: function _closeDrawer(options) {
      var _this3 = this;

      var shouldFocus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var drawerToClose = options.drawerToClose;
      var focusOnToggle = options.focusOnToggle || false;
      var config = this.drawerConfigs[drawerToClose];

      this._closeHeader(drawerToClose);

      this.$drawerItems[drawerToClose].revealer('hide').one('revealer-hide', function () {
        _this3.$drawerItems[drawerToClose].css('max-height', '').ariaHidden(true);
        config.afterClose();
        _this3.$mainHeader.trigger('header-drawers:toggled', {
          drawer: drawerToClose,
          headerBorder: false
        });

        if (config.canTrapFocus && shouldFocus) {
          removeTrapFocus({
            $container: _this3.$drawerItems[drawerToClose],
            namespace: 'header-drawers-' + drawerToClose
          });

          if (focusOnToggle) {
            _this3.$toggles[drawerToClose].focus();
          }
        }
      });

      if (config.scrollLock) {
        this.scrollLock.unlock();
      }

      this._unbindDrawerClose(drawerToClose);

      if (this._isMobile()) {
        this.$document.trigger('action-bar:toggle', { hide: false });
      }
    }

    /**
     * Close all drawers. Optionally specify a drawer to return focus to.
     *
     * @param {string} keepOpen - Drawer to keep open
     * @private
     */

  }, {
    key: '_closeAllDrawers',
    value: function _closeAllDrawers() {
      var _this4 = this;

      var keepOpen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      var $openDrawers = this.$drawers.filter('.visible, .animating');

      $openDrawers.each(function (i, el) {
        var drawerToClose = el.getAttribute(selectors.header.drawerItemAttr);

        if (keepOpen !== drawerToClose) {
          _this4._closeDrawer({
            drawerToClose: drawerToClose
          });
        }
      });
    }

    /**
     * Set up listeners to close drawers based on user interaction
     *
     * @param drawerType
     * @private
     */

  }, {
    key: '_bindDrawerClose',
    value: function _bindDrawerClose(drawerType) {
      var _this5 = this;

      // Notification drawer has its own close method
      if (drawerType === 'notification') {
        return;
      }

      this.$document.on('touchstart.header-drawers-' + drawerType + ', click.header-drawers-' + drawerType, function (event) {
        _this5._documentFocus(event.target, drawerType);
      });

      // Close drawer on esc key
      this.$document.on('keyup.header-drawers-' + drawerType, function (event) {
        if (event.keyCode === 27) {
          _this5._closeDrawer({
            drawerToClose: drawerType,
            focusOnToggle: true
          });
        }
      });
    }

    /**
     * Remove listeners when drawer closes
     *
     * @param drawerType
     * @private
     */

  }, {
    key: '_unbindDrawerClose',
    value: function _unbindDrawerClose(drawerType) {
      this.$document.off('touchstart.header-drawers-' + drawerType + ', click.header-drawers-' + drawerType).off('keyup.header-drawers-' + drawerType);
    }

    /**
     * Detect if document interaction occurs outside of a drawer
     *
     * @param target
     * @param drawerType
     * @private
     */

  }, {
    key: '_documentFocus',
    value: function _documentFocus(target, drawerType) {
      var isToggleButton = jquery$1(target).parents(this._getDrawerSelector(selectors.header.drawerItemAttr, drawerType)).length;
      var clickInHeader = jquery$1(target).parents(selectors.header.main).length;

      // If click/tap is in header, and is mobile, ignore. Otherwise multiple closes occur
      if (isToggleButton || clickInHeader && this._isMobile()) {
        return;
      }

      this._closeDrawer({
        drawerToClose: drawerType
      });
    }
  }, {
    key: '_openHeader',
    value: function _openHeader(drawer) {
      var _this6 = this;

      var deferred = jquery$1.Deferred();
      var windowHeight = window.innerHeight;
      var config = this.drawerConfigs[drawer];
      var $drawer = this.$drawerItems[drawer];
      var drawerHeight = $drawer.outerHeight();
      var headerRect = this.mainHeader.getBoundingClientRect();
      var fromBottom = drawerHeight;
      var fromTop = Math.max(0, headerRect.top - drawerHeight);

      // Offset using 'top' only if height of drawer + header is larger than window
      var offsetByTop = fromBottom >= windowHeight;
      var offset = fromBottom;
      var offsetProp = 'bottom';

      if (offsetByTop) {
        offset = fromTop;
        offsetProp = 'top';
      }

      if (config.belowMobileHeader && this._isMobile()) {
        if (offsetByTop) {
          this.$mainHeader.css({
            top: headerRect.top,
            bottom: 'auto'
          });
        }

        // Save original top for easing back to 'closed' position
        this.$mainHeader.data('offset-type', offsetByTop ? 'top' : 'bottom').data('original-top', headerRect.top).revealer('show').one('revealer-animating', function () {
          _this6.$mainHeader.css(offsetProp, offset);
          deferred.resolve();
        });
      } else {
        deferred.resolve();
      }

      deferred.done(function () {
        _this6._toggleButton(drawer, true);
        _this6.$mainHeader.addClass(classes.drawerVisibility.general).addClass(classes.drawerVisibility[drawer]);
      });
    }
  }, {
    key: '_closeHeader',
    value: function _closeHeader(drawer) {
      var _this7 = this;

      var deferred = jquery$1.Deferred();
      var headerHeight = getHeaderHeight(this.mainHeader);
      var config = this.drawerConfigs[drawer];

      if (config.belowMobileHeader && this._isMobile()) {
        // Default to bottom for when transitioning from desktop to mobile
        var offsetType = this.$mainHeader.data('offset-type') || 'bottom';
        var offset = 0;

        if (offsetType === 'top') {
          offset = parseInt(this.$mainHeader.data('original-top'), 10);

          if (isNaN(offset)) {
            offset = 'calc(100vh - ' + headerHeight + 'px';
          }
        }

        this.$mainHeader.revealer('hide').one('revealer-animating', function () {
          _this7.$mainHeader.css(offsetType, offset);
          deferred.resolve();
        }).one('revealer-hide', function () {
          _this7.$mainHeader.css({
            top: '',
            bottom: ''
          });
        });
      } else {
        // Reset offsets when transitioning from mobile to desktop
        this.$mainHeader.css({
          top: this.settings.sticky_header ? getAnnouncementBarHeight() : '',
          bottom: ''
        });
        deferred.resolve();
      }

      deferred.done(function () {
        _this7.$mainHeader.data('original-top', '');
        _this7._toggleButton(drawer, false);
        _this7.$mainHeader.removeClass(classes.drawerVisibility.general).removeClass(classes.drawerVisibility[drawer]);
      });
    }
  }, {
    key: '_menuAfterOpen',
    value: function _menuAfterOpen() {
      if (!this._isMobile()) {
        return;
      }

      var $drawer = this.$drawerItems.menu;
      $drawer.css('height', $drawer.outerHeight());
    }
  }, {
    key: '_menuAfterClose',
    value: function _menuAfterClose() {
      this.$drawerItems.menu.css('height', '');
    }
  }, {
    key: '_searchAfterOpen',
    value: function _searchAfterOpen() {
      this.$drawerItems.search.find(selectors.drawers.search.field).focus();
    }
  }, {
    key: '_storyAfterOpen',
    value: function _storyAfterOpen() {
      this.headerNotification.dismissNotification();
      this.$drawerItems.story.trigger('theme:rimg:watch');
    }
  }]);
  return HeaderDrawers;
}();

var MenuDrawer = function () {
  function MenuDrawer(options) {
    var _this = this;

    classCallCheck(this, MenuDrawer);

    this.$mainHeader = options.$mainHeader;
    this.settings = options.settings;

    this.$window = jquery$1(window);
    this.windowWidth = window.innerWidth;
    this.$navigation = this.$mainHeader.find(selectors.header.navigation);
    this.$currencyConverter = this.$mainHeader.find(selectors.header.converterParent);
    this.$actions = this.$mainHeader.find(selectors.header.actions);

    this.isExpandedNav = this.settings.navigation_layout === 'expanded';
    this.events = [];

    // If navigation is 'expanded', collapse into drawer when needed
    if (this.isExpandedNav) {
      this.events.push(this.$window.on('resize.navigation-drawer', justDebounce$1(function () {
        return _this._navigationResize();
      }, 15)));
    }

    this._autoDrawer();
    this._setupDrawer();
  }

  createClass(MenuDrawer, [{
    key: 'unload',
    value: function unload() {
      if (this.events.length) {
        this.events.forEach(function ($el) {
          return $el.off('.navigation-drawer');
        });
      }
    }
  }, {
    key: '_setupDrawer',
    value: function _setupDrawer() {
      // Clone Header components into menu drawer
      this.$mainHeader.find(selectors.drawers.menu.navigation).html(this.$navigation.children().clone(true, true));

      if (this.$currencyConverter.length) {
        this.$mainHeader.find(selectors.drawers.menu.converterParent).html(this.$currencyConverter.children().clone(true, true));
      }
    }
  }, {
    key: '_navigationResize',
    value: function _navigationResize() {
      var windowWidth = window.innerWidth;
      if (this.windowWidth === window.innerWidth) {
        return;
      }

      this.windowWidth = windowWidth;
      this._autoDrawer();
    }
  }, {
    key: '_autoDrawer',
    value: function _autoDrawer() {
      // Navigation and actions are the same width, but Actions never has its width change
      var navigationWidth = this.$actions.width();
      var innerWidths = [];

      this.$navigation.find('.navmenu-depth-1 > .navmenu-item').each(function (index, el) {
        innerWidths.push(Math.ceil(jquery$1(el).outerWidth(true)));
      });

      var combinedWidths = innerWidths.reduce(function (a, b) {
        return a + b;
      }, 0);
      var navItemsFit = combinedWidths < navigationWidth;
      var isExpandable = this.isExpandedNav && (layout.isBreakpoint('L') || layout.isBreakpoint('XL'));

      this._collapseNavigation(navItemsFit && isExpandable);
    }
  }, {
    key: '_collapseNavigation',
    value: function _collapseNavigation() {
      var expandNavigation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (expandNavigation) {
        this.$mainHeader.removeClass(classes.navigation.collapsed).addClass(classes.navigation.expanded);
      } else {
        this.$mainHeader.removeClass(classes.navigation.expanded).addClass(classes.navigation.collapsed).trigger('header-drawers:close', { drawer: 'account' });
      }
    }
  }]);
  return MenuDrawer;
}();

var Navigation = function () {
  function Navigation($el) {
    var _this = this;

    classCallCheck(this, Navigation);

    this.$el = $el;

    this.events = [this.$el.on('click.navigation', selectors.navmenu.trigger, function (event) {
      event.preventDefault();
      _this._toggleMenu(event.currentTarget.parentNode);
    }), this.$el.on('focusin.navigation', function (event) {
      _this._navigationFocus(event.target);
    })];
  }

  /**
   * Clean up class when this.$el is being removed
   */


  createClass(Navigation, [{
    key: 'unload',
    value: function unload() {
      this.events.forEach(function ($el) {
        return $el.off('.navigation');
      });
    }

    /**
     * Close all open menus excluding target menu
     * @param menu
     */

  }, {
    key: '_closeAll',
    value: function _closeAll() {
      var _this2 = this;

      var menu = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var openMenus = selectors.navmenu.submenu + '.visible, ' + selectors.navmenu.submenu + '.animating-in';

      this.$el.find(openMenus).parent().each(function (i, el) {
        if (menu && jquery$1.contains(el, menu)) {
          return;
        }

        // Close any submenus in this tree
        jquery$1(el).find(selectors.navmenu.trigger).each(function (i, trigger) {
          return _this2._closeItem(trigger);
        });

        // Close root-level menu item
        _this2._closeItem(el);
      });
    }

    /**
     * Toggle visibility of a menu
     *
     * @param {HTMLElement} parentNode
     * @private
     */

  }, {
    key: '_toggleMenu',
    value: function _toggleMenu(parentNode) {
      var $parent = jquery$1(parentNode);
      var $menu = $parent.children(selectors.navmenu.submenu);

      if ($menu.revealer('isVisible')) {
        this._closeItem(parentNode);
      } else {
        this._openItem(parentNode);
      }
    }

    /**
     * Retrieve information of immediate menu tree
     *
     * @param {HTMLElement} parentNode
     * @returns {{parent: Element, link: Element, menu: Element}}
     * @private
     */

  }, {
    key: '_menuTreeInfo',
    value: function _menuTreeInfo(parentNode) {
      return {
        parent: parentNode,
        link: parentNode.querySelector(selectors.navmenu.trigger),
        menu: parentNode.querySelector(selectors.navmenu.submenu)
      };
    }

    /**
     * Toggle appropriate classes and flags for a menu parent
     *
     * @param {HTMLElement} parentNode
     * @param {Boolean} active
     * @private
     */

  }, {
    key: '_toggleParent',
    value: function _toggleParent(parentNode) {
      var active = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var _menuTreeInfo2 = this._menuTreeInfo(parentNode),
          parent = _menuTreeInfo2.parent,
          link = _menuTreeInfo2.link;

      var $parent = jquery$1(parent);
      var $link = jquery$1(link);

      $parent.toggleClass(classes.navmenu.parentActive, active);
      $link.ariaExpanded(active);
    }

    /**
     * Open a menu item
     *
     * @param {HTMLElement} parentNode
     * @private
     */

  }, {
    key: '_openItem',
    value: function _openItem(parentNode) {
      this._toggleParent(parentNode, true);

      this._closeAll(parentNode);
      var $menu = jquery$1(parentNode.querySelector(selectors.navmenu.submenu));
      $menu.revealer('show');
    }

    /**
     * Close a menu item
     *
     * @param {HTMLElement} parentNode
     * @private
     */

  }, {
    key: '_closeItem',
    value: function _closeItem(parentNode) {
      this._toggleParent(parentNode, false);

      var $menu = jquery$1(parentNode).children(selectors.navmenu.submenu);
      $menu.revealer('hide');
    }

    /**
     * Close all open menus when focusing out of the navigation, or when focusing
     * a top level item
     *
     * @param {HTMLElement} target
     * @private
     */

  }, {
    key: '_navigationFocus',
    value: function _navigationFocus(target) {
      var inNavigation = jquery$1(target).parents(selectors.header.navigation).length;
      var isDepthOne = jquery$1(target).closest(selectors.navmenu.depthOne).length;
      var inDrawer = jquery$1(target).parents('[' + selectors.header.drawerItemAttr + '="menu"]').length;

      if (inDrawer) {
        return;
      }

      if (!inNavigation || isDepthOne) {
        this._closeAll();
      }
    }
  }]);
  return Navigation;
}();

var StickyHeader = function () {
  function StickyHeader(options) {
    classCallCheck(this, StickyHeader);

    this.settings = options.settings;
    this.$mainHeader = options.$mainHeader;
    this.mainHeader = this.$mainHeader[0];
    this.mobileHeader = document.querySelector(selectors.header.mobile);
    this.$siteMain = jquery$1('.site-main');

    this.$body = jquery$1(document.body);
    this.$window = jquery$1(window);
    this.requestAnimationFrameId = null;

    // Exit if Header is not sticky
    if (!this.settings.sticky_header) {
      return;
    }

    this._onBreakpointChange = this._onBreakpointChange.bind(this);
    layout.onBreakpointChange(this._onBreakpointChange);

    this._headerChecker = this._headerChecker.bind(this);
    this._checkScrolled = this._checkScrolled.bind(this);
    this._mainHeaderOffset = this._mainHeaderOffset.bind(this);

    this._init();
    this._bindEvents();
  }

  createClass(StickyHeader, [{
    key: 'unload',
    value: function unload() {
      if (!this.settings.sticky_header) {
        return;
      }

      this.$window.off('.sticky-header');
      layout.offBreakpointChange(this._onBreakpointChange);
      window.cancelAnimationFrame(this.requestAnimationFrameId);
    }
  }, {
    key: 'onSectionSelect',
    value: function onSectionSelect() {
      // Reset sticky header styles if no sticky header
      if (!this.settings.sticky_header) {
        this._setSticky(false);
      }
    }
  }, {
    key: '_supportsSticky',
    value: function _supportsSticky() {
      return layout.isBreakpoint('L') || layout.isBreakpoint('XL') || layout.isBreakpoint('M');
    }
  }, {
    key: '_init',
    value: function _init() {
      this._setSticky(this._supportsSticky());
      this._headerChecker();
    }
  }, {
    key: '_bindEvents',
    value: function _bindEvents() {
      this.$window.on('scroll.sticky-header', this._checkScrolled);
      this.$window.on('resize.sticky-header', this._mainHeaderOffset);
      this.$window.on('announcement-bar.sticky-header', this._mainHeaderOffset);
    }
  }, {
    key: '_onBreakpointChange',
    value: function _onBreakpointChange() {
      this._setSticky(this._supportsSticky());
    }

    /**
     * Determine the amount to offset the body by
     *
     * @param state
     * @returns {*}
     * @private
     */

  }, {
    key: '_getStickyOffset',
    value: function _getStickyOffset(state) {
      if (!state) {
        return '';
      }

      var headerHeight = getHeaderHeight(this.mainHeader);
      var announcementBar = getAnnouncementBarHeight();

      return headerHeight + announcementBar;
    }
  }, {
    key: '_setScrolled',
    value: function _setScrolled(state) {
      this.$body.toggleClass(classes.header.scrolled, state);
    }
  }, {
    key: '_setSticky',
    value: function _setSticky(state) {
      this.$body.toggleClass(classes.header.sticky, state);
      this._mainHeaderOffset();
      this._setStickyOffset(state);
    }
  }, {
    key: '_setStickyOffset',
    value: function _setStickyOffset(state) {
      var stickyOffset = this._getStickyOffset(state);
      this.$siteMain.css('paddingTop', stickyOffset);

      this.$window.trigger('sticky-header', {
        state: state,
        stickyOffset: stickyOffset
      });
    }
  }, {
    key: '_headerChecker',
    value: function _headerChecker() {
      // Periodically check to make sure header is offset correctly
      this.requestAnimationFrameId = window.requestAnimationFrame(this._headerChecker);

      if (this.$body.hasClass(classes.header.scrolled)) {
        return;
      }

      if (this._supportsSticky()) {
        this._setStickyOffset(true);
      }
    }
  }, {
    key: '_checkScrolled',
    value: function _checkScrolled() {
      // Add border when is scrolling passed header
      var desktopThreshold = getHeaderHeight(this.mainHeader);
      var mobileThreshold = getHeaderHeight(this.mobileHeader);
      var threshold = this._supportsSticky() ? desktopThreshold : mobileThreshold;

      var isScrolled = window.pageYOffset >= threshold;

      this._setScrolled(isScrolled);
      this.$mainHeader.trigger('set-border', {
        state: this._supportsSticky() && isScrolled
      });
    }

    /**
     * Offset main by announcement bar when is sticky, and sticky is supported
     *
     * @private
     */

  }, {
    key: '_mainHeaderOffset',
    value: function _mainHeaderOffset() {
      var top = this._supportsSticky() ? getAnnouncementBarHeight() : '';
      this.$mainHeader.css({ top: top });
    }
  }]);
  return StickyHeader;
}();

var StaticHeader = function () {
  function StaticHeader(section) {
    var _this = this;

    classCallCheck(this, StaticHeader);

    this.currency = section.data.currency;
    this.settings = section.data.settings;
    this.$el = jquery$1(section.el);
    this.$body = jquery$1(document.body);

    this.mainHeader = section.el.querySelector(selectors.header.main);
    this.$mainHeader = jquery$1(this.mainHeader);

    this.$scripts = jquery$1('[data-scripts]');

    if (this.currency.enable) {
      script(this.$scripts.data('shopify-currencies'), function () {
        _this._converter();
      });
    }

    this.stickyHeader = new StickyHeader({
      $mainHeader: this.$mainHeader,
      settings: this.settings
    });

    this.navigation = new Navigation(this.$mainHeader);

    this.menuDrawer = new MenuDrawer({
      $mainHeader: this.$mainHeader,
      settings: this.settings
    });

    this.headerDrawers = new HeaderDrawers({
      $mainHeader: this.$mainHeader,
      settings: this.settings,
      currency: this.currency
    });

    this._bindEvents();
  }

  createClass(StaticHeader, [{
    key: 'onSectionUnload',
    value: function onSectionUnload() {
      this.headerDrawers.unload();
      this.menuDrawer.unload();
      this.navigation.unload();
      this.stickyHeader.unload();
      this._setBorder(false);

      this.$mainHeader.off('header-drawers:toggled');
      this.$mainHeader.off('set-border');

      if (this.currency.enable) {
        this.$mainHeader.off('change.converter');
      }
    }
  }, {
    key: 'onSectionSelect',
    value: function onSectionSelect() {
      this.stickyHeader.onSectionSelect();
    }
  }, {
    key: 'onSectionBlockSelect',
    value: function onSectionBlockSelect(block) {
      var drawerType = block.el.getAttribute(selectors.header.drawerItemAttr);
      if (drawerType && drawerType === 'notification') {
        this.headerDrawers.notificationSelect();
      }
    }
  }, {
    key: 'onSectionBlockDeselect',
    value: function onSectionBlockDeselect(block) {
      var drawerType = block.el.getAttribute(selectors.header.drawerItemAttr);
      if (drawerType && drawerType === 'notification') {
        this.headerDrawers.notificationDeselect();
      }
    }
  }, {
    key: '_bindEvents',
    value: function _bindEvents() {
      var _this2 = this;

      this.$mainHeader.on('header-drawers:toggled', function (event, data) {
        return _this2._triggerBorder(data);
      });
      this.$mainHeader.on('set-border', function (event, data) {
        return _this2._setBorder(data.state);
      });
    }
  }, {
    key: '_converter',
    value: function _converter() {
      var _this3 = this;

      dist$3.init({
        switcherSelector: selectors.header.currencyConverter,
        priceSelector: '.money',
        shopCurrency: this.currency.shop_currency,
        defaultCurrency: this.currency.default_currency,
        displayFormat: this.currency.display_format,
        moneyFormat: this.currency.money_format,
        moneyFormatNoCurrency: this.currency.money_format_no_currency,
        moneyFormatCurrency: this.currency.money_format_currency
      });

      this.$mainHeader.on('change.converter', selectors.header.currencyConverter, function (event) {
        var currencyValue = event.currentTarget.value;

        _this3.$mainHeader.find(selectors.header.currencyConverter).each(function (index, converter) {
          if (converter.value !== currencyValue) {
            converter.value = currencyValue;
          }
        });

        dist$3.setCurrency(currencyValue);
      });
    }
  }, {
    key: '_setBorder',
    value: function _setBorder(state) {
      this.$body.toggleClass(classes.header.bordered, state);
    }
  }, {
    key: '_triggerBorder',
    value: function _triggerBorder(data) {
      var drawer = data.drawer || false;
      var headerBorder = data.headerBorder;

      if (!drawer) {
        return console.warn('Drawer toggled trigger is missing drawer name');
      }

      // Only update border if drawer toggle is Story
      if (drawer !== 'story') {
        return;
      }

      // If headerBorder, set border, otherwise determine if border is needed
      if (headerBorder) {
        this._setBorder(true);
        this.$body.toggleClass(classes.header.bordered, true);
      } else {
        // Kep bordered class only if is scrolled, which is only if the header is sticky
        this._setBorder(this.$body.hasClass(classes.header.scrolled));
      }
    }
  }]);
  return StaticHeader;
}();

var StaticProductPages = function () {
  function StaticProductPages(section) {
    classCallCheck(this, StaticProductPages);
    var el = section.el;
    var product = section.data.product;

    var variantAvailable = section.data.variant_available;
    var moneyFormat = section.data.money_format;
    var textStrings = section.data.text_strings;
    var cartRedirect = section.data.cart_redirect;
    var enableHistory = true;

    this.productLayout = new ProductLayout({
      el: el,
      moneyFormat: moneyFormat,
      product: product,
      variantAvailable: variantAvailable,
      cartRedirect: cartRedirect,
      textStrings: textStrings,
      enableHistory: enableHistory
    });
  }

  createClass(StaticProductPages, [{
    key: 'onSectionUnload',
    value: function onSectionUnload() {
      this.productLayout.unload();
    }
  }]);
  return StaticProductPages;
}();

// jQuery plugins
// Responsive Images
// Helpers
// Template imports
// Section imports
var data = JSON.parse(document.body.querySelector('[data-theme-data]').innerHTML);

new BannerManager({
  target: document.body.querySelector('[data-banners]'),
  dismissIcon: data.dismiss_icon
});

state.init();

var sections = new Sections();
sections.register('dynamic-blog-posts', function (section) {
  return new DynamicBlogPosts(section);
});
sections.register('dynamic-featured-collection', function (section) {
  return new FeaturedProducts(section);
});
sections.register('dynamic-image-with-text-overlay', function (section) {
  return new ImageWithTextOverlay(section);
});
sections.register('dynamic-instagram-feed', function (section) {
  return new DynamicInstagramFeed(section);
});
sections.register('dynamic-list-collections', function (section) {
  return new DynamicListCollections(section);
});
sections.register('dynamic-product', function (section) {
  return new DynamicProduct(section);
});
sections.register('dynamic-slideshow', function (section) {
  return new DynamicSlideshow(section);
});
sections.register('dynamic-testimonials', function (section) {
  return new Testimonials(section);
});
sections.register('dynamic-twitter-feed', function (section) {
  return new DynamicTwitterFeed(section);
});
sections.register('dynamic-video-with-text', function (section) {
  return new VideoWithText(section);
});
sections.register('pxs-announcement-bar', function (section) {
  return new StaticAnnouncementBar(section);
});
sections.register('pxs-map', function (section) {
  return new PxsMap(section);
});
sections.register('static-cart', function (section) {
  return new StaticCart(section);
});
sections.register('static-collection-pages', function (section) {
  return new StaticCollectionPages(section);
});
sections.register('static-faq', function (section) {
  return new StaticFaq(section);
});
sections.register('static-gift-card', function (section) {
  return new StaticGiftCard(section);
});
sections.register('static-header', function (section) {
  return new StaticHeader(section);
});
sections.register('static-product-pages', function (section) {
  return new StaticProductPages(section);
});
sections.register('static-related-products', function (section) {
  return new FeaturedProducts(section);
});
sections.register('static-story', function (section) {
  return new StaticStory(section);
});
sections.register('static-testimonials', function (section) {
  return new Testimonials(section);
});

new SearchPage();
new Page();
new ObjectFitPolyfill();
new Newsletter();

initAddresses().catch(function (error) {
  return console.error(error);
});
  
  

$('a[href="https://www.1stdibs.com/dealers/pat-mcgann/"]').attr('target', '_blank');

  

}());
//# sourceMappingURL=reach.js.map?1531381329541
