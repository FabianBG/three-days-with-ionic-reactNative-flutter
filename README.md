# Three days of Ionic, React Native and Flutter
Three projects ob the most famous hybrid mobile development frameworks, this repo contains the code for the apps than been developed and the results.

# Project definition

As a simple test I defined a simple application with a native integration to the camera, so the project is composed of four views, a native integration to read a qr code, rest service consumption and a view wich renders a long list of items.

## Views

* Item list: The main view wich one get data from a custom service and show 10 or the full list with a toggle button to show all or just 10.

* Item form: a very simple form to insert a new item, wich redirects to item list and shows a modal with the id of a new item.

* Item detail: A detail view of the item wich one consumes a get one service.

* QR scaner: An integration with the device camera to read a qr code with an item id, after it succedd it redirect to item detaill view.

## Before start

I used an ngrook api published on my laptop so if you wanto to use your api endpoint change the RemoteAPI file in each project it has the url of the rest endpoint.

## React native project
On the folder: 
simpleQR_reactNative [https://github.com/FabianBG/three-days-with-ionic-reactNative-flutter/tree/master/simpleQR_reactNative]

![Alt text of image](https://github.com/FabianBG/three-days-with-ionic-reactNative-flutter/blob/master/docs/reactNative/rn-showcase.png?raw=true)

## Ionic project
On the folder:
simpleQR_ionic [https://github.com/FabianBG/three-days-with-ionic-reactNative-flutter/tree/master/simpleQR_ionic]


![Alt text of image](https://github.com/FabianBG/three-days-with-ionic-reactNative-flutter/blob/master/docs/ionic/io-showcase.png?raw=true)

## Flutter project:
On the folder:
simple_qr_flutter [https://github.com/FabianBG/three-days-with-ionic-reactNative-flutter/tree/master/simple_qr_flutter]

![Alt text of image](https://github.com/FabianBG/three-days-with-ionic-reactNative-flutter/blob/master/docs/flutter/fl-showcase.png?raw=true)


# Licence

MIT


