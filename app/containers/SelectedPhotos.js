import React, { Component } from 'react';
import {
  View,
  Image,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { _, width } = Dimensions.get('window');
const photoSize = Math.floor(width / 3);

class SelectedPhotos extends Component {
  getDefault() {
    return (
      <View />
    );
  }

  getSelected() {
    const uri = this.props.uri;

    return(
      <View>
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
    width: photoSize,
    height: photoSize
  }
};

export default SelectedPhotos; 
