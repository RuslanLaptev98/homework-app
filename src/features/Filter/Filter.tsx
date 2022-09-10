import React from 'react';
import { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import OptionsModal from '../../ui/OptionsModal';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../store/store';
import { filterActions, Option } from '../../store/filter/filterSlice';

const filterOptions: Option[] = [
  'Показывать все задания',
  'Выполненные',
  'Не выполненные',
];

const Filter: React.FC = () => {
  const dispatch = useDispatch();
  const { option } = useSelector((state: State) => state.filter);

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const onModalOpen = () => setModalVisible(true);
  const onModalClose = (value: Option) => {
    dispatch(filterActions.changeFilter(value));
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.pressable} onPress={onModalOpen}>
        <Text style={styles.text}>{option}</Text>
      </Pressable>

      <OptionsModal
        modalVisible={modalVisible}
        onModalClose={onModalClose}
        selected={option}
        options={filterOptions}
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
  },
  pressable: {
    width: '100%',
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#3785CC',
    borderRadius: 8,
  },
  text: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#3785CC',
  },
});

export default Filter;
