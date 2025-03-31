import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { SCREEN_WIDTH } from '@/constants/screen';
import { Colors } from '@/constants/Colors';

type CustomButtonProps = {
    title: string;
    onPress: () => void;
    bgVariant: 'primary' | 'secondary' | 'outline' | 'success' | 'danger';
    textVariant?: 'primary' | 'secondary' | 'outline' | 'success' | 'danger';
    IconLeft?: React.ComponentType<any>;
    IconRight?: React.ComponentType<any>;
    isDisabled?: boolean;
};

const getBgVariantStyle = (variant: string) => {
    switch (variant) {
        case 'primary':
            return { backgroundColor: Colors.light.primary };
        case 'success':
            return { backgroundColor: Colors.light.success };
        case 'danger':
            return { backgroundColor: Colors.light.danger };
        case 'outline':
            return { backgroundColor: 'transparent', borderWidth: 2, borderColor: Colors.light.primary };
        case 'secondary':
            return { backgroundColor: Colors.light.secondary };
        default:
            return {};
    }
};

const getTextVariantStyle = (variant: string) => {
    switch (variant) {
        case 'primary':
            return { color: '#fff' };
        case 'success':
            return { color:  '#fff' };
        case 'danger':
            return { color:  '#fff' };
        case 'outline':
            return { color:  '#fff' };
        case 'secondary':
            return { color:   '#fff'};
        default:
            return {};
    }
};

const CustomButton = ({  title, onPress, bgVariant='primary', textVariant='primary', IconLeft, IconRight, isDisabled,...props }: CustomButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress} disabled={isDisabled} style={[styles.button,  getBgVariantStyle(bgVariant), ]}>
            {IconLeft && <IconLeft style={styles.icon} />}
            <Text style={[styles.text, getTextVariantStyle(textVariant || bgVariant)]}>{title}</Text>
            {IconRight && <IconRight style={styles.icon} />}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: SCREEN_WIDTH * 0.8,
        paddingVertical: 12,
        borderRadius: 10,
    },
    text: {
        fontSize: 18,
        fontWeight: 500,
    },
    icon: {
        marginHorizontal: 8,
    },
});

export default CustomButton;
