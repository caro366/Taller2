import { View, Alert } from 'react-native';
import { ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { useState } from 'react';
import usuarios from "./assets/usuarios.json"; 

export default function Configuracion() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');

  const registrarUsuario = () => {
    
    if (!nombre || !correo || !contrasena || !confirmarContrasena) {
      Alert.alert('Error', 'Todos los campos son obligatorios.');
      return;
    }

   
    const usuarioExistente = usuarios.find(
      (u) => u.email.toLowerCase() === correo.toLowerCase()
    );
    if (usuarioExistente) {
      Alert.alert('Error', 'Este correo ya está registrado.');
      return;
    }

    
    if (contrasena !== confirmarContrasena) {
      Alert.alert('Error', 'Las contraseñas no coinciden.');
      return;
    }

   
    const nuevoUsuario = {
      id: usuarios.length + 1,
      nombre,
      email: correo,
      clave: contrasena
    };

    usuarios.push(nuevoUsuario);
    Alert.alert('Éxito', 'Usuario registrado con éxito.');
  };

  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
        <Text
          variant="headlineLarge"
          style={{ fontWeight: 'bold', marginBottom: 40, marginTop: 10 }}
        >
          Registro
        </Text>

        <Text style={{ marginBottom: 6 }}>Nombre</Text>
        <TextInput
          value={nombre}
          onChangeText={setNombre}
          mode="outlined"
          outlineColor="#c0babaff"
          style={{ marginBottom: 20, backgroundColor: '#fff' }}
        />

        <Text style={{ marginBottom: 6 }}>Correo electrónico</Text>
        <TextInput
          value={correo}
          onChangeText={setCorreo}
          mode="outlined"
          keyboardType="email-address"
          autoCapitalize="none"
          outlineColor="#c0babaff"
          style={{ marginBottom: 20, backgroundColor: '#fff' }}
        />

        <Text style={{ marginBottom: 6 }}>Contraseña</Text>
        <TextInput
          value={contrasena}
          onChangeText={setContrasena}
          mode="outlined"
          secureTextEntry
          outlineColor="#c0babaff"
          style={{ marginBottom: 20, backgroundColor: '#fff' }}
        />

        <Text style={{ marginBottom: 6 }}>Confirmar contraseña</Text>
        <TextInput
          value={confirmarContrasena}
          onChangeText={setConfirmarContrasena}
          mode="outlined"
          secureTextEntry
          outlineColor="#c0babaff"
          style={{ marginBottom: 30, backgroundColor: '#fff' }}
        />

        <Button
          mode="contained"
          onPress={registrarUsuario} 
          style={{ paddingVertical: 8, borderRadius: 8, marginTop: 10 }}
          buttonColor="#6a80a3ff"
        >
          Registrarse
        </Button>
      </View>
    </ScrollView>
  );
}
