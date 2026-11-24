import React from 'react';
import {
  AnalyticsDashboard, OperationsDashboard,
  ProfileSettings, BillingSettings,
  HelpCenter, Changelog,
} from './AppExamplePages';
import {
  LoginPage, SignupPage, VerificationPage, ForgotPasswordPage,
  PricingPage, ErrorPage, EmailTemplatePage,
} from './SharedPages';
import {
  HeroSection, FeatureSection, CTASection, TestimonialsSection,
  PricingSection, FAQSection, FooterSection, BannerSection,
  BlogSection, ContactSection, TeamSection, NewsletterCTA, SocialProofSection,
} from './MarketingComponentPages';
import {
  LandingPage, AboutPage, BlogPage, ContactPage,
  FAQPage, LegalPage, Error404Page,
} from './MarketingExamplePages';

// Wrapper to pass onBack for error pages — resolved at render time via ComponentContent
let _onBack: () => void = () => {};
export function setOnBack(fn: () => void) { _onBack = fn; }

export const PAGE_CONTENT_MAP: Record<string, React.ReactNode> = {
  // Application Examples
  'dashboards-01':          <AnalyticsDashboard />,
  'dashboards-02':          <OperationsDashboard />,
  'settings-pages-01':      <ProfileSettings />,
  'settings-pages-02':      <BillingSettings />,
  'informational-pages-01': <HelpCenter />,
  'informational-pages-02': <Changelog />,

  // Shared Pages
  'login-pages':            <LoginPage />,
  'signup-pages':           <SignupPage />,
  'verification-pages':     <VerificationPage />,
  'forgot-password-pages':  <ForgotPasswordPage />,
  'pricing-pages':          <PricingPage />,
  'error-pages':            <ErrorPage onBack={_onBack} />,
  'email-templates':        <EmailTemplatePage />,

  // Marketing Components
  'hero-sections':          <HeroSection />,
  'feature-sections':       <FeatureSection />,
  'cta-sections':           <CTASection />,
  'testimonials':           <TestimonialsSection />,
  'pricing-sections':       <PricingSection />,
  'faq-sections':           <FAQSection />,
  'footers':                <FooterSection />,
  'banners':                <BannerSection />,
  'blog-sections':          <BlogSection />,
  'contact-sections':       <ContactSection />,
  'team-sections':          <TeamSection />,
  'newsletter-cta':         <NewsletterCTA />,
  'social-proof-sections':  <SocialProofSection />,

  // Marketing Pages
  'landing-pages':          <LandingPage />,
  'about-pages':            <AboutPage />,
  'blog-pages':             <BlogPage />,
  'contact-pages':          <ContactPage />,
  'faq-pages':              <FAQPage />,
  'legal-pages':            <LegalPage />,
  'error-404-pages':        <Error404Page onBack={_onBack} />,
};
