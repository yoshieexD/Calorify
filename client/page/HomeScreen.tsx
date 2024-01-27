import React from 'react';
import { Text } from 'react-native';
import Layout from '../layout/Layout';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';

function HomeScreen() {
    return (
        <Layout>
            <Text>This is inside of Container</Text>
            <FabIcon />
        </Layout>
    );
};

export default HomeScreen;

function FabIcon() {
    return (
        <FAB style={styles.fab} icon={() => <Icon name="plus" size={23} color="white" />}
        />
    )
}

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        marginTop: 40,
        right: 0,
        bottom: 0,
        backgroundColor: '#ff3333'
    },
});