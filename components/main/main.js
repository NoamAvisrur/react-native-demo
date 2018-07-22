import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';

const main = (props) => (
    <TouchableWithoutFeedback onPress={() => alert('clicked')}>
        <View style={styles.mainWrapper}>
            <Text>hello world</Text>
        </View>
    </TouchableWithoutFeedback>
)

const styles = StyleSheet.create({
    mainWrapper: {
      flex: 1,
      backgroundColor: '#222',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default main;