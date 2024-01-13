import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const LogIn = ({navigation}) => { // có navigation cho dù không truyền props
  return (
    <View style={styles.container}>
      <Text style={styles.title}>NOTE APP</Text>
      <View>
        <Text>Welcome!</Text>
      </View>
      <View style={styles.TextInput_container}>
            <TextInput
                style={styles.TextInput}
                placeholder="Email"
                // value={search}
                // onChangeText={(value) => setSearch(value)}
            />
            <TextInput
                style={styles.TextInput}
                placeholder="Password"
                // value={search}
                // onChangeText={(value) => setSearch(value)}
            />
            <TouchableOpacity
                onPress={() => {

                }}
                style={styles.button}
            >
                <Text style={styles.text_button}>
                    Log In
                </Text>
            </TouchableOpacity>

            <Text>You don't have accout ?</Text>
            <Text style={{color: '#ff6600'}}
              onPress={() => navigation.navigate('SignUp')}>
              Sign up
            </Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff"
  },
  title:{
    fontSize: 30,
    fontWeight: "bold",
    color: "#ff6600"
  },
  TextInput_container: {
      width: "100%",
      paddingTop: 10,
      paddingBottom: 10,
      alignItems: "center",
  },
  TextInput: {
    width: "80%",
    borderRadius: 10,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 10,
    backgroundColor: "#e0ebeb",
    marginBottom: 10
  },
  button: {
    width: "80%",
    borderRadius: 10,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 10,
    backgroundColor: "#ff6600",
    marginBottom: 10,
    alignItems: "center",
    marginTop: 10
  },
  text_button: {
    fontWeight: "bold",
    fontSize: 16
  }
});

export default LogIn;
