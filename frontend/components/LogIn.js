import axios from 'axios';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const LogIn = ({navigation, setUserId}) => { // có navigation cho dù không truyền props
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async (obj) => {
    // console.log(obj);
    try {
      const response = await axios.post("http://192.168.1.13:8085/signin/", 
        obj,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      setUserId(response.data._id);
      fetchData(); 
      
    } catch (error) {
      console.error("Error login: ", error);
    }

    navigation.navigate("Home");
  }

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
                  handleLogin({email, password});
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
