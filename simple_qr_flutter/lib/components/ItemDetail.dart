import 'package:flutter/material.dart';
import 'package:simple_qr_flutter/injection.iconfig.dart';
import 'package:simple_qr_flutter/services/RemoteAPI.dart';

class ItemDetail extends StatefulWidget {
  ItemDetail({Key key, this.title, this.props}) : super(key: key);

  final String title;

  final Map props;

  static const String routeName = "/ItemDetail";

  @override
  _ItemDetailState createState() => _ItemDetailState(props['id']);
}

class _ItemDetailState extends State<ItemDetail> {
  _ItemDetailState(String id) {
    this.id = id;
  }

  final IRemoteAPI service = getIt<IRemoteAPI>();
  Item item;
  String id;

  @override
  void initState() {
    super.initState();
    setState(() {
      item = new Item.empty();
    });
    this.getData(this.id);
  }

  void getData(String id) async {
    Item response = await this.service.getOne(id);
    setState(() {
      id = id;
      item = response;
    });
  }

  @override
  Widget build(BuildContext context) {
    debugPrint("SEARCH $id");
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: ListView(
        padding: const EdgeInsets.all(4),
        children: this._buildBody(item),
      ),
    );
  }

  List<Widget> _buildBody(Item item) {
    return [
      Text(
        "ID",
        style: TextStyle(fontSize: 18.0),
      ),
      Text(
        item.id,
        style: TextStyle(fontSize: 18.0),
      ),
      Text(
        "Name",
        style: TextStyle(fontSize: 18.0),
      ),
      Text(
        item.restaurantId,
        style: TextStyle(fontSize: 18.0),
      ),
      Text(
        "Status",
        style: TextStyle(fontSize: 18.0),
      ),
      Text(
        item.status,
        style: TextStyle(fontSize: 18.0),
      ),
    ];
  }
}
