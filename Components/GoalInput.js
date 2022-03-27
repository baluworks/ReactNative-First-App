
import { React, useState } from 'react'
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";

const GoalInput = ({ submitGoalHandler, visible, onCancel }) => {
  const [enterdGoal, setEnterdGoal] = useState('');

  const goalInputHandler = (text) => {
    setEnterdGoal(text);
  }

  const onsubmitHandler = () => {
    if(enterdGoal.length ===0 ) return ;
  
    submitGoalHandler(enterdGoal);
    setEnterdGoal('');
  }

  return (
    <Modal visible={visible}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input}
          placeholder="Course Goal" onChangeText={goalInputHandler} value={enterdGoal}>
        </TextInput>
        <View style={styles.buttonContainer}>
          <View style={styles.button}><Button title='Cancel' color='red'
            onPress={
              onCancel
            } />
          </View>
          <View style={styles.button}>
            <Button title='ADD'
              onPress={onsubmitHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

styles = StyleSheet.create({
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
    marginBottom: 10
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  button: {
    width: '40%'

  }
});

export default GoalInput;