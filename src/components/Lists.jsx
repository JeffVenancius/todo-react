import { useContext } from 'react';
import { DosContext } from '../DosContext';
import ListOf from './ListOf'


function Lists() {
  const {dos} = useContext(DosContext)

  return (
    <div id="lists">
      <ListOf title="Todos" values={dos.todos} checked={false} />
      <ListOf title="Dones" values={dos.dones} checked={true} />
    </div>
  );
}

export default Lists;