import React from "react";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import { TitleComponent } from "../components/TitleComponent";
import { PRIMARY_COLOR } from "../commons/constants";
import { BodyComponent } from "../components/BodyComponent";
import { styles } from "../theme/appTheme";
import { ButtonComponent } from "../components/ButtonComponent";
import { CommonActions, useNavigation } from "@react-navigation/native";

export const LoginScreen = () => {
  //hook useNavegation
  const navigation = useNavigation();

  return (
    <View>
      <StatusBar backgroundColor={PRIMARY_COLOR} />
      <TitleComponent title="Inicio" />
      <BodyComponent>
        <View>
          <Text style={styles.titleBody}>Bienvenidos</Text>
          <Text style={styles.descriptionBody}>Aplicaciones móviles</Text>
        </View>
        
        <TouchableOpacity
          onPress={() =>
            navigation.dispatch(CommonActions.navigate({ name: "Division" }))
          }
        >
          <Text style={styles.botonText1} >Acceder</Text>
        </TouchableOpacity>
      </BodyComponent>
    </View>
  );
};
