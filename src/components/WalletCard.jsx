export default function WalletCard() {
  return (
    <div className="mx-4 mt-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl p-5">

      <p className="text-black font-medium">
        Demo Balance
      </p>

      <h1 className="text-3xl font-bold text-black">
        ₹100,000
      </h1>

      <div className="flex gap-3 mt-4">

        <button className="bg-black text-white px-4 py-2 rounded-xl">
          Deposit
        </button>

        <button className="bg-white text-black px-4 py-2 rounded-xl">
          Withdraw
        </button>

      </div>

    </div>
  );
}