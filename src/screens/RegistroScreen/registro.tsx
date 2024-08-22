import { Text, View, Image, StyleSheet } from "react-native";
import { ButtonInicio } from "../../components/Buttoninicio";
import { InputComponent } from "../../components/inputComponent";

export function RegistroScreen() {
    return (
        <View>
            <View style={styleRegistro.HomeRegistro}>
                <Image
                    source={require('../../assets/login.png')}
                    style={styleRegistro.imagem}
                />

                <Text style={styleRegistro.TXT}>
                    Registre-se
                </Text>
            </View>

            <View style={styleRegistro.sectionInput}>
                <View style={styleRegistro.container}>
                    <View style={styleRegistro.boxInput}>
                        <InputComponent
                            type={false}
                            placeholder="Nome"
                            widthPercent="90%"
                            border="#ff6200"
                            BorderRadius={10}
                            value=""
                        />
                    </View>

                    <View style={styleRegistro.boxInput}>
                        <InputComponent
                            type={false}
                            placeholder="E-mail"
                            widthPercent="90%"
                            border="#ff6200"
                            BorderRadius={10}
                            value=""
                        />
                    </View>

                    <View style={[styleRegistro.boxInput]}>
                        <InputComponent
                            type={false}
                            placeholder="Senha"
                            widthPercent="44%"
                            border="#ff6200"
                            BorderRadius={10}
                            value=""
                        />

                        <InputComponent
                            type={false}
                            placeholder="ID IXC"
                            widthPercent="44%"
                            border="#ff6200"
                            BorderRadius={10}
                            value=""
                        />
                    </View>
                </View>

                <View style={{marginTop: "3%"}}>
                    <ButtonInicio
                        title="Registre-se"
                        corBg="#ff6200"
                        corString="#fff"
                        border="#ff6200"
                        widthPercent="90%"
                    />
                </View>
            </View>
        </View>
    )
}

const styleRegistro = StyleSheet.create({
    imagem: {
        width: "100%",
        height: 300,
    },

    TXT: {
        fontSize: 30,
        textAlign: "center",
        marginTop: 10,
    },

    HomeRegistro: {
        marginTop: "20%"
    },

    container: {
        justifyContent: "center",
        alignItems: "center"
    },

    sectionInput: {
        marginTop: "10%"
    },

    boxInput: {
        flexDirection: "row",
        marginTop: 15,
        gap: 8,
    }
})