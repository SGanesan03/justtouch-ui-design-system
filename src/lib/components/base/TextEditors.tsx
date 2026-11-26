import { memo } from 'react';
import { Bold, Italic, Underline, Link, List, AlignLeft, AlignCenter, AlignRight, Image, Code } from 'lucide-react';
import { PreviewWrapper } from '@components/PreviewWrapper';
import type { OnThisPageItem } from '@justtouch/ui';

export const TEXT_EDITORS_VARIANTS: OnThisPageItem[] = [
  { id: 'te-minimal',  label: 'Minimal toolbar' },
  { id: 'te-standard', label: 'Standard toolbar' },
  { id: 'te-full',     label: 'Full toolbar' },
  { id: 'te-floating', label: 'Floating toolbar' },
];

const ToolbarBtn = ({ children }: { children: React.ReactNode }) => (
  <button className="p-1.5 rounded text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition">{children}</button>
);
const Divider = () => <div className="w-px h-4 bg-slate-200 dark:bg-slate-700 mx-1" />;

export const TextEditors = memo(function TextEditors() {
  return (
    <>
      <PreviewWrapper id="te-minimal" title="Minimal toolbar" description="Minimal editor with only essential formatting controls."
        code={`<div className="rounded-xl border border-slate-200 overflow-hidden">
  <div className="flex items-center gap-0.5 px-3 py-2 border-b border-slate-200 bg-slate-50">
    {[Bold, Italic, Underline, Link].map((Icon, i) => (
      <button key={i} className="p-1.5 rounded hover:bg-slate-200"><Icon className="w-4 h-4" /></button>
    ))}
  </div>
  <div contentEditable className="p-3 min-h-[80px] text-sm outline-none" />
</div>`}>
        <div className="p-10 max-w-lg mx-auto">
          <div className="rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="flex items-center gap-0.5 px-3 py-2 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
              {[Bold, Italic, Underline, Link].map((Icon, i) => <ToolbarBtn key={i}><Icon className="w-4 h-4" /></ToolbarBtn>)}
            </div>
            <div contentEditable suppressContentEditableWarning className="p-3 min-h-[80px] text-sm text-slate-900 dark:text-white outline-none bg-white dark:bg-slate-900">
              Minimal editor content…
            </div>
          </div>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="te-standard" title="Standard toolbar" description="Standard editor with text formatting and alignment controls."
        code={`<div className="rounded-xl border border-slate-200 overflow-hidden">
  <div className="flex items-center gap-1 px-3 py-2 border-b border-slate-200 bg-slate-50">
    <Bold /><Italic /><Underline />
    <Divider />
    <AlignLeft /><AlignCenter /><AlignRight />
    <Divider />
    <List /><Link />
  </div>
  <div contentEditable className="p-3 min-h-[100px] text-sm outline-none" />
</div>`}>
        <div className="p-10 max-w-lg mx-auto">
          <div className="rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="flex items-center flex-wrap gap-0.5 px-3 py-2 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
              {[Bold, Italic, Underline].map((Icon, i) => <ToolbarBtn key={i}><Icon className="w-4 h-4" /></ToolbarBtn>)}
              <Divider />
              {[AlignLeft, AlignCenter, AlignRight].map((Icon, i) => <ToolbarBtn key={i}><Icon className="w-4 h-4" /></ToolbarBtn>)}
              <Divider />
              {[List, Link].map((Icon, i) => <ToolbarBtn key={i}><Icon className="w-4 h-4" /></ToolbarBtn>)}
            </div>
            <div contentEditable suppressContentEditableWarning className="p-3 min-h-[100px] text-sm text-slate-900 dark:text-white outline-none bg-white dark:bg-slate-900">
              Standard editor with alignment and list controls…
            </div>
          </div>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="te-full" title="Full toolbar" description="Full-featured editor with all formatting options."
        code={`// Full toolbar with text, alignment, list, link, image, and code controls`}>
        <div className="p-10 max-w-lg mx-auto">
          <div className="rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="flex items-center flex-wrap gap-0.5 px-3 py-2 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
              {[Bold, Italic, Underline].map((Icon, i) => <ToolbarBtn key={i}><Icon className="w-4 h-4" /></ToolbarBtn>)}
              <Divider />
              {[AlignLeft, AlignCenter, AlignRight].map((Icon, i) => <ToolbarBtn key={i}><Icon className="w-4 h-4" /></ToolbarBtn>)}
              <Divider />
              {[List, Link, Image, Code].map((Icon, i) => <ToolbarBtn key={i}><Icon className="w-4 h-4" /></ToolbarBtn>)}
            </div>
            <div contentEditable suppressContentEditableWarning className="p-4 min-h-[120px] text-sm text-slate-900 dark:text-white outline-none bg-white dark:bg-slate-900 leading-relaxed">
              Full-featured editor with all formatting controls available in the toolbar above.
            </div>
            <div className="px-3 py-2 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex justify-between items-center">
              <span className="text-xs text-slate-400">0 / 500 characters</span>
              <button className="px-3 py-1 rounded-lg bg-brand-600 text-white text-xs font-semibold hover:bg-brand-700 transition">Save</button>
            </div>
          </div>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="te-floating" title="Floating toolbar" description="Toolbar that appears above selected text."
        code={`// Floating toolbar appears on text selection via JS`}>
        <div className="p-10 max-w-lg mx-auto">
          <div className="relative">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 inline-flex items-center gap-0.5 px-2 py-1.5 rounded-lg bg-slate-900 shadow-lg">
              {[Bold, Italic, Underline, Link].map((Icon, i) => (
                <button key={i} className="p-1.5 rounded text-slate-300 hover:text-white hover:bg-slate-700 transition"><Icon className="w-3.5 h-3.5" /></button>
              ))}
            </div>
            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 min-h-[100px] text-sm text-slate-900 dark:text-white leading-relaxed">
              Select any text in this editor to see the <span className="bg-brand-100 dark:bg-brand-900/50 text-brand-700 dark:text-brand-300 px-0.5 rounded">floating toolbar</span> appear above it.
            </div>
          </div>
        </div>
      </PreviewWrapper>
    </>
  );
});
