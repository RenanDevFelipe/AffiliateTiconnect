import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import { ButtonInicio } from "../../components/Buttoninicio";
import { useState } from "react";

export function LoginScreen() {
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');

    const validarEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleLogin = async () => {
        if (!validarEmail(email)) {
            Alert.alert("Erro", "Por favor, insira um email válido.");
            return;
        }

        if (senha.length < 8) {
            Alert.alert("Erro", "A senha deve ter no mínimo 8 caracteres.");
            return;
        }

        try {
            console.log('Tentando fazer login com:', { email, senha });

            const response = await fetch('http://192.168.0.132:4000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password: senha }),
            });

            const data = await response.json();
            console.log('Resposta da API:', data);

            if (response.ok) {
                Alert.alert("Sucesso", "Login bem-sucedido");
            } else {
                Alert.alert("Erro", data.message || "Erro desconhecido");
            }
        } catch (error) {
            console.error('Erro ao tentar fazer login:', error);
            Alert.alert("Erro", "Erro ao tentar fazer login");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Image
                    style={styles.imagem}
                    source={require('../../assets/login.png')}
                />
                <Text style={styles.txtLogin}>Login</Text>
                <Text style={styles.txtWelcome}>Bem vindo de volta, sentimos a sua falta!</Text>
            </View>
            <View style={styles.mid}>
                <TextInput
                    onChangeText={setEmail}
                    value={email}
                    style={styles.textInput}
                    placeholderTextColor={"#000"}
                    placeholder="Email"
                />
                <TextInput
                    onChangeText={setSenha}
                    value={senha}
                    style={styles.textInput}
                    placeholderTextColor={"#000"}
                    placeholder="Senha"
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.textEsqueceu}>
                    <Text style={styles.textEsqueceu}>Esqueceu a senha?</Text>
                </TouchableOpacity>
                <ButtonInicio
                    title="Login"
                    corString="#fff"
                    corBg="#ff6200"
                    border="#ff6200"
                    widthPercent="85%"
                    onPress={handleLogin}
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
    txtLogin: {
        color: "#ff6200",
        fontWeight: "bold",
        fontSize: 40,
        shadowColor: '#ff6200',
        shadowOffset: { width: 1, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
    },
    txtWelcome: {
        fontWeight: "300",
        fontSize: 15,
        width: "50%",
        textAlign: "center",
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
    textEsqueceu: {
        width: "89%",
        textAlign: "right",
    },
    imagem: {
        width: "100%",
        height: 300,
        alignItems: "center",
        justifyContent: "center",
        marginTop: "18%",
    }
});
