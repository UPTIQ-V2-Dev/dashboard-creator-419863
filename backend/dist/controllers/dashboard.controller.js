import { dashboardService } from "../services/index.js";
import catchAsyncWithAuth from "../utils/catchAsyncWithAuth.js";
import pick from "../utils/pick.js";
import httpStatus from 'http-status';
const getDashboard = catchAsyncWithAuth(async (req, res) => {
    const result = await dashboardService.getDashboardData(req.user.id);
    res.send(result);
});
const getStats = catchAsyncWithAuth(async (req, res) => {
    const result = await dashboardService.getDashboardStats(req.user.id);
    res.send(result);
});
const getRecentItems = catchAsyncWithAuth(async (req, res) => {
    const { limit } = pick(req.validatedQuery, ['limit']);
    const result = await dashboardService.getRecentItems(req.user.id, limit);
    res.send(result);
});
const getSkillsCount = catchAsyncWithAuth(async (req, res) => {
    const result = await dashboardService.getSkillsCount(req.user.id);
    res.send(result);
});
const createOrUpdateStats = catchAsyncWithAuth(async (req, res) => {
    const result = await dashboardService.createOrUpdateDashboardStats(req.user.id, req.body);
    res.status(httpStatus.OK).send(result);
});
const createRecentItem = catchAsyncWithAuth(async (req, res) => {
    const result = await dashboardService.createRecentItem(req.user.id, req.body);
    res.status(httpStatus.CREATED).send(result);
});
export default {
    getDashboard,
    getStats,
    getRecentItems,
    getSkillsCount,
    createOrUpdateStats,
    createRecentItem
};
