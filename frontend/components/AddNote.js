import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, TextInput, Button, StyleSheet } from "react-native";

const AddNote = ({ onAddNote }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [newNote, setNewNote] = useState({ userId: "653e290a6e6f2bfba80dca51", title: "", content: "" });

  const handleAddNote = () => {
    onAddNote(newNote);
    setNewNote({ title: "", content: "" });
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.addButtonContainer}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={modalVisible}
        transparent
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
            <View style={styles.modalBox}>
                <TouchableOpacity style={styles.buttonClose} onPress={() => setModalVisible(false)} >
                    <Text
                        style={styles.buttonCloseX}
                    >
                        X
                    </Text>
                </TouchableOpacity>                                
                <TextInput
                    style={styles.input}
                    placeholder="Title"
                    value={newNote.title}
                    onChangeText={(text) => setNewNote({ ...newNote, title: text })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Content"
                    multiline
                    value={newNote.content}
                    onChangeText={(text) => setNewNote({ ...newNote, content: text })}
                />
                <Button title="Add Note" onPress={handleAddNote} />
            </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: "100%"
  },
  addButtonContainer: {
    left: "80%",
    top: "70%"
  },
  addButton: {
    backgroundColor: "#00ccff",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000099",
  },
  modalBox: {
    width: 300,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 8,
    marginBottom: 10,
  },
  buttonClose: {
    width: 30,
    height: 30,
    backgroundColor: "#123",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    position: "relative",
    left: "90%"
  },
  buttonCloseX: {
    color: "#f0f0f0",
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default AddNote;
