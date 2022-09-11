import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import { Colors } from '../../styles/colors';
import { Fonts } from '../../styles/fonts';

interface ModalButtonsProps {
  onCancel: (event: GestureResponderEvent) => void;
  onSave: (event: GestureResponderEvent) => void;
}

const ModalButtons: React.FC<ModalButtonsProps> = ({ onCancel, onSave }) => {
  return (
    <View style={styles.buttonGroup}>
      <TouchableOpacity onPress={onCancel} style={styles.button}>
        <Text style={{ ...styles.buttonText, ...styles.cancel }}>Отмена</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onSave} style={styles.button}>
        <Text style={{ ...styles.buttonText, ...styles.save }}>Сохранить</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonGroup: {
    flexDirection: 'row',
    borderTop: 5,
    borderTopColor: 'black',
    height: 44,
  },
  button: {
    width: 135.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: Colors.white,
    borderRightWidth: 1,
    borderRightColor: Colors.white,
  },
  buttonText: {
    fontSize: 17,
    fontFamily: Fonts.InterMedium,
  },
  cancel: { color: Colors.action_secondary },
  save: { color: Colors.blue },
});

export default ModalButtons;
