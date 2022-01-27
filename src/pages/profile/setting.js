import { StyleSheet, View, Text } from "react-native"
import { ListItem } from "react-native-elements"


export default Setting = () => {
    return (
        <View style={styles.container}>
            <View style={styles.listContainer}>
                <Text style={[styles.textTitle, styles.textBold]}>MY PROFILE</Text>
                <ListItem bottomDivider>
                    <ListItem.Content style={styles.list}>
                        <ListItem.Title style={styles.textBold}>First name</ListItem.Title>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <ListItem.Title>Fajar</ListItem.Title>
                            <ListItem.Chevron style={{ transform: [{ rotate: '90deg' }], marginLeft: 15 }} />
                        </View>
                    </ListItem.Content>
                </ListItem>
            </View>
            <View style={[styles.listContainer, { marginTop: 30 }]}>
                <Text style={[styles.textTitle, styles.textBold]}>SUPPORT</Text>
                <ListItem bottomDivider>
                    <ListItem.Content style={styles.list}>
                        <ListItem.Title style={styles.textBold}>First name</ListItem.Title>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <ListItem.Title>Fajar</ListItem.Title>
                            <ListItem.Chevron style={{ transform: [{ rotate: '90deg' }], marginLeft: 15 }} />
                        </View>
                    </ListItem.Content>
                </ListItem>
                <ListItem>
                    <ListItem.Content style={styles.list}>
                        <ListItem.Title style={[styles.textBold, { color: '#c90237' }]}>Log out</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
    },
    listContainer: {
        padding: 15,
        backgroundColor: '#fff'
    },
    list: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textTitle: {
        fontSize: 18,
    },
    textBold: {
        fontWeight: 'bold'
    }
})