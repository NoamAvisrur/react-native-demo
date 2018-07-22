import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

class Input extends React.Component {
 
  state = {
    Val: ''
  }

  onChangeInput = (val) => {
    this.setState({Val: val});
  }

  render() {
    return (
        <View style={styles.inputWrapper}>
            <TextInput value={this.state.Val} 
                style={styles.input} onChangeText={this.onChangeInput}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    input: {
      width: '100%',
      backgroundColor: '#fff'
    },
    inputWrapper: {
        width: '80%',
    }
  });
  

export default Input;