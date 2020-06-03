import React from 'react';
import { View, Text, TouchableOpacity,ScrollView } from 'react-native';
import styles from './main.js';
import { AntDesign } from '@expo/vector-icons';
export default function Detalhes() {
    return (
        <ScrollView showsVerticalScrollIndicator={false} >
            <View style={styles.container}>
                <View style={styles.perfil}>
                    <View style={styles.logoEmpresa}>
                    </View>
                    <View style={styles.infos}>
                        <Text style={styles.nomeEmpresa}>Casa do Amortecedor</Text>
                        <View style={styles.star}>
                            <Text style={styles.categoria}>Mecânica</Text>
                            <AntDesign style={styles.icon} name="star" size={24} color="#FFD765">
                                <Text style={styles.numberStar}>5,0</Text>
                            </AntDesign>
                        </View>
                    </View>
                </View>

                <View style={styles.services}>
                    <View style={styles.headerServices}>
                        <Text style={styles.txtHeader}>Serviços</Text>
                    </View>
                    <TouchableOpacity style={styles.itemService}>
                        <View style={styles.tituloService}>
                            <Text style={styles.tituloServiceText}>Amortecedor da casa</Text>
                        </View>
                        <View style={styles.desc}>
                            <Text style={styles.descText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At elementum eu facilisis sed.</Text>
                        </View>
                        <View style={styles.valor}>
                            <Text style={styles.valorText}>R$ 120,00</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemService}>
                        <View style={styles.tituloService}>
                            <Text style={styles.tituloServiceText}>Amortecedor da casa</Text>
                        </View>
                        <View style={styles.desc}>
                            <Text style={styles.descText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At elementum eu facilisis sed.</Text>
                        </View>
                        <View style={styles.valor}>
                            <Text style={styles.valorText}>R$ 120,00</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemService}>
                        <View style={styles.tituloService}>
                            <Text style={styles.tituloServiceText}>Amortecedor da casa</Text>
                        </View>
                        <View style={styles.desc}>
                            <Text style={styles.descText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At elementum eu facilisis sed.</Text>
                        </View>
                        <View style={styles.valor}>
                            <Text style={styles.valorText}>R$ 120,00</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemService}>
                        <View style={styles.tituloService}>
                            <Text style={styles.tituloServiceText}>Amortecedor da casa</Text>
                        </View>
                        <View style={styles.desc}>
                            <Text style={styles.descText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At elementum eu facilisis sed.</Text>
                        </View>
                        <View style={styles.valor}>
                            <Text style={styles.valorText}>R$ 120,00</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}