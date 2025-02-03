import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ElevatedCard = () => {
    return (
        <View>
            <Text style={styles.headingText}>Fashion Street !</Text>
            <View style={styles.cardContainer}>
                <Image
                    source={{ uri: 'https://i.ytimg.com/vi/C6PB3Ix_pKU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA3BoCSpmrwEeIy21FLc4VxKFoisQ' }}
                    style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Hawa Mahal</Text>
                    <Text style={styles.cardLabel}>Pink City , Jaipur (Rajasthan)</Text>
                    <Text style={styles.cardDescription}>
                        Hawa Mahal Bazar in Jaipur, India has many shops that sell textiles,
                        handicrafts, and other goods. Some shops may offer seasonal sales,
                        such as clearance sales at the end of the year
                    </Text>
                    <Text style={styles.cardFooter}>2km away from sindhi camp</Text>
                </View>
            </View>
            <View style={styles.cardContainer}>
                <Image
                    source={{
                        uri: 'https://i.ytimg.com/vi/1BQ37Eh0wnI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAf_comKCgmIdnCJC64VMGQbXyvKA',
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Sarojini Nagar</Text>
                    <Text style={styles.cardLabel}>NCR Capital of india, Delhi </Text>
                    <Text style={styles.cardDescription}>
                        Sarojini Nagar Market in South Delhi, India is a popular shopping
                        destination known for its low-priced clothing, shoes, and
                        accessories. It's also known for its home decor items, food stalls,
                        and street shops.
                    </Text>
                    <Text style={styles.cardFooter}>4.5km away from Rajeev choke metro station</Text>
                </View>
            </View>
        </View>
    );
};

export default ElevatedCard;

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 8,
    },
    cardContainer: {
        margin: 20,
        borderWidth: 0.5,
        padding: 18,
        borderRadius: 10,
    },
    cardImage: {
        height: 300,
        marginBottom: 5,
        borderRadius: 10,
    },
    cardBody: {
        marginHorizontal: 40,
        marginVertical: 5,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardLabel: {
        fontSize: 16,
    },
    cardFooter: {
        paddingVertical: 5,
        textAlign: 'center',
        fontStyle: 'italic',
        fontWeight: 600,
        color: "#ff0066"
    },
    cardDescription: {
        color: 'grey',
    },
});
