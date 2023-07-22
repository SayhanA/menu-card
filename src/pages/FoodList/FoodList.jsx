import { FaRegTrashAlt, } from "react-icons/fa";
import { removeMeal } from "../../../fakedb";

const FoodList = () => {
  const getList = localStorage.getItem("ordered_meals");
  const itemList = JSON.parse(getList);
  const arr = Object?.entries(itemList);
  console.log(arr);
  return (
    <div className="min-h-screen">
        <div className="h-[100px]"></div>
      <div className="overflow-x-auto text-white w-8/12 mx-auto scroll-auto">
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
                arr?.map((item, index) => <tr key={index}>
                <th>{index + 1}</th>
                <td>{item[0]}</td>
                <td>{item[1]}</td>
                <td className="text-center w-[100px]">{item[1]}</td>
                <td className="text-center w-[100px]">{item[1]}</td>
                <td className="text-end">
                    <div onClick={() => removeMeal(item[0])} className="btn btn-warning text-red-600 text-xl"><FaRegTrashAlt /></div>
                </td>
              </tr>)
            }
            
            {/* row 1 */}
            
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FoodList;
