import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import OptionsModal from '../../ui/OptionsModal';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../store/store';
import { filterActions, Option } from '../../store/filter/filterSlice';
import { Fonts } from '../../styles/fonts';
import { Colors } from '../../styles/colors';

const filterOptions: Option[] = [
  'Показывать все задания',
  'Выполненные',
  'Не выполненные',
];

const Filter: React.FC = () => {
  const dispatch = useDispatch();
  const { option } = useSelector((state: State) => state.filter);

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  const onSelectOption = (value: Option) => {
    dispatch(filterActions.changeFilter(value));
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.pressable} onPress={openModal}>
        <Text style={styles.text}>{option}</Text>
      </TouchableOpacity>

      <OptionsModal
        modalVisible={modalVisible}
        onSelectOption={onSelectOption}
        selected={option}
        options={filterOptions}
        closeModal={closeModal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 128,
    width: '100%',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: Colors.line_darker,
    borderBottomWidth: 1,
  },
  pressable: {
    width: '100%',
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Colors.blue,
    borderRadius: 8,
  },
  text: {
    fontSize: 14,
    fontFamily: Fonts.InterMedium,
    color: Colors.blue,
  },
});

export default Filter;
