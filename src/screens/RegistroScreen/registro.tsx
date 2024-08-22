import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import { useState } from "react";
import { ButtonInicio } from "../../components/Buttoninicio";

export function RegistroScreen() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setpassword] = useState<string>('');
    const [id_ixc, setIdIxc] = useState<string>(''); // Armazena como string para o TextInput

    const validarEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleRegister = async () => {
        if (!validarEmail(email)) {
            Alert.alert("Erro", "Por favor, insira um email válido.");
            return;
        }

        if (password.length < 8) {
            Alert.alert("Erro", "A senha deve ter no mínimo 8 caracteres.");
            return;
        }

        if (name.trim() === '' || id_ixc.trim() === '') {
            Alert.alert("Erro", "Por favor, preencha todos os campos.");
            return;
        }

        try {
            console.log('Tentando registrar com:', { name, email, password, id_ixc: Number(id_ixc) });

            const response = await fetch('http://192.168.0.132:4000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password, id_ixc: Number(id_ixc) }), // Converte para número aqui
            });

            const data = await response.json();
            console.log('Resposta da API:', data);

            if (response.ok) {
                Alert.alert("Sucesso", "Registro bem-sucedido");
            } else {
                Alert.alert("Erro", data.message || "Erro desconhecido");
            }
        } catch (error) {
            console.error('Erro ao tentar registrar:', error);
            Alert.alert("Erro", "Erro ao tentar registrar");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Image
                    style={styles.imagem}
                    source={require('../../assets/login.png')}
                />
                <Text style={styles.txtRegistro}>Registre-se</Text>
            </View>
            <View style={styles.mid}>
                <TextInput
                    onChangeText={setName}
                    value={name}
                    style={styles.textInput}
                    placeholderTextColor={"#000"}
                    placeholder="Nome"
                />
                <TextInput
                    onChangeText={setEmail}
                    value={email}
                    style={styles.textInput}
                    placeholderTextColor={"#000"}
                    placeholder="Email"
                />
                <TextInput
                    onChangeText={setpassword}
                    value={password}
                    style={styles.textInput}
                    placeholderTextColor={"#000"}
                    placeholder="Senha"
                    secureTextEntry={true}
                />
                <TextInput
                    onChangeText={text => setIdIxc(text)}
                    value={id_ixc}
                    style={styles.textInput}
                    placeholderTextColor={"#000"}
                    placeholder="ID IXC"
                    keyboardType="numeric"
                />
                <ButtonInicio
                    title="Registre-se"
                    corString="#fff"
                    corBg="#ff6200"
                    border="#ff6200"
                    widthPercent="85%"
                    onPress={handleRegister}
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
    top: {
        flex: 2,
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    txtRegistro: {
        color: "#ff6200",
        fontWeight: "bold",
        fontSize: 40,
        shadowColor: '#ff6200',
        shadowOffset: { width: 1, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
    },
    mid: {
        flex: 3,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
    },
    textInput: {
        borderRadius: 10,
        width: "90%",
        height: 50,
        padding: 10,
        borderStyle: "solid",
        borderColor: "#ff6200",
        borderWidth: 2,
    },
    imagem: {
        width: "100%",
        height: 300,
        alignItems: "center",
        justifyContent: "center",
        marginTop: "18%",
    }
});
