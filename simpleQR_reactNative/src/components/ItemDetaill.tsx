import * as React from 'react';
import { View, Text, Button, TouchableOpacity, Alert, TextInput } from 'react-native';
import RemoteAPI from '../services/RemoteAPI';
import AppStyles from '../styles';


class ItemDetail extends React.PureComponent<any> {

    private service = RemoteAPI;
    readonly state: any = {
        item: {},
    };

    async componentDidMount() {
        const { id } = this.props.route.params;

        console.log(`GET ${id}`);

        const item = await this.service.getOne(id);
        console.log(item);

        this.setState({
            item: item.result
        })
    }

    render() {
        return <React.Fragment>
            <Text style={AppStyles.title}>Details</Text>
            <View style={AppStyles.container}>
                <Text style={{ width: '50%', fontSize: 16 }}>ID</Text>
                <Text style={{ width: '50%', fontSize: 16 }}>{this.state.item.id}</Text>
                <Text style={{ width: '50%', fontSize: 16 }}>Name</Text>
                <Text style={{ width: '50%', fontSize: 16 }}>{this.state.item.restaurant_id}</Text>
                <Text style={{ width: '50%', fontSize: 16 }}>Status</Text>
                <Text style={{ width: '50%', fontSize: 16 }}>{this.state.item.status}</Text>
            </View>
        </React.Fragment>;
    }


    save = async () => {
        const res = await this.service.post(this.state.item);
        Alert.alert(JSON.stringify(res));
        this.props.navigation.navigate('home');
    }

    onChangeText = (text: string) => {
        this.setState({
            item: {
                restaurant_id: text,
                order_items: [
                    {}
                ]
            }
        })
    }

}
export default ItemDetail;
