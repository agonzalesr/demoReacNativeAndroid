
import React, {  Component} from 'react';
import {ScrollView, View,Text,StyleSheet, Button,FlatList, ActivityIndicator  } from 'react-native';

import CustomRow from "./../components/CustomRow";
import HeaderBuscar from "./../components/HeaderBuscar";

const token = 'qPBlnz3FdPZX-EgbY6MbyDvVrBRGo_B89Awl';  
    
const CustomListview = ({ itemList }) => (
    <View>
        <FlatList
        data={itemList}
        renderItem={({ item }) => 
        <CustomRow data = {item} />
                    }
        keyExtractor={(item, index) => index.toString()}  />     
    </View>
        );


export default class PrincipalScreen extends Component {
    constructor(props) {
        super(props);   
    }    

    state = {
        isLoading:false,
        isLoad: false,
        dataSource: [],
        dataSource2: [],
        page: 1,
        countPages: 0,
    }

    static navigationOptions = ({navigation }) =>
    {
        return {
        headerStyle: {height:50},
        headerTitle: 
        <HeaderBuscar   buscar={navigation.getParam('filtrarUsuario')} 
                        clear={navigation.getParam('clearText')} 
                        placeholder='Buscar usuario'
                        title="Buscar" />
        }
    };

    _filtrarUsuario = (text) => {
        const newData = this.state.dataSource.filter(function(item) {
            const itemData = item.first_name ? item.first_name : '';
            const textData = text;
            return itemData.indexOf(textData) > -1;
          });
       
          this.setState({
            dataSource: newData
          });
        
    };
    _clearText = () => {
        this.setState({dataSource: this.state.dataSource2})
    }

    getDataUser = (a) =>{        
        this.setState({isLoading:true});
        const apiUrl = `https://gorest.co.in/public-api/users?page=${a}&_format=json&access-token=${token}`;        
        fetch(apiUrl)
        .then((response) =>response.json())
        .then((responseJson) => {  
            this.setState({
                dataSource: responseJson.result,
                dataSource2: responseJson.result,
                isLoading: false,
                isLoad:true,
                page: responseJson._meta.currentPage,
                countPages: responseJson._meta.pageCount
            }, function(){
                //callback
            })
        })
        .catch((error)=>{
            alert.error(error);
        })
    }

    componentDidMount() {
        this.props.navigation.setParams({ 
            filtrarUsuario: this._filtrarUsuario, 
            clearText: this._clearText 
        });
      }

    render(){
        return(
            <ScrollView style={styles.container}>
                {this.state.isLoading && <ActivityIndicator size="large" color="#0000ff" />} 
                {!this.state.isLoading && !this.state.isLoad && <Button title="Traer datos" onPress={()=>this.getDataUser(this.state.page)}></Button>}
                {this.state.isLoad && 
                <View style={styles.containerBody}>
                    <View style={{flex:1, flexDirection:"row", justifyContent:"space-between"}}>            
                        <Button title="Anterior" onPress={()=> this.getDataUser(this.state.page - 1)}></Button>
                        <Text style={{fontSize:16, fontWeight:"500",paddingTop:10}}>Página {this.state.page} de {this.state.countPages} </Text>
                        <Button title="Siguiente" onPress={()=> this.getDataUser(this.state.page + 1)}></Button>
                    </View>
                </View>
                }        
                    <CustomListview itemList={this.state.dataSource}/>
                
            </ScrollView>
        )}
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#F9F9F9"
    },
    containerTitle:{
        padding:10,
        backgroundColor:"#FFF",
        margin:10
    },
    containerBody:{
        padding:10,
        backgroundColor:"#FFF",
        margin:10,
        borderColor:"#ccc",
        borderWidth:1,
        borderRadius:5
    },
    title: {
        fontSize:16,
        fontWeight:'700',        
    },
    subTitle: {
        fontSize:15,
        fontStyle:"italic",
        marginBottom:10
    },
    textInput : {
        padding:10
    },
    containerRow: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft:10,
        marginRight:10,
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'#ccc',
        shadowColor:'#ccc',
        shadowOffset: { width: 0, height: -3 },
        shadowRadius: 3,
        shadowOpacity: .5,
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    },
    description: {
        fontSize: 15,
        fontStyle: 'italic',
    },
    photo: {
        height: 50,
        width: 50,
        borderRadius:25
    },
    image: {
        marginTop: 20,
        marginLeft: 90,
        height: 200,
        width: 200
      },
      text: {
        fontSize: 20,
        marginLeft: 150
      },
      containerBody2:{
        margin:5,
        padding:10,
        backgroundColor:"#FFF",
        borderColor:"#ccc",
        borderWidth:1,
        borderRadius:5,
        alignContent:"stretch"
    },
})