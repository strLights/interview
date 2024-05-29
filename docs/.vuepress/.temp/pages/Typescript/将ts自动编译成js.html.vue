<template><p>安装 ts</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm i typescript <span class="token operator">-</span>g

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>tsc --init</p>
<p>将json 文件的</p>
<p>&quot;outDir&quot;: &quot;./js&quot;</p>
<p>或直接用下面的json</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token comment">/* Visit https://aka.ms/tsconfig to read more about this file */</span>

		<span class="token comment">/* Projects */</span>
		<span class="token comment">// "incremental": true,                              /* Save .tsbuildinfo files to allow for incremental compilation of projects. */</span>
		<span class="token comment">// "composite": true,                                /* Enable constraints that allow a TypeScript project to be used with project references. */</span>
		<span class="token comment">// "tsBuildInfoFile": "./.tsbuildinfo",              /* Specify the path to .tsbuildinfo incremental compilation file. */</span>
		<span class="token comment">// "disableSourceOfProjectReferenceRedirect": true,  /* Disable preferring source files instead of declaration files when referencing composite projects. */</span>
		<span class="token comment">// "disableSolutionSearching": true,                 /* Opt a project out of multi-project reference checking when editing. */</span>
		<span class="token comment">// "disableReferencedProjectLoad": true,             /* Reduce the number of projects loaded automatically by TypeScript. */</span>

		<span class="token comment">/* Language and Environment */</span>
		<span class="token property">"target"</span><span class="token operator">:</span> <span class="token string">"es2016"</span> <span class="token comment">/* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */</span><span class="token punctuation">,</span>
		<span class="token comment">// "lib": [],                                        /* Specify a set of bundled library declaration files that describe the target runtime environment. */</span>
		<span class="token comment">// "jsx": "preserve",                                /* Specify what JSX code is generated. */</span>
		<span class="token comment">// "experimentalDecorators": true,                   /* Enable experimental support for TC39 stage 2 draft decorators. */</span>
		<span class="token comment">// "emitDecoratorMetadata": true,                    /* Emit design-type metadata for decorated declarations in source files. */</span>
		<span class="token comment">// "jsxFactory": "",                                 /* Specify the JSX factory function used when targeting React JSX emit, e.g. 'React.createElement' or 'h'. */</span>
		<span class="token comment">// "jsxFragmentFactory": "",                         /* Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. 'React.Fragment' or 'Fragment'. */</span>
		<span class="token comment">// "jsxImportSource": "",                            /* Specify module specifier used to import the JSX factory functions when using 'jsx: react-jsx*'. */</span>
		<span class="token comment">// "reactNamespace": "",                             /* Specify the object invoked for 'createElement'. This only applies when targeting 'react' JSX emit. */</span>
		<span class="token comment">// "noLib": true,                                    /* Disable including any library files, including the default lib.d.ts. */</span>
		<span class="token comment">// "useDefineForClassFields": true,                  /* Emit ECMAScript-standard-compliant class fields. */</span>
		<span class="token comment">// "moduleDetection": "auto",                        /* Control what method is used to detect module-format JS files. */</span>

		<span class="token comment">/* Modules */</span>
		<span class="token property">"module"</span><span class="token operator">:</span> <span class="token string">"commonjs"</span> <span class="token comment">/* Specify what module code is generated. */</span><span class="token punctuation">,</span>
		<span class="token comment">// "rootDir": "./",                                  /* Specify the root folder within your source files. */</span>
		<span class="token comment">// "moduleResolution": "node",                       /* Specify how TypeScript looks up a file from a given module specifier. */</span>
		<span class="token comment">// "baseUrl": "./",                                  /* Specify the base directory to resolve non-relative module names. */</span>
		<span class="token comment">// "paths": {},                                      /* Specify a set of entries that re-map imports to additional lookup locations. */</span>
		<span class="token comment">// "rootDirs": [],                                   /* Allow multiple folders to be treated as one when resolving modules. */</span>
		<span class="token comment">// "typeRoots": [],                                  /* Specify multiple folders that act like './node_modules/@types'. */</span>
		<span class="token comment">// "types": [],                                      /* Specify type package names to be included without being referenced in a source file. */</span>
		<span class="token comment">// "allowUmdGlobalAccess": true,                     /* Allow accessing UMD globals from modules. */</span>
		<span class="token comment">// "moduleSuffixes": [],                             /* List of file name suffixes to search when resolving a module. */</span>
		<span class="token comment">// "resolveJsonModule": true,                        /* Enable importing .json files. */</span>
		<span class="token comment">// "noResolve": true,                                /* Disallow 'import's, 'require's or '&lt;reference>'s from expanding the number of files TypeScript should add to a project. */</span>

		<span class="token comment">/* JavaScript Support */</span>
		<span class="token comment">// "allowJs": true,                                  /* Allow JavaScript files to be a part of your program. Use the 'checkJS' option to get errors from these files. */</span>
		<span class="token comment">// "checkJs": true,                                  /* Enable error reporting in type-checked JavaScript files. */</span>
		<span class="token comment">// "maxNodeModuleJsDepth": 1,                        /* Specify the maximum folder depth used for checking JavaScript files from 'node_modules'. Only applicable with 'allowJs'. */</span>

		<span class="token comment">/* Emit */</span>
		<span class="token comment">// "declaration": true,                              /* Generate .d.ts files from TypeScript and JavaScript files in your project. */</span>
		<span class="token comment">// "declarationMap": true,                           /* Create sourcemaps for d.ts files. */</span>
		<span class="token comment">// "emitDeclarationOnly": true,                      /* Only output d.ts files and not JavaScript files. */</span>
		<span class="token comment">// "sourceMap": true,                                /* Create source map files for emitted JavaScript files. */</span>
		<span class="token comment">// "outFile": "./",                                  /* Specify a file that bundles all outputs into one JavaScript file. If 'declaration' is true, also designates a file that bundles all .d.ts output. */</span>
		<span class="token property">"outDir"</span><span class="token operator">:</span> <span class="token string">"./js"</span> <span class="token comment">/* Specify an output folder for all emitted files. */</span><span class="token punctuation">,</span>
		<span class="token comment">// "removeComments": true,                           /* Disable emitting comments. */</span>
		<span class="token comment">// "noEmit": true,                                   /* Disable emitting files from a compilation. */</span>
		<span class="token comment">// "importHelpers": true,                            /* Allow importing helper functions from tslib once per project, instead of including them per-file. */</span>
		<span class="token comment">// "importsNotUsedAsValues": "remove",               /* Specify emit/checking behavior for imports that are only used for types. */</span>
		<span class="token comment">// "downlevelIteration": true,                       /* Emit more compliant, but verbose and less performant JavaScript for iteration. */</span>
		<span class="token comment">// "sourceRoot": "",                                 /* Specify the root path for debuggers to find the reference source code. */</span>
		<span class="token comment">// "mapRoot": "",                                    /* Specify the location where debugger should locate map files instead of generated locations. */</span>
		<span class="token comment">// "inlineSourceMap": true,                          /* Include sourcemap files inside the emitted JavaScript. */</span>
		<span class="token comment">// "inlineSources": true,                            /* Include source code in the sourcemaps inside the emitted JavaScript. */</span>
		<span class="token comment">// "emitBOM": true,                                  /* Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files. */</span>
		<span class="token comment">// "newLine": "crlf",                                /* Set the newline character for emitting files. */</span>
		<span class="token comment">// "stripInternal": true,                            /* Disable emitting declarations that have '@internal' in their JSDoc comments. */</span>
		<span class="token comment">// "noEmitHelpers": true,                            /* Disable generating custom helper functions like '__extends' in compiled output. */</span>
		<span class="token comment">// "noEmitOnError": true,                            /* Disable emitting files if any type checking errors are reported. */</span>
		<span class="token comment">// "preserveConstEnums": true,                       /* Disable erasing 'const enum' declarations in generated code. */</span>
		<span class="token comment">// "declarationDir": "./",                           /* Specify the output directory for generated declaration files. */</span>
		<span class="token comment">// "preserveValueImports": true,                     /* Preserve unused imported values in the JavaScript output that would otherwise be removed. */</span>

		<span class="token comment">/* Interop Constraints */</span>
		<span class="token comment">// "isolatedModules": true,                          /* Ensure that each file can be safely transpiled without relying on other imports. */</span>
		<span class="token comment">// "allowSyntheticDefaultImports": true,             /* Allow 'import x from y' when a module doesn't have a default export. */</span>
		<span class="token property">"esModuleInterop"</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">/* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */</span><span class="token punctuation">,</span>
		<span class="token comment">// "preserveSymlinks": true,                         /* Disable resolving symlinks to their realpath. This correlates to the same flag in node. */</span>
		<span class="token property">"forceConsistentCasingInFileNames"</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">/* Ensure that casing is correct in imports. */</span><span class="token punctuation">,</span>

		<span class="token comment">/* Type Checking */</span>
		<span class="token property">"strict"</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">/* Enable all strict type-checking options. */</span><span class="token punctuation">,</span>
		<span class="token comment">// "noImplicitAny": true,                            /* Enable error reporting for expressions and declarations with an implied 'any' type. */</span>
		<span class="token comment">// "strictNullChecks": true,                         /* When type checking, take into account 'null' and 'undefined'. */</span>
		<span class="token comment">// "strictFunctionTypes": true,                      /* When assigning functions, check to ensure parameters and the return values are subtype-compatible. */</span>
		<span class="token comment">// "strictBindCallApply": true,                      /* Check that the arguments for 'bind', 'call', and 'apply' methods match the original function. */</span>
		<span class="token comment">// "strictPropertyInitialization": true,             /* Check for class properties that are declared but not set in the constructor. */</span>
		<span class="token comment">// "noImplicitThis": true,                           /* Enable error reporting when 'this' is given the type 'any'. */</span>
		<span class="token comment">// "useUnknownInCatchVariables": true,               /* Default catch clause variables as 'unknown' instead of 'any'. */</span>
		<span class="token comment">// "alwaysStrict": true,                             /* Ensure 'use strict' is always emitted. */</span>
		<span class="token comment">// "noUnusedLocals": true,                           /* Enable error reporting when local variables aren't read. */</span>
		<span class="token comment">// "noUnusedParameters": true,                       /* Raise an error when a function parameter isn't read. */</span>
		<span class="token comment">// "exactOptionalPropertyTypes": true,               /* Interpret optional property types as written, rather than adding 'undefined'. */</span>
		<span class="token comment">// "noImplicitReturns": true,                        /* Enable error reporting for codepaths that do not explicitly return in a function. */</span>
		<span class="token comment">// "noFallthroughCasesInSwitch": true,               /* Enable error reporting for fallthrough cases in switch statements. */</span>
		<span class="token comment">// "noUncheckedIndexedAccess": true,                 /* Add 'undefined' to a type when accessed using an index. */</span>
		<span class="token comment">// "noImplicitOverride": true,                       /* Ensure overriding members in derived classes are marked with an override modifier. */</span>
		<span class="token comment">// "noPropertyAccessFromIndexSignature": true,       /* Enforces using indexed accessors for keys declared using an indexed type. */</span>
		<span class="token comment">// "allowUnusedLabels": true,                        /* Disable error reporting for unused labels. */</span>
		<span class="token comment">// "allowUnreachableCode": true,                     /* Disable error reporting for unreachable code. */</span>

		<span class="token comment">/* Completeness */</span>
		<span class="token comment">// "skipDefaultLibCheck": true,                      /* Skip type checking .d.ts files that are included with TypeScript. */</span>
		<span class="token property">"skipLibCheck"</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">/* Skip type checking all .d.ts files. */</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br></div></div><p>然后选择 终端 --》 运行任务 --》 监视tsconfig.json  即可</p>
</template>
