import Image from "next/legacy/image";

export const Header = () => {
  return (
    <div className="space-y-2 mb-7">
      <div className="flex">
        <Image src="/pinecone-logo.svg" width={60} height={60} alt="pinecone-logo" objectFit="cover" priority />
      </div>

      <h2 className="text-[26px] text-foreground font-semibold">Join Us! 😎</h2>

      <p className="text-[18px] whitespace-nowrap text-[#8E8E8E]">Please provide all current information accurately.</p>
    </div>
  );
};
