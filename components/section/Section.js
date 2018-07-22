import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const section = (props) => {

    return <View style={styles.mainWrapper}>
        <Text>{props.title}</Text>
        <Text>{props.amount}</Text>
    </View>
}

const styles = StyleSheet.create({
    mainWrapper: {
      flex: 1,
      backgroundColor: '#ddd',
      padding: 20,
      flexDirection: 'row-reverse',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderWidth: 1,
      borderColor: '#fff',
    },
  });

export default section;