function Label({ text }: { text: string }) {
  return (
    <p className="font-family-label rounded-full bg-slate-200 px-4 py-2 text-sm opacity-50 outline-1 outline-black/20 transition-all duration-300 ease-in-out hover:px-6">
      {text}
    </p>
  );
}

export default Label;
