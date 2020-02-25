import 'package:flutter/widgets.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

import 'package:injectable/injectable.dart';

class Item {
  final String id;
  final String customerId;
  final String status;
  final int createdOn;
  final String restaurantId;
  final Object orderItems;

  Item._({
    this.id,
    this.customerId,
    this.status,
    this.createdOn,
    this.orderItems,
    this.restaurantId,
  });

  factory Item.toSave(String name) {
    return new Item._(
        restaurantId: name,
        createdOn: 0,
        customerId: '',
        id: '',
        orderItems: [{}],
        status: '');
  }

  factory Item.fromJson(Map<String, dynamic> json) {
    return new Item._(
      id: json['id'],
      restaurantId: json['restaurant_id'],
      customerId: json['customer_id'],
      status: json['status'],
      createdOn: json['created_on'],
      orderItems: json['order_items'],
    );
  }

  factory Item.empty() {
    return new Item._(
        id: '', restaurantId: '', customerId: '', status: '', orderItems: [{}]);
  }
}

@Bind.toType(RemoteAPI)
@injectable
abstract class IRemoteAPI {
  Future<List<Item>> get();
  Future<Item> getOne(String id);
  Future<String> save(Item data);
}

@injectable
class RemoteAPI implements IRemoteAPI {
  final String apiURL =
      'https://f120c00b.ngrok.io/dev-gokit-base/api/v1/orders';

  @override
  Future<List<Item>> get() async {
    List<Item> list = List();
    final response = await http.get(apiURL);
    if (response.statusCode == 200) {
      List data = (json.decode(response.body) as Map<String, dynamic>)['result']
          as List;
      list = data.map((data) => new Item.fromJson(data)).toList();
    } else {
      throw Exception('Failed to load items');
    }
    return list;
  }

  @override
  Future<Item> getOne(String id) async {
    Item item;
    final response = await http.get("$apiURL/id/$id");
    if (response.statusCode == 200) {
      item = new Item.fromJson(json.decode(response.body)['result']);
    } else {
      throw Exception('Failed to load item');
    }
    return item;
  }

  @override
  Future<String> save(Item data) async {
    String item;
    String body = json.encode({
      'id': data.id,
      'restaurant_id': data.restaurantId,
      'customer_id': data.customerId,
      'status': data.status,
      'created_on': data.createdOn,
      'order_items': data.orderItems,
    });
    final response = await http.post("$apiURL",
        headers: {"content-type": "application/json"}, body: body);
    if (response.statusCode == 200) {
      debugPrint("POST ${response.body}");
      item = json.decode(response.body).toString();
    } else {
      debugPrint("POST ${response.body} $body");
      throw Exception('Failed to create items');
    }
    return item;
  }
}
