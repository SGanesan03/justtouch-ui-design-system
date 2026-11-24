import { useState, useCallback } from 'react';
import type { ChatMessage } from '@/types';
import { DEFAULT_GRADIENT, INITIAL_CHAT_MESSAGES } from '@/constants';
import { clamp } from '@/utils';

const PAGE_MIN = 1;
const PAGE_MAX = 4;

export function useComponentDemoState() {
  const [searchFilter,   setSearchFilter]   = useState('');
  const [toggleState,    setToggleState]    = useState(true);
  const [checkboxState,  setCheckboxState]  = useState(true);
  const [activeTab,      setActiveTab]      = useState('Profile');
  const [modalOpen,      setModalOpen]      = useState(false);
  const [billingAnnual,  setBillingAnnual]  = useState(true);
  const [openFaq,        setOpenFaq]        = useState<number | null>(0);
  const [gradientPreset, setGradientPreset] = useState<string>(DEFAULT_GRADIENT);
  const [chatMessages,   setChatMessages]   = useState<ChatMessage[]>([...INITIAL_CHAT_MESSAGES]);
  const [chatInput,      setChatInput]      = useState('');
  const [tableQuery,     setTableQuery]     = useState('');
  const [currentPageNum, setCurrentPageNum] = useState(PAGE_MIN);
  const [selectedIcon,   setSelectedIcon]   = useState<string | null>(null);
  const [showPassword,   setShowPassword]   = useState(false);
  const [loadingBtn,     setLoadingBtn]     = useState(false);

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

  const triggerLoadingBtn = useCallback(() => {
    setLoadingBtn(true);
    setTimeout(() => setLoadingBtn(false), 1200);
  }, []);

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
    toggleState,    setToggleState,
    checkboxState,  setCheckboxState,
    activeTab,      setActiveTab,
    modalOpen,      setModalOpen,
    billingAnnual,  setBillingAnnual,
    openFaq,        toggleFaq,
    gradientPreset, setGradientPreset,
    chatMessages,   chatInput, setChatInput, sendMessage,
    tableQuery,     setTableQuery,
    currentPageNum, setCurrentPageNum, prevPage, nextPage,
    selectedIcon,   setSelectedIcon,
    showPassword,   setShowPassword,
    loadingBtn,     triggerLoadingBtn,
  } as const;
}
