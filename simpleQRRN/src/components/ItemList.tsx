import * as React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import RemoteAPI from '../services/RemoteAPI';
import { FlatList } from 'react-native-gesture-handler';
import AppStyles from '../styles';
import App from '../../App';

class ItemList extends React.PureComponent<any> {

    private service = RemoteAPI;
    private readonly showDefault = 10;
    readonly state: any = {
        data: [],
        show: this.showDefault,
    };

    async componentDidMount() {
        this.getData()
        this.props.navigation.addListener('focus', () => {
            this.getData()
        });
    }

    async getData() {
        const data = await this.service.get();
        this.setState({
            data: data.result.reverse()
        });
    }

    render() {
        let splited = this.state.data.slice(0, this.state.show);
        let show = "Show all"
        if (this.state.show === -1) {
            splited = this.state.data;
            show = "Hide"
        }
        return <React.Fragment>
            <Text style={AppStyles.title}>Total of items # {this.state.data.length}</Text>
            <View style={AppStyles.container}>
                <View style={{ width: '100%' }}>
                    <Button
                        title={show}
                        onPress={this.showAll}
                    />
                </View>
                <View style={{ width: '50%', paddingTop: 5 }}>
                    <Button
                        title="New"
                        onPress={this.navigate('new')}
                    />
                </View>
                <View style={{ width: '50%', paddingTop: 5 }}>
                    <Button
                        title="Find"
                        onPress={this.navigate('qr')}
                    />
                </View>
                <View style={{ width: '100%' }}>
                    <FlatList
                        data={splited}
                        renderItem={this.renderItem(this.props.navigation)}
                        keyExtractor={(item: any) => item.id}
                    />

                </View>
            </View>
        </React.Fragment>;
    }


    renderItem(navFn: any) {
        return ({ item }: any) => {
            return (
                <TouchableOpacity onPress={() => navFn.navigate('desc', { id: item.id })}>
                    <Text style={AppStyles.itemList}>{item.restaurant_id || 'Anonymous'} - {item.status}</Text>
                </TouchableOpacity>
            );
        }
    }

    showAll = () => {
        if (this.state.show !== -1) {
            this.setState({
                show: -1,
            })
        }
        else {
            this.setState({
                show: this.showDefault,
            })
        }
    }

    navigate(to: string) {
        return () => {
            this.props.navigation.navigate(to)
        }
    }
}
export default ItemList;
