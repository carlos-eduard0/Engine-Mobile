// import React from 'react';
// import { View, Text, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
// import lavajato from '../../images/lavajato.png';
// import mecanico from '../../images/mecanico.png';
// import gasolina from '../../images/Gasolina.png';
// import guincho from '../../images/guincho.png';
// import funilaria from '../../images/funilaria.png';
// import styles from './main.js';
// import { Feather } from '@expo/vector-icons';
// export default function Search() {
//     return (
//         <View style={styles.container}>
//             <View style={styles.searchForm}>
//                 <TextInput style={styles.searchInput} placeholder="Buscar serviço ou empresa" placeholderTextColor="#999" autoCapitalize="words" autoCorrect={false}>

//                 </TextInput>
//                 <TouchableOpacity style={styles.loadButton}>
//                     <Feather name="search" size={20} color="#516a91" />
//                 </TouchableOpacity>
//             </View>
//             <View style={styles.categorias}>
//                 <ScrollView showsVerticalScrollIndicator={false} >
//                     <View style={styles.headerCategory}>
//                         <Text style={styles.headerCategoryText}>Categorias</Text>
//                     </View>
//                     <TouchableOpacity style={styles.itemCategory}>
//                         <View style={styles.propriedadesCategory}>
//                             <Image source={lavajato} style={styles.icon}></Image>
//                             <Text style={styles.textCategory}>Lava Jato</Text>
//                         </View>
//                     </TouchableOpacity>

//                     <TouchableOpacity style={styles.itemCategory}>
//                         <View style={styles.propriedadesCategory}>
//                             <Image source={mecanico} style={styles.icon}></Image>
//                             <Text style={styles.textCategory}>Mecânica</Text>
//                         </View>
//                     </TouchableOpacity>

//                     <TouchableOpacity style={styles.itemCategory}>
//                         <View style={styles.propriedadesCategory}>
//                             <Image source={gasolina} style={styles.icon}></Image>
//                             <Text style={styles.textCategory}>Combustível</Text>
//                         </View>
//                     </TouchableOpacity>

//                     <TouchableOpacity style={styles.itemCategory}>
//                         <View style={styles.propriedadesCategory}>
//                             <Image source={guincho} style={styles.icon}></Image>
//                             <Text style={styles.textCategory}>Guincho</Text>
//                         </View>
//                     </TouchableOpacity>

//                     <TouchableOpacity style={styles.itemCategory}>
//                         <View style={styles.propriedadesCategory}>
//                             <Image source={funilaria} style={styles.icon}></Image>
//                             <Text style={styles.textCategory}>Funilaria</Text>
//                         </View>
//                     </TouchableOpacity>
//                 </ScrollView>
//             </View>
//         </View>
//     );
// }