import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type CategoryFormProps = {
  onAdd: (name: string) => void;
};

export function CategoryForm({ onAdd }: CategoryFormProps) {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;
    onAdd(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="輸入分類名稱"
        required
      />
      <Button type="submit" className="bg-amber-700 text-amber-50 hover:bg-amber-800">
        新增
      </Button>
    </form>
  );
}