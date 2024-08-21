import { View, Text, StyleSheet, Image } from "react-native";
import { ButtonInicio } from "../../@types/ButtonInicio";

export function InicioScreen() {
    return (
        <View>
            <View style={StyleInicio.imagem}>
                <Image
                    source={require('../../assets/affiliate-removebg-preview.png')}
                    style={StyleInicio.imagemInicio}
                />
            </View>
            <View style={StyleInicio.text}>
                <Text style={StyleInicio.titlePrincipal}>
                    Hello!, Wellcome
                </Text>
                <Text style={StyleInicio.titleSecundary}>
                    Maximize seus ganhos com o poder do marketing de afiliados, transformando cada clique em uma oportunidade de sucesso!
                </Text>
            </View>

            <View style={StyleInicio.btDiv}>
                <ButtonInicio title="Entrar na minha conta" corBg="#ff6200" corString="#fff" border="#ff6200"/>
                <ButtonInicio title="Registrar-se" corBg="#fff" corString="#ff6200" border="#ff6200"/>
            </View>
        </View>
    )
}

const StyleInicio = StyleSheet.create({
    imagem: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "18%",
    },
    imagemInicio: {
        width: 400,
        height: 280,
    },

    text: {
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center"
    },

    titlePrincipal: {
        fontSize: 30,
    },

    titleSecundary: {
        marginTop: 10,
        width: "80%",
        textAlign: "center"
    },

    btDiv: {
        marginTop: 30,
    }
})