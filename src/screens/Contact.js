import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Text,
  Alert,
  ActivityIndicator,
  Image,
} from 'react-native';
// import firebase from 'react-native-firebase';
import t from 'tcomb-form-native';
import firebase from "../component/Firebase";
// import {Formik} from 'formik';
// import * as Yup from 'yup';
import Constants from "expo-constants";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submit: false
    };
  }

  render() {
    const Form = t.form.Form;
    const ContactForm = t.struct({
      email: t.String,
      name: t.String,
      message: t.String,
    });
    return (
      <View style={styles.container}>
        <Form from={ContactForm}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  constainer: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
    },
    button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
});