import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { contactSelectionChanged } from '../actions';
import { connect } from 'react-redux';

class SelectingContacts extends Component {
  constructor(props) {
    super(props);
    const { name, share } = props;
    this.state = {
      name,
      share
    };
  }

  getDefault() {
    return(
      <View style={styles.containerStyle}>
        <View style={{paddingRight: 10, justifyContent: 'center'}}>
          <Icon name='square-o' size={18} />
        </View>
        <View >
          <Text style={styles.textStyle}>{ this.props.name }</Text>
        </View>
      </View>
    );
  }

  getCheckedBox() {
    return(
      <View style={styles.containerStyle}>
        <View style={{paddingRight: 8, justifyContent: 'center'}}>
          <Icon name='check-square-o' size={18} />
        </View>
        <View >
          <Text style={styles.textStyle}>{ this.props.name }</Text>
        </View>
      </View>
    );
  }

  contactPressed(){
    const { name } = this.state;
    const share = !this.state.share;
    this.setState({
      share
    });

    const contact = { name, share };
    this.props.contactSelectionChanged(contact);
  }

  render() {
    const checkedBox = (this.state.share === false) ?
      this.getDefault() : this.getCheckedBox();

    return (
      <View style={{ paddingLeft: 10 }}>
        <TouchableOpacity onPress={this.contactPressed.bind(this)}>
          {checkedBox}
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  textStyle: {
    fontSize: 20,
  }
};

export default connect(null, { contactSelectionChanged })(SelectingContacts);
