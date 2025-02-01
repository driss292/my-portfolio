export default function DebugTailwind() {
  return (
    <div className="absolute bottom-4 left-48">
      <span className="sm:hidden text-white">XS</span>
      <span className="hidden sm:block md:hidden text-white">SM</span>
      <span className="hidden md:block lg:hidden text-white">MD</span>
      <span className="hidden lg:block xl:hidden text-white">LG</span>
    </div>
  );
}
