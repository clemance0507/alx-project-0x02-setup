export interface CardProps {
  title: string;
  content: string;
}
export interface ButtonProps {
  label: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  onClick?: () => void;
}
export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (newPost: { title: string; content: string }) => void;
}