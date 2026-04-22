import LoginCard from "../components/auth/LoginCard";

function LoginScreen() {
  return (
    <div className="h-screen w-full relative">

      <img
        src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80"
        className="absolute w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <LoginCard />
      </div>

    </div>
  );
}

export default LoginScreen;