import Layout from '@/components/Layout';
import axios from 'axios';
import { useState, useEffect} from 'react'

const orders = () => {
  const [orders, setOrders] = useState([]);
  const getOrders = async () => {
      /* const resp = await axios.get("/api/orers");
      setOrders(resp.data); */
  }
  useEffect(() => {
     getOrders();
  }, [])
  return (
    <>
        <div className="">
          <Layout>
            <table className="basic mt-10 table-auto">
              <thead>
                <tr>
                  <td>Order Name</td>
                  <td>Order Price</td>
                  <td>Order Time</td>
                </tr>
              </thead>
              <tbody>
                {
                    /* orders && orders.map((order) => {
                      <tr keys={order._id}>
                        <td>{order.name}</td>
                        <td>{order.price}</td>
                      </tr>
                    }) */
                }
                  
              </tbody>
            </table>
          </Layout>
        </div> 
    </>
  )
}

export default orders