export interface NavItem {
    label: string;
    href: string;
}

export interface SocialLink {
    platform: 'tiktok' | 'instagram' | 'whatsapp';
    url: string;
    iconClass: string;
}

export interface Feature {
    iconClass: string;
    title: string;
    subtitle: string;
}
