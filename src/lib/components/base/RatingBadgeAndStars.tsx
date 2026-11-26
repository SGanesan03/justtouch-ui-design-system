import { memo } from 'react';
import { Star } from 'lucide-react';
import { PreviewWrapper } from '@/components/PreviewWrapper';
import type { OnThisPageItem } from '@/components/OnThisPage';

export const RATING_VARIANTS: OnThisPageItem[] = [
  { id: 'rating-stars',     label: 'Star ratings' },
  { id: 'rating-sizes',     label: 'Sizes' },
  { id: 'rating-aggregate', label: 'Aggregate score' },
  { id: 'rating-badge',     label: 'Rating badge' },
  { id: 'rating-reviews',   label: 'Review cards' },
];

const Stars = ({ rating, size = 'w-5 h-5' }: { rating: number; size?: string }) => (
  <div className="flex items-center gap-0.5">
    {[1,2,3,4,5].map((i) => <Star key={i} className={`${size} ${i <= rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200 dark:text-slate-700'}`} />)}
  </div>
);

const REVIEWS = [
  { name: 'Selva G.',  rating: 5, text: 'Absolutely love the design system. Saved us weeks of work.' },
  { name: 'Alex K.',   rating: 4, text: 'Great components, very well documented.' },
  { name: 'Maria R.',  rating: 5, text: 'The best UI kit I have used in years.' },
];

export const RatingBadgeAndStars = memo(function RatingBadgeAndStars() {
  return (
    <>
      <PreviewWrapper id="rating-stars" title="Star ratings" description="Star rating display across all values 1–5."
        code={`<div className="flex items-center gap-1">
  {[1,2,3,4,5].map((i) => (
    <Star key={i} className={i <= rating ? 'w-5 h-5 fill-amber-400 text-amber-400' : 'w-5 h-5 text-slate-200'} />
  ))}
  <span className="ml-1.5 text-sm font-medium">{rating}.0</span>
</div>`}>
        <div className="p-10 flex flex-col items-center gap-4">
          {[1,2,3,4,5].map((r) => (
            <div key={r} className="flex items-center gap-3">
              <Stars rating={r} />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300 w-6">{r}.0</span>
            </div>
          ))}
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="rating-sizes" title="Sizes" description="Star rating size variants from XS to LG."
        code={`<Star className="w-3 h-3 fill-amber-400 text-amber-400" />  // XS
<Star className="w-4 h-4 fill-amber-400 text-amber-400" />  // SM
<Star className="w-5 h-5 fill-amber-400 text-amber-400" />  // MD
<Star className="w-6 h-6 fill-amber-400 text-amber-400" />  // LG`}>
        <div className="p-10 flex flex-wrap items-end justify-center gap-8">
          {[
            { size: 'w-3 h-3', label: 'XS' },
            { size: 'w-4 h-4', label: 'SM' },
            { size: 'w-5 h-5', label: 'MD' },
            { size: 'w-6 h-6', label: 'LG' },
            { size: 'w-8 h-8', label: 'XL' },
          ].map(({ size, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <Stars rating={4} size={size} />
              <span className="text-xs text-slate-400">{label}</span>
            </div>
          ))}
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="rating-aggregate" title="Aggregate score" description="Aggregate rating with score, stars, and bar breakdown."
        code={`<div className="inline-flex items-center gap-4 p-4 rounded-xl border border-slate-200 bg-white">
  <div className="text-center">
    <div className="text-3xl font-bold">4.8</div>
    <Stars rating={5} />
    <div className="text-xs text-slate-500">2,148 reviews</div>
  </div>
  <div className="space-y-1.5">
    {[5,4,3,2,1].map((star, i) => (
      <div key={star} className="flex items-center gap-2">
        <span className="text-xs text-slate-500 w-2">{star}</span>
        <div className="w-24 h-1.5 rounded-full bg-slate-100 overflow-hidden">
          <div className="h-full rounded-full bg-amber-400" style={{ width: pct[i] }} />
        </div>
      </div>
    ))}
  </div>
</div>`}>
        <div className="p-10 flex items-center justify-center">
          <div className="inline-flex items-center gap-5 px-5 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 dark:text-white">4.8</div>
              <div className="flex gap-0.5 mt-1 justify-center">
                {[1,2,3,4,5].map((i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
              </div>
              <div className="text-xs text-slate-500 mt-1">2,148 reviews</div>
            </div>
            <div className="space-y-1.5 min-w-[120px]">
              {[5,4,3,2,1].map((star, i) => (
                <div key={star} className="flex items-center gap-2">
                  <span className="text-xs text-slate-500 w-2">{star}</span>
                  <div className="flex-1 h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                    <div className="h-full rounded-full bg-amber-400" style={{ width: ['72%','18%','6%','3%','1%'][i] }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="rating-badge" title="Rating badge" description="Compact inline rating badge for product cards."
        code={`<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold">
  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />4.8
</span>`}>
        <div className="p-10 flex flex-wrap items-center justify-center gap-4">
          {[4.8, 4.5, 4.2, 3.9].map((score) => (
            <span key={score} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 text-sm font-semibold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />{score}
            </span>
          ))}
          {[4.8, 4.5].map((score) => (
            <span key={`b${score}`} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 text-sm font-semibold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />{score}
            </span>
          ))}
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="rating-reviews" title="Review cards" description="Individual review cards with star rating and quote."
        code={`<div className="p-4 rounded-xl border border-slate-200 bg-white">
  <Stars rating={5} size="w-4 h-4" />
  <p className="text-sm text-slate-600 mt-2">{review}</p>
  <p className="text-xs font-medium text-slate-900 mt-2">{name}</p>
</div>`}>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {REVIEWS.map(({ name, rating, text }) => (
            <div key={name} className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
              <Stars rating={rating} size="w-4 h-4" />
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">{text}</p>
              <p className="text-xs font-semibold text-slate-900 dark:text-white mt-3">{name}</p>
            </div>
          ))}
        </div>
      </PreviewWrapper>
    </>
  );
});
