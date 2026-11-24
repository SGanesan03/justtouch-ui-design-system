import { memo, useEffect, useRef, useState } from 'react';
import { AlignLeft } from 'lucide-react';

export interface OnThisPageItem {
  id: string;
  label: string;
}

interface OnThisPageProps {
  items: OnThisPageItem[];
}

export const OnThisPage = memo<OnThisPageProps>(function OnThisPage({ items }) {
  const [activeId, setActiveId] = useState<string>('');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    setActiveId(items[0]?.id ?? '');
  }, [items]);

  useEffect(() => {
    if (items.length === 0) return;

    observerRef.current?.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Pick the topmost visible entry
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-64px 0px -60% 0px', threshold: 0 },
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current!.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
    setActiveId(id);
  };

  return (
    <aside className="sticky top-24 self-start max-h-[calc(100vh-7rem)] overflow-y-auto">
      <div className="flex items-center gap-2 mb-3 text-[10px] font-semibold text-[#8896AD] uppercase tracking-wider">
        <AlignLeft className="w-3.5 h-3.5" aria-hidden />
        On this page
      </div>
      <nav aria-label="On this page">
        <ul className="space-y-0.5 border-l border-[#E6E8EB] dark:border-[#2A3A54]">
          {items.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className={`w-full text-left block pl-3 py-1 text-xs transition border-l-2 -ml-px ${
                  activeId === id
                    ? 'border-[#7ABEE8] text-[#3D96C8] dark:text-[#7ABEE8] font-semibold'
                    : 'border-transparent text-[#8896AD] hover:text-[#223049] dark:hover:text-[#C7CEDB] hover:border-[#C7CEDB]'
                }`}
              >
                {label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => scrollTo('api-reference')}
              className="w-full text-left block pl-3 py-1 text-xs border-l-2 border-transparent text-[#8896AD] hover:text-[#223049] dark:hover:text-[#C7CEDB] hover:border-[#C7CEDB] transition"
            >
              API reference
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
});
