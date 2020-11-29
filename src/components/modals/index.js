import Add from './Add';
import Edit from './Edit';
import Remove from './Remove';

const modals = {
  add: Add,
  edit: Edit,
  remove: Remove,
};

const func = (modalName) => modals[modalName];

export default func;
