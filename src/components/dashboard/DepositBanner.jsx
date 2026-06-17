import depositBanner from "../../assets/banners/deposit_banner.png";

export default function DepositBanner() {
  return (
    <div
      className="
        mt-4
        rounded-3xl
        overflow-hidden
        border
        border-purple-500/20
      "
    >
      <div className="mt-4 flex justify-center">
  <img
    src={depositBanner}
    alt="Deposit Banner"
    className="
      w-[1250px]
      object-contain
      hover:scale-[1.02]
      transition-all
      duration-300
    "
  />
</div>
    </div>
  );
}