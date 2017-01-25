import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class SelectedContacts extends Component {
  getDefault() {
    return (
      <View />
    );
  }

  getSelected() {
    return (
      <View style={styles.containerStyle}>
        <View style={{paddingRight: 5, justifyContent: 'center'}}>
          <Icon name='check-square-o' size={18} />
        </View>
        <View >
          <Text style={styles.textStyle}>{this.props.name}</Text>
        </View>
      </View>
    );
  }

  render() {
    const selected = (this.props.share !== true) ?
      this.getDefault() : this.getSelected();

    return (
      <View>{selected}</View>
    )
  }
}

const styles = {
  containerStyle: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  textStyle: {
    fontSize: 20
  }
};

export default SelectedContacts;
