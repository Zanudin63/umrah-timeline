
import React from "react";
import { Button } from "@/components/ui/button";
import { Edit, Lock, AlertCircle, Plane, Users } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";

export type UserRole = 'traveler' | 'agent' | 'airline' | 'airport' | 'admin' | 'pilgrim' | 'guide' | 'doctor' | 'imam';

interface EditButtonsProps {
  itemId: number;
  currentRole: UserRole;
  editableBy: UserRole[];
  onEdit: (itemId: number, role: UserRole) => void;
}

export const EditButtons: React.FC<EditButtonsProps> = ({
  itemId,
  currentRole,
  editableBy,
  onEdit,
}) => {
  const { toast } = useToast();
  
  const canEdit = editableBy.includes(currentRole);
  
  const roleToIcon: Record<UserRole, React.ReactNode> = {
    traveler: <Users className="h-4 w-4" />,
    agent: <Edit className="h-4 w-4" />,
    airline: <Plane className="h-4 w-4" />,
    airport: <AlertCircle className="h-4 w-4" />,
    admin: <Edit className="h-4 w-4" />,
    pilgrim: <Users className="h-4 w-4" />,
    guide: <Edit className="h-4 w-4" />,
    doctor: <AlertCircle className="h-4 w-4" />,
    imam: <Edit className="h-4 w-4" />
  };
  
  const handleEditClick = () => {
    if (canEdit) {
      onEdit(itemId, currentRole);
    } else {
      toast({
        title: "Access Restricted",
        description: `You don't have permission to edit this item as ${currentRole}.`,
        variant: "destructive"
      });
    }
  };

  return (
    <div className="flex justify-end gap-2">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleEditClick}
            className={`h-8 px-2 ${!canEdit ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {canEdit ? (
              <>
                {roleToIcon[currentRole]}
                <span className="ml-1">Edit</span>
              </>
            ) : (
              <>
                <Lock className="h-4 w-4" />
                <span className="ml-1">Locked</span>
              </>
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          {canEdit 
            ? `Edit as ${currentRole}` 
            : `Only ${editableBy.join(", ")} can edit this item`}
        </TooltipContent>
      </Tooltip>
    </div>
  );
};
