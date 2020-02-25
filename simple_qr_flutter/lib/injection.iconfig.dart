// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// InjectableConfigGenerator
// **************************************************************************

import 'package:simple_qr_flutter/services/RemoteAPI.dart';
import 'package:get_it/get_it.dart';

final getIt = GetIt.instance;
void $initGetIt({String environment}) {
  getIt
    ..registerFactory<IRemoteAPI>(() => RemoteAPI())
    ..registerFactory<RemoteAPI>(() => RemoteAPI());
}
