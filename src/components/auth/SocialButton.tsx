import Image from "next/image";

type Props = {
  provider: "google" | "facebook";
  onClick?: () => void;
};

export default function SocialButton({ provider, onClick }: Props) {
  const isGoogle = provider === "google";

  return (
    <button
      onClick={onClick}
      className="
        flex items-center justify-center gap-3
        rounded-lg border border-slate-300 bg-white px-4 py-2
        text-sm font-medium text-slate-700
        hover:bg-slate-50 transition
      "
    >
      <Image
        src={isGoogle ? "/icons/google.svg" : "/icons/facebook.svg"}
        alt={provider}
        width={20}
        height={20}
      />
    </button>
  );
}
