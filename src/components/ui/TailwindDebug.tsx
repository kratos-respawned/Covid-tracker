function TailwindDebug() {
  return (
    <div className="fixed w-10 h-10 bottom-2 left-3 bg-muted ring-1 grid place-items-center rounded-full [&>:first-child]:text-red-500">
      <p className="sm:hidden">xs</p>
      <p className="hidden sm:block md:hidden">sm</p>
      <p className="hidden md:block lg:hidden">md</p>
      <p className="hidden lg:block xl:hidden">lg</p>
      <p className="hidden xl:block">xl</p>
    </div>
  );
}

export default TailwindDebug;
