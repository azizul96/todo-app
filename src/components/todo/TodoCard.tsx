import { Button } from "../ui/button";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useAppDispatch } from "../../redux/hook";
import { removeTodo, toggleComplete } from "../../redux/features/todoSlice";

type TTodoCardProps = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
};

const TodoCard = ({ title, description, id, isCompleted }: TTodoCardProps) => {
  const dispatch = useAppDispatch();

  const toggleState = () => {
    dispatch(toggleComplete(id));
  };
  return (
    <div>
      <div className=" bg-slate-100 rounded-md  flex justify-between items-center p-4 border">
        <input
          onChange={toggleState}
          type="checkbox"
          name="complete"
          id="complete"
        />
        <p className="font-bold ">{title}</p>
        <div>
          {isCompleted ? (
            <p className="text-green-500">Done</p>
          ) : (
            <p className="text-red-500">Pending</p>
          )}
        </div>
        <p>{description}</p>
        <div className="space-x-4">
          <Button
            onClick={() => dispatch(removeTodo(id))}
            className="bg-red-500 font-semibold text-xl"
          >
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
