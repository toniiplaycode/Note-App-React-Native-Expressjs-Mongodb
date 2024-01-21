import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./components/Home";
import { useEffect, useState } from "react";
import axios from "axios";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";

const Stack = createNativeStackNavigator();

 const App = () => {
  const [showSort, setShowSort] = useState(false);
  const [showSignOut, setShowSignOut] = useState(false);
  const [sort, setSort] = useState(true); // true: DES, false: ASC
  const [data, setData] = useState([]);
  const [userId, setUserId] = useState();

  const fetchData = async () => {
    // phải dùng IPv4 chứ dùng localhost là lỗi liền    
    if(userId) {
      try {
        const response = await axios.post("http://192.168.1.16:8085/fetchNote/", 
          {
            "userId": userId
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
    }
  };

  useEffect(() => {
    fetchData(); 
  }, [userId, userId]); 

  const handleSignup = () => {

  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"> 
        <Stack.Screen 
          name="LogIn"
          component={(props) => (
            <LogIn {...props} setUserId={setUserId} fetchData={fetchData} />
          )}
          options={{ headerShown: false }}
        />

        <Stack.Screen 
          name="SignUp"
          component={(props) => (
            <SignUp {...props} />
          )}
          options={{ headerShown: false }}
        />
        
        <Stack.Screen
          name="Home"
          component={(props) => (
            <Home {...props} showSort={showSort} setShowSort={setShowSort} showSignOut={showSignOut} setShowSignOut={setShowSignOut} sort={sort} setSort={setSort} data={data} fetchData={fetchData} userId={userId}/>
          )}
          options={() => ({
            headerTitle: "NOTE APP",
            headerTitleAlign: 'center',
            headerLeft: () => (
              <View>
                <TouchableOpacity
                  onPress={() => {setShowSignOut(true)}}
                >
                  <Image
                    style={styles.user}
                    source={require('./assets/user.png')}
                  />
                </TouchableOpacity>
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