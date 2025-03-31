import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/constants/Colors';

export const RadioButton = ({ label, selected, onPress, }: { label: string, selected: boolean, onPress: () => void }) => {
    return (
        <TouchableOpacity style={styles.radioContainer} onPress={onPress}>
          <View style={[styles.radioOuter, selected && styles.radioOuterSelected]}>
            {selected && <View style={styles.radioInner} />}
          </View>
          <Text style={[styles.radioText, { color: selected ? Colors.light.text : Colors.light.subText }]}>{label}</Text>
        </TouchableOpacity>
      );
}

  RadioButton

export const RadioGroup = ({options, selectedOption, setUserRole, style}: {options: string[], selectedOption: string | null, setUserRole: (option: string) => void, style?: any}) => {
  
    return (
      <View style={style}>
        {options.map((option, index) => (
          <RadioButton
            key={index}
            label={option}
            selected={selectedOption?.toLowerCase() === option.toLowerCase()}
            onPress={() => setUserRole(option.toLowerCase())}
          />
        ))}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    radioContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    radioOuter: {
      width: 24,
      height: 24,
      borderRadius: 12,
      borderWidth: 2,
      borderColor: '#007BFF',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10,
    },
    radioOuterSelected: {
      borderColor: '#0056b3',
    },
    radioInner: {
      width: 12,
      height: 12,
      borderRadius: 6,
      backgroundColor: '#007BFF',
    },
    radioText: {
      fontSize: 20,
        fontWeight:500,
        
    },

  });
  