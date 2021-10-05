import { useState } from 'react';
import { Item } from '../../types/Item';
import * as C from './styles';

type Props = {
  data: Item
}

export const ListItem = ({ data }: Props) => {
  const [ isChecked, setIsChecked ] = useState(data.done);

  return (
    <C.Container done={ isChecked }>
      <input
        type="checkbox"
        checked={ isChecked }
        onChange={ e => setIsChecked(e.target.checked) }
      />
      <label>{ data.name }</label>
    </C.Container>
  )
}