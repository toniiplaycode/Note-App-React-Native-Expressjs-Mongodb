import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

const Home = ({showSort, setShowSort}) => {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>

            <Modal
                visible={showSort}
                transparent
                onRequestClose={()=>setShowSort(false)} // trên android có nút quay lại để thoát
            >
                <View style={styles.modal_container}>
                <View style={styles.modal_box}>
                    <Pressable
                        onPress={() => {setShowSort(!showSort)}}
                    >
                        <Text style={styles.textSort}>
                            Ascending 
                        </Text>
                    </Pressable>
                    <Pressable
                        onPress={() => {setShowSort(!showSort)}}
                    >
                        <Text style={styles.textSort}>
                            Descending
                        </Text>
                    </Pressable>
                </View>
                </View>
            </Modal> 

        </View>
    );
}

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
      borderRadius: 5,
      marginTop: 5
    },
    modal_container: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "flex-end",
      backgroundColor: "#00000099"
    },
    modal_box: {
      width: 150,
      height: 80,
      backgroundColor: "white",
      top: 55,
      borderRadius: 10,
      padding: 10,
      marginRight: 5,
      justifyContent: "space-between"
    },
    textSort: {
        fontSize: 18,
        fontWeight: "bold",
    }
  });
   

export default Home;