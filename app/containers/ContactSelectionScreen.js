import React, { Component } from 'react';
import {
  View,
  ListView
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Header from '../components/Header';
import SelectingContacts from './SelectingContacts';

class ContactSelectionScreen extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.setState({
      ds,
      dataSource: ds.cloneWithRows(this.props.contacts)
    });
  }

  renderRow(rowData) {
    const { name, share } = rowData;

    return(
      <SelectingContacts  name={name} share={share}/>
    );
  }

  backButtonPressed() {
    const { parentComponent } = this.props;
    parentComponent.contactSelectionChanged();
    Actions.pop();
  }

  render() {
    const navigateBack = () => this.backButtonPressed();

    return(
      <View style={{ flex: 1 }}>

        <Header
          button={'Back'}
          onPress={ navigateBack }
          title='Contacts'
        />

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
  boxStyle: {
    flex: 1,
    margin: 5,
    padding: 5,
    borderColor: 'black',
    borderWidth: 2
  }
};

export default ContactSelectionScreen;
