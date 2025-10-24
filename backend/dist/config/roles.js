import { Role } from '../generated/prisma/index.js';
const allRoles = {
    [Role.USER]: ['getDashboard', 'manageDashboard'],
    [Role.ADMIN]: ['getUsers', 'manageUsers', 'getDashboard', 'manageDashboard']
};
export const roles = Object.keys(allRoles);
export const roleRights = new Map(Object.entries(allRoles));
