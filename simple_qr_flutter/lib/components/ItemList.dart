import 'package:flutter/material.dart';
import 'package:flutter/scheduler.dart';
import 'package:simple_qr_flutter/components/ItemDetail.dart';
import 'package:simple_qr_flutter/components/ItemForm.dart';
import 'package:simple_qr_flutter/injection.iconfig.dart';
import 'package:simple_qr_flutter/services/RemoteAPI.dart';
import 'package:qrscan/qrscan.dart' as scanner;

class ItemList extends StatefulWidget {
  ItemList({Key key, this.title}) : super(key: key);

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  static const String routeName = "/ItemList";

  @override
  _ItemListState createState() => _ItemListState();
}

class _ItemListState extends State<ItemList> {
  IRemoteAPI service = getIt<IRemoteAPI>();

  List<Item> items = List();
  int totalItems = 0;
  final int defaultShow = 10;
  int show;

  @override
  void initState() {
    super.initState();
    setState(() {
      show = this.defaultShow;
    });
    SchedulerBinding.instance.addPostFrameCallback((_) => this.getData());
  }

  void getData() async {
    debugPrint('Getting data');
    List<Item> response = await this.service.get();
    setState(() {
      totalItems = response.length;
      if (this.show == -1) {
        items = response.reversed.toList();
      } else {
        items = response.reversed.toList().sublist(0, this.show);
      }
    });
  }

  void toggleShow() {
    debugPrint('Update show $defaultShow');

    if (this.show == -1) {
      setState(() {
        show = this.defaultShow;
      });
    } else {
      setState(() {
        show = -1;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    debugPrint('refresh list');
    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: ListView(
        padding: const EdgeInsets.all(4),
        children: this._buildBody(items, totalItems, show),
      ),
    );
  }

  List<Widget> _buildBody(List<Item> items, int totalItems, int show) {
    List<Widget> body = this._buildButtons(totalItems, show);
    body.addAll(this._buildList(items));
    return body;
  }

  List<Widget> _buildButtons(int totalItems, int show) {
    String showText = 'SHOW ALL';
    if (show == -1) {
      showText = 'HIDE ALL';
    }
    return [
      Text(
        "Total of items # $totalItems",
        style: TextStyle(fontSize: 18.0),
      ),
      RaisedButton(
        onPressed: () {
          toggleShow();
          getData();
        },
        child: Text(showText, style: TextStyle(fontSize: 20)),
      ),
      Row(
        crossAxisAlignment: CrossAxisAlignment.center,
        mainAxisAlignment: MainAxisAlignment.center,
        mainAxisSize: MainAxisSize.max,
        children: <Widget>[
          RaisedButton(
            onPressed: _navigateToWithCallback(ItemForm.routeName, {}),
            child: const Text('NEW', style: TextStyle(fontSize: 20)),
          ),
          RaisedButton(
            onPressed: _scanCode,
            child: const Text('SCAN', style: TextStyle(fontSize: 20)),
          ),
        ],
      )
    ];
  }

  Widget _buildRow(Item item) {
    return ListTile(
      onTap: _navigateTo(ItemDetail.routeName, {'id': item.id}),
      title: Text(
        "${item.restaurantId == "" ? "" : item.restaurantId} - ${item.status}",
        style: TextStyle(fontSize: 18.0),
      ),
    );
  }

  List<Widget> _buildList(List<Item> items) {
    return List.generate(items.length, (i) {
      if (i.isOdd) return Divider();
      return _buildRow(items[i]);
    });
  }

  _navigateTo(String route, Map args) {
    return () => Navigator.pushNamed(context, route, arguments: args);
  }

  _navigateToWithCallback(
    String route,
    Map args,
  ) {
    return () async {
      String response =
          await Navigator.pushNamed(context, route, arguments: args) as String;
      this.getData();
      _showAlert(context, response);
    };
  }

  void _showAlert(BuildContext context, String text) {
    showDialog(
        context: context,
        builder: (context) => AlertDialog(
              title: Text("Alert"),
              content: Text(text),
            ));
  }

  void _scanCode() async {
    String cameraScanResult = await scanner.scan();
    debugPrint('SCAN RES $cameraScanResult');
    Navigator.pushNamed(context, ItemDetail.routeName,
        arguments: {'id': cameraScanResult});
  }
}
