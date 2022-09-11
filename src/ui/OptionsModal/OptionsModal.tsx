import React, { PropsWithChildren } from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  NativeSyntheticEvent,
  TouchableWithoutFeedback,
} from 'react-native';
import { Colors } from '../../styles/colors';
import { Fonts } from '../../styles/fonts';

interface OptionsModalProps<T> {
  modalVisible: boolean;
  options: T[];
  selected: T;
  onSelectOption: (value: T) => void;
  closeModal: (event?: NativeSyntheticEvent<any>) => void;
}

const OptionsModal = <OptionType extends string>({
  modalVisible,
  onSelectOption,
  options,
  selected,
  closeModal,
}: PropsWithChildren<OptionsModalProps<OptionType>>): JSX.Element => {
  return (
    <Modal
      visible={modalVisible}
      animationType='fade'
      transparent={true}
      onRequestClose={closeModal}
    >
      <TouchableOpacity style={styles.centeredView} onPress={closeModal}>
        <TouchableWithoutFeedback>
          <View style={styles.modalView}>
            <FlatList
              data={options}
              renderItem={(option) => (
                <TouchableOpacity
                  onPress={() => onSelectOption(option.item)}
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
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.background_modal_outer,
  },
  modalView: {
    borderRadius: 14,
    backgroundColor: Colors.white,
    overflow: 'hidden',
    margin: 8,
  },
  option: {
    height: 56,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background_modal,
    marginBottom: 1,
  },
  optionText: {
    fontSize: 16,
    fontFamily: Fonts.InterMedium,
    color: Colors.text_lighter,
  },
  optionTextActive: {
    color: Colors.blue,
  },
});

export default OptionsModal;
