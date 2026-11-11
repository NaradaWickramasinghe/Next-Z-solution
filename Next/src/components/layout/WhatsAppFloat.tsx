import { Icon } from '../ui/Icon';
import { WA_LINK } from '../../data/content';

export function WhatsAppFloat() {
  return (
    <a
      href={WA_LINK}
      className="wa-float"
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
    >
      <Icon name="i-chat" />
    </a>
  );
}

