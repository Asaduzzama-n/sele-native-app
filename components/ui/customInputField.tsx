import { View, Text, KeyboardAvoidingView, TouchableWithoutFeedback, TextInput, StyleSheet, TouchableOpacity, Platform, Keyboard } from 'react-native';
import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { SCREEN_WIDTH } from '@/constants/screen';
import { Colors } from '@/constants/Colors';

type InputFieldProps = {
    placeholder: string;
    type: string;
    secureTextEntry?: boolean;
    onChangeText: (text: string) => void;
    value: string;
    label: string;
    icon: string;
    style?: any;
    
};

const InputField = ({ placeholder, value, label, type, icon, onChangeText, secureTextEntry ,...props}: InputFieldProps) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(secureTextEntry);

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={[styles.container]}>
                    <Text style={{ fontSize: 14, fontWeight: '500', color: Colors.light.text }}>{label}</Text>
                    <View style={styles.inputField}>

                        <Feather name={icon} size={16} />
                        <TextInput
                            style={styles.textInput}
                            placeholder={placeholder}
                            secureTextEntry={isPasswordVisible}
                            value={value}
                            onChangeText={onChangeText}
                            {...props}
                        />
                        {secureTextEntry && (
                            <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                                <Feather name={isPasswordVisible ? 'eye-off' : 'eye'} size={16} color={Colors.light.primary} />
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: SCREEN_WIDTH * 0.8,
        rowGap: 10,
        marginBottom: 10,
    },
    inputField: {
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical:4,
        backgroundColor: Colors.light.boxBG,
    },
    textInput: {
        flex: 1,
    },
});

export default InputField;
