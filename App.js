import React, { useState } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  ToastAndroid,
  Platform,
  AlertIOS
} from 'react-native';
import { Button } from 'react-native-elements';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

import Tiles from './Tiles'

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

class App extends React.Component {

  state = {
    text: '',
    textForChild: '',
    tilesVisible: false
  }

  handle = () => {
    const text = this.state.text;
    if (text.length > 1 && text !== '') {
        this.notifyMessage("Please choose a single digit number between 0-9")
    } else if (parseInt(text,10) >=0 && parseInt(text,10)<=9){
        this.setState({textForChild: text, tilesVisible: true});
  }
}

   notifyMessage = (msg) => {
    if (Platform.OS === 'android') {
      ToastAndroid.show(msg, ToastAndroid.LONG)
    } else {
      AlertIOS.alert(msg);
    }
  }

  handleText = (event) => {
    const {eventCount, target, text} = event.nativeEvent;
      this.setState({text: text});
  }

  checkIfGameContinued = () => {
    if(this.state.tilesVisible) {
        return (
            <View>
                <Tiles chosenNumber={this.state.textForChild} />
            </View>
        );
    } else {
        return null;
    }
  }
  render () {
    return (
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            >
            <View
              style={{
                backgroundColor: '#59f74a',
              }}>
              <Section title="Welcome to Game." >
                You are required to choose a number between 0-9 and after that you will be given three chances to guess that one number out of 9 options.
                To play the <Text style={styles.highlight}>Game</Text> further please enter the number.
              </Section>
              </View>
                <View styles={styles.inputContainer}>
                    <TextInput
                      style={{height: 70}}
                      placeholder="Please Enter a number Between 1-9"
                      onChange={this.handleText}                    />
                </View>
                <View styles={[{ width: "50%",  height: "50%",margin: 10}]}>
                    <Button
                      title="Submit"
                      onPress = {this.handle.bind(this)}
                      disabled = {this.state.tilesVisible}
                    />
                </View>
                {this.checkIfGameContinued()}
          </ScrollView>
        </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    marginBottom: 32
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  outerContainer: {
      justifyContent: 'center',
      alignItems: 'flex-start',
      width: '90%',
      marginBottom: 20,
      marginTop: 20
      },
  labelText: {
      fontFamily: 'rubik-bold',
      fontSize: 14,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 5,
  },
  inputContainer: { // added styles
      height: 40,
      width: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.3);',
      shadowColor: 'rgba(0, 0, 0, 0.15)',
      shadowOffset: {width: 0,height: 2},
      shadowOpacity: 50,
      shadowRadius: 10,
      borderRadius: 2,
      marginBottom: 10,
      marginTop: 10
  },
  inputStyles: {
      height: '100%',
      width: '100%',
      fontSize: 14,
      color: '#fff',
      paddingLeft: 15,
      fontFamily: 'rubik-bold',
  },
  marginFromAll: {
        width: '50%',
        marginTop:10,
        marginBottom:10
    },
});

export default App;
