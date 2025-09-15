import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import { scrollToTop } from "./scrollToTop";

function MoveBack() {
  const handleMoveBack = () => {
    scrollToTop();
  };

  return (
    <Button asChild className="bg-gradient-primary">
      <Link to={"/"} onClick={handleMoveBack}>
        <Home className="w-4 h-4 mr-2" />
        Kembali ke Beranda
      </Link>
    </Button>
  );
}

export default MoveBack;
