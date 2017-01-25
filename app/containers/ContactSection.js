import React, { Component } from 'react';
import {
  View,
  Text,
  ListView,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import SelectedContacts from './SelectedContacts';

class ContactSection extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      });
    this.state = {
      ds
    };
  }

  componentWillMount() {
    this.contactSelectionChanged();
  }

  contactSelectionChanged() {
    const { ds } = this.state;
    const selectedContacts = this.props.contacts.filter(
      (contact) => { return contact.share === true; });

    this.setState({
      ds,
      dataSource: ds.cloneWithRows(selectedContacts)
    });
  }

  renderRow(rowData) {
    const { name, share } = rowData;

    return (
      <SelectedContacts name={name} share={share} />
    );
  }

  contactPressed() {
    const { contacts } = this.props;
    const parentComponent = this;
    Actions.contactselection({ contacts, parentComponent });
  }

  render() {
    const navigateToContacts = () => this.contactPressed();

    return (
      <View style={{ flex: 1, paddingTop: 10 }}>

        <TouchableOpacity onPress={ navigateToContacts }>
          <Text style={styles.textStyle}>Contacts</Text>
        </TouchableOpacity>

        <View style={styles.boxStyle}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
            enableEmptySections={true}
          />
        </View>

      </View>
    );
  }
}

const styles = {
  textStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: 10
  },
  boxStyle: {
    flex: 1,
    margin: 5,
    padding: 5,
    borderColor: 'black',
    borderWidth: 2
  }
};

export default ContactSection;
