import Login from "@/components/login";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen dark:bg-gray-800">
      <Login/>
    </div>
  );
}
