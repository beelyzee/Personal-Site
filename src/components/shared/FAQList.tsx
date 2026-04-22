import { FAQItem } from "@/types";

type FAQListProps = {
  items: FAQItem[];
};

export default function FAQList({ items }: FAQListProps) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details
          key={item.question}
          className="group rounded-3xl border border-[#d7dfe7] bg-white px-6 py-5 shadow-sm"
        >
          <summary className="cursor-pointer list-none text-lg font-medium text-[#10243d]">
            {item.question}
          </summary>
          <p className="mt-3 max-w-3xl leading-7 text-[#546170]">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

