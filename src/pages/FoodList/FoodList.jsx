import { FaRegTrashAlt, } from "react-icons/fa";
import { removeMeal } from "../../../fakedb";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";

const FoodList = () => {
  const [items, setItems] = useState([]);
  const { setRemoveItem, removedItem } = useContext(AuthContext);
  const [totalCost, setTotalCost] = useState(0)
  const [data, setData] = useState([])

  useEffect(() => {
    const getList = localStorage.getItem("ordered_meals");
    const itemList = JSON.parse(getList);
    if (itemList) {
      const arr = Object?.entries(itemList);
      // console.log(arr);
      setItems(arr);

      let totalConstArr = 0;

      for (const num of arr) {
        totalConstArr = totalConstArr + num[0].split("/")[1] * num[1]
        // console.log(num[0].split("/")[1] * num[1])
      }

      console.log(totalConstArr)
      setTotalCost(totalConstArr)
    }
  }, [removedItem])
  console.log(totalCost)


  const removeItem = (id) => {
    setRemoveItem(id)
    removeMeal(id)
  }

  return (
    <div className="min-h-screen">
      <div className="h-[100px]"></div>
      <div className="overflow-x-auto text-white w-7/12 mx-auto scroll-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-white"></th>
              <th className="text-white">Name</th>
              <th className="text-white">Items</th>
              <th className="text-white">Price Per/item</th>
              <th className="text-white">Total Item Price</th>
              <th className="text-white text-end pr-5">Delete</th>
            </tr>
          </thead>
          <tbody>

            {
              items?.map((item, index) => <tr key={index}>
                <th>{index + 1}</th>
                <td>{item[0].split('/')[0]}</td>
                <td>{item[1]}</td>
                <td className="text-center w-[100px]">{item[0].split('/')[1]} tk</td>
                <td className="text-center w-[100px]">{item[1] * item[0].split('/')[1]} tk</td>
                <td className="text-end">
                  <div onClick={() => removeItem(item[0])} className="btn btn-warning text-red-600 text-xl"><FaRegTrashAlt /></div>
                </td>
              </tr>)
            }

            {/* row 1 */}


          </tbody>

          <tfoot className="text-white border-0 border-t-2">
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th className="text-[17px]">Total: {totalCost} tk</th>
              <th className="text-[17px]"></th>
            </tr>
          </tfoot>

        </table>
      </div>
    </div>
  );
};

export default FoodList;
