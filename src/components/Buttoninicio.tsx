import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";

interface VariavelBT {
    title: string;
    corBg: string;
    corString: string;
    border: string;
    widthPercent: string;
    onPress?: () => void; // onPress é opcional
}

export function ButtonInicio(props: VariavelBT) {

    const widthPercentage = parseFloat(props.widthPercent);

    const screenWidth = Dimensions.get('window').width;
    const width = (screenWidth * widthPercentage) / 100

    return (
        <View style={StyleBt.button}>
            <TouchableOpacity
                style={[StyleBt.BTStyle, { backgroundColor: props.corBg, borderColor: props.border, width}]}
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
        padding: 23,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderStyle: "solid",
    },
});
