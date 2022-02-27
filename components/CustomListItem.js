import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, ListItem } from 'react-native-elements';

const CustomListItem = ({id, chatName, enterChat}) => {
  return (
    <ListItem>
        <Avatar rounded source={{
            uri: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Free-Image.png"
            // uri: "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png"
        }}/>
        <ListItem.Content>
            <ListItem.Title style={{fontWeight: "800"}}>
                    My First Chat
            </ListItem.Title>
            <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
                This is a test subtitle
            </ListItem.Subtitle>
        </ListItem.Content>
    </ListItem>
  )
}

export default CustomListItem

const styles = StyleSheet.create({})