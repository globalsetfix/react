import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AlertDialog(props) {
  
  // dataAlert - объект данных для мод окна
  // handleDelete - функция удаления записи
  const { dataAlert, handleDelete } = props;
  
  // open - принимает true или false для открытия или закрытия мод окна
  const [ open, setOpen ] = React.useState(false);

  // dataAlert.isOpen - переменная содержащая true или false
  React.useEffect(() => {
        setOpen(dataAlert.isOpen);
  },[dataAlert]);

  // Закрываем мод окно
  const handleClose = () => {
        setOpen(false);
  };

  return ( 
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{dataAlert.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           {dataAlert.id}. {dataAlert.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
           {dataAlert.canselBtn}
          </Button>
          <Button onClick={() => handleDelete(dataAlert.id)} color="primary" autoFocus>
           {dataAlert.deleteBtn}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}