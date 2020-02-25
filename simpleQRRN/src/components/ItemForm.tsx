import * as React from 'react';
import { View, Text, Button, TouchableOpacity, Alert, TextInput } from 'react-native';
import RemoteAPI from '../services/RemoteAPI';
import AppStyles from '../styles';


class ItemForm extends React.PureComponent<any> {

    private service = RemoteAPI;
    readonly state: any = {
        item: {},
    };

    render() {
        return <React.Fragment>
            <Text style={AppStyles.title}>Create item</Text>
            <View style={AppStyles.container}>
                <View style={{ width: '100%' }}>
                    <TextInput
                        style={AppStyles.input}
                        onChangeText={this.onChangeText}
                        value={this.state.item.restaurant_id}
                    />
                </View>
                <View style={{ width: '100%' }}>
                    <Button
                        title="Save"
                        onPress={this.save}
                    />
                </View>
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
export default ItemForm;
