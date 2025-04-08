
import React from "react";
import { Button } from "@/components/ui/button";
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from "@/components/ui/popover";
import { MoreHorizontal, Edit, Check } from "lucide-react";

export type UserRole = "pilgrim" | "guide" | "imam" | "agent" | "admin" | "doctor";

interface EditButtonsProps {
  itemId: number;
  currentRole: UserRole;
  editableBy: UserRole[];
  onEdit: (itemId: number, role: UserRole) => void;
}

export const EditButtons = ({ 
  itemId, 
  currentRole, 
  editableBy,
  onEdit 
}: EditButtonsProps) => {
  const canEdit = editableBy.includes(currentRole);

  if (canEdit) {
    return (
      <Button
        variant="ghost"
        size="sm"
        className="h-7 w-7 p-0"
        onClick={() => onEdit(itemId, currentRole)}
      >
        <Edit className="h-4 w-4" />
      </Button>
    );
  }

  if (editableBy.length > 0) {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="h-7 w-7 p-0"
          >
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-48 p-1">
          <div className="text-xs text-muted-foreground px-2 py-1">
            Editable by:
          </div>
          {editableBy.map((role) => (
            <div 
              key={role}
              className="flex items-center gap-2 px-2 py-1 rounded-sm text-sm hover:bg-accent"
            >
              <Check className="h-3 w-3 text-green-500" />
              <span>{role}</span>
            </div>
          ))}
        </PopoverContent>
      </Popover>
    );
  }

  return null;
};
