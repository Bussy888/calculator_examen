import React, { useContext } from 'react';
import { View, Text, Switch } from 'react-native';

import { ThemeContext } from '../config/context/ThemeContext';
import { styles } from '../config/theme/calculatorStyles';
import { CButton } from '../components/CButton';
import { EqualButton } from '../components/EqualButton';
import useOperation from '../hooks/useOperation';

const HomeScreen = () => {
    const { theme, isDarkMode, toggleTheme } = useContext(ThemeContext);
    const { reset, result, operacion, buildOperation, removeLast, calculate } = useOperation();

    return (
        <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            
            <View style={[styles.background, { backgroundColor: theme.backgroundColor }]}>

                <View style={[styles.containerResult,{ backgroundColor: theme.backgroundColor }]}>
                
                <View style={styles.switchContainer}>
                
                <Switch
                    trackColor={{ false: "#F4AB41", true: "#000000" }}
                    thumbColor={isDarkMode ? "#F4AB41" : "#555A60"}
                    onValueChange={toggleTheme}
                    value={isDarkMode}
                />
                <Text style={[styles.modeText, { color: theme.buttonNumbers }]}>{theme.mode}</Text>
            </View>
                    <Text adjustsFontSizeToFit numberOfLines={1} style={[styles.mainResult, { color: theme.primary }]}>{result}</Text>
                    <Text adjustsFontSizeToFit numberOfLines={1} style={[styles.subResult, { color: theme.primary }]}>{operacion}</Text>
                </View>
                <View style={styles.buttonsContainter}>
                    <View style={styles.row}>
                        <CButton symbol={'AC'} bgcolor={theme.backgroundColor} action={reset} textColor={theme.primary} />
                        <CButton symbol={'+/-'} bgcolor={theme.backgroundColor} action={() => buildOperation('(')}  textColor={theme.buttonNumbers} />
                        <CButton symbol={'%'} bgcolor={theme.backgroundColor} action={() => buildOperation(')')}  textColor={theme.buttonNumbers} />
                        <CButton symbol={'÷'} bgcolor={theme.buttonOperation} action={() => buildOperation('/')} textColor={theme.primary}/>
                    </View>
                    <View style={styles.row}>
                        <CButton symbol={'7'} bgcolor={theme.backgroundColor} action={() => buildOperation('7')} textColor={theme.buttonNumbers}  />
                        <CButton symbol={'8'} bgcolor={theme.backgroundColor} action={() => buildOperation('8')} textColor={theme.buttonNumbers}  />
                        <CButton symbol={'9'} bgcolor={theme.backgroundColor} action={() => buildOperation('9')} textColor={theme.buttonNumbers}  />
                        <CButton symbol={'×'} bgcolor={theme.buttonOperation} action={() => buildOperation('*')} textColor={theme.primary}/>
                    </View>
                    <View style={styles.row}>
                        <CButton symbol={'4'} bgcolor={theme.backgroundColor} action={() => buildOperation('4')} textColor={theme.buttonNumbers}  />
                        <CButton symbol={'5'} bgcolor={theme.backgroundColor} action={() => buildOperation('5')} textColor={theme.buttonNumbers}  />
                        <CButton symbol={'6'} bgcolor={theme.backgroundColor} action={() => buildOperation('6')} textColor={theme.buttonNumbers}  />
                        <CButton symbol={'-'} bgcolor={theme.buttonOperation} action={() => buildOperation('-')} textColor={theme.primary}/>
                    </View>
                    <View style={styles.row}>
                        <CButton symbol={'1'} bgcolor={theme.backgroundColor} action={() => buildOperation('1')} textColor={theme.buttonNumbers}  />
                        <CButton symbol={'2'} bgcolor={theme.backgroundColor} action={() => buildOperation('2')}  textColor={theme.buttonNumbers} />
                        <CButton symbol={'3'} bgcolor={theme.backgroundColor} action={() => buildOperation('3')}  textColor={theme.buttonNumbers} />
                        <CButton symbol={'+'} bgcolor={theme.buttonOperation} action={() => buildOperation('+')} textColor={theme.primary}/>
                    </View>
                    <View style={styles.row}>
                        <CButton symbol={'0'} bgcolor={theme.backgroundColor} action={() => buildOperation('0')}  textColor={theme.buttonNumbers} />
                        <CButton symbol={'.'} bgcolor={theme.backgroundColor} action={() => buildOperation('.')}  textColor={theme.buttonNumbers} />
                        <EqualButton symbol={'='} bgcolor={theme.buttonOperation} action={calculate} textColor={theme.primary}/>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default HomeScreen;
