import React from 'react';
import {Text,View, StyleSheet,TouchableOpacity,FlatList,KeyboardAvoidingView} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class OrderingScreen extends React.Component{

    constructor(){
        super()
        this.state={
            itemName:"",
            availability:false,
            extraInfo:"",
            price:0,
            quantity:0,
            showFlatlist:false
        }
    }

    /*fetchInformation=()=>{
        db.collection('current_orders').where('Item_name','==',itemName).get()
        .then(snapshot=>{
            snapshot.forEach(doc=>{
                var data=doc.data()
                this.setState({
                    itemName:data.Item_name,
                    availability:data.available,
                    extraInfo:data.extra,
                   price:data.price,
                    quantity:data.quantity,
                })
            })
        })
    }*/

    searchitem=()=>{
        
    }

    async getItemsFromApi (itemName){
        this.setState({itemName:itemName})
          if (itemName.length >2){
      
          var items = await ItemSeach.searchitem(itemName,'AIzaSyDp-j0VKsEhVFTuTAaotIImCZbS5MMLeGc')
          this.setState({
            dataSource:item.data,
            showFlatlist:true
          })

    componentWillMount(){
        this.fetchInformation();
    }
    render(){
        return(
            <View style={{backgroundColor:'#1ba100', paddingBottom:10,margin:3, borderWidth:3, borderRadius:18}}>
            <View style={styles.viewOfHeader}>
                <Text style={styles.headerStyle}>The Dauntless Food Delivery App!!</Text>
            </View>
            <View>
            <FlatList 
            
            ></FlatList>
            </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    viewOfHeader:{
        marginTop:30,
        backgroundColor:'#2bff00',
        justifyContent:'center',
        alignItems:'center',
        height:70,
        borderRadius:100,
        borderWidth:3,
        borderColor:'yellow',
        marginLeft:10,
        marginRight:10
    },
    headerStyle:{
        fontWeight:'bold',
        fontSize:25,
        fontFamily:'Arial',
        color:'#262617',
        justifyContent:'center'
    }
})
