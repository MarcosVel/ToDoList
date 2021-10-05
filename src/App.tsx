import { useState } from "react";
import * as C from "./App.styles";
import { Item } from './types/Item';
import { ListItem } from "./components/ListItem";
import { AddArea } from "./components/AddArea";

const App = () => {
  const [ list, setList ] = useState<Item[]>([
    { id: 1, name: 'Comprar pão', done: false },
    { id: 2, name: 'Comprar bolo', done: true },
  ]);

  const handleAddTask = (taskName: string) => {
    // clonando lista
    let newList = [ ...list ];
    // adicionando item
    newList.push({
      id: list.length + 1, // quantidade de itens mais 1 para setar seu id
      name: taskName,
      done: false,
    });
    // inserindo na lista
    setList(newList);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea onEnter={ handleAddTask } />

        { list.map((item, index) => (
          <ListItem key={ index } data={ item } />
        )) }
      </C.Area>
    </C.Container>
  )
}

export default App;