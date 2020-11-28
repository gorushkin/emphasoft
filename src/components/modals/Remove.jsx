import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { actions, asyncActions } from '../../slices';

const RemoveUser = () => {
  const dispatch = useDispatch();

  const clickHandle = () => {
    dispatch(actions.hideModal());
  };

  const removeUserHandler = () => {
    console.log('we will remove this user');
  };

  return (
    <Modal onHide={clickHandle} show restoreFocus={false}>
      <Modal.Header closeButton>
        <Modal.Title>Remove user</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure?</p>
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
