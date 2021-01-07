import React from "react";
import order from '../../constants/orders.json';
// import { DataGrid } from '@material-ui/data-grid';
import ConfirmButton from "./confirmButton";
import { useSelector } from "react-redux";


// const columns = [
//   { field: 'id', headerName: 'ID', width: 40 },
//   { field: 'order', headerName: 'Confirmed order', width: 200 },
//   { field: 'date', headerName: 'Date', width: 200 },
//   { field: 'name', headerName: 'Name', width: 200 },
//   { field: 'address', headerName: 'Address', width: 200 },
//   { field: 'status', headerName: 'Status', width: 200 },
  
// ];


const Orders = (props) => {
  const orderItems = useSelector((state) => state.order);
  let dataorder=[];
  

if(orderItems.confirmOrder.length>0){
  dataorder=orderItems.confirmOrder
}

 
  // let rows = dataorder;
 
  return (
    <>
    <div className="container">
    <div className="contact-form">
          <h2 className="title text-center">Recent Orders</h2>
    </div>
    
     <div className="row">
       <div className="col-md-4">
          <h4 className="text-color"><b>Order</b></h4>
       </div>
       <div className="col-md-4">
       <h4 className="text-color"><b>Date</b></h4>
       </div>
       <div className="col-md-3">
           
       </div>
     </div>
     <div className="ScrollStyle mb-5 pb-5">
     {order.map((e)=>(<>
     <div className="row mt-5">
      <div className="col-md-4">
          {e.order}
       </div>
       <div className="col-md-4">
         {e.date}
       </div>
       <div className="col-md-3">
           <ConfirmButton orderData={e}/>
       </div>
       </div>
     </>
     
     ))}
       
     
     
    </div>

    {/* <div className="orderTable mt-5 pt-5">
      <DataGrid rows={rows} columns={columns} pageSize={4}  />
    </div> */}
    <table className="table table-condensed mt-5 pt-5">
          <thead>
            <tr className="">
              <td className="text-color"><b>#</b></td>
              <td className=""></td>
              <td className="text-color"><b>Confirmed Orders</b></td>
              <td className="text-color"><b>Date</b></td>
              <td className="text-color"><b>Name</b></td>
              <td className="text-color"><b>Address</b></td>
              <td className="text-color"><b>Status</b></td>
            </tr>
          </thead>

          <tbody>{orderItems.confirmOrder.length===0?<div><h6 className="text-color text-center">no confirmed Orders</h6></div>:
          dataorder.map((it)=>(
              <>
                <tr className="mt-5">
                  <td className="">
                   {it.id}
                  </td>
                  <td className="">
                    <input type="checkbox"/>
                  </td>
                  <td className="">
                    {it.order}
                  </td>
                  <td className="">
                    {it.date}
                  </td>
                  <td className="">
                   {it.name}
                  </td>
                  <td className="">
                    {it.address}
                  </td>
                  <td className="">
                    {it.status}
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
       
    </div>
    </>);
  }
  export default Orders;