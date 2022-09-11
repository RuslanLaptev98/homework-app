import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Trash } from 'iconsax-react-native';
import { Colors } from '../../styles/colors';

interface DeleteButtonProps {
  onPress: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Trash size={24} color={Colors.text_lighter_2} variant='Linear' />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.gray,
    borderRadius: 8,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DeleteButton;
