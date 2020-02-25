import 'package:flutter/material.dart';
import 'package:simple_qr_flutter/components/ItemDetail.dart';
import 'package:simple_qr_flutter/components/ItemForm.dart';
import 'package:simple_qr_flutter/components/ItemList.dart';
import 'package:simple_qr_flutter/injection.dart';

void main() {
  configureInjection(Env.prod);
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'SampleQR',
      theme: ThemeData(
        // This is the theme of your application.
        //
        // Try running your application with "flutter run". You'll see the
        // application has a blue toolbar. Then, without quitting the app, try
        // changing the primarySwatch below to Colors.green and then invoke
        // "hot reload" (press "r" in the console where you ran "flutter run",
        // or simply save your changes to "hot reload" in a Flutter IDE).
        // Notice that the counter didn't reset back to zero; the application
        // is not restarted.
        primarySwatch: Colors.blue,
      ),
      home: ItemList(title: 'HOME'),
      onGenerateRoute: (RouteSettings settings) {
        var routes = <String, WidgetBuilder>{
          ItemDetail.routeName: (BuildContext context) =>
              new ItemDetail(title: "DETAIL", props: settings.arguments as Map),
          ItemForm.routeName: (BuildContext context) =>
              new ItemForm(title: "NEW")
        };
        WidgetBuilder builder = routes[settings.name];
        return MaterialPageRoute(builder: (ctx) => builder(ctx));
      },
    );
  }
}
