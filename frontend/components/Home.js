import { useEffect, useState } from "react";
import { Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import axios from "axios";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = ({navigation, showSort, setShowSort, showSignOut, setShowSignOut, sort, setSort, data, fetchData, userId}) => {  // có navigation cho dù không truyền props
    const [search, setSearch] = useState();
    const [sortedData, setSortedData] = useState([]); 


    useEffect(() => {
        const sorted = data.slice().sort((a, b) => {
            const dateA = new Date(a.createdAt);
            const dateB = new Date(b.createdAt);
            if(sort) return dateB - dateA;
            else return dateA - dateB;
        });

        setSortedData(sorted);
    }, [data]);

    useEffect(() => {
        // Sắp xếp và lọc data dựa trên giá trị search và thứ tự sắp xếp
        const sortedAndFilteredData = data
            .filter((item) => {
                // Lọc dữ liệu dựa trên giá trị search
                if (!search || 
                    item.title.toLowerCase().includes(search.toLowerCase()) ||
                    item.content.toLowerCase().includes(search.toLowerCase())
                ) {
                    return true;
                }
                return false;
            })
            .sort((a, b) => {
                const dateA = new Date(a.createdAt);
                const dateB = new Date(b.createdAt);
                if(sort) return dateB - dateA;
                else return dateA - dateB;
            });
    
        setSortedData(sortedAndFilteredData);
    }, [data, search, sort]);

    const handleAddNote = async (newNote) => {
        // phải dùng IPv4 chứ dùng localhost là lỗi liền
        try {
            await axios.post("http://192.168.1.16:8085/createNote/", 
                newNote,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                },
            );
        } catch (error) {
            console.error("Error create data:", error);
        }

        fetchData();
    }

    return (
        <View style={{position: "relative"}}>
            <Modal
                visible={showSignOut}
                transparent
                onRequestClose={()=>setShowSignOut(false)} // trên android có nút quay lại để thoát
            >
                <View style={styles.modal_container_signout}>
                <View style={styles.modal_box_signout}>
                    <TouchableOpacity
                        onPress={async () => {
                            setShowSignOut(!showSignOut);
                            await AsyncStorage.removeItem("userId");
                            navigation.navigate("LogIn");
                        }}
                    >
                        <Text style={styles.textModal}>
                            Sign Out
                        </Text>
                    </TouchableOpacity>
                </View>
                </View>
            </Modal>

            <Modal
                visible={showSort}
                transparent
                onRequestClose={()=>setShowSort(false)} // trên android có nút quay lại để thoát
            >
                <View style={styles.modal_container}>
                <View style={styles.modal_box}>
                    <TouchableOpacity
                        onPress={() => {
                            setShowSort(!showSort)
                            setSort(false)
                        }}
                    >
                        {
                            sort == false ? (
                                <Text style={styles.textModal_active}>
                                    Ascending 
                                </Text>
                            ) : (
                                <Text style={styles.textModal}>
                                    Ascending 
                                </Text>
                            )
                        }
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            setShowSort(!showSort)
                            setSort(true)
                        }}
                    >
                    {
                        sort == true ? (
                            <Text style={styles.textModal_active}>
                                Descending 
                            </Text>
                        ) : (
                            <Text style={styles.textModal}>
                                Descending 
                            </Text>
                        )
                    }
                    </TouchableOpacity>
                </View>
                </View>
            </Modal> 

            <View style={styles.TextInput_container}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Search your note..."
                    value={search}
                    onChangeText={(value) => setSearch(value)}
                />
            </View>
            
            <ScrollView>
                <View style={styles.note_container}>
                {
                    sortedData.map((i, index) => (
                        <NoteItem title={i.title} content={i.content} createdAt={i.createdAt} id={i._id} index={index} fetchData={fetchData}/>
                    ))
                }
                </View>
            </ScrollView> 

            <AddNote handleAddNote={handleAddNote} userId={userId}/>
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
    modal_container_signout: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "flex-start",
      backgroundColor: "#00000099"
    },
    modal_box_signout: {
      width: 150,
      height: 50,
      backgroundColor: "white",
      top: 55,
      borderRadius: 10,
      padding: 10,
      marginRight: 5,
      justifyContent: "space-between",
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
      justifyContent: "space-between",
    },
    textModal: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center"
    },
    textModal_active: {
        fontSize: 18,
        fontWeight: "bold",
        display: "flex",
        backgroundColor: "#b3cccc",
        borderRadius: 5,
        paddingVertical: 1,
        textAlign: "center"
    },
    TextInput: {
      borderWidth: 0.5,
      width: "80%",
      borderRadius: 18,
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft: 10,
    },
    TextInput_container: {
        width: "100%",
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: "center",
        // backgroundColor: "#fff"
    },
    note_container: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        paddingLeft: 14,
        paddingRight: 14,
        marginBottom: 100
    },
  });
   

export default Home;