import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./components/Home";
import { useState } from "react";

const Stack = createNativeStackNavigator();

 const App = () => {
  const [showSort, setShowSort] = useState(false)
  const [sort, setSort] = useState(true); // true: ASC, false: DES
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={(props) => (
            <Home {...props} showSort={showSort} setShowSort={setShowSort} />
          )}
          options={() => ({
            headerTitle: "NOTE APP",
            headerTitleAlign: 'center',
            headerLeft: () => (
              <View>
                <Image
                  style={styles.user}
                  source={require('./assets/user.png')}
                />
              </View>
            ),
            headerRight: () => (
              <View>
                <TouchableOpacity
                 onPress={() => {setShowSort(true)}}
                >
                  <Image
                    style={styles.user}
                    source={require('./assets/sort.png')}
                  />
                </TouchableOpacity>
              </View>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  user: {
    width: 35,
    height: 35
  }
});

export default App;