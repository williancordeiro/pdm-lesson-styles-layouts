import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Card from '../Card';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type SecondaryCardProps = {
    //title: string;
    imgUrl: string;
    //levelXp: number;
    levelName: string;
    name: string;
    userId: string;
    //hp: number;
}

export default function SecondaryCard({ imgUrl, levelName, name, userId }: SecondaryCardProps) {
  return (
    <Card>
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: imgUrl }} width={90} height={90} />

            <View style={styles.userStatsContainer}>
                <View style={styles.user}>
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.userId}>{userId}</Text>
                </View>

                <View style={styles.hpBarContainer}>
                    <View style={{ ...styles.hpBar, width: '100%' }} />
                </View>
                <View style={styles.lvBarContainer}>
                    <View style={{ ...styles.lvBar, width: '60%' }} />
                </View>

                <View>
                    <Text style={styles.lvName}>{levelName}</Text>
                </View>
            </View>
        </View>
    </Card>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
    },
    image: {
        borderColor: 'grey',
        borderWidth: 2,
    },
    userStatsContainer: {
        flexDirection: 'column',
        paddingStart: 10,
    },
    user: {
        flexDirection: 'column',
    },
    userName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    userId: {
        fontSize: 14,
        color: 'gray',
    },
    icon: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        textAlign: 'right',
    },
    hpBarContainer: {
        width: '350%',
        height: 8,
        borderRadius: 4,
        backgroundColor: 'rgb(225 224 227)',
        position: 'relative',
        marginTop: 5,
        marginBottom: 5,

    },
    hpBar: {
        backgroundColor: 'rgb(255 97 101)',
        height: 8,
        borderRadius: 4,
        position: 'absolute',
    },
    lvBarContainer: {
        width: '350%',
        height: 8,
        borderRadius: 4,
        backgroundColor: 'rgb(225 224 227)',
        position: 'relative',
        marginTop: 5,
        marginBottom: 5,

    },
    lvBar: {
        backgroundColor: '#5EA7E8',
        height: 8,
        borderRadius: 4,
        position: 'absolute',
    },
    lvName: {
        fontSize: 12,
        color: 'gray',
    },
})