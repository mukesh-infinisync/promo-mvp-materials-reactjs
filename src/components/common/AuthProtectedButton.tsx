import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useNavigate } from "react-router";

interface AuthProtectedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const AuthProtectedButton: React.FC<AuthProtectedButtonProps> = ({
  children,
  onClick = () => {},
}) => {
  const { isAuthenticated } = useSelector((state: RootState) => state.user);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (isAuthenticated) {
      onClick();
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      {/* Protected Button */}
      <Button
        variant="outline"
        className="p-0 m-0 outline-0 border-0"
        onClick={handleClick}
      >
        {children}
      </Button>

      {/* Auth Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>You are not logged in</DialogTitle>
            <DialogDescription>
              Please log in to continue with this action.
            </DialogDescription>
          </DialogHeader>

          <div className="flex justify-center gap-4 mt-4">
            <Button
              className="bg-blue-600 text-white hover:bg-blue-700"
              onClick={() => setOpen(false)}
            >
              Close
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                navigate('/login');
              }}
            >
              Go to Login
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
