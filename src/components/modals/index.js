import Add from './Add';

const modals = {
  adding: Add,
};

export default (modalName) => modals[modalName];
