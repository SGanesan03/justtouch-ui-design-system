import { memo } from 'react';
import { Inbox, Search, FileText, Users, BarChart2, Plus } from 'lucide-react';
import { PreviewWrapper } from '@components/PreviewWrapper';
import type { OnThisPageItem } from '@justtouch/ui';

export const ILLUSTRATIONS_VARIANTS: OnThisPageItem[] = [
  { id: 'illus-empty-inbox',   label: 'Empty inbox' },
  { id: 'illus-no-results',    label: 'No search results' },
  { id: 'illus-no-data',       label: 'No data' },
  { id: 'illus-no-members',    label: 'No team members' },
  { id: 'illus-no-files',      label: 'No files' },
  { id: 'illus-error',         label: 'Error state' },
];

const STATES = [
  { id: 'illus-empty-inbox',  Icon: Inbox,    title: 'No messages yet',       desc: "When you receive messages they'll appear here.", cta: 'Compose', ctaCls: 'bg-brand-600 text-white hover:bg-brand-700' },
  { id: 'illus-no-results',   Icon: Search,   title: 'No results found',      desc: 'Try adjusting your search or filters.',           cta: 'Clear filters', ctaCls: 'border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800' },
  { id: 'illus-no-data',      Icon: BarChart2,title: 'No data available',     desc: 'Start by adding your first data source.',         cta: 'Add data', ctaCls: 'bg-brand-600 text-white hover:bg-brand-700' },
  { id: 'illus-no-members',   Icon: Users,    title: 'No team members',       desc: 'Invite your team to start collaborating.',        cta: 'Invite members', ctaCls: 'bg-brand-600 text-white hover:bg-brand-700' },
  { id: 'illus-no-files',     Icon: FileText, title: 'No files uploaded',     desc: 'Upload your first file to get started.',          cta: 'Upload file', ctaCls: 'bg-brand-600 text-white hover:bg-brand-700' },
  { id: 'illus-error',        Icon: Plus,     title: 'Something went wrong',  desc: 'An unexpected error occurred. Please try again.', cta: 'Try again', ctaCls: 'border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800' },
];

export const Illustrations = memo(function Illustrations() {
  return (
    <>
      {STATES.map(({ id, Icon, title, desc, cta, ctaCls }) => (
        <PreviewWrapper key={id} id={id} title={title} description={`Empty state illustration for "${title}" scenario.`}
          code={`<div className="flex flex-col items-center justify-center py-16 text-center">
  <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
    <Icon className="w-8 h-8 text-slate-400" />
  </div>
  <h3 className="text-base font-semibold">${title}</h3>
  <p className="text-sm text-slate-500 mt-1">${desc}</p>
  <button className="mt-4 px-4 py-2 rounded-lg text-sm font-semibold">${cta}</button>
</div>`}>
          <div className="p-10 flex items-center justify-center">
            <div className="flex flex-col items-center justify-center py-10 text-center max-w-xs">
              <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
                <Icon className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">{title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1.5 max-w-[220px]">{desc}</p>
              <button className={`mt-5 px-4 py-2 rounded-lg text-sm font-semibold transition ${ctaCls}`}>{cta}</button>
            </div>
          </div>
        </PreviewWrapper>
      ))}
    </>
  );
});
