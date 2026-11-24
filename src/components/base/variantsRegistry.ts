/**
 * Central registry: pageId → OnThisPage variant items
 * Each base component exports its own VARIANTS array and registers here.
 */
import type { OnThisPageItem } from '@/components/OnThisPage';
import { AVATARS_VARIANTS }          from './Avatars';
import { BADGE_GROUP_VARIANTS }      from './BadgeGroups';
import { BADGES_VARIANTS }           from './Badges';
import { BUTTON_GROUPS_VARIANTS }    from './ButtonGroups';
import { BUTTONS_VARIANTS }          from './Buttons';
import { CHECKBOXES_VARIANTS }       from './Checkboxes';
import { CONTEXT_MENUS_VARIANTS }    from './ContextMenus';
import { CREDIT_CARDS_VARIANTS }     from './CreditCards';
import { DROPDOWNS_VARIANTS }        from './Dropdowns';
import { FEATURED_ICONS_VARIANTS }   from './FeaturedIcons';
import { ILLUSTRATIONS_VARIANTS }    from './Illustrations';
import { INPUTS_VARIANTS }           from './Inputs';
import { MOBILE_APP_STORE_VARIANTS } from './MobileAppStoreButtons';
import { MULTI_SELECT_VARIANTS }     from './MultiSelect';
import { QR_CODES_VARIANTS }         from './QRCodes';
import { RADIO_BUTTONS_VARIANTS }    from './RadioButtons';
import { RADIO_GROUPS_VARIANTS }     from './RadioGroups';
import { RATING_VARIANTS }           from './RatingBadgeAndStars';
import { SELECT_VARIANTS }           from './Select';
import { SLIDERS_VARIANTS }          from './Sliders';
import { SOCIAL_BUTTONS_VARIANTS }   from './SocialButtons';
import { TAGS_VARIANTS }             from './Tags';
import { TEXT_EDITORS_VARIANTS }     from './TextEditors';
import { TEXTAREA_VARIANTS }         from './Textarea';
import { TOGGLES_VARIANTS }          from './Toggles';
import { TOOLTIPS_VARIANTS }         from './Tooltips';
import { UTILITY_BUTTONS_VARIANTS }  from './UtilityButtons';
import { VERIFICATION_VARIANTS }     from './VerificationCodeInputs';
import { VIDEO_PLAYERS_VARIANTS }    from './VideoPlayers';
import { LOADING_INDICATORS_VARIANTS } from './LoadingIndicators';
import { PROGRESS_STEPS_VARIANTS }  from './ProgressSteps';

export const BASE_VARIANTS_REGISTRY: Record<string, OnThisPageItem[]> = {
  'avatars':                  AVATARS_VARIANTS,
  'badge-groups':             BADGE_GROUP_VARIANTS,
  'badges':                   BADGES_VARIANTS,
  'button-groups':            BUTTON_GROUPS_VARIANTS,
  'buttons':                  BUTTONS_VARIANTS,
  'checkboxes':               CHECKBOXES_VARIANTS,
  'context-menus':            CONTEXT_MENUS_VARIANTS,
  'credit-cards':             CREDIT_CARDS_VARIANTS,
  'dropdowns':                DROPDOWNS_VARIANTS,
  'featured-icons':           FEATURED_ICONS_VARIANTS,
  'illustrations':            ILLUSTRATIONS_VARIANTS,
  'inputs':                   INPUTS_VARIANTS,
  'mobile-app-store-buttons': MOBILE_APP_STORE_VARIANTS,
  'multi-select':             MULTI_SELECT_VARIANTS,
  'qr-codes':                 QR_CODES_VARIANTS,
  'radio-buttons':            RADIO_BUTTONS_VARIANTS,
  'radio-groups':             RADIO_GROUPS_VARIANTS,
  'rating-badge-and-stars':   RATING_VARIANTS,
  'select':                   SELECT_VARIANTS,
  'sliders':                  SLIDERS_VARIANTS,
  'social-buttons':           SOCIAL_BUTTONS_VARIANTS,
  'tags':                     TAGS_VARIANTS,
  'text-editors':             TEXT_EDITORS_VARIANTS,
  'textarea':                 TEXTAREA_VARIANTS,
  'toggles':                  TOGGLES_VARIANTS,
  'tooltips':                 TOOLTIPS_VARIANTS,
  'utility-buttons':          UTILITY_BUTTONS_VARIANTS,
  'verification-code-inputs': VERIFICATION_VARIANTS,
  'video-players':            VIDEO_PLAYERS_VARIANTS,
  'loading-indicators':       LOADING_INDICATORS_VARIANTS,
  'progress-steps':           PROGRESS_STEPS_VARIANTS,
};
