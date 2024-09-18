import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ImagePicker from './ImagePicker';
import LocationPicker from './LocationPicker';
import Input from '../UI/Input';

const PlaceForm = () => {
  const [title, setTitle] = useState('');

  function changeTitleHandler(value) {
    setTitle(value);
  }

  return (
    <ScrollView style={styles.form}>
      <Input label="Title" value={title} onChangeText={changeTitleHandler} />
      <ImagePicker />
      <LocationPicker />
    </ScrollView>
  );
};

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
});
