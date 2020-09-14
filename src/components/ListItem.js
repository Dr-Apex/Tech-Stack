import React, {useEffect} from 'react';
import {Text, TouchableWithoutFeedback, View, LayoutAnimation, Platform, UIManager} from 'react-native';
import {connect} from 'react-redux';
import {CardSection} from './common';
import * as actions from '../actions';

const ListItem = ({ item, selectLibrary, expanded }) => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
    LayoutAnimation.spring();
  }, []);

  const {id, title, description} = item;

  const showDescription = () => {
    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>{description}</Text>
        </CardSection>
      );
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => selectLibrary(id)}>
      <View>
        <CardSection>
          <Text style={styles.titleStyle}>{title}</Text>
        </CardSection>
        {showDescription()}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.item.id;

  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
