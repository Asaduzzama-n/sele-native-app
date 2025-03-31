import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const CustomCheckbox = ({ checked, onPress, textStyle }: { checked: boolean; onPress: () => void; textStyle?: any }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row', alignItems: 'center' }}>
      <View
        style={{
          width: 20,
          height: 20,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: Colors.light.primary,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: checked ? Colors.light.primary : 'transparent',
        }}
      >
        {checked && <Ionicons name="checkmark" size={16} color="#fff" />}
      </View>
        <Text style={textStyle}>I agree to the Terms & Conditions</Text>
    </TouchableOpacity>
  );
};

export default CustomCheckbox;
