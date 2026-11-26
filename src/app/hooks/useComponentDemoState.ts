import { useState, useCallback } from 'react';
import type { ChatMessage } from '@justtouch/ui';
import { DEFAULT_GRADIENT, INITIAL_CHAT_MESSAGES } from '@constants';
import { clamp } from '@justtouch/ui';

const PAGE_MIN = 1;
const PAGE_MAX = 4;

export function useComponentDemoState() {
  const [searchFilter,   setSearchFilter]   = useState('');
  const [activeTab,      setActiveTab]      = useState('Profile');
  const [modalOpen,      setModalOpen]      = useState(false);
  const [openFaq,        setOpenFaq]        = useState<number | null>(0);
  const [gradientPreset, setGradientPreset] = useState<string>(DEFAULT_GRADIENT);
  const [chatMessages,   setChatMessages]   = useState<ChatMessage[]>([...INITIAL_CHAT_MESSAGES]);
  const [chatInput,      setChatInput]      = useState('');
  const [tableQuery,     setTableQuery]     = useState('');
  const [currentPageNum, setCurrentPageNum] = useState(PAGE_MIN);

  const sendMessage = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!chatInput.trim()) return;
      setChatMessages((prev) => [
        ...prev,
        { sender: 'You', text: chatInput, time: 'Just now', me: true },
      ]);
      setChatInput('');
    },
    [chatInput],
  );

  const toggleFaq = useCallback((idx: number) => {
    setOpenFaq((prev) => (prev === idx ? null : idx));
  }, []);

  const prevPage = useCallback(
    () => setCurrentPageNum((p) => clamp(p - 1, PAGE_MIN, PAGE_MAX)),
    [],
  );

  const nextPage = useCallback(
    () => setCurrentPageNum((p) => clamp(p + 1, PAGE_MIN, PAGE_MAX)),
    [],
  );

  return {
    searchFilter,   setSearchFilter,
    activeTab,      setActiveTab,
    modalOpen,      setModalOpen,
    openFaq,        toggleFaq,
    gradientPreset, setGradientPreset,
    chatMessages,   chatInput, setChatInput, sendMessage,
    tableQuery,     setTableQuery,
    currentPageNum, setCurrentPageNum, prevPage, nextPage,
  } as const;
}
