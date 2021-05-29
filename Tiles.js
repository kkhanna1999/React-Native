import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Alert
} from 'react-native';
import { Button } from 'react-native-elements';

class Tiles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
             eliminatedOptionList: [],
             retries: 3,
             createdArray: []
         };
    }

    refreshPage() {
        const initialState = {eliminatedOptionList: [], retries: 3, createdArray: []};
        this.setState(initialState);
        this.componentDidMount.bind(this);
    }

    showCongratulationsAlert() {
        Alert.alert(
            'Hey! Congratulations, You are a luck master',
            'Yow Won',
            [
               {text: 'Play Again', onPress: () => {this.refreshPage()}},
            ]
        );
    }

    showGameOverAlert() {
        Alert.alert(
            'Sorry! Better Luck next Time',
            'Yow Loose',
            [
               {text: 'Play Again', onPress: () => {this.refreshPage()}},
            ]
        );
    }

    handleButtonEvent(id) {;
        const list = this.state.eliminatedOptionList
        list.push(id);
        const remainingRetries = this.state.retries-1;
        if(id === parseInt(this.props.chosenNumber,10)) {
            this.showCongratulationsAlert();
        } else if (remainingRetries === 0) {
            this.showGameOverAlert();
        }
        this.setState({eliminatedOptionList: list, retries: remainingRetries});
    }

     shuffle(array) {
            let ctr = array.length;
            let index = 0;
            let temp = 0;
            while (ctr > 0) {
                index = Math.floor(Math.random() * ctr);
                ctr--;
                temp = array[ctr];
                array[ctr] = array[index];
                array[index] = temp;
            }
            return array;
        }

        setArrayForTiles() {
            const items = [];
            Array.from(Array((10))).map((_, index) => {
                items.push(index);
                return index;
            });
             const finalList = this.shuffle(items);
             this.setState({createdArray: finalList})
        }

    componentDidMount() {
        this.setArrayForTiles();
    }

     getButtonList = () => {
         const arrayToCreateTiles = this.state.createdArray;
          return arrayToCreateTiles.map((number) => {
          return <Button style={styles.marginFromAll}
                title={'Try your luck !'}
                onPress={this.handleButtonEvent.bind(this, number)}
                disabled={this.state.eliminatedOptionList.includes(number)}
                key={number}
          />
        })
      }

    render() {
        return (
            this.getButtonList()
        );
    }
}

const styles = StyleSheet.create({
  marginFromAll: {
        width: '50%',
        marginTop:20,
        marginBottom:20
    },
});

export default Tiles;