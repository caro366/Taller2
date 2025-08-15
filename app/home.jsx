import React, { useState } from 'react';
import { View, Image, ScrollView } from 'react-native';
import { Text, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import data from './assets/data.json';

export default function Home() {
  const [value, setValue] = useState('inicio');
  const [items, setItems] = useState(data);

  const toggleMostrarTodo = (index) => {
    const newItems = [...items];
    newItems[index].mostrarTodo = !newItems[index].mostrarTodo;
    setItems(newItems);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView
        contentContainerStyle={{
          padding: 20,
          paddingTop: 20,
          backgroundColor: '#fff',
        }}
      >
        <Text style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 20 }}>
          Home
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}
        >
          <Button
            mode="contained"
            onPress={() => setValue('inicio')}
            style={{
              flex: 1,
              marginHorizontal: 4,
              backgroundColor: value === 'inicio' ? '#6a80a3' : '#f0f0f0',
              borderRadius: 8,
              elevation: 0,
            }}
            labelStyle={{
              color: value === 'inicio' ? 'white' : '#333',
              fontWeight: 'bold',
              textTransform: 'none',
            }}
          >
            Inicio
          </Button>

          <Button
            mode="contained"
            onPress={() => setValue('buscar')}
            style={{
              flex: 1,
              marginHorizontal: 4,
              backgroundColor: value === 'buscar' ? '#6a80a3' : '#b6afaf',
              borderRadius: 8,
              elevation: 0,
            }}
            labelStyle={{
              color: value === 'buscar' ? 'white' : '#333',
              fontWeight: 'bold',
              textTransform: 'none',
            }}
          >
            Buscar
          </Button>
        </View>

        <View style={{ alignItems: 'flex-end', marginBottom: 8 }}>
          <View
            style={{
              backgroundColor: '#e6e6e6',
              borderRadius: 10,
              padding: 6,
            }}
          >
            <Icon name="heart" size={20} color="#333" />
          </View>
        </View>
        <Image
          source={require('../image/img3.jpeg')}
          style={{ width: '100%', height: 180, marginBottom: 24 }}
          resizeMode="contain"
        />

        {items.map((item, index) => (
          <View
            key={index}
            style={{
              backgroundColor: '#f5f5f5',
              padding: 16,
              borderRadius: 12,
              marginBottom: 20,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 3 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              elevation: 2,
            }}
          >
          
            <Image
            source={{ uri: item.urlImagen }}
           style={{ width: '100%', height: 180, marginBottom: 10 }}
          resizeMode="contain"
    />

            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>
              {item.titulo}
            </Text>
            <Text style={{ fontSize: 14, color: '#555', marginBottom: 8 }}>
              {item.mostrarTodo
                ? item.descripcion
                : item.descripcion.substring(0, 30) + '...'}
            </Text>
            <View style={{ alignItems: 'flex-end' }}>
              <Button
                mode="text"
                onPress={() => toggleMostrarTodo(index)}
                labelStyle={{ color: '#6a80a3' }}
              >
                {item.mostrarTodo ? 'Ver menos' : 'Ver más'}
              </Button>
            </View>
          </View>
        ))}
      </ScrollView>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          paddingVertical: 10,
          borderTopWidth: 1,
          borderColor: '#ddd',
          backgroundColor: '#fff',
        }}
      >
        <Icon name="home-outline" size={28} color="#333" />
        <Icon name="magnify" size={28} color="#333" />
        <Icon name="bell-outline" size={28} color="#333" />
        <Icon name="account-outline" size={28} color="#333" />
      </View>
    </View>
  );
}
