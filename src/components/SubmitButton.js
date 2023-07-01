import { StyleSheet, Text, Pressable } from "react-native";

export default function SubmitButton({ onPress, text }) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}> {text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "violet",
    width: "30%",
    padding: 15,
    marginVertical: 15,
    borderRadius: 3,
    borderColor: "purple",
    borderWidth: 1,
  },
  text: { textAlign: "center", fontWeight: "bold" },
});
