import React from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import ListItem from './ListItem';

const LibraryList = ({ libraries }) => {
  return (
    <FlatList
      data={libraries}
      keyExtractor={library => library.id}
      renderItem={({ item }) => {
        return <ListItem item={item} />;
      }}
    />
  );
};

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
