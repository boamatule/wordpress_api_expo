import {
  View,
  StyleSheet,
  TouchableHighlight,
  Text,
  Alert,
  ActivityIndicator,
  Image,
} from 'react-native';
import firebase from 'react-native-firebase';
import t from 'tcomb-form-native';

export default class Contact extends Compoenent {
  constructor(props) {
    super(props);
    this.state = {
      submit: false
    };
  }
}