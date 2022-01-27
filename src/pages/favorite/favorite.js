import { StyleSheet, ScrollView, View } from "react-native"
import ItemCard from "../../components/itemCard";
import { useDispatch, useSelector } from "react-redux";
import { ADD_FAVORITE_HOTEL, REMOVE_FAVORITE_HOTEL } from "../../store/slicers/hotels";


export default Favorite = ({ navigation }) => {

    const dispatch = useDispatch();

    const favoriteHotels = useSelector(state => state.hotels.hotels.favorites)


    const handleClickFavorite = (hotel, isFavorited) => {
        isFavorited ? dispatch(REMOVE_FAVORITE_HOTEL(hotel)) : dispatch(ADD_FAVORITE_HOTEL(hotel))
    }

    const isFavorited = (id) => {
        return favoriteHotels.some((hotel) => hotel.hotelId === id)
    }

    const handleClickItemCard = (id, price) => {
        navigation.navigate('Detail', { hotelId: id, price: price })
    }

    return (
        <ScrollView style={styles.container}>
            <View style={{ marginBottom: 20 }}>
                {
                    favoriteHotels && favoriteHotels.map((hotel) =>
                        <ItemCard
                            key={hotel.hotelId}
                            id={hotel.hotelId}
                            hotel={hotel}
                            name={hotel.name}
                            rating={hotel.starRating}
                            price={hotel.ratesSummary.minPrice}
                            image={hotel.media.url}
                            city={hotel.location.address.cityName.split(' ').pop()}
                            isFavorited={isFavorited(hotel.hotelId)}
                            handleClickItemCard={handleClickItemCard}
                            handleClickFavorite={handleClickFavorite}
                        />)
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e8e8e8',
        padding: 20,
    },
});
