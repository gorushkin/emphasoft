import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { actions, asyncActions } from '../../slices';
import { useDispatch, useSelector } from 'react-redux';

const RemoveUser = () => {
  const dispatch = useDispatch();

  const clickHandle = () => {
    dispatch(actions.hideModal());
  };

  const {
    data: { id, username },
  } = useSelector((state) => state.modals);

  const removeUserHandler = () => {
    dispatch(asyncActions.removeUser({ id }));
    dispatch(actions.hideModal());
  };

  return (
    <Modal onHide={clickHandle} show restoreFocus={false}>
      <Modal.Header closeButton>
        <Modal.Title>Remove user</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Do you really want to remove <b>{username}</b>
        </p>
        <div className='d-flex justify-content-between'>
          <Button onClick={clickHandle} variant='secondary'>
            Cancel
          </Button>
          <Button onClick={removeUserHandler} variant='danger'>
            Confirm
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default RemoveUser;
