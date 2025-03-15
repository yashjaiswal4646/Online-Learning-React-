export default function TextComponent() {
  return (
    <div
      className="min-h-screen flex items-center justify-center text-white px-6"
      style={{
        background:
          "radial-gradient(circle at top center, #410640 5%, #000000 50%)",
      }}
    >
      <div className="text-center text-4xl font-semibold leading-tight space-y-4 mt-[-180px]">
        <p className="font-bold text-7xl">
          We only <span className="text-purple-500">teach</span>
        </p>
        <p className="font-bold text-7xl">what we are really really</p>
        <p className="font-bold text-7xl">good at. Get </p>
      </div>
    </div>
  );
}
