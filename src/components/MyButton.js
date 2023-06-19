import { Button, Alert } from "react-native";

export default function MyButton() {
  return (
    <Button
      title="Press me"
      onPress={() => {
        Alert.alert("Button pressed");
      }}
    />
  );
}
