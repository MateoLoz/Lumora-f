export default function DashboardPage() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-20 gap-16 sm:p-4">
      {/* <ThemeSwitcher/> */}
      <canvas
        className="w-full h-full z-0 absolute"
        id="drawable panel"
      ></canvas>
    </div>
  );
}
