import { Button } from "../ui/button";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div className="space-x-4 text-center mb-2">
        <Button>Add Todo</Button>
        <Button>Filter</Button>
      </div>
      <div className="bg-red-500 w-full h-[500px] rounded-xl p-5">
        <TodoCard />
      </div>
    </div>
  );
};

export default TodoContainer;
