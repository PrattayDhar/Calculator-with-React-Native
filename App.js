import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const App = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');

  const calculate = operator => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    switch (operator) {
      case '+':
        setResult(num1 + num2);
        break;
      case '-':
        setResult(num1 - num2);
        break;
      case '*':
        setResult(num1 * num2);
        break;
      case '/':
        setResult(num1 / num2);
        break;
      case '%':
        setResult(num1 % num2);
        break;
      default:
        setResult('Invalid operator');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Enter number 1"
        value={number1}
        onChangeText={text => setNumber1(text)}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Enter number 2"
        value={number2}
        onChangeText={text => setNumber2(text)}
        keyboardType="numeric"
      />
      <View style={{ flexDirection: 'column', justifyContent: 'center'  }}>
        <Button title="+" onPress={() => calculate('+')} />
      </View>
      <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
         <Button title="-" onPress={() => calculate('-')} />
      </View>
      <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
        <Button title="*" onPress={() => calculate('*')} />
      </View>
      <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
     <Button title="/" onPress={() => calculate('/')} />
      </View>
      <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
     <Button title="%" onPress={() => calculate('%')} />
      </View>  
      <Text>Result: {result}</Text>
    </View>
  );
};

export default App;
