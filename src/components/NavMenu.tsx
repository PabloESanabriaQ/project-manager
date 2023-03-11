export default function NavMenu({ open }: { open: boolean }) {
  if (open) return null;
  return (
    <nav className="w-screen h-20 flex justify-evenly items-center">
      <span className="text-xl font-bold">Here we are</span>
    </nav>
  );
}
