import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NativeModules} from 'react-native';
const {HelloPT} = NativeModules; // this is the same name we returned in getName function.

function App(): JSX.Element {
  const [id, setId] = useState('Press the button to get The ID');
  const Change = () => {
    HelloPT.sayHello('hitesh', (err, msg) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(msg);
    });
  };

  console.log({HelloPT});
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={styles.id}>{id}</Text>
      <Button title="Get Id" />
      <Button onPress={Change} title="call native function" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  id: {
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default App;
