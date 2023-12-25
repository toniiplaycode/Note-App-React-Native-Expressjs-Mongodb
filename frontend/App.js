import { Button, DrawerLayoutAndroidBase, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./components/Home";
import { useEffect, useState } from "react";
import axios from "axios";

const Stack = createNativeStackNavigator();

 const App = () => {
  const [showSort, setShowSort] = useState(false)
  const [sort, setSort] = useState(true); // true: ASC, false: DES
  const [data, setData] = useState([]);

  const fetchData = async () => {
    // phải dùng IP chứ dùng localhost là lỗi liền
    try {
      const response = await axios.post("http://192.168.10.247:8085/fetchNote/", 
        {
          userId: "653e290a6e6f2bfba80dca51",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(); 
  }, []); 
  
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={(props) => (
            <Home {...props} showSort={showSort} setShowSort={setShowSort} data={data} fetchData={fetchData}/>
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