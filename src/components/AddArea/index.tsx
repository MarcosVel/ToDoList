import * as C from './styles'
import { HiPlus } from "react-icons/hi";
import { KeyboardEvent, useState } from 'react';

type Props = {
  onEnter: (tasks: string) => void;
}

export const AddArea = ({ onEnter }: Props) => {
  const [ inputText, setInputText ] = useState('');

  const handleKeyUp = (e: KeyboardEvent) => {
    // console.log(e.code);
    if ((e.code === 'Enter' || e.code === 'NumpadEnter') && inputText !== '') {
      onEnter(inputText);
      setInputText('');
    }
  }

  return (
    <C.Container>
      <HiPlus className="plusIcon" size="22" />
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={ inputText }
        onChange={ e => setInputText(e.target.value) }
        onKeyUp={ handleKeyUp }
      />
    </C.Container>
  )
}