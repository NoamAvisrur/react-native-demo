import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import Main from '../main/main';
import Section from '../section/Section';

class Home extends React.Component {

  static navigationOptions = {
    title: 'Home'
  }
 
  state = {

  }

  componentWillMount(){
    this.setState({})
  }

  render() {
    return (
      <View style={styles.container}>
        <Main />
        <View style={{flex: 1}}>
            <Section title='protected devices' amount='1' />
            <Section title='malisios devices' amount='2'/>
            <Section title='statics devices' amount='1'/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default Home;