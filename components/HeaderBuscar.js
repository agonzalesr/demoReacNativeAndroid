import React, {Component} from 'react';
import { Platform,View,StyleSheet, TextInput, Button  } from 'react-native';
//import { Ionicons } from '@expo/vector-icons';
import TabBarIcon from "../components/TabBarIcon";


export default class HeaderBuscar extends Component {
    constructor(props) {
        super(props);    
    }
    state = {
        texto: '',
        tieneTexto:false,
    }

    clear(){
        this.setState({texto:'',tieneTexto:false});
        this.props.clear();
    }

    changeText(text){
        this.setState({
            texto:text, 
            tieneTexto: text!==''}, 
            function(){
                if(text===''){
                    this.clear();
                }
                else(
                    this.props.buscar(text)
                )
            })
    }
    
    render() {
      return(
        <View style={styles.container}>
        <View style={styles.container2}>
            <TabBarIcon style={{paddingTop:5}} name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'} size={20} color="#ccc" ></TabBarIcon>
            <View style={styles.container3}>
                <TextInput style={styles.text} 
                placeholder={this.props.placeholder} onChangeText={(text)=>this.changeText(text)}
                value={this.state.texto} />
            </View>
            {this.state.tieneTexto && <TabBarIcon style={{paddingTop:5}} name={Platform.OS === 'ios' ? 'ios-close-circle' : 'md-close-circle'} size={20} color="#bbb" 
            press={()=> this.clear()} />}
        </View>        
        <Button title={this.props.title} onPress={()=>this.props.buscar(this.state.texto)} style={{borderRadius:20}}></Button>
    </View>
      )}
  }

  const styles = StyleSheet.create({
      container: {
        flexDirection:"row", alignContent:"stretch", justifyContent:"space-between", flex:1, paddingRight:10
      },
      container2: {
          flex:1, flexDirection:"row", backgroundColor:"#F1F1F1", 
          borderRadius:20, paddingTop:0, marginLeft:10, paddingLeft:10, paddingRight:10, marginRight:10
        },
        container3: {
            flex:1, flexDirection:"column"
        },
        text :{
            marginLeft:10, fontSize:16,borderWidth:0, height:30,padding:5
        },
  })