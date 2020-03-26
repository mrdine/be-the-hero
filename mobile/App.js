import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

import React from 'react';

import Routes from './src/routes'
// <View> no lugar de div e section
// <Text> pra qualquer tipo de texto
// Usar tag style para estilizar "<View style={styles.container}>"
// Para criar style const styles = StyleSheet.create({})
    // display flex por padrão
    // background-color = backgroundColor
    // sempre aspas simples, numero ou não
// Estilização própria por elemento

export default function App() {
  return (
    <Routes />
  );
}

