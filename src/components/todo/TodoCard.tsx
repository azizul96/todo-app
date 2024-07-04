import { Button } from "../ui/button";

const TodoCard = () => {
  return (
    <div>
      <div className=" bg-white rounded-md  flex justify-between items-center p-4">
        <input type="checkbox" name="" id="" />
        <p className="font-bold ">Todo Title</p>
        <p>Time</p>
        <p>Description</p>
        <div className="space-x-4">
          <Button>Delete</Button>
          <Button>Edit</Button>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
