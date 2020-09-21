// import React from 'react';
// import {makeStyles} from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
//
// const useStyles = makeStyles({
//     table: {
//         minWidth: 650,
//         textAlign: "center"
//     },
//     tableDetail: {
//         fontSize: "12px",
//     },
//     tableHeader: {
//         fontSize: "13px",
//     },
//     root: {
//         width: "80%",
//         heigth: "",
//         display: "inline-block",
//         marginTop : "20px"
//     }
// });
//
// export default function SimpleTable({data}) {
//     console.log(data.data)
//     const classes = useStyles();
//     return (
//         <>
//             <div className={classes.root}>
//                 {
//                     data.data ?
//                         <TableContainer component={Paper}>
//                             <Table className={classes.table} aria-label="simple table">
//                                 <TableHead>
//                                     <TableRow>
//                                         <TableCell className={classes.tableHeader} align="center">rank</TableCell>
//                                         <TableCell className={classes.tableHeader} align="center">title</TableCell>
//                                         <TableCell className={classes.tableHeader} align="center">artist</TableCell>
//                                         <TableCell className={classes.tableHeader} align="center">like</TableCell>
//                                     </TableRow>
//                                 </TableHead>
//                                 <TableBody>
//                                     {data.data.map((row, index) => {
//                                         let component = ''
//                                         if (index <= 9) {
//                                             component = (<TableRow key={row.rank}>
//                                                 <TableCell className={classes.tableDetail}
//                                                            align="left">{row.rank}</TableCell>
//                                                 <TableCell className={classes.tableDetail}
//                                                            align="left">{row.title}</TableCell>
//                                                 <TableCell className={classes.tableDetail}
//                                                            align="left">{row.artist}</TableCell>
//                                                 <TableCell className={classes.tableDetail}
//                                                            align="left">{row.like}</TableCell>
//                                             </TableRow>)
//                                         }
//                                         return component
//                                     })}
//                                 </TableBody>
//                             </Table>
//                         </TableContainer> : <div></div>
//                 }
//             </div>
//         </>
//     );
// }
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
    {id: 'rank', label: 'rank', minWidth: 40, fontSize : "13px"},
    {id: 'title', label: 'title', minWidth: 80, fontSize : "13px"},
    {
        id: 'artist',
        label: 'artist',
        minWidth: 80,
        align: 'center',
        fontSize : "13px"
    },
    {
        id: 'like',
        label: 'like',
        minWidth: 60,
        align: 'right',
        fontSize : "13px"
    }
];


const useStyles = makeStyles({
    root: {
        width: "80%",
        heigth: "",
        display: "inline-block",
        marginTop: "20px"
    },
    container: {
        maxHeight: 440,
    },
    tableDetail: {
        fontSize: "12px",
    }
});

export default function StickyHeadTable({data}) {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <>
            {
                data.data ?
                    <Paper className={classes.root}>
                        <TableContainer className={classes.container}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        {columns.map((column) => (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                                style={{minWidth: column.minWidth, fontSize : column.fontSize}}
                                            >
                                                {column.label}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data.data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                                        <TableRow key={row.rank}>
                                            <TableCell className={classes.tableDetail}
                                                       align="left">{row.rank}</TableCell>
                                            <TableCell className={classes.tableDetail}
                                                       align="left">{row.title}</TableCell>
                                            <TableCell className={classes.tableDetail}
                                                       align="left">{row.artist}</TableCell>
                                            <TableCell className={classes.tableDetail}
                                                       align="left">{row.like}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={data.data.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                    </Paper> : <div></div>
            }
        </>
    );
}
