
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';

interface EditableTitleProps {
  title: string;
  onTitleChange: (newTitle: string) => void;
  editable: boolean;
}

const EditableTitle = ({ title, onTitleChange, editable }: EditableTitleProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(title);

  const handleClick = () => {
    if (editable) {
      setIsEditing(true);
    }
  };

  const handleSave = () => {
    onTitleChange(editValue);
    setIsEditing(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    }
    if (e.key === 'Escape') {
      setEditValue(title);
      setIsEditing(false);
    }
  };

  if (isEditing) {
    return (
      <Input
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
        onBlur={handleSave}
        onKeyDown={handleKeyPress}
        className="text-2xl font-bold border-none p-0 focus:ring-0 bg-transparent"
        autoFocus
      />
    );
  }

  return (
    <h1 
      className={`text-2xl font-bold ${editable ? 'cursor-pointer hover:bg-accent/20 rounded  transition-colors' : ''}`}
      onClick={handleClick}
    >
      {title}
    </h1>
  );
};

export default EditableTitle;
