import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

interface VariavelBT {
    title: string;
    corBg: string;
    corString: string;
    border: string;
    onPress?: () => void; // onPress é opcional
}

export function ButtonInicio(props: VariavelBT) {
    return (
        <View style={StyleBt.button}>
            <TouchableOpacity
                style={[StyleBt.BTStyle, { backgroundColor: props.corBg, borderColor: props.border }]}
                onPress={props.onPress} // Adiciona a função onPress aqui
            >
                <Text style={{ color: props.corString }}>
                    {props.title}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const StyleBt = StyleSheet.create({
    button: {
        justifyContent: "center",
        alignItems: "center",
    },
    BTStyle: {
        marginTop: 20,
        borderRadius: 10,
        width: "85%",
        padding: 23,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderStyle: "solid",
    },
});
