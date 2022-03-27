import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput';
export default function App() {

  const [courseGoals, setCourseGolas] = useState([]);
  const [isGoalModalVisible, setisGoalModalVisible] = useState(false);

  const addGoalHandler = (enterdGoal) => {
    enterdGoal && setCourseGolas(
      (currentGoals) =>
        [...currentGoals, { date: new Date().toString(), value: enterdGoal }]);
    setisGoalModalVisible(false); 
  }
  const onDeleteHandler = (id) => {
    console.log(id);
    setCourseGolas(currentGoals => currentGoals.filter(goal => goal.date !== id));
  }
  const onCancelHandler = ()=>setisGoalModalVisible(false);
  return (
    <View style={styles.screen}>
      <Button
        title='Add New Goal'
        onPress={() => setisGoalModalVisible(true)} />
      <GoalInput visible={isGoalModalVisible}
        submitGoalHandler={addGoalHandler}  onCancel={onCancelHandler}/>
      <FlatList
        keyExtractor={(item, index) => item.date}
        data={courseGoals}
        renderItem={itemData =>
          <GoalItem id={itemData.item.date} title={itemData.item.value} onDelete={onDeleteHandler} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 50,
    padding: 20
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 5
  },
}
);