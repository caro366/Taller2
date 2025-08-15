import { View } from "react-native";
import { ScrollView } from "react-native";
import { Text } from "react-native-paper";
import { Button } from "react-native-paper";
import { Image } from 'react-native';
import { router  } from 'expo-router';

export default function PantallaPrincipal() {
  return (
    <>
      <ScrollView style={{ backgroundColor: 'white' }} >
        <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
          <Text
            style={{
              fontSize: 36,
              fontWeight: "bold",
              alignItems: "center",
              marginTop: 55,
              textAlign: "center",
            }}
          >
            ¡Bienvenido!
          </Text>

          <Text style={{ color: '#757171ff', marginBottom: 30, textAlign: 'center' }}>
            ¡Nos alegra tenerte aquí!
          </Text>

           <Image
            source={require("../image/img1.jpeg")}
            style={{
              width: '100%',
              height: 400,
              alignSelf: "center",
              marginTop: 10,
            }}
          />

          <Button
            mode="contained"
           onPress={() => router.push('home')}
            style={{
              backgroundColor: '#3D7BF7',
              width: '80%',
              marginTop: 20,
              alignSelf: 'center',
              fontSize: 25,
              paddingVertical:5,
              borderRadius:50,
            }}
            labelStyle={{
              color: '#ffffff',
              fontSize: 18,
            }}
          >
            Empezar
          </Button>





        </View>
      </ScrollView>
    </>
  );
}