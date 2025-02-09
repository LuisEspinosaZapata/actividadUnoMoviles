import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { styles } from "../theme/appTheme";
import { BodyComponent } from "../components/BodyComponent";

const DivisionScreen = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState("");

  const handleDividir = () => {
    const numero1 = parseFloat(num1);
    const numero2 = parseFloat(num2);

    if (numero1 == 0 && numero2 == 0) {
      setResultado("No es posible es Indeterminación");
    } else if (numero2 === 0) {
      setResultado("No es posible dividir por cero");
    } else if (isNaN(numero1) || isNaN(numero2)) {
      setResultado("Por favor, ingrese números válidos");
    } else {
      const resultadoDivision = numero1 / numero2;
      setResultado(`El resultado es: ${resultadoDivision}`);
    }
  };

  return (
    <View>
      <Text style={styles.globalTitle}>División de números</Text>

      <BodyComponent>
        <TextInput
          style={styles.input}
          placeholder="Ingrese el primer número"
          value={num1}
          onChangeText={(text) => setNum1(text)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Ingrese el segundo número"
          value={num2}
          onChangeText={(text) => setNum2(text)}
          keyboardType="numeric"
        />
        <Button title="Dividir" onPress={handleDividir} />
        <Text>{resultado}</Text>
      </BodyComponent>
    </View>
  );
};

export default DivisionScreen;
