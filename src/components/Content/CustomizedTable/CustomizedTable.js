import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AlertDialog from "../AlertDialog/AlertDialog";


const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700
  },
  iconStyle : {
    cursor : 'pointer'
  }
});

export default function CustomizedTable(props) {
  const classes = useStyles();
  const { data, title, deletejson } = props;
  
  // Значение по умолчанию для модального окна 
  const defDataAlert = {
       // состояние мод окна
       isOpen : false,
       title : "Ops! Task is empty",
       description : "Error deleting task",
       canselBtn : "Cansel",
       deleteBtn : "Delete",
       id : null
  }
  
  // Объект dataAlert данных для мод окна 
  const [ dataAlert, setDataAlert ] = React.useState(defDataAlert);
  
  // По клику на иконку delete передаем в модальное окно задачу
  const delAlertOpen = (rowId,rowTitle) => {
    const objDataAlert = {
      isOpen : true,
      title : "Are you sure you want to delete this task?",
      description : rowTitle,
      canselBtn : "Cansel",
      deleteBtn : "Delete",
      id : rowId
    }   
    setDataAlert(objDataAlert);  
  }

  return (
    <TableContainer component={Paper}>
      <AlertDialog dataAlert={dataAlert} handleDelete={deletejson} />
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>{title.name} ({data.length})</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
               {row.title} 
              </StyledTableCell>
              <StyledTableCell align="right">
                <EditIcon />
                <DeleteForeverIcon onClick={()=>delAlertOpen(row.id,row.title)} className={classes.iconStyle} />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}