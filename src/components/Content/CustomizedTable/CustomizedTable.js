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

/*
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


const rows = [
  createData('Frozen yoghurt', 159),
  createData('Ice cream sandwich', 237),
  createData('Eclair', 262),
  createData('Cupcake', 305),
  createData('Gingerbread', 356),
];
*/




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
  const { data, title } = props;
  
  // Значение по умолчанию для модального окна 
  const defDataAlert = {
       isOpen : false
  }
  
  // Передаем это значение
  const [dataAlert, setDataAlert] = React.useState(defDataAlert);
  
  // По клику на кнопку устанавливаем новое значение
  const handleClickOpen =  React.useCallback((ev) => {
    const objDataAlert = {
          isOpen : true
    }   
    setDataAlert(objDataAlert);
  }, []);
  
  // Здесь показывает что значение установилось c false на true
  console.log(dataAlert);
  return (
    <TableContainer component={Paper}>
      
      {/* Передаем значение , как передать новое установленное значение , ведь компонент уже отрисовался ? */}
      <AlertDialog dataAlert={dataAlert} />
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
               { /* <EditIcon className={classes.iconStyle} /> */ }
                <DeleteForeverIcon onClick={handleClickOpen} className={classes.iconStyle} />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
