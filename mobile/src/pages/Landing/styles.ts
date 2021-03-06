import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8257e5',
        padding: 32,
    },

    section: {
        flexGrow: 1,
        justifyContent: 'space-between',
    },

    banner: {
        flexGrow: 1,
        width: '100%',
        resizeMode: 'contain',
    },

    title: {
        fontFamily: 'Poppins_400Regular',
        color: '#fff',
        fontSize: 20,
        lineHeight: 30,
    },

    titleBold: {
        fontFamily: 'Poppins_600SemiBold',
        fontWeight: 'bold',
    },

    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    button: {
        height: 150,
        width: '48%',
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between',
    },

    buttonPrimary: {
        backgroundColor: '#9871f5',
    },

    buttonSecondary: {
        backgroundColor: '#04de61',
    },

    buttonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: 20,
    },

    totalConnections: {
        fontFamily: 'Poppins_400Regular',
        color: '#d4c2ff',
        fontSize: 12,
        lineHeight: 20,
        maxWidth: 140,
    }
})

export default styles
