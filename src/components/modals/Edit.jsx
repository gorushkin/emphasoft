import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { actions, asyncActions } from '../../slices';
import { useFormik } from 'formik';
import validationSchema from './userValidator';

const EditUser = () => {
  const dispatch = useDispatch();

  const {
    data: { id, username, last_name, first_name },
  } = useSelector((state) => state.modals);

  const clickHandle = () => {
    dispatch(actions.hideModal());
  };

  const formik = useFormik({
    initialValues: {
      username: username,
      first_name: first_name,
      last_name: last_name,
      password: '',
      passwordRepeat: '',
      is_active: true,
    },
    validateOnChange: false,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(asyncActions.editUser({id, ...values}));
      dispatch(actions.hideModal());
    },
  });

  return (
    <Modal show>
      <Modal.Header closeButton onHide={clickHandle}>
        <Modal.Title>Edit user</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className='' _lpchecked='1' onSubmit={formik.handleSubmit}>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              onChange={formik.handleChange}
              name='username'
              className='mb-2'
              type='text'
              value={formik.values.username}
              isInvalid={!!formik.errors.username}
            />
            {formik.errors.username ? (
              <div className='d-block mb-2 invalid-feedback'>{formik.errors.username}</div>
            ) : null}
          </Form.Group>
          <Form.Group>
            <Form.Label>Firstname</Form.Label>
            <Form.Control
              onChange={formik.handleChange}
              name='first_name'
              className='mb-2'
              type='text'
              value={formik.values.first_name}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Lastname</Form.Label>
            <Form.Control
              onChange={formik.handleChange}
              name='last_name'
              className='mb-2'
              type='text'
              value={formik.values.last_name}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={formik.handleChange}
              name='password'
              type='password'
              className='mb-2'
              value={formik.values.password}
              isInvalid={!!formik.errors.password}
            />
            {formik.errors.password ? (
              <div className='d-block mb-2 invalid-feedback'>{formik.errors.password}</div>
            ) : null}
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={formik.handleChange}
              name='passwordRepeat'
              className='mb-2'
              type='password'
              value={formik.values.passwordRepeat}
              isInvalid={!!formik.errors.passwordRepeat}
            />
            {formik.errors.passwordRepeat ? (
              <div className='d-block mb-2 invalid-feedback'>{formik.errors.passwordRepeat}</div>
            ) : null}
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

export default EditUser;
