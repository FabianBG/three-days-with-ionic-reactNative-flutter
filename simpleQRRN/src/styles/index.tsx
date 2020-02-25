import { StyleProp, TextStyle } from "react-native"

interface IAppStyles {
    itemList: StyleProp<TextStyle>;
    title: StyleProp<TextStyle>;
    bottom: StyleProp<TextStyle>;
    input: StyleProp<TextStyle>;
    container: any;
}

const AppStyles: IAppStyles = {
    itemList: {
        paddingHorizontal: 0,
        marginHorizontal: 5,
        paddingVertical: 10,
        fontSize: 16,
        borderTopColor: 'gray',
        borderTopWidth: 1,
    },
    title: {
        paddingVertical: 10,
        fontSize: 18,
        fontWeight: '500',
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36,

    },
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },
    input: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginVertical: 10
    }
}

export default AppStyles