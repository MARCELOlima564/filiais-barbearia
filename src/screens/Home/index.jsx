import { Text, View } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import { Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Home() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Title title="Home" />

        <View>
          <Text style={styles.titulo}>Escola de Barbeiros</Text>
          <View style={styles.txt}>
            <Text>Na Escola de Barbeiros "Corte Perfeito", a arte da barbearia vai muito além do simples ato de cortar cabelo e fazer barba. 
        Aqui, os alunos mergulham em um universo de técnicas refinadas, história da barbearia e cultura masculina. 
        Com uma abordagem prática e inovadora, nossos instrutores capacitam os aprendizes a dominarem não apenas as habilidades técnicas, mas também a arte de criar experiências excepcionais para seus clientes.
        Da precisão dos cortes clássicos à criatividade das tendências contemporâneas, nossa escola cultiva profissionais apaixonados e habilidosos, prontos para deixar sua marca no mundo da beleza masculina. 
        Seja bem-vindo à "Corte Perfeito", onde cada corte é uma obra-prima.</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}