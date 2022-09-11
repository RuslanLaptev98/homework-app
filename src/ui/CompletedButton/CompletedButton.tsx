import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { TickSquare } from 'iconsax-react-native';
import { Colors } from '../../styles/colors';

interface CompletedButtonProps {
  completed: boolean;
  completionHandler: () => void;
}

const CompletedButton: React.FC<CompletedButtonProps> = ({
  completed,
  completionHandler,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={completionHandler}>
      {completed ? (
        <TickSquare size={30} color={Colors.green} variant='Bold' />
      ) : (
        <TickSquare size={30} color={Colors.dark_gray} variant='TwoTone' />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CompletedButton;
