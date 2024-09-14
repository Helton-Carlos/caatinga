import { StyleSheet, TextInput, TextInputProps } from 'react-native';

export default function Input({ ...rest }: TextInputProps) {
  return (
    <TextInput
      style={styles.input}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    backgroundColor: 'transparent',
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 15,
  },
});
