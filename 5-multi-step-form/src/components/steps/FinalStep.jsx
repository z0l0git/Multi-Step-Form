import Image from "next/legacy/image";

export const FinalStep = () => {
  return (
    <div className="space-y-2 bg-white rounded-lg w-[480px] p-8">
      <div className="flex">
        <Image src="/pinecone-logo.svg" width={60} height={60} alt="pinecone-logo" objectFit="cover" priority />
      </div>

      <h2 className="text-[26px] text-[#202124] font-semibold">You're All Set! 🔥</h2>

      <p className="text-lg text-[#8E8E8E] font-normal">We've received your submission. Thank you!</p>
    </div>
  );
};
