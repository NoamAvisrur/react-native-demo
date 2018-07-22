import React from 'react';
import { StyleSheet, View, Text, Button, ActivityIndicator, Image } from 'react-native';

import Input from '../input/Input';
import Logo from '../../assets/check-point-logo.png';
import MyModal from '../modal/Modal';

class Login extends React.Component {

  state = {}

  static navigationOptions = {
      header: null
  }

  render() {
    const { navigate } = this.props.navigation; 
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
            <Text style={{color: '#fff', fontSize: 30}}>Login App</Text>
            <Input />
            <ActivityIndicator size='large' color='pink' animating={true}/>
            <MyModal />
            <Button title='goHome' onPress={() => {
                navigate('Home');
            }}></Button>
        </View>
        <View style={styles.image}>
          <Image source={Logo} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#111',
    alignItems: 'center'
  },
  image: {
    justifyContent: 'flex-end',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#111',
    padding: 20
  }
});

export default Login;