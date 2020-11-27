import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../slices';
const AddUser = () => {
  const dispatch = useDispatch();
  const { type } = useSelector((state) => state.modals);

  const clickHandle = () => {
    dispatch(actions.hideModal());
  };

  return (
    <Modal show>
      <Modal.Header closeButton onHide={clickHandle}>
        <Modal.Title>Add channel</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className='' _lpchecked='1'>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control name='username' className='mb-2' />
          </Form.Group>
          <Form.Group>
            <Form.Label>Firstname</Form.Label>
            <Form.Control name='username' className='mb-2' />
          </Form.Group>
          <Form.Group>
            <Form.Label>Lastname</Form.Label>
            <Form.Control name='username' className='mb-2' />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control name='username' className='mb-2' />
          </Form.Group>
          <Form.Group controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' label='Is active' />
          </Form.Group>

          <div className='d-flex justify-content-end'>
            <Button onClick={clickHandle} type='button' variant='secondary' className='mr-2'>
              Cancel
            </Button>
            <Button type='submit' variant='primary'>
              Submit
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AddUser;
