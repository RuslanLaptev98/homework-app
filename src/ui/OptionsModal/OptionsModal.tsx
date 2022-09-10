import React, { PropsWithChildren } from 'react';
import {
  View,
  Text,
  Pressable,
  Modal,
  StyleSheet,
  FlatList,
} from 'react-native';

interface OptionsModalProps<T> {
  modalVisible: boolean;
  options: T[];
  selected: T;
  onModalClose: (value: T) => void;
}

const OptionsModal = <OptionType extends string>({
  modalVisible,
  onModalClose,
  options,
  selected,
}: PropsWithChildren<OptionsModalProps<OptionType>>): JSX.Element => {
  return (
    <Modal visible={modalVisible} animationType='fade' transparent={true}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <FlatList
            data={options}
            renderItem={(option) => (
              <Pressable
                onPress={() => onModalClose(option.item)}
                style={styles.option}
              >
                <Text
                  style={
                    selected === option.item
                      ? { ...styles.optionText, ...styles.optionTextActive }
                      : styles.optionText
                  }
                >
                  {option.item}
                </Text>
              </Pressable>
            )}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  modalView: {
    borderRadius: 14,
    backgroundColor: '#fff',
    overflow: 'hidden',
    margin: 8,
  },
  option: {
    height: 56,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(249, 249, 249, 0.94)',
    marginBottom: 1,
  },
  optionText: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: '#737A82',
  },
  optionTextActive: {
    color: '#3785CC',
  },
});

export default OptionsModal;
