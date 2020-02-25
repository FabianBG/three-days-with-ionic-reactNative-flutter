import * as React from 'react';
import { Text, TouchableOpacity, Alert } from 'react-native';
import RemoteAPI from '../services/RemoteAPI';
import QRCodeScanner from 'react-native-qrcode-scanner';


class ItemQRFinder extends React.PureComponent<any> {

    private service = RemoteAPI;
    readonly state: any = {
        item: {},
    };

    render() {
        return <React.Fragment>
            <QRCodeScanner
                onRead={this.onSuccess}
                topContent={
                    <Text>PUT A QR CODE TO SCAN</Text>
                }
            />
        </React.Fragment>;
    }

    onSuccess = (event: any) => {
        console.log(`QR detected ${event.data}`);
        this.props.navigation.navigate('desc', { id: event.data })
    }


}
export default ItemQRFinder;
