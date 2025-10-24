export interface Workspace {
    id: string;
    name: string;
    description?: string;
    createdAt: string;
    updatedAt: string;
    ownerId: string;
    settings: WorkspaceSettings;
}

export interface WorkspaceSettings {
    theme: 'light' | 'dark' | 'system';
    notifications: boolean;
    autoSave: boolean;
    collaborationEnabled: boolean;
}

export interface NavigationItem {
    id: string;
    label: string;
    icon: string;
    href: string;
    badge?: string | number;
    children?: NavigationItem[];
}

export interface BreadcrumbItem {
    label: string;
    href?: string;
}
