import { useAuthState } from "@/stores/auth.store";

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
    </div>
  );
};

export default Login;
