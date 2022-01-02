import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
  Platform,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from "react-native";
import { Fontisto, AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { theme } from "./colors";

interface ItoDo {
  [key: string]: {
    text: string;
    done: boolean;
    working: boolean;
    editToggle: boolean;
  };
}

const STORAGE_KEY = "@toDos";

export default function App() {
  const [working, setWorking] = useState(true);
  const [text, setText] = useState("");
  const [toDos, setToDos] = useState<ItoDo>({});

  useEffect(() => {
    loadToDos();
  }, []);

  const travel = () => setWorking(false);
  const work = () => setWorking(true);
  const onChangeText = (payload: string) => setText(payload);

  const saveToDos = async (toSave: object) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
    } catch (e) {
      console.log(e);
    }
  };
  const loadToDos = async () => {
    try {
      const s = await AsyncStorage.getItem(STORAGE_KEY);
      if (s) {
        setToDos(JSON.parse(s));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const addToDo = async () => {
    if (text === "") {
      return;
    }
    try {
      // deep copy
      const newToDos = {
        ...toDos,
        [Date.now()]: { text, done: false, working, editToggle: false },
      };
      setToDos(newToDos);
      await saveToDos(newToDos);
      setText("");
    } catch (e) {
      console.log(e);
    }
  };

  const deleteToDo = (key: string) => {
    if (Platform.OS === "web") {
      const ok = confirm("Do you want to delete this Todo?");
      if (ok) {
        const newToDos = { ...toDos };
        delete newToDos[key];
        setToDos(newToDos);
        saveToDos(newToDos);
      }
    } else {
      // 3번째 인자인 배열에는 버튼들이 위치한다
      Alert.alert("Delete To Do", "Are you sure?", [
        { text: "Cancel" },
        {
          text: "Delete",
          style: "destructive",
          // 선택시 동작
          onPress: () => {
            const newToDos = { ...toDos };
            delete newToDos[key];
            setToDos(newToDos);
            saveToDos(newToDos);
          },
        },
      ]);
    }
  };

  const doneToDo = (key: string) => {
    const newToDos = { ...toDos };
    newToDos[key].done = !newToDos[key].done;
    setToDos(newToDos);
    saveToDos(newToDos);
  };

  const editToDo = (key: string) => {
    const newToDos = { ...toDos };
    newToDos[key].editToggle = !newToDos[key].editToggle;
    setToDos(newToDos);
    saveToDos(newToDos);
  };

  const fixToDo = (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
    key: string
  ) => {
    const newToDos = { ...toDos };
    newToDos[key].text = e.nativeEvent.text;
    newToDos[key].editToggle = !newToDos[key].editToggle;
    setToDos(newToDos);
    saveToDos(newToDos);
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
          <Text
            style={{
              fontSize: 38,
              fontWeight: "600",
              color: working ? "white" : theme.grey,
            }}
          >
            Work
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travel}>
          <Text
            style={{
              fontSize: 38,
              fontWeight: "600",
              color: !working ? "white" : theme.grey,
            }}
          >
            Travel
          </Text>
        </TouchableOpacity>
      </View>
      <TextInput
        onSubmitEditing={addToDo}
        onChangeText={onChangeText}
        value={text}
        returnKeyType="done"
        placeholder={
          working ? "What do you have to do?" : "Where do you want to go?"
        }
        style={styles.input}
      />
      <ScrollView>
        {Object.keys(toDos).map((key) =>
          toDos[key].working === working ? (
            <View style={styles.toDo} key={key}>
              {toDos[key].editToggle ? (
                <TextInput
                  onSubmitEditing={(e) => fixToDo(e, key)}
                  returnKeyType="done"
                  placeholder={toDos[key].text}
                  style={styles.input}
                />
              ) : (
                <Text
                  style={toDos[key].done ? styles.doneText : styles.toDoText}
                >
                  {toDos[key].text}
                </Text>
              )}
              <View style={styles.box}>
                <TouchableOpacity onPress={() => editToDo(key)}>
                  <AntDesign name="edit" size={24} style={styles.check} />
                </TouchableOpacity>
                {toDos[key].done ? (
                  <TouchableOpacity onPress={() => doneToDo(key)}>
                    <AntDesign name="reload1" size={24} style={styles.check} />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={() => doneToDo(key)}>
                    <AntDesign name="check" size={24} style={styles.check} />
                  </TouchableOpacity>
                )}
                <TouchableOpacity onPress={() => deleteToDo(key)}>
                  <Fontisto name="trash" size={18} color={theme.grey} />
                </TouchableOpacity>
              </View>
            </View>
          ) : null
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  box: {
    flexDirection: "row",
  },
  check: {
    paddingRight: 20,
    color: "white",
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 100,
  },

  input: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 20,
    fontSize: 18,
  },
  toDo: {
    backgroundColor: theme.toDoBg,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  toDoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  doneText: {
    color: theme.grey,
  },
});
