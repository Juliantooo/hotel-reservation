import { StyleSheet, View, Text } from "react-native"
import { Input, Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

export default Login = () => {
    return (
        <View style={styles.container}>
            <View style={styles.sectionOne}>
                <Text style={styles.textTitle}>Sign in</Text>
            </View>
            <View style={styles.sectionForm}>
                <Input
                    placeholder='Username'
                    leftIcon={
                        <Ionicons name="person" size={18} />
                    }
                />
                <Input
                    placeholder='Username'
                    leftIcon={
                        <Ionicons name="eye-off" size={18} />
                    }
                />
                <Button
                    title="Login"
                    titleStyle={{ fontWeight: '600' }}
                    buttonStyle={{
                        backgroundColor: '#489687',
                        borderColor: 'transparent',
                        borderWidth: 0,
                        borderRadius: 7,
                        paddingVertical: 10
                    }}
                    containerStyle={{
                        width: '100%',
                        marginVertical: 10,
                    }}
                />
                <Text >Forgot your password?</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#489687',
    },
    textTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff'
    },
    sectionOne: {
        flex: 2,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    sectionForm: {
        backgroundColor: '#fff',
        flex: 4,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15
    },
})