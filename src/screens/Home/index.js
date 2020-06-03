import React from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native';
import lavajato from '../../images/lavajato.png';
import mecanica from '../../images/mecanica.png';
import funilaria from '../../images/funilaria.png';
import combustivel from '../../images/combustivel.png';
import borracharia from '../../images/borracharia.png';
import guaragem from '../../images/guaragem.png';
import acess from '../../images/accs.png';
import guincho from '../../images/guincho.png';
import agendamento from '../../images/agendamento.png';
import avatar from '../../images/avatar.png';
import styles from './main.js';


export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textHeader}>Engine</Text>
                <Image source={avatar} style={styles.icon}></Image>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.tudo}>
                <View style={styles.categorias}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                        <TouchableOpacity style={styles.lavajato} disabled={true}>
                            <View style={styles.propriedadesCategory}>
                                <Image source={lavajato} style={styles.iconCategory}></Image>
                                <Text style={styles.textIcon}>Lava Jato</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.mecanica} disabled={true}>
                            <View style={styles.propriedadesCategory}>
                                <Image source={mecanica} style={styles.iconCategory}></Image>
                                <Text style={styles.textIcon}>Mecânica</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.funilaria} disabled={true}>
                            <View style={styles.propriedadesCategory}>
                                <Image source={funilaria} style={styles.iconCategory}></Image>
                                <Text style={styles.textIcon}>Funilaria</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.gasolina} disabled={true}>
                            <View style={styles.propriedadesCategory}>
                                <Image source={combustivel} style={styles.iconCategory}></Image>
                                <Text style={styles.textIcon}>Combustível</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.borracharia} disabled={true}>
                            <View style={styles.propriedadesCategory}>
                                <Image source={borracharia} style={styles.iconCategory}></Image>
                                <Text style={styles.textIcon}>Borracharia</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.guaragem} disabled={true}>
                            <View style={styles.propriedadesCategory}>
                                <Image source={guaragem} style={styles.iconCategory}></Image>
                                <Text style={styles.textIcon}>Guaragem</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.acess} disabled={true}>
                            <View style={styles.propriedadesCategory}>
                                <Image source={acess} style={styles.iconCategory}></Image>
                                <Text style={styles.textIcon}>Acessórios</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.guincho} disabled={true}>
                            <View style={styles.propriedadesCategory}>
                                <Image source={guincho} style={styles.iconCategory}></Image>
                                <Text style={styles.textIcon}>Guincho</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.agendamento} disabled={true}>
                            <View style={styles.propriedadesCategory}>
                                <Image source={agendamento} style={styles.iconCategory}></Image>
                                <Text style={styles.textIcon}>Aluguel de carros</Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <View style={styles.empresas}>
                    <Text style={styles.textEmpresas}>Estabelecimentos</Text>
                    <TouchableOpacity style={styles.empresa} onPress={() => navigation.push("Detalhes")}>
                        <View style={styles.infos}>
                            <View style={styles.logo} />
                            <View style={styles.cardText}>
                                <Text style={styles.nomeEmpresa}>Casa do Amortecedor</Text>
                                <Text style={styles.tipoService}>Mecânica</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.empresa} onPress={() => navigation.push("Detalhes")}>
                        <View style={styles.infos}>
                            <View style={styles.logo} />
                            <View style={styles.cardText}>
                                <Text style={styles.nomeEmpresa}>Casa do Amortecedor</Text>
                                <Text style={styles.tipoService}>Mecânica</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.empresa} onPress={() => navigation.push("Detalhes")}>
                        <View style={styles.infos}>
                            <View style={styles.logo} />
                            <View style={styles.cardText}>
                                <Text style={styles.nomeEmpresa}>Casa do Amortecedor</Text>
                                <Text style={styles.tipoService}>Mecânica</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.empresa} onPress={() => navigation.push("Detalhes")}>
                        <View style={styles.infos}>
                            <View style={styles.logo} />
                            <View style={styles.cardText}>
                                <Text style={styles.nomeEmpresa}>Casa do Amortecedor</Text>
                                <Text style={styles.tipoService}>Mecânica</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.empresa} onPress={() => navigation.push("Detalhes")}>
                        <View style={styles.infos}>
                            <View style={styles.logo} />
                            <View style={styles.cardText}>
                                <Text style={styles.nomeEmpresa}>Casa do Amortecedor</Text>
                                <Text style={styles.tipoService}>Mecânica</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.empresa} onPress={() => navigation.push("Detalhes")}>
                        <View style={styles.infos}>
                            <View style={styles.logo} />
                            <View style={styles.cardText}>
                                <Text style={styles.nomeEmpresa}>Casa do Amortecedor</Text>
                                <Text style={styles.tipoService}>Mecânica</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.empresa} onPress={() => navigation.push("Detalhes")}>
                        <View style={styles.infos}>
                            <View style={styles.logo} />
                            <View style={styles.cardText}>
                                <Text style={styles.nomeEmpresa}>Casa do Amortecedor</Text>
                                <Text style={styles.tipoService}>Mecânica</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.empresa} onPress={() => navigation.push("Detalhes")}>
                        <View style={styles.infos}>
                            <View style={styles.logo} />
                            <View style={styles.cardText}>
                                <Text style={styles.nomeEmpresa}>Casa do Amortecedor</Text>
                                <Text style={styles.tipoService}>Mecânica</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.empresa} onPress={() => navigation.push("Detalhes")}>
                        <View style={styles.infos}>
                            <View style={styles.logo} />
                            <View style={styles.cardText}>
                                <Text style={styles.nomeEmpresa}>Casa do Amortecedor</Text>
                                <Text style={styles.tipoService}>Mecânica</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.empresa} onPress={() => navigation.push("Detalhes")}>
                        <View style={styles.infos}>
                            <View style={styles.logo} />
                            <View style={styles.cardText}>
                                <Text style={styles.nomeEmpresa}>Casa do Amortecedor</Text>
                                <Text style={styles.tipoService}>Mecânica</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.empresa} onPress={() => navigation.push("Detalhes")}>
                        <View style={styles.infos}>
                            <View style={styles.logo} />
                            <View style={styles.cardText}>
                                <Text style={styles.nomeEmpresa}>Casa do Amortecedor</Text>
                                <Text style={styles.tipoService}>Mecânica</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.empresa} onPress={() => navigation.push("Detalhes")}>
                        <View style={styles.infos}>
                            <View style={styles.logo} />
                            <View style={styles.cardText}>
                                <Text style={styles.nomeEmpresa}>Casa do Amortecedor</Text>
                                <Text style={styles.tipoService}>Mecânica</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.empresa} onPress={() => navigation.push("Detalhes")}>
                        <View style={styles.infos}>
                            <View style={styles.logo} />
                            <View style={styles.cardText}>
                                <Text style={styles.nomeEmpresa}>Casa do Amortecedor</Text>
                                <Text style={styles.tipoService}>Mecânica</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}