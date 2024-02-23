import { useAuthState } from "@/stores/auth.store";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Social from "./social";
import Nerobot from "./nerobot";

const Register = () => {
  const { setAuth } = useAuthState();
  return (
    <div className="flex flex-col">
      <h2 className="text-xl font-bold">Register</h2>
      <p className="text-muted-foreground">
        Already have an account?{" "}
        <span
          className="text-blue-500 cursor-pointer hover:underline"
          onClick={() => setAuth("login")}
        >
          Sign in
        </span>
      </p>

      <div className="mt-3">
        <Separator />
      </div>
      <div className="mt-4">
        <span>Email</span>
        <Input className="mt-1 w-full py-5" placeholder="example@gamil.com" />
      </div>
      <div className="grid  grid-cols-2 mt-3 gap-3">
        <div className="w-full">
          <span>Password</span>
          <Input placeholder="*****" className="py-5 mt-1" type="password" />
        </div>
        <div>
          <span>Confirm password</span>
          <Input placeholder="*****" className="py-5 mt-1" type="password" />
        </div>
      </div>
      <Nerobot />
      <Button className="mt-3 w-full py-5">Register</Button>
      <Social />
    </div>
  );
};

export default Register;
