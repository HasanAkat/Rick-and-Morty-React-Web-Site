import React from 'react';
import ReactPaginate from "react-paginate";
import './Pagination.css';

const Pagination = ({info, page, setPage}) => {
    
  return (<ReactPaginate className='pagination justify-content-center gap-4 my-4' 
  
  nextLabel={<span style={{ color: 'white' }}>&gt;</span>}
  previousLabel={<span style={{ color: 'white' }}>&lt;</span>}
  nextClassName='page-link' previousClassName='page-link' 
  pageClassName='page-item' pageLinkClassName='page-link' 
  
  onPageChange={(x)=>{
    setPage(x.selected + 1);
  }}
  pageCount={info?.pages}/>)
}

export default Pagination
