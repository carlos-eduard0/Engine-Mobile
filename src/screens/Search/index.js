import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { View, FlatList, Text, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import lavajato from '../../images/lavajato.png';
import mecanico from '../../images/mecanica.png';
import gasolina from '../../images/combustivel.png';
import guincho from '../../images/guincho.png';
import funilaria from '../../images/funilaria.png';
import styles from './main.js';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Search() {

    const [services, setServices] = useState([]);
    const [categoria, setCategoria] = useState('n');

    async function loadServices(categoria){

        const response = await api.get('/servicos/categoria', {
            headers:{
                categoria:categoria
            }
        });

        setServices(response.data);
    }

    async function ChangeLavaJato(){
        setCategoria('Lava Jato');
    }


    async function ChangeMecanica(){
        setCategoria('Mecanica');
    }

    async function ChangeCombustivel(){
        setCategoria('Combustivel');
    }

    async function ChangeGuincho(){
        setCategoria('Guincho');
    }

    async function ChangeFunilaria(){
        setCategoria('Funilaria');
    }

    useEffect(() => {
        loadServices(categoria);
    }, [categoria]);


    return (
        <View style={styles.container}>
            <View style={styles.searchForm}>
                <TextInput style={styles.searchInput} placeholder="Buscar serviço ou empresa" placeholderTextColor="#999" autoCapitalize="words" autoCorrect={false}>

                </TextInput>
                <TouchableOpacity style={styles.loadButton}>
                    <Feather name="search" size={20} color="#516a91" />
                </TouchableOpacity>
            </View>
            <View style={styles.categorias}>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <View style={styles.headerCategory}>
                        <Text style={styles.headerCategoryText}>Categorias</Text>
                    </View>
                    <TouchableOpacity style={styles.itemCategory} onPress={ChangeLavaJato}>
                        <View style={styles.propriedadesCategory}>
                            <Image source={lavajato} style={styles.icon}></Image>
                            <Text style={styles.textCategory}>Lava Jato</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.itemCategory} onPress={ChangeMecanica}>
                        <View style={styles.propriedadesCategory}>
                            <Image source={mecanico} style={styles.icon}></Image>
                            <Text style={styles.textCategory}>Mecânica</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.itemCategory} onPress={ChangeCombustivel}>
                        <View style={styles.propriedadesCategory}>
                            <Image source={gasolina} style={styles.icon}></Image>
                            <Text style={styles.textCategory}>Combustível</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.itemCategory} onPress={ChangeGuincho}>
                        <View style={styles.propriedadesCategory}>
                            <Image source={guincho} style={styles.icon}></Image>
                            <Text style={styles.textCategory}>Guincho</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.itemCategory} onPress={ChangeFunilaria}>
                        <View style={styles.propriedadesCategory}>
                            <Image source={funilaria} style={styles.icon}></Image>
                            <Text style={styles.textCategory}>Funilaria</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.company}>
                        <FlatList
                            data={services}
                            keyExtractor={service => String(service.id)}
                            extraData={categoria}
                            showsVerticalScrollIndicator={false}
                            renderItem={({item: service}) => (
                                <TouchableOpacity style={styles.touchCompany}>
                                    <View style={styles.infoCompany}>
                                        <View style={styles.logoCompany}></View>
                                        <View style={styles.headerCardCompany}>
                                            <Text style={styles.titleHeaderCompany}>{service.nome_servico}</Text>
                                            <Text style={styles.spanCompany}>{service.categoria}</Text>
                                            <View style={styles.infoExtra}>
                                                <View style={styles.iconStar}>
                                                    <FontAwesome name="star" size={18} color="#fcc453" />
                                                    <Text style={styles.textStar}>5,0</Text>
                                                </View>
                                                <View style={styles.iconClock}>
                                                    <AntDesign name="clockcircle" size={17} color="#71d1a7" />
                                                    <Text style={styles.textClock}>7:00 AM - 5:00 PM</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </ScrollView>


            </View>


        </View>
    );
}