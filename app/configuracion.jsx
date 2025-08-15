import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Text, List, Switch, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function Configuracion() {
  const [notificaciones, setNotificaciones] = useState(true);
  const router = useRouter(); 
  const toggleNotificaciones = () => {
    setNotificaciones(!notificaciones);
  };

  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', padding: 24 }}>
        <Text
          variant="headlineLarge"
          style={{
            fontWeight: 'bold',
            marginBottom: 40,
            marginTop: 10,
          }}
        >
          Ajustes
        </Text>

        <View style={{ gap: 16 }}>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 12,
              marginBottom: 16,
              paddingVertical: 4,
              backgroundColor: 'white',
            }}
          >
            <List.Item
              title="Cuenta"
              right={props => <List.Icon {...props} icon="chevron-right" />}
              onPress={() => {}}
            />
          </View>

          <View
            style={{
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 12,
              marginBottom: 16,
              paddingVertical: 4,
              backgroundColor: 'white',
            }}
          >
            <List.Item
              title="Notificaciones"
              onPress={toggleNotificaciones}
              right={props => (
                <Switch
                  value={notificaciones}
                  onValueChange={setNotificaciones}
                  color='#6a80a3ff'
                />
              )}
            />
          </View>

          <View
            style={{
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 12,
              marginBottom: 16,
              paddingVertical: 4,
              backgroundColor: 'white',
            }}
          >
            <List.Item
              title="Privacidad"
              right={props => <List.Icon {...props} icon="chevron-right" />}
              onPress={() => router.push('/privacidad')}
            />
          </View>

          <View
            style={{
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 12,
              marginBottom: 16,
              paddingVertical: 4,
              backgroundColor: 'white',
            }}
          >
            <List.Item
              title="Seguridad"
              right={props => <List.Icon {...props} icon="chevron-right" />}
              onPress={() => {}}
            />
          </View>

          <View
            style={{
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 12,
              marginBottom: 16,
              paddingVertical: 4,
              backgroundColor: 'white',
            }}
          >
            <List.Item
              title="Ayuda"
              right={props => <List.Icon {...props} icon="chevron-right" />}
              onPress={() => {}}
            />
          </View>
        </View>

        <Button
          onPress={() => console.log('Cerrar sesión')}
          textColor='#6a80a3ff'
          style={{ marginTop: 50 }}
        >
          Cerrar sesión
        </Button>
      </View>
    </ScrollView>
  );
}