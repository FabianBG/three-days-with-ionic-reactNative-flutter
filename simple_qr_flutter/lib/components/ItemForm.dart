import 'package:flutter/material.dart';
import 'package:simple_qr_flutter/injection.iconfig.dart';
import 'package:simple_qr_flutter/services/RemoteAPI.dart';

class ItemForm extends StatefulWidget {
  ItemForm({Key key, this.title}) : super(key: key);

  final String title;

  static const String routeName = "/ItemForm";

  @override
  _ItemFormState createState() => _ItemFormState();
}

class _ItemFormState extends State<ItemForm> {
  final IRemoteAPI service = getIt<IRemoteAPI>();
  final nameController = TextEditingController();

  @override
  void initState() {
    super.initState();
  }

  @override
  void dispose() {
    nameController.dispose();
    super.dispose();
  }

  void _saveData() async {
    Item item = Item.toSave(nameController.text);
    String response = await this.service.save(item);
    Navigator.pop(context, response);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: ListView(
        padding: const EdgeInsets.all(4),
        children: this._buildBody(),
      ),
    );
  }

  List<Widget> _buildBody() {
    return [
      Text(
        "Name",
        style: TextStyle(fontSize: 18.0),
      ),
      TextField(
        decoration:
            InputDecoration(border: InputBorder.none, hintText: 'Enter a name'),
        controller: nameController,
      ),
      RaisedButton(
        onPressed: _saveData,
        child: const Text('SAVE', style: TextStyle(fontSize: 20)),
      ),
    ];
  }
}
