import React, { useState } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import { Text, TextInput, Button, Divider } from 'react-native-paper';
import usuarios from './assets/usuarios.json';

export default function Configuracion() {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');


  const validarUsuario = () => {
    const correoLimpio = correo.trim().toLowerCase();
    const contrasenaLimpia = contrasena.trim();

    if (!correoLimpio) {
      Alert.alert('Error', 'Por favor ingresa tu correo.');
      return;
    }

    if (!contrasenaLimpia) {
      Alert.alert('Error', 'Por favor ingresa tu contraseña.');
      return;
    }

    const usuarioEncontrado = usuarios.find(
      (u) => u.email.trim().toLowerCase() === correoLimpio
    );

    if (!usuarioEncontrado) {
      Alert.alert('Error', 'El usuario no existe.');
      return;
    }

    if (usuarioEncontrado.clave !== contrasenaLimpia) {
      Alert.alert('Error', 'Datos de acceso incorrectos.');
      return;
    }

    Alert.alert('Acceso correcto', `Bienvenido, ${usuarioEncontrado.nombre}`);
  };

  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
        <View style={{ alignItems: 'center', marginBottom: 30 }}>
          <Text variant="headlineMedium" style={{ fontWeight: 'bold', color: '#222' }}>
            INICIAR SESIÓN
          </Text>
        </View>

        <TextInput
          label="Correo electrónico"
          value={correo}
          onChangeText={setCorreo}
          left={<TextInput.Icon icon="email" />}
          mode="outlined"
          outlineColor="#c0babaff"
          style={{ marginBottom: 10, backgroundColor: '#fff', width: '100%' }}
        />

        <TextInput
          label="Contraseña"
          value={contrasena}
          onChangeText={setContrasena}
          left={<TextInput.Icon icon="lock" />}
          mode="outlined"
          outlineColor="#c0babaff"
          secureTextEntry={true}
          style={{ marginBottom: 10, backgroundColor: '#fff', width: '100%' }}
        />

        <Text
          variant="labelMedium"
          style={{
            textAlign: 'right',
            marginBottom: 20,
            color: '#131b68ff',
            alignSelf: 'flex-end',
          }}
        >
          ¿Olvidaste tu contraseña?
        </Text>

        <Button
          mode="contained"
          buttonColor="#194885ff"
          style={{ paddingVertical: 6, borderRadius: 8, marginBottom: 30, width: '100%' }}
          onPress={validarUsuario}
        >
          INICIAR SESIÓN
        </Button>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 25, width: '100%' }}>
          <Divider style={{ flex: 1, height: 1, backgroundColor: '#ccc' }} />
          <View
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: '#ccc',
              marginHorizontal: 10,
            }}
          />
          <Divider style={{ flex: 1, height: 1, backgroundColor: '#ccc' }} />
        </View>

        <Button
          mode="outlined"
          icon="google"
          onPress={() => console.log('Iniciar con Google')}
          textColor="black"
          style={{
            marginBottom: 10,
            backgroundColor: '#f5f7fcff',
            borderColor: '#ccc',
            borderRadius: 8,
            paddingVertical: 4,
            width: '100%',
          }}
          labelStyle={{ letterSpacing: 1, fontSize: 16 }}
        >
          Iniciar sesión con Google
        </Button>

        <Button
          mode="outlined"
          icon="apple"
          onPress={() => console.log('Iniciar con Apple')}
          textColor="black"
          style={{
            marginBottom: 10,
            backgroundColor: '#f5f7fcff',
            borderColor: '#ccc',
            borderRadius: 8,
            paddingVertical: 4,
            width: '100%',
          }}
          labelStyle={{ letterSpacing: 1, fontSize: 16 }}
        >
          Iniciar sesión con Apple
        </Button>
      </View>
    </ScrollView>
  );
}
