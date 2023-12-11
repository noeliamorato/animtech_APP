import { View, Text } from 'react-native'
import React from 'react'
import TopContext from '../context/TopContext';

const TopText = () => {
    const{textoTop}= TopContext();
  return (
    <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', paddingBottom:10 }}>
      <Text style={{ fontSize: 20, paddingLeft: 20, paddingTop: 10, textShadowColor: 'rgba(0, 0, 0, 0.4)', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 2, color: '#333', fontWeight: 'bold' }}>{textoTop}</Text>
    </View>
  )
}

export default TopText