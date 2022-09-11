import React, { useState } from 'react';
import AddTaskModal from './AddTaskModal';
import BigButton from '../../ui/BigButton';

const AddTask: React.FC = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <>
      <BigButton title='Добавить' onPress={() => setModalVisible(true)} />
      <AddTaskModal
        modalVisible={modalVisible}
        closeModal={() => setModalVisible(false)}
      />
    </>
  );
};

export default AddTask;
