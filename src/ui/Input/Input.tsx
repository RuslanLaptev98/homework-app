import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { Colors } from '../../styles/colors';

interface InputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  autoFocus?: boolean;
}

const Input: React.FC<InputProps> = ({
  value,
  onChangeText,
  placeholder,
  autoFocus,
}) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={Colors.input_placeholder}
      selectionColor={Colors.input_cursor}
      autoFocus={autoFocus ?? false}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: Colors.white,
    borderRadius: 7,
    borderWidth: 0.5,
    borderColor: Colors.input_border,
    height: 32,
    padding: 4,
    marginBottom: 15,
    color: Colors.text_main,
  },
});

export default Input;
