import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const SignUp = ({navigation}) => { // có navigation cho dù không truyền props
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>NOTE APP</Text>
      <View>
        <Text>Welcome!</Text>
      </View>
      <View style={styles.TextInput_container}>
            <TextInput
                style={styles.TextInput}
                placeholder="Name"
                value={name}
                onChangeText={(value) => setName(value)}
            />
            <TextInput
                style={styles.TextInput}
                placeholder="Email"
                value={email}
                onChangeText={(value) => setEmail(value)}
            />
            <TextInput
                style={styles.TextInput}
                placeholder="Password"
                value={password}
                onChangeText={(value) => setPassword(value)}
            />
            <TouchableOpacity
                onPress={() => {

                }}
                style={styles.button}
            >
                <Text style={styles.text_button}>
                    Sign Up
                </Text>
            </TouchableOpacity>


            <Text>You have a accout ?</Text>
            <Text style={{color: '#ff6600'}}
              onPress={() => navigation.navigate('LogIn')}>
              Log In
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

export default SignUp;
