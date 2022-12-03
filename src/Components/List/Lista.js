import * as React from 'react';
import { CheckBox } from 'react-native-elements';
import {View} from  'react-native';

export default function Lista () {
  const [isSelected, setSelected] = React.useState(true);
  const [isSelected1, setSelected1] = React.useState(false);
  const [isSelected2, setSelected2] = React.useState(false);

  return (

    <View>
      <CheckBox
      title="Prova de Quimica"
      checkedIcon="check"
      uncheckedIcon="square-o"
      checkColor="green"
      uncheckedColor="red"
      checked={isSelected}
      onPress={() => setSelected(!isSelected)}
      />

      <CheckBox
      title="Entregar tarefa de Portugues"
      checkedIcon="check"
      uncheckedIcon="square-o"
      checkColor="green"
      uncheckedColor="red"
      checked={isSelected1}
      onPress={() => setSelected1(!isSelected1)}
      />

      <CheckBox
      title="Pagar conta da internet"
      checkedIcon="check"
      uncheckedIcon="square-o"
      checkColor="green"
      uncheckedColor="red"
      checked={isSelected2}
      onPress={() => setSelected2(!isSelected2)}
      />
    </View>


  );
};