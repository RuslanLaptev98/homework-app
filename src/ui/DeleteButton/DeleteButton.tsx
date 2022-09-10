import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Trash } from 'iconsax-react-native';

interface DeleteButtonProps {
  onPress: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Trash size={24} color='#6F767E' variant='Linear' />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DeleteButton;
