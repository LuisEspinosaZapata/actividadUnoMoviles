import { StyleSheet } from "react-native";
import { SECUNDARY_COLOR, PRIMARY_COLOR } from "../commons/constants";

export const styles = StyleSheet.create({
  globalTitle: {
    color: SECUNDARY_COLOR,
    fontSize: 26,
    paddingHorizontal: 30,
    paddingVertical: 40,
    fontWeight: "bold",
  },
  contentBody: {
    backgroundColor: SECUNDARY_COLOR,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 40,
    paddingTop: 40,
  },
  titleBody: {
    fontSize: 20,
    fontWeight: "bold",
    color: "blank",
  },
  descriptionBody: {
    fontSize: 15,
  },
  button: {
    marginTop: 220,
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 15,
    borderRadius: 10,
  },
  botonText: {
    color: SECUNDARY_COLOR,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  resultText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  titleFormulario: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  resultado: {
    fontSize: 18,
    color: SECUNDARY_COLOR,
    marginTop: 20
  },
  botonText1: {
    color: PRIMARY_COLOR,
    fontSize: 20,
    paddingVertical: 80,
    fontWeight: "bold",
    textAlign: "center"
  }

});
