import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { TickSquare } from 'iconsax-react-native';

interface CompletedButtonProps {
  completed: boolean;
  completionHandler: () => void;
}

const CompletedButton: React.FC<CompletedButtonProps> = ({
  completed,
  completionHandler,
}) => {
  return (
    <Pressable style={styles.container} onPress={completionHandler}>
      {completed ? (
        <TickSquare size={30} color='#469D3E' variant='Bold' />
      ) : (
        <TickSquare size={30} color='#292D32' variant='TwoTone' />
      )}
    </Pressable>
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
