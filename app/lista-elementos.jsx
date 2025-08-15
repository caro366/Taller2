import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { Text, TextInput, Button, Avatar, Divider } from 'react-native-paper';
import { useRouter } from 'expo-router';
import data from './assets/data.json';

export default function ListaElemento() {
    const [textoBuscar, setTextoBuscar] = useState('');
    const [elementosFiltrados, setElementosFiltrados] = useState(data);
    const router = useRouter();

    useEffect(() => {
        const filtrados = data.filter(item =>
            item.titulo.toLowerCase().includes(textoBuscar.toLowerCase())
        );
        setElementosFiltrados(filtrados);
    }, [textoBuscar]);

    return (
        <ScrollView>
            <View style={{ flex: 1, padding: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Lista</Text>

                <TextInput
                    placeholder="Buscar"
                    mode="outlined"
                    style={{ backgroundColor: '#ecececff', marginBottom: 20, height: 45 }}
                    left={<TextInput.Icon icon="magnify" />}
                    value={textoBuscar}
                    onChangeText={setTextoBuscar}
                />

                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 25 }}>
                    <Divider style={{ flex: 1, height: 1, backgroundColor: '#ccc' }} />
                </View>

                {elementosFiltrados.map((item, index) => (
                    <View key={index}>
                        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 25 }}>
                            <Avatar.Image
                                size={50}
                                source={{ uri: item.urlImagen }}
                                style={{
                                    
                                    backgroundColor: '#ffffff',
                                    marginRight: 10,
                                    borderRadius: 10
                                }}
                            />
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.titulo}</Text>
                                <Text style={{ fontSize: 13, color: '#555', marginBottom: 6 }}>
                                    {item.descripcion.substring(0, 40)}...
                                </Text>
                                <Button
                                    mode="contained"
                                    compact
                                    onPress={() => router.push(`/detalle-elemento?titulo=${item.titulo}&descripcion=${item.descripcion}&imagen=${item.urlImagen}&id=${item.id}`)}
                                    style={{ alignSelf: 'flex-end', backgroundColor: '#6a80a3ff', paddingHorizontal: 15, paddingVertical: 2, borderRadius: 5 }}
                                    labelStyle={{ fontSize: 12, color: 'white' }}
                                >
                                    Acción
                                </Button>
                            </View>
                        </View>
                        <Divider style={{ height: 1, backgroundColor: '#ccc', marginBottom: 25 }} />
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}