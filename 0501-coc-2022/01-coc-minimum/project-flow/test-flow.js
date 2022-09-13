/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';

const restaurants = [
  {name: 'React Cafe', address: '123 Anyware St'},
  {name: 'Fancy Restaurant', address: '799 Main St'},
  {name: 'Taco Place', address: '550 Maple Rd'}
]

export default class App extends Component<Props> {
  render() {
    return (
      <View >
        <Text
          style={{
            padding: 40,
            fontSize: 30,
            textAlign: 'center',
            color: '#0066CC',
            fontWeight: '300'
          }}>Hello World</Text>

        {
          restaurants.map((place, i)=>{
            return (
              <View key={place.name}>
                <Text>{i + 1}</Text>
                <Text>{place.name}</Text>
                <Text style={{color:'grey'}}>{place.address}</Text>
                <Text>info</Text>
              </View>
            )
          })
        }
      </View>
    );
  }
}

