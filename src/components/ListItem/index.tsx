import { Item } from '../../types/Item';
import * as C from './styles';

type Props = {
  data: Item
}

export const ListItem = ({ data }: Props) => {
  return (
    <C.Container>{ data.name }</C.Container>
  )
}