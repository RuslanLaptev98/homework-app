import React, { useState } from 'react';
import {
  Modal,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  NativeSyntheticEvent,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { tasksActions } from '../../../store/tasks/tasksSlice';
import { Colors } from '../../../styles/colors';
import { Fonts } from '../../../styles/fonts';
import Input from '../../../ui/Input';
import ModalButtons from '../../../ui/ModalButtons';

interface AddTaskModalProps {
  modalVisible: boolean;
  closeModal: (event?: NativeSyntheticEvent<any>) => void;
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({
  modalVisible,
  closeModal,
}) => {
  const dispatch = useDispatch();
  const [title, onChangeTitle] = useState<string>('');
  const [task, onChangeTask] = useState<string>('');

  const clearInputFields = () => {
    onChangeTitle('');
    onChangeTask('');
  };

  const onCancel = () => {
    closeModal();
    clearInputFields();
  };

  const onSave = () => {
    if (title.length > 0 && task.length > 0) {
      dispatch(
        tasksActions.addTask({
          task,
          title,
          completed: false,
        })
      );
      closeModal();
      clearInputFields();
    }
  };

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
            <View style={styles.contentGroup}>
              <Text style={styles.title}>Добавить предмет</Text>
              <Text style={styles.subtitle}>Укажите заголовок и задание</Text>
              <Input
                value={title}
                onChangeText={onChangeTitle}
                placeholder='Заголовок'
                autoFocus={true}
              />
              <Input
                value={task}
                onChangeText={onChangeTask}
                placeholder='Задание'
              />
            </View>

            <ModalButtons onCancel={onCancel} onSave={onSave} />
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
    alignItems: 'center',
    backgroundColor: Colors.background_modal_outer,
  },
  modalView: {
    borderRadius: 14,
    backgroundColor: Colors.background_modal,
    overflow: 'hidden',
    width: 270,
    height: 219,
  },
  contentGroup: {
    paddingHorizontal: 16,
    paddingTop: 18,
  },
  title: {
    color: Colors.text_main,
    fontFamily: Fonts.InterMedium,
    fontSize: 17,
    textAlign: 'center',
  },
  subtitle: {
    color: Colors.text_lighter,
    fontFamily: Fonts.InterRegular,
    fontSize: 13,
    textAlign: 'center',
    paddingTop: 4,
    paddingBottom: 16,
  },
});

export default AddTaskModal;
