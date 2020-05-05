import React from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'
import styles from './main.js';
export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Categorias
                </Text>
            </View>
            <View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.containerTab}>
                    <View style={styles.itemCategory}></View>
                    <View style={styles.itemCategory}></View>
                    <View style={styles.itemCategory}></View>
                    <View style={styles.itemCategory}></View>
                </ScrollView>
            </View>

            <View style={styles.empresas}>
                <FlatList
                    data={[1, 2, 3, 4, 5]}
                    keyExtractor={empresa => String(empresa)}
                    showsVerticalScrollIndicator={false}
                    renderItem={() => (
                        <View style={styles.empresa}>
                            <View style={styles.propriedades}>
                                <View style={styles.logo} />
                                <View style={styles.cardText}>
                                    <Text style={styles.nomeEmpresa}>Casa do Amortecedor</Text>
                                    <Text style={styles.tipoService}>Mecânica</Text>
                                    <TouchableOpacity onPress={() =>{}}
                                        style={styles.empresaButton}>
                                        <Text style={styles.empresaButtonText}>Ver empresa</Text>
                                        <Feather name="arrow-right" size={16} color="#2C92CD" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )}
                />
            </View>
        </View>
    );
}