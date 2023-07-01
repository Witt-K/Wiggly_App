import { View, TextInput, StyleSheet } from "react-native";

export default function Input(
  value,
  //   setValue,
  placeholder,
  secureTextEntry
) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        // onChangeText={setValue}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#d3d3d3",
    borderColor: "purple",
    borderWidth: 1,
    borderRadius: 3,
    padding: 10,
    marginVertical: 15,
  },
  input: {
    width: 100,
  },
});
