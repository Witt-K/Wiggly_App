import { View, Button, Alert } from "react-native";

export default function NewButton({ title }) {
  function randomSong() {
    return Alert.alert("somebody once told me");
  }
  return <Button title={title} onPress={randomSong} />;
}
