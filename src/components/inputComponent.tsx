import { TextInput, View, StyleSheet, Dimensions } from "react-native";
import React from "react";

interface PropsInput {
    type?: boolean,
    placeholder: string,
    border: string,
    widthPercent: string,
    value: any,
    BorderRadius: number;
}

export function InputComponent(props: PropsInput) {
    const widthPercentage = parseFloat(props.widthPercent);

    const screenWidth = Dimensions.get('window').width;
    const width = (screenWidth * widthPercentage) / 100
    return (
        <View>
            <TextInput
                style={[StyleInput.input, {borderColor: props.border, width: width, borderRadius: props.BorderRadius}]}
                placeholder={props.placeholder}
                secureTextEntry={props.type}
                value={props.value}
            />
        </View>
    )
}

const StyleInput = StyleSheet.create({
    input: {
        padding: 10,
        borderWidth: 2,
        borderStyle: "solid",
        justifyContent: "center",
        alignItems: "center"
    }
})