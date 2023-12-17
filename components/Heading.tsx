interface Heading {
  children: string;
}

export default function Heading({ children }: Heading) {
  return <h1 className="font-bold font-orbitron pb-3 text-2xl">{children}</h1>;
}
