#Author- PARDEEP BHASIN

#Knowledge Sharing

1.) what is cache group inside split chunk
cacheGroups is where we define rules for how Webpack should group chunks into output files. I have one here called 'vendor' that will be used for any module being loaded from node_modules . Normally, you would just define a name for the output file as a string.

2.) mini-css-extract-plugin : This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS. It supports On-Demand-Loading of CSS and SourceMaps.

--------------------------------------------------------------------------------

#Issues facing while implmenting Webpack

Issue 1 : ClassName styles not working in react
Solution : Use below code with css-loader.

{
  loader: 'css-loader',
  options: {
    modules: true
  }
}

Issue 2 : When our source code has gone thorugh transformations, debugging becomes a problem. When
debugging in browser , how to tell browser where the original code is ? Source map solves this
problem by providing a mapping between the original and the transformed source code. In addition to source
compiling to JavaScript, this works for styling as well.

Issue 3: React router implementation error cannot GET url

Use historyApiFallback: true in web config will fix this issue

3.) Support for the experimental syntax 'dynamicImport' isn't currently enabled :

Install plugin-syntax-dynamic-import  to support dynamic import

4.) regeneratorRuntime is not defined.

Standalone runtime for Regenerator-compiled generator and async functions.

Install babel runtime

--------------------------------------------------------------------------------

