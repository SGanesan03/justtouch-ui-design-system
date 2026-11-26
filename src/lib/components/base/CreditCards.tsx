import { memo } from 'react';
import { Wifi } from 'lucide-react';
import { PreviewWrapper } from '@/components/PreviewWrapper';
import type { OnThisPageItem } from '@/components/OnThisPage';

export const CREDIT_CARDS_VARIANTS: OnThisPageItem[] = [
  { id: 'card-dark',    label: 'Dark card' },
  { id: 'card-brand',   label: 'Brand gradient' },
  { id: 'card-light',   label: 'Light card' },
  { id: 'card-minimal', label: 'Minimal' },
  { id: 'card-sizes',   label: 'Sizes' },
];

const CARDS = [
  { id: 'card-dark',  gradient: 'from-slate-800 to-slate-900',   number: '•••• •••• •••• 4242', name: 'Selva Ganesan', expiry: '12/27', brand: 'VISA',       textCls: 'text-white' },
  { id: 'card-brand', gradient: 'from-brand-700 to-indigo-800',  number: '•••• •••• •••• 8891', name: 'Alex Kumar',    expiry: '08/26', brand: 'MASTERCARD', textCls: 'text-white' },
  { id: 'card-light', gradient: 'from-slate-100 to-slate-200',   number: '•••• •••• •••• 3310', name: 'Maria Rossi',   expiry: '03/28', brand: 'VISA',       textCls: 'text-slate-800' },
];

export const CreditCards = memo(function CreditCards() {
  return (
    <>
      {CARDS.map(({ id, gradient, number, name, expiry, brand, textCls }) => (
        <PreviewWrapper key={id} id={id} title={id === 'card-dark' ? 'Dark card' : id === 'card-brand' ? 'Brand gradient' : 'Light card'}
          description="Payment card display with masked number, cardholder name, and expiry."
          code={`<div className="w-72 h-44 rounded-2xl bg-gradient-to-br ${gradient} p-5 shadow-xl">
  <div className="flex justify-between"><span className="text-xs font-semibold">${brand}</span><Wifi className="w-5 h-5 rotate-90" /></div>
  <div className="mt-6 font-mono text-base tracking-widest">${number}</div>
  <div className="mt-4 flex justify-between text-xs opacity-70"><span>${name}</span><span>${expiry}</span></div>
</div>`}>
          <div className="p-10 flex items-center justify-center">
            <div className={`w-72 h-44 rounded-2xl bg-gradient-to-br ${gradient} p-5 ${textCls} shadow-xl flex flex-col justify-between`}>
              <div className="flex justify-between items-start">
                <span className="text-xs font-semibold tracking-widest opacity-80">{brand}</span>
                <Wifi className="w-5 h-5 opacity-60 rotate-90" />
              </div>
              <div>
                <div className="font-mono text-base tracking-widest mb-4">{number}</div>
                <div className="flex justify-between text-xs opacity-70">
                  <span className="uppercase tracking-wide">{name}</span>
                  <span>{expiry}</span>
                </div>
              </div>
            </div>
          </div>
        </PreviewWrapper>
      ))}

      <PreviewWrapper id="card-minimal" title="Minimal" description="Compact card display for settings and billing pages."
        code={`<div className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 bg-white">
  <div className="w-10 h-7 rounded bg-slate-800 flex items-center justify-center text-white text-[9px] font-bold">VISA</div>
  <div><p className="text-sm font-medium">•••• 4242</p><p className="text-xs text-slate-500">Expires 12/27</p></div>
</div>`}>
        <div className="p-10 max-w-sm mx-auto space-y-3">
          {[
            { brand: 'VISA', last4: '4242', expiry: '12/27', bg: 'bg-slate-800' },
            { brand: 'MC',   last4: '8891', expiry: '08/26', bg: 'bg-brand-700' },
          ].map(({ brand, last4, expiry, bg }) => (
            <div key={last4} className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
              <div className={`w-10 h-7 rounded ${bg} flex items-center justify-center text-white text-[9px] font-bold`}>{brand}</div>
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-900 dark:text-white">•••• {last4}</p>
                <p className="text-xs text-slate-500">Expires {expiry}</p>
              </div>
              <button className="text-xs text-brand-600 font-medium hover:underline">Edit</button>
            </div>
          ))}
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="card-sizes" title="Sizes" description="Card component at different size scales."
        code={`<div className="w-56 h-36 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 p-4 text-white">...</div>`}>
        <div className="p-10 flex flex-wrap items-end justify-center gap-6">
          {[
            { w: 'w-48 h-32', p: 'p-3', num: 'text-xs', label: 'SM' },
            { w: 'w-64 h-40', p: 'p-4', num: 'text-sm', label: 'MD' },
            { w: 'w-80 h-48', p: 'p-5', num: 'text-base',label:'LG' },
          ].map(({ w, p, num, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <div className={`${w} rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 ${p} text-white shadow-xl flex flex-col justify-between`}>
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-semibold opacity-80">VISA</span>
                  <Wifi className="w-4 h-4 opacity-60 rotate-90" />
                </div>
                <div>
                  <div className={`font-mono ${num} tracking-widest mb-2`}>•••• •••• •••• 4242</div>
                  <div className="flex justify-between text-[10px] opacity-70">
                    <span>Selva Ganesan</span><span>12/27</span>
                  </div>
                </div>
              </div>
              <span className="text-xs text-slate-400">{label}</span>
            </div>
          ))}
        </div>
      </PreviewWrapper>
    </>
  );
});
