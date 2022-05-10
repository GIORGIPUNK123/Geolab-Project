import React from 'react';
import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { maxWidth, width } from '@mui/system';

const boxStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height: '60%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};
const SelectAutoWidth = (props) => {
  const handleChangeDelete = (event) => {
    const temp = props.setDelete;
    temp(event.target.value);
  };

  return (
    <FormControl
      required
      fullWidth
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
      }}
    >
      <InputLabel id='demo-simple-select-label'>ID</InputLabel>
      <Select
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={props.value}
        label='item'
        onChange={handleChangeDelete}
      >
        {props.items.map((item) => {
          return (
            <MenuItem key={item.id} value={item.id}>
              {item.id}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
const CustomInput = (props) => {
  return (
    <input
      className='custom-input'
      type={props.inputType}
      placeholder={props.placeHolder}
      style={{
        width: props.width,
        height: props.height,
      }}
      value={props.variable}
      onChange={props.onChange}
      required={props.required}
    />
  );
};
const Text = (props) => {
  if (props.type == 'delete') {
    return (
      <Typography id='modal-modal-description' sx={{ mt: 2 }}>
        Choose which one to delete
      </Typography>
    );
  } else {
    return (
      <Typography id='modal-modal-description' sx={{ mt: 2 }}>
        Create row to add
      </Typography>
    );
  }
};
const FetchButton = (props) => {
  if (props.type == 'delete') {
    return (
      <Button
        variant='contained'
        style={{ height: '100px' }}
        onClick={() => {
          fetch('http://localhost:3006/delete', {
            method: 'POST',
            body: deleteItemId,
          })
            .then((response) => {
              console.log(response.header);
            })
            .catch((err) => console.error(err));
          handleClose();
        }}
      >
        Confirm Deleting
      </Button>
    );
  } else if (props.type == 'add') {
    return (
      <Button
        variant='contained'
        style={{ height: '100px' }}
        onClick={() => {
          fetch('http://localhost:3006/add', {
            method: 'POST',
            body: props.sendRow,
          })
            .then((response) => {
              return response.text();
            })
            .then((data) => console.log(data));
          console.log('fetching');
          props.close;
        }}
      >
        Confirm Adding
      </Button>
    );
  }
};
const Inputs = (props) => {
  if (props.type == 'delete') {
    return (
      <div className='inputs'>
        <SelectAutoWidth
          value={props.deleteValue}
          items={props.items}
          setDelete={props.setDelete}
        />
        ;
      </div>
    );
  } else if (props.type == 'add') {
    return (
      <>
        <div className='inputs'>
          <CustomInput
            width={'60px'}
            height={'65px'}
            placeHolder={'ID'}
            inputType={'number'}
            value={props.idValue}
            onChange={(e) => {
              props.setIdValue(parseInt(e.target.value));
            }}
            required={true}
          />
          <CustomInput
            width={'100px'}
            height={'65px'}
            placeHolder={'Type'}
            inputType={'text'}
            value={props.typeValue}
            onChange={(e) => {
              props.setTypeValue(e.target.value);
            }}
            required={true}
          />
          <CustomInput
            width={'100px'}
            height={'65px'}
            placeHolder={'Price'}
            inputType={'text'}
            value={props.priceValue}
            onChange={(e) => {
              props.setPriceValue(parseInt(e.target.value));
            }}
            required={true}
          />
          <CustomInput
            width={'100px'}
            height={'65px'}
            placeHolder={'New Price'}
            inputType={'text'}
            value={props.newPriceValue}
            onChange={(e) => {
              props.setNewPriceValue(parseInt(e.target.value));
            }}
          />
          <CustomInput
            width={'100px'}
            height={'65px'}
            placeHolder={'Gel Price'}
            inputType={'text'}
            value={props.gelPriceValue}
            onChange={(e) => {
              props.setGelPriceValue(parseInt(e.target.value));
            }}
            required={true}
          />
          <CustomInput
            width={'100px'}
            height={'65px'}
            placeHolder={'New Gel Price'}
            inputType={'text'}
            value={props.newGelPriceValue}
            onChange={(e) => {
              props.setNewGelPriceValue(parseInt(e.target.value));
            }}
          />
          <CustomInput
            width={'100px'}
            height={'65px'}
            placeHolder={'Image'}
            inputType={'text'}
            value={props.imageValue}
            onChange={(e) => {
              props.setImageValue(e.target.value);
            }}
            required={true}
          />
          <CustomInput
            width={'75px'}
            height={'65px'}
            placeHolder={'Availability'}
            inputType={'number'}
            value={props.availabilityValue}
            onChange={(e) => {
              props.setAvailabilityValue(parseInt(e.target.value));
            }}
            required={true}
          />
          <CustomInput
            width={'250px'}
            height={'65px'}
            placeHolder={'Name'}
            inputType={'text'}
            value={props.nameValue}
            onChange={(e) => {
              props.setNameValue(e.target.value);
            }}
            required={true}
          />
        </div>
      </>
    );
  }
};

const AdminPanel = () => {
  useEffect(() => {
    fetch('https://geolab-project.herokuapp.com/items')
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const [items, setItems] = useState([]);

  const [modalType, setModalType] = useState('add');
  const [deleteItemId, setDeleteItemId] = useState(1);
  const [addItemId, setAddItemId] = useState();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [idValue, setIdValue] = useState();
  const [typeValue, setTypeValue] = useState();
  const [priceValue, setPriceValue] = useState();
  const [newPriceValue, setNewPriceValue] = useState();
  const [gelPriceValue, setGelPriceValue] = useState();
  const [newGelPriceValue, setNewGelPriceValue] = useState();
  const [imageValue, setImageValue] = useState();
  const [availabilityValue, setAvailabilityValue] = useState();
  const [nameValue, setNameValue] = useState();

  const [addRow, setAddRow] = useState(['', '', '', '', '', '', '', '']);
  useEffect(() => {
    setAddRow([
      idValue,
      typeValue,
      priceValue,
      newPriceValue,
      gelPriceValue,
      newGelPriceValue,
      imageValue,
      availabilityValue,
      nameValue,
    ]);
  }, [
    idValue,
    typeValue,
    priceValue,
    newPriceValue,
    gelPriceValue,
    newGelPriceValue,
    imageValue,
    availabilityValue,
    nameValue,
  ]);

  return (
    <section className='panel-section'>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          sx={boxStyles}
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            flexDirection: 'column',
            padding: '0 10%',
          }}
        >
          <Inputs
            type={modalType}
            deleteValue={deleteItemId}
            items={items}
            setDelete={setDeleteItemId}
            setAddRow={setAddRow}
            idValue={idValue}
            setIdValue={setIdValue}
            typeValue={typeValue}
            setTypeValue={setTypeValue}
            priceValue={priceValue}
            setPriceValue={setPriceValue}
            newPriceValue={newPriceValue}
            setNewPriceValue={setNewPriceValue}
            gelPriceValue={gelPriceValue}
            setGelPriceValue={setGelPriceValue}
            newGelPriceValue={newGelPriceValue}
            setNewGelPriceValue={setNewGelPriceValue}
            imageValue={imageValue}
            nameValue={nameValue}
            setNameValue={setNameValue}
            setImageValue={setImageValue}
            addRow={addRow}
            availabilityValue={availabilityValue}
            setAvailabilityValue={setAvailabilityValue}
          />

          <Text type={modalType} />
          <FetchButton
            type={modalType}
            sendRow={addRow}
            height={'100px'}
            close={handleClose}
          />
        </Box>
      </Modal>
      <TableContainer component={Paper} sx={{ maxWidth: '80%' }}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Item ID</TableCell>
              <TableCell align='right'>Type</TableCell>
              <TableCell align='right'>Price</TableCell>
              <TableCell align='right'>NewPrice&nbsp;</TableCell>
              <TableCell align='right'>GelPrice&nbsp;</TableCell>
              <TableCell align='right'>NewGelPrice&nbsp;</TableCell>
              <TableCell align='right'>Image&nbsp;</TableCell>
              <TableCell align='right'>Availability&nbsp;</TableCell>
              <TableCell align='right'>Name&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow
                key={item.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align='right'>{item.id}</TableCell>
                <TableCell align='right'>{item.type}</TableCell>
                <TableCell align='right'>{item.price}</TableCell>
                <TableCell align='right'>{item.newPrice}</TableCell>
                <TableCell align='right'>{item.gelPrice}</TableCell>
                <TableCell align='right'>{item.newGelPrice}</TableCell>
                <TableCell align='right'>{item.image}</TableCell>
                <TableCell align='right'>{item.availability}</TableCell>
                <TableCell align='right'>{item.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className='panel-buttons'>
        <Button
          className='panel-delete-button'
          variant='contained'
          onClick={() => {
            setModalType('delete');
            handleOpen();
          }}
        >
          Delete An Item
        </Button>
        <Button
          onClick={() => {
            setModalType('add');
            handleOpen();
          }}
          className='panel-add-button'
          variant='contained'
        >
          Add New Item
        </Button>
      </div>
    </section>
  );
};
export default AdminPanel;
