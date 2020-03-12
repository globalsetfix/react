import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AlertDialog(props) {
  const { dataAlert } = props;
  const [open, setOpen] = React.useState(false);
  
  // Победил использованием эфекта + передача в массив зависимостей объекта dataAlert
  React.useEffect(() => {
        setOpen(dataAlert.isOpen);
  },[dataAlert]);
  
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
          <Button onClick={props.handleDelete(dataAlert.id)} color="primary" autoFocus>
           {dataAlert.deleteBtn}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}