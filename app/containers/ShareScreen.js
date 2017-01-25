import React, { Component } from 'react';
import {
  View
} from 'react-native';
import { connect } from 'react-redux';
import ContactSection from './ContactSection';
import PhotoSection from './PhotoSection';
import Header from '../components/Header';
import Button from '../components/Button';

class ShareScreen extends Component {
  buttonPressed(){
    console.log('Pressed');
  }

  render() {
    return (
      <View style={{ flex: 1 }}>

        <Header
          title={'Share'}
        />

        <ContactSection contacts={ this.props.contacts }/>
        <PhotoSection media={ this.props.media }/>

        <Button text={'Share'} onPress={this.buttonPressed.bind(this)} />

      </View>
    );
  }
}

const mapStateToProps = state => {
  const { contacts } = state.contactlist;
  const { media } = state.photolist;

  return {
    contacts,
    media
  };
};

export default connect(mapStateToProps)(ShareScreen);
