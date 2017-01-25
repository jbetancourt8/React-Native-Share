import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { photoSelectionChanged } from '../actions';
import { connect } from 'react-redux';

const { width } = Dimensions.get('window');
const DEFAULT_ITEM_MARGIN = 14;
const DEFAULT_ITEMS_PER_ROW = 2;
const photoSize = Math.floor(width / DEFAULT_ITEMS_PER_ROW);

class SelectingPhotos extends Component {
  constructor(props) {
    super(props);
    const { uri, share } = props;
    this.state = {
      uri,
      share
    };
  }

  getDefault() {
    return(
      <View>
        <Image style={styles.imageSize} source={{ uri: this.props.uri }}>
          <View style={{ position: 'relative' }}>
            <Icon name='square-o' size={35} />
          </View>
        </Image>
      </View>
    );
  }

  getCheckedBox() {
    return(
      <View>
        <Image style={styles.imageSize} source={{ uri: this.props.uri }}>
          <View style={{ position: 'relative' }}>
            <Icon name='check-square-o' size={35} />
          </View>
        </Image>
      </View>
    );
  }

  photoPressed() {
    const { uri } = this.state;
    const share = !this.state.share;
    this.setState({
      share
    });

    const photo = { uri, share };

    this.props.photoSelectionChanged(photo);
  }

  render() {
    const checkedBox = (this.state.share === false) ?
      this.getDefault() : this.getCheckedBox();

    return(
      <View >
        <TouchableOpacity onPress={this.photoPressed.bind(this)} style={styles.imageStyle}>
          {checkedBox}
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  imageStyle: {
    position: 'relative',
    padding: 1,
    borderColor: 'black',
    borderWidth: 2
  },
  imageSize: {
    width: photoSize - DEFAULT_ITEM_MARGIN,
    height: photoSize - DEFAULT_ITEM_MARGIN
  }
};

export default connect(null, { photoSelectionChanged })(SelectingPhotos);
