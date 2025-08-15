import { View } from 'react-native';
import { ScrollView } from 'react-native';
import {Text} from 'react-native-paper';
import { Avatar } from 'react-native-paper';

export default function PerfilUsuario() {
  const nombre = 'Carolina Quejada';
  const correo = 'carolina.quejada@gmail.com';
  const identificacion = '12121212';
  const telefono = '+57 320 123 4567';

  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 }}>

        <Avatar.Image
          size={200}
          source={require('../image/img2.jpeg')}
          style={{ alignSelf: 'center', marginBottom: 30 }}
        />

        <Text
          variant="headlineMedium"
          style={{ fontWeight: 'bold', marginBottom: 30 }}
        >
          Información Personal
        </Text>

        <View style={{ alignSelf: 'flex-start', width: '100%', marginBottom: 20 }}>
          <Text style={{ fontWeight: 'bold', marginBottom: 6 }}>Nombre</Text>
          <Text
            style={{
              padding: 10,
              borderWidth: 1,
              borderColor: '#c0babaff',
              borderRadius: 6,
              backgroundColor: '#fff',
            }}
          >
            {nombre}
          </Text>
        </View>

        <View style={{ alignSelf: 'flex-start', width: '100%', marginBottom: 20 }}>
          <Text style={{ fontWeight: 'bold', marginBottom: 6 }}>Correo electrónico</Text>
          <Text
            style={{
              padding: 10,
              borderWidth: 1,
              borderColor: '#c0babaff',
              borderRadius: 6,
              backgroundColor: '#fff',
            }}
          >
            {correo}
          </Text>
        </View>

        <View style={{ alignSelf: 'flex-start', width: '100%', marginBottom: 20 }}>
          <Text style={{ fontWeight: 'bold', marginBottom: 6 }}>Identificación</Text>
          <Text
            style={{
              padding: 10,
              borderWidth: 1,
              borderColor: '#c0babaff',
              borderRadius: 6,
              backgroundColor: '#fff',
            }}
          >
            {identificacion}
          </Text>
        </View>

        <View style={{ alignSelf: 'flex-start', width: '100%', marginBottom: 20 }}>
          <Text style={{ fontWeight: 'bold', marginBottom: 6 }}>Teléfono</Text>
          <Text
            style={{
              padding: 10,
              borderWidth: 1,
              borderColor: '#c0babaff',
              borderRadius: 6,
              backgroundColor: '#fff',
            }}
          >
            {telefono}
          </Text>
        </View>

      </View>
    </ScrollView>
  );
}
