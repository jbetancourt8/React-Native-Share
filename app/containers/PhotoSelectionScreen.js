import React, { Component } from 'react';
import {
  View,
  ListView
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Header from '../components/Header';
import SelectingPhotos from './SelectingPhotos';

class PhotoSelectionScreen extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.setState({
      ds,
      dataSource: ds.cloneWithRows(this.props.media)
    });
  }

  renderRow(rowData) {
    const { filename, uri, share } = rowData;

    return(
      <View style={styles.containerStyle}>
        <SelectingPhotos filename={ filename } uri={ uri } share={ share }/>
      </View>
    );
  }

  backButtonPressed() {
    const { parentComponent } = this.props;
    parentComponent.photoSelectionChanged();
    Actions.pop();
  }

  render() {
    const navigateBack = () => this.backButtonPressed();

    return (
      <View style={{ flex: 1 }}>

        <Header
          button={'Back'}
          onPress={ navigateBack }
          title='Photos'
        />

        <View style={styles.boxStyle}>
        <ListView
          contentContainerStyle={styles.listStyle}
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
  containerStyle: {
    alignSelf: 'flex-start'
  },
  boxStyle: {
    flex: 1,
    margin: 5,
    padding: 5,
    borderColor: 'black',
    borderWidth: 2,
  },
  listStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
};

export default PhotoSelectionScreen;
