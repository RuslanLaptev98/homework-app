import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Colors } from '../../styles/colors';
import { Fonts } from '../../styles/fonts';

interface BigButtonProps {
  title: string;
  onPress: () => void;
}

const BigButton: React.FC<BigButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blue,
    marginHorizontal: 16,
    borderRadius: 8,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 26,
  },
  title: {
    color: Colors.white,
    fontFamily: Fonts.InterMedium,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default BigButton;
