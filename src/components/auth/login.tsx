import { useAuthState } from "@/stores/auth.store";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Social from "./social";
import Nerobot from "./nerobot";

const Login = () => {
  const { setAuth } = useAuthState();
  return (
    <div className="flex flex-col">
      <h2 className="text-xl font-bold">Login</h2>
      <p className="text-muted-foreground">
        Don't have an account?{" "}
        <span
          className="text-blue-500 cursor-pointer hover:underline"
          onClick={() => setAuth("register")}
        >
          Sign up
        </span>
      </p>
      <div className="mt-3">
        <Separator />
      </div>
      <div className="mt-4">
        <span>Email</span>
        <Input className="mt-1 w-full py-5" placeholder="example@gamil.com" />
      </div>

      <div className="w-full">
        <span>Password</span>
        <Input placeholder="*****" className="py-5 mt-1" type="password" />
      </div>
      <Nerobot />
      <Button className="mt-3 w-full py-5">Register</Button>

      <Social />
    </div>
  );
};

export default Login;
