import { Button } from "../ui/button";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const TodoCard = () => {
  return (
    <div>
      <div className=" bg-slate-100 rounded-md  flex justify-between items-center p-4 border">
        <input type="checkbox" name="" id="" />
        <p className="font-bold ">Todo Title</p>
        <p>Time</p>
        <p>Description</p>
        <div className="space-x-4">
          <Button className="bg-red-500 font-semibold text-xl">
            <MdDelete />
          </Button>
          <Button className="bg-blue-500 font-semibold text-xl">
            <FaEdit />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
