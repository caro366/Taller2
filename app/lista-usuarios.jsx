import { useState, useEffect } from "react";
import { View, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { Text, TextInput, Avatar, Divider } from "react-native-paper";
import { useRouter } from "expo-router";
import usuarios from "./assets/usuarios.json";


export default function ListaUsuarios() {
    const [filtro, setFiltro] = useState('');
    const router = useRouter();

    const usuariosFiltrados = usuarios.filter(usuario =>
        usuario.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
        usuario.email.toLowerCase().includes(filtro.toLowerCase())
    );

    return (
        <ScrollView style={styles.container}>
            <TextInput
                placeholder="Buscar usuario"
                mode="outlined"
                value={filtro}
                onChangeText={setFiltro}
                style={styles.searchBar}
                left={<TextInput.Icon icon="magnify" />}
            />

            {usuariosFiltrados.map(u => (
                <TouchableOpacity
                    key={u.id}
                    onPress={() => router.push({
                        pathname: '/perfil-usuario',
                        params: { id: u.id.toString() },
                    })}
                >
                    <View style={styles.listItem}>
                        <Avatar.Icon
                            size={50}
                            icon="account"
                            color="#6a80a3"
                            style={styles.avatar}
                        />
                        <View style={styles.userInfo}>
                            <Text style={styles.userName}>{u.nombre}</Text>
                            <Text style={styles.userEmail}>{u.email}</Text>
                        </View>
                    </View>
                    <Divider />
                </TouchableOpacity>
            ))}

            {usuariosFiltrados.length === 0 && <Text style={styles.noUsersText}>No se encontraron usuarios</Text>}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
    },
    searchBar: {
        marginBottom: 20,
        backgroundColor: '#ececec',
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    avatar: {
        marginRight: 10,
        backgroundColor: '#e0e0e0',
    },
    userInfo: {
        flex: 1,
    },
    userName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    userEmail: {
        color: '#555',
    },
    noUsersText: {
        textAlign: 'center',
        marginTop: 20,
        color: '#888',
    },
});