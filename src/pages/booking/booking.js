import { useEffect, useState } from "react"
import { TextInput, View, Picker, Text, StyleSheet, TouchableOpacity, ToastAndroid } from "react-native"
import { useDispatch } from "react-redux"
import { GET_HOTEL_DETAIL } from "../../service/api-path"
import http from "../../service/http"
import { ADD_ORDERED_HOTEL } from "../../store/slicers/hotels"


export default Booking = ({ navigation, route }) => {

    const dispatch = useDispatch()

    const { hotelId, price } = route.params
    const [detailHotel, setDetailHotel] = useState(null)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [days, setDays] = useState(1)
    const [phoneNumberPrefix, setPhoneNumberPrefix] = useState('+62')
    const [phoneNumber, setPhoneNumber] = useState('')

    const totalPayment = () => {
        return parseInt(days) * parseInt(price)
    }


    const getDetailHotel = async () => {
        const response = await http.get(GET_HOTEL_DETAIL, {
            params: {
                hotel_id: hotelId
            }
        })
        setDetailHotel(response.data)
    }

    const showToast = () => {
        ToastAndroid.show("Checkout success!", ToastAndroid.LONG);
    };

    const handlePressBooking = () => {
        dispatch(ADD_ORDERED_HOTEL({
            name,
            email,
            days,
            phoneNumber: `${phoneNumberPrefix}${phoneNumber}`,
            hotel: detailHotel,
            price: totalPayment()
        }))
        showToast();
        setTimeout(() => {
            navigation.goBack()
        }, 800);
    }


    useEffect(() => {
        getDetailHotel()
    }, [])

    return (
        <View style={styles.container}>
            <View style={{ padding: 20 }}>
                <Text style={styles.textTitle}>CONTACT INFORMATIONS</Text>
                <TextInput style={styles.input} placeholder="Fullname" autoComplete="name" onChangeText={(e) => setName(e)} />
                <TextInput style={styles.input} placeholder="Email" autoComplete="email" onChangeText={(e) => setEmail(e)} />
                <TextInput style={styles.input} placeholder="Number of days" onChangeText={(e) => setDays(e)} />
                <View style={styles.pickerContainer}>
                    <View style={{ backgroundColor: '#fff', borderRadius: 7, marginRight: 10 }}>
                        <Picker
                            style={{ width: 100 }}
                            selectedValue="selected"
                            onValueChange={(itemValue) => setPhoneNumberPrefix(itemValue)}
                        >
                            <Picker.Item label="+62" value="+62" />
                        </Picker>
                    </View>
                    <TextInput style={styles.input} placeholder="Phone number" onChangeText={(e) => setPhoneNumber(e)} />
                </View>
                <Text style={styles.textTitle}>BOOKING SUMMARY</Text>
                <View style={styles.summaryContainer}>
                    <Text style={styles.textSubtitle}>{days === 1 ? `${days} day` : `${days} days`}</Text>
                    <View style={styles.underline} />
                    <View style={styles.priceInformationContainer}>
                        <Text style={styles.textTotal}>Total</Text>
                        <Text style={styles.textPrice}>$ {totalPayment()}</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.floatingButton} onPress={() => handlePressBooking()} >
                <Text style={styles.bookButtonText}>Chekcout</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    floatingButton: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingVertical: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#489687',
        borderTopRightRadius: 7,
        borderTopLeftRadius: 7
    },
    bookButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 5,
        marginBottom: 20
    },
    textSubtitle: {
        fontSize: 18,
        fontWeight: 'bold'
    }
    ,
    input: {
        backgroundColor: '#fff',
        padding: 10,
        fontSize: 15,
        borderRadius: 7,
        marginVertical: 5,
        display: 'flex',
        flexGrow: 1
    },
    pickerContainer: {
        borderRadius: 7,
        marginVertical: 5,
        fontSize: 15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 30
    },
    summaryContainer: {
        borderRadius: 7,
        backgroundColor: '#fff',
        padding: 12,
    },
    priceInformationContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 15
    },
    textPrice: {
        fontSize: 18,
        color: '#489687',
        fontWeight: 'bold'
    },
    textTotal: {
        fontSize: 16,
        fontWeight: '500'
    },
    underline: {
        borderBottomWidth: 2,
        marginTop: 10
    }
})