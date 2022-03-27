
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = ({ title ,id,onDelete }) => {

    return (
        <TouchableOpacity onPress={onDelete.bind(this,id)}>
            <View style={styles.listItem} >
                <Text>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: 'lightgrey',
        borderColor: 'black',
        borderWidth: 1,
        width: '80%'
    }
})

export default GoalItem;