import React, { Component } from 'react';
import {
  View,
  Image,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');
const DEFAULT_ITEM_MARGIN = 14;
const DEFAULT_ITEMS_PER_ROW = 2;
const photoSize = Math.floor(width / DEFAULT_ITEMS_PER_ROW);

class SelectedPhotos extends Component {
  getDefault() {
    return (
      <View />
    );
  }

  getSelected() {
    const uri = this.props.uri;

    return(
      <View style={{ padding: 1 }}>
        <Image style={styles.imageSize} source={{ uri }} />
      </View>
    );
  }

  render() {
    const selected = (this.props.share !== true) ?
      this.getDefault() : this.getSelected();

    return(
      <View>{selected}</View>
    );
  }
}

const styles = {
  imageSize: {
    width: photoSize - DEFAULT_ITEM_MARGIN,
    height: photoSize - DEFAULT_ITEM_MARGIN
  }
};

export default SelectedPhotos;
