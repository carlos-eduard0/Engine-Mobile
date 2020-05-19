import React from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native';
import lavajato from '../../images/lavajato.png';
import mecanico from '../../images/mecanico.png';
import gasolina from '../../images/Gasolina.png';
import guincho from '../../images/guincho.png';
import funilaria from '../../images/funilaria.png';
import styles from './main.js';







export default function Home({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.containerTab}>
                <View style={styles.header}>
                    <Text style={styles.textHeader}>Categorias</Text>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                    <TouchableOpacity style={styles.itemCategory}>
                        <View style={styles.propriedadesCategory}>
                            <Image source={lavajato} style={styles.icon}></Image>
                            <Text style={styles.textCategory}>Lava Jato</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.itemCategory}>
                        <View style={styles.propriedadesCategory}>
                            <Image source={mecanico} style={styles.icon}></Image>
                            <Text style={styles.textCategory}>Mecânica</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.itemCategory}>
                        <View style={styles.propriedadesCategory}>
                            <Image source={gasolina} style={styles.icon}></Image>
                            <Text style={styles.textCategory}>Combustível</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.itemCategory}>
                        <View style={styles.propriedadesCategory}>
                            <Image source={guincho} style={styles.icon}></Image>
                            <Text style={styles.textCategory}>Guincho</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.itemCategory}>
                        <View style={styles.propriedadesCategory}>
                            <Image source={funilaria} style={styles.icon}></Image>
                            <Text style={styles.textCategory}>Funilaria</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>

            <View style={styles.empresas}>
                <View style={styles.headerEmpresas}>
                    <Text style={styles.textHeaderEmpresas}>
                        Estabelecimentos
                    </Text>
                </View>
                <FlatList
                    data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                    keyExtractor={empresa => String(empresa)}
                    showsVerticalScrollIndicator={false}
                    renderItem={() => (
                        <TouchableOpacity style={styles.empresa}  onPress={() => navigation.push("Detalhes")}>
                            <View style={styles.propriedades}>
                                <View style={styles.logo} />
                                <View style={styles.cardText}>
                                    <Text style={styles.nomeEmpresa}>Casa do Amortecedor</Text>
                                    <Text style={styles.tipoService}>Mecânica</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    );
}