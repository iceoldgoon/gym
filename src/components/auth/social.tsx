import { FaFacebook, FaGoogle } from "react-icons/fa6";
import { Button } from "../ui/button";

const Social = () => {
  return (
    <div>
      <div className="grid  grid-cols-2 mt-3 gap-3">
        <Button className="w-full flex items-center gap-2">
          <FaGoogle size={18} />
          <span>Google</span>
        </Button>
        <Button className="flex items-center gap-2">
          <FaFacebook size={18} />
          <span>Facebook</span>
        </Button>
      </div>
    </div>
  );
};

export default Social;
