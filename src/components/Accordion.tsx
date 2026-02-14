export type AccordionItem = {
  title: string;
  description: string;
};

export default function Accordion({
  items,
  iconPosition = "right",
  iconSize = 14,
  titleClassName = "",
  className = "",
  descriptionClassName = "",
}: {
  items: AccordionItem[];
  iconPosition?: "left" | "right";
  iconSize?: number;
  titleClassName?: string;
  className?: string;
  descriptionClassName?: string;
}) {
  const isLeft = iconPosition === "left";

  return (
    <ul
      className={`border-y border-[hsl(var(--black-hsl))] divide-y divide-[hsl(var(--black-hsl))] ${className}`}
    >
      {items.map((item) => (
        <li key={item.title}>
          <details className="group">
            <summary className="cursor-pointer py-[15px]">
              {isLeft ? (
                <div className="flex items-center gap-3">
                  <PlusIcon size={iconSize} />
                  <span className={titleClassName}>{item.title}</span>
                </div>
              ) : (
                <div className="flex items-center justify-between gap-3">
                  <span className={titleClassName}>{item.title}</span>
                  <PlusIcon size={iconSize} />
                </div>
              )}
            </summary>
            <div
              className={`pb-[30px] min-w-[70%] max-w-[300px] ${descriptionClassName}`}
            >
              <p>{item.description}</p>
            </div>
          </details>
        </li>
      ))}
    </ul>
  );
}

function PlusIcon({ size }: { size: number }) {
  return (
    <span
      className="relative block shrink-0 text-[hsl(var(--black-hsl))]"
      style={{ height: `${size}px`, width: `${size}px` }}
      aria-hidden
    >
      <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current" />
      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current transition-opacity duration-200 group-open:opacity-0" />
    </span>
  );
}
