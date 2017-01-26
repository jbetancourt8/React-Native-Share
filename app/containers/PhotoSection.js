import React, { Component } from 'react';
import {
  View,
  Text,
  ListView,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import SelectedPhotos from './SelectedPhotos';

class PhotoSection extends Component {
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
    this.photoSelectionChanged();
  }

  photoSelectionChanged() {
    const { ds } = this.state;
    const selectedPhotos = this.props.media.filter((photo) => { return photo.share === true; });

    this.setState({
      ds,
      dataSource: ds.cloneWithRows(selectedPhotos)
    });
  }

  renderRow(rowData) {
    const { uri, share } = rowData;

    return (
      <View style={styles.containerStyle}>
        <SelectedPhotos uri={uri} share={share} />
      </View>
    );
  }

  photoPressed() {
    const { media } = this.props;
    const parentComponent = this;
    Actions.photoselection({ media, parentComponent });
  }

  render() {
    const navigateToPhotos = () => this.photoPressed();

    return (
      <View style={{ flex: 1 }}>

        <TouchableOpacity onPress={ navigateToPhotos }>
          <Text style={styles.textStyle}>Photos</Text>
        </TouchableOpacity>

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
  listStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
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

export default PhotoSection;
