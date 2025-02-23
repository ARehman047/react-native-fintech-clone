import React from 'react';

import Tile from './Tile';
import SortableList from './SortableList';
import { View } from 'react-native';

const tiles = [
  {
    id: 'spent',
  },
  {
    id: 'cashback',
  },
  {
    id: 'recent',
  },
  {
    id: 'cards',
  },
];

const WidgetList = () => {
  return (
    <View
      style={{
        marginTop: 20,
        marginBottom: 80,
      }}>
      <SortableList
        editing={true}
        onDragEnd={(positions) => console.log(JSON.stringify(positions, null, 2))}>
        {[...tiles].map((tile) => (
          <Tile onLongPress={() => true} key={tile.id} id={tile.id} />
        ))}
      </SortableList>
    </View>
  );
};

export default WidgetList;