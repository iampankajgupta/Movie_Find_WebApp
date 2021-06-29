import React from 'react';
import Pagination from '@material-ui/lab/Pagination'
// import { createMuiTheme, ThemeProvider } from '@material-ui/core';


const CustomPagination = ({ setPage, numOfPages }) => {

    const handlePageChange = (page) => {
        setPage(page)
        window.scroll(0, 0);
    }
    return (


        <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "10", }}>

            <Pagination count={numOfPages} onChange={e => handlePageChange(e.target.textContent)} style={{backgroundColor:"white"}} color="primary" hideNextButton hidePrevButton />

        </div>
    );
}

export default CustomPagination;