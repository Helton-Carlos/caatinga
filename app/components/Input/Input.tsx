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
    backgroundColor: 'transparent',
    paddingTop: 14,
    paddingBottom: 14,
    borderWidth: 1,
    margin: 1
  },
});
