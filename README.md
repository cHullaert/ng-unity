# introduction

this project is purposed to allow an integration with unity webgl application in component angular 4 easily.  

# User side

## unity side

* make an amazing unity application
* build your application in webgl, please use webassembly for test and performance purpose

## angular side
* create an application angular 4
  `ng new myIncredibleApplication`

* import this module
  `npm install ng-unity`

* use the directive <unity-app></unity-app> to add your app in your dom model
* copy build.json & *.unityweb file generated by unity inside your assets project, be sure the path in build.json refers to path for unityweb files
* build your angular application
* start your application & enjoy

you can find an example on the repository https://github.com/cHullaert/unity-tester


# Dev' side
## Pack the component
`npm run packagr`
that will create a dist package of the component

## publish to npm
`npm publish`
