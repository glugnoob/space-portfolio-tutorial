import { Html } from "@react-three/drei";

const HtmlLoader = () => {
  return (
    <Html className="flex items-center justify-center w-screen h-screen">
      <div className="border-8 border-t-0 border-l-0 rounded-full border-white/70 size-20 animate-spin" />
    </Html>
  );
};

export default HtmlLoader;
