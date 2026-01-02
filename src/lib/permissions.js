import { ROLES } from "./roles"

export const PERMISSIONS = {
  DASHBOARD_VIEW: "dashboard.view",
  USERS_VIEW: "users.view",
  USERS_CREATE: "users.create",
  USERS_DELETE: "users.delete",
  ANALYTICS_VIEW: "analytics.view",
  SETTINGS_EDIT: "settings.edit",
}

export const permissions = {
  [ROLES.ADMIN]: [
    PERMISSIONS.DASHBOARD_VIEW,
    PERMISSIONS.USERS_VIEW,
    PERMISSIONS.USERS_CREATE,
    PERMISSIONS.USERS_DELETE,
    PERMISSIONS.ANALYTICS_VIEW,
    PERMISSIONS.SETTINGS_EDIT,
  ],

  [ROLES.MANAGER]: [
    PERMISSIONS.DASHBOARD_VIEW,
    PERMISSIONS.ANALYTICS_VIEW,
  ],

  [ROLES.USER]: [
    PERMISSIONS.DASHBOARD_VIEW,
  ],
}

export function hasPermission(role, permission) {
  return permissions[role]?.includes(permission) ?? false
}
