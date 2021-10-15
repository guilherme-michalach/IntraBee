import React, { useState } from 'react';
import { View, Button, Platform, StyleSheet, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export function CalendarScreen() {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [isPickerShow, setIsPickerShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    const showPicker = () => {
        setIsPickerShow(true);
    };

    return (
        <View style={styles.container}>
            <View>
                <Button onPress={showDatepicker} title="Calendário" />
            </View>
            <View>
                <Button onPress={showTimepicker} title="Relógio" />
            </View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 90
    }
})