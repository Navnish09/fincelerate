export function TypographyH1({
  children,
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
      {children}
    </h1>
  );
}

export function TypographyH2({
  children,
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  );
}
export function TypographyH3({
  children,
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  );
}

export function TypographyH4({
  children,
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {children}
    </h4>
  );
}

export function TypographyP({
  children,
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
}

export function TypographyInlineCode({
  children,
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {children}
    </code>
  );
}

export function TypographyLarge({
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className="text-lg font-semibold">{children}</div>;
}

export function TypographySmall({
  children,
}: React.HTMLAttributes<HTMLSpanElement>) {
  return <small className="text-sm leading-none font-medium">{children}</small>;
}
