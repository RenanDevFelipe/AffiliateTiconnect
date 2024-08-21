import { View, Text,Button ,  Image , StyleSheet,TextInput,TouchableOpacity,Linking} from "react-native"
import { ButtonInicio } from "../../components/Buttoninicio";


export function LoginScreen() {
    return(
        <View style={styles.container}>
            <View style={styles.top}>
                <Image
                    style={styles.imagem}
                    source={require('../../assets/login.png')}
                />
                <Text style={styles.txtLogin}>Login</Text>
                <Text  style={styles.txtWelcome}>Bem vindo de volta , sentimos a sua falta!</Text>
            </View>
            <View style={styles.mid}>
                <TextInput style={styles.textInput} placeholderTextColor={"#000"} placeholder="Email" />
                <TextInput style={styles.textInput} placeholderTextColor={"#000"} placeholder="Senha" />
                <TouchableOpacity style={styles.textEsqueceu}>
                    <Text style={styles.textEsqueceu}>Esqueceu a senha?</Text>
                </TouchableOpacity>
                <ButtonInicio
                    title="Login"
                    corString="#fff"
                    corBg="#ff6200"
                    border="#ff6200"
                    widthPercent="85%"
                />
            </View>
        </View>
    )
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
    txtLogin:{
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
    textInput:{
        borderRadius: 10,
        width: "90%",
        height: 50,
        padding: 10,
        borderStyle: "solid",
        borderColor: "#ff6200",
        borderWidth: 2,
    },
    textEsqueceu:{
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

