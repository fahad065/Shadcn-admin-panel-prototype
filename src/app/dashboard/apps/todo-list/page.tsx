import { PageHeader } from "@/components/page-header";
import { TodoListCard } from "./components/todo-list-card";

export default function TodoListPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Todo List"
        description="Keep track of your personal tasks, one item at a time."
      />

      <TodoListCard />
    </div>
  );
}
