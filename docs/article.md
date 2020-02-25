# Create projects
## React native 
Install all de dependencias isted in the oficial page and the client react native (react native page)[https://facebook.github.io/react-native/docs/getting-started]

Initializate the project with ts support:

`react-native init AwesomeTSProject --template react-native-template-typescript`


Run the project 

`react-native run android`

## Ionic

Install all the dependecies mentioned in the web page (ionic page)[https://ionicframework.com/docs/angular/your-first-app]

Initialize the project:

`ionic start simpleQRIonic blank --type=angular --capacitor`

Run the project: 
`ionic serve`

Extra configuration for mobile

`ionic build`

`npx cap add android`

`ionic capacitor run android`


## Flutter

Install all the dependencies mentioned on the web page (flutter page)[https://flutter.dev/docs/get-started/install]

Initialize the project

`flutter create myapp`

Run the project:
`flutter run`


## Project scope
Simple mobile application, it has to fetch data form a rest service display in a table, can create new items and search item by a qr code.
There are 4 views:

* Main view the list of objects
* Create view form to create new object
* Item view description of the item
* Qr scan view with scans a qr code and redirect to finded objet in the item view

## React native development
For react native, we are goint to keep simple no redux, no externat styling libraries just the base, routing library and a qr native plugin.

### Install extra dependencies

React navigation
`npm install @react-navigation/native @react-navigation/stack`
`npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view`

For each platform has to be modified a file of configuration son the official guide referers to it [https://reactnavigation.org/docs/en/getting-started.html]

Finally a qr code scaner 
`npm install react-native-camera --save`

`npm install react-native-qrcode-scanner --save`

for more info refer to this page [https://github.com/moaazsidat/react-native-qrcode-scanner]

### Code repo
The full code of the sampel can be founded in this repo: 

## Ionic development

As the same in react we goint to keep it easy with just a simple couple of views no testing and an easy development, in ionic we can develop the app enterly in the web browser then we can test on the phone or if we want test directly in the phone.

### Install extra dependecies

For ionic the routing library is alredy included, in this case angular router, you can choose form vue and react to start an ionic project. We can use the client ionic to create pages, components and services fore more info refer to [https://ionicframework.com/docs/cli/commands/generate]

For the instalation of a qr scanr plugin it does no support capacitor the new antive engine of ionic so we need to use cordova
`ionic cordova plugin add phonegap-plugin-barcodescanner`
`npm install @ionic-native/barcode-scanner`

### Code repo

The full code repo of this sample i son this url


## Flutter development

For flutter a kind of new framework as the other ones we do not going to create a well tested bes coded application, as I am new into dart it will be a simple app
that have the same behaivor of the other two.

### Install extra dependecies
For this development we hae to include the http libray an injectable just for fun.
An for the qr scaner qrscan to isntall refer to this apge [https://pub.dev/packages/qrscan]

### Code repo
The full code repo of this sample i son this url


## Results

### Development


### Performance


### Usage


## Conclusions
