import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import TodoModal from "./TodoModal";

const TodoContainer = () => {
  return (
    <div>
      <div className="space-x-4 mb-5 flex justify-between">
        <TodoModal />
        <TodoFilter />
        {/* <Button className="bg-primary-gradient font-semibold">
          <TodoModal />
        </Button>
        <Button className="bg-primary-gradient font-semibold">
          <TodoFilter />
        </Button> */}
      </div>
      <div className="bg-primary-gradient w-full h-full p-1 rounded-xl ">
        {/* <div className="bg-white font-bold text-2xl p-3 flex justify-center items-center rounded-md">
          <p>There is no task pending</p>
        </div> */}
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-2">
          <TodoCard />
          <TodoCard />
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
