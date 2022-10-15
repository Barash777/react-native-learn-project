import {StatusBar} from 'expo-status-bar';
import {
    ActivityIndicator,
    Alert,
    Button,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput, FlatList, ListRenderItem, Dimensions
} from 'react-native';
import {useEffect, useState} from "react";

const {width} = Dimensions.get('screen')
const WIDTH = width
const PADDING = 20
const COLUMNS_NUMBER = 2

const arrPhoneName = ['Nokia', 'Samsung', 'Yota', 'Xiaomi', 'Pixel']
const arrPrice = [156, 471, 231, 716, 213]

type DataType = {
    id: number
    phoneName: string
    price: number
}

const arrData: DataType[] = new Array(80).fill(null).map((_, i) => ({
    id: i + 1,
    phoneName: arrPhoneName[i % arrPhoneName.length],
    price: arrPrice[i % arrPrice.length]
}))

/*const Item = ({title}) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);*/

export default function App() {
    const [text, onChangeText] = useState("Some text");
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setRefreshing(false)
        }, 2000)
    }, [refreshing])

    /*const renderItem = ({item}) => (
        <Item title={item.title}/>
    );*/

    const render: ListRenderItem<DataType> = ({item}) => {
        return <View key={item.id} style={styles.item}>
            <Text numberOfLines={1}>{item.phoneName}</Text>
            <Text numberOfLines={1}>{item.price}</Text>
        </View>
    }

    return (
        <View style={styles.container}>

            <Text>Barash777</Text>

            <FlatList
                numColumns={COLUMNS_NUMBER}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                data={arrData}
                renderItem={render}
                ListEmptyComponent={() => {
                    return <View><Text>List is empty</Text></View>
                }}
                ListHeaderComponent={() => {
                    return <View><Text>Header</Text></View>
                }}
                stickyHeaderIndices={[0]}
                ListFooterComponent={() => {
                    return <View><Text>Footer</Text></View>
                }}
                refreshing={refreshing}
                onRefresh={() => {
                    setRefreshing(!refreshing)
                }}
            />
            {/*

            <ActivityIndicator/>
            <ActivityIndicator size="large"/>
            <ActivityIndicator size="small" color="#0000ff"/>
            <ActivityIndicator size="large" color="#00ff00"/>

            <Button
                title="Press me, please"
                color="blue"
                onPress={() => Alert.alert('Button with adjusted color pressed')}
            />

            <Image
                style={styles.tinyLogo}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
            />

            <TouchableOpacity
                style={styles.button}
                // onPress={onPress}
                activeOpacity={0.4}
                onLongPress={() => Alert.alert('keep it!')}
                delayLongPress={500}
            >
                <Text>Press Here</Text>
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />
            </TouchableOpacity>

            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                placeholder={'type something'}
                value={text}
            />
            */}

            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 30,
        // alignItems: 'center',
        // justifyContent: 'center',
        paddingHorizontal: 20
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        margin: 10
    },
    input: {
        height: 40,
        margin: 10,
        borderWidth: 1,
        padding: 10,
        width: 250,
    },
    item: {
        backgroundColor: 'pink',
        width: (WIDTH - PADDING * 2) / COLUMNS_NUMBER - 5,//(PADDING / COLUMNS_NUMBER),
        height: (WIDTH - PADDING * 2) / COLUMNS_NUMBER - 5,//(PADDING / COLUMNS_NUMBER),
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10
    }
});