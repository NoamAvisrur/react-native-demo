import React from 'react';
import { StyleSheet, View, Text, Button, Modal } from 'react-native';

import Input from '../input/Input';

class MyModal extends React.Component {
 
  state = {
      showModal: false
  }

  openModal = () => {
      this.setState({showModal: true});
  }

  render() {
    return (
      <View>
        <Button style={{margin: 10}} title='myButton'onPress={this.openModal}/>
        <Modal visible={this.state.showModal} 
                animationType={'slide'} onRequestClose={() => null }>
            <View>
                <Text>hello modal</Text>
            </View>
            <Button title='close' onPress={() => {this.setState({showModal: false})}}/>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  
  },
 
});

export default MyModal;