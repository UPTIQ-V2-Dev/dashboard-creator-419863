import { dashboardController } from "../../controllers/index.js";
import auth from "../../middlewares/auth.js";
import validate from "../../middlewares/validate.js";
import { dashboardValidation } from "../../validations/index.js";
import express from 'express';
const router = express.Router();
// All dashboard routes require authentication
router
    .route('/')
    .get(auth('getDashboard'), validate(dashboardValidation.getDashboard), dashboardController.getDashboard);
router
    .route('/stats')
    .get(auth('getDashboard'), validate(dashboardValidation.getStats), dashboardController.getStats)
    .put(auth('manageDashboard'), validate(dashboardValidation.createOrUpdateStats), dashboardController.createOrUpdateStats);
router
    .route('/recent-items')
    .get(auth('getDashboard'), validate(dashboardValidation.getRecentItems), dashboardController.getRecentItems)
    .post(auth('manageDashboard'), validate(dashboardValidation.createRecentItem), dashboardController.createRecentItem);
router
    .route('/skills-count')
    .get(auth('getDashboard'), validate(dashboardValidation.getSkillsCount), dashboardController.getSkillsCount);
export default router;
/**
 * @swagger
 * tags:
 *   name: Dashboard
 *   description: Dashboard data management and retrieval
 */
/**
 * @swagger
 * /api/dashboard:
 *   get:
 *     summary: Get complete dashboard data
 *     description: Get complete dashboard data for authenticated user including stats, recent items, user info, quick actions, and welcome video.
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 stats:
 *                   type: object
 *                   properties:
 *                     skillsCount:
 *                       type: integer
 *                       example: 1256
 *                     totalApps:
 *                       type: integer
 *                       example: 24
 *                     totalAgents:
 *                       type: integer
 *                       example: 18
 *                     activeProjects:
 *                       type: integer
 *                       example: 7
 *                 recentItems:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       type:
 *                         type: string
 *                       name:
 *                         type: string
 *                       description:
 *                         type: string
 *                       lastUpdated:
 *                         type: string
 *                         format: date-time
 *                       status:
 *                         type: string
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     name:
 *                       type: string
 *                     email:
 *                       type: string
 *                     avatar:
 *                       type: string
 *                       nullable: true
 *                     initials:
 *                       type: string
 *                 quickActions:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       type:
 *                         type: string
 *                       title:
 *                         type: string
 *                       description:
 *                         type: string
 *                       icon:
 *                         type: string
 *                       primaryColor:
 *                         type: string
 *                 welcomeVideo:
 *                   type: object
 *                   nullable: true
 *                   properties:
 *                     id:
 *                       type: string
 *                     title:
 *                       type: string
 *                     description:
 *                       type: string
 *                     thumbnail:
 *                       type: string
 *                     duration:
 *                       type: string
 *                     url:
 *                       type: string
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "500":
 *         $ref: '#/components/responses/InternalError'
 */
/**
 * @swagger
 * /api/dashboard/stats:
 *   get:
 *     summary: Get dashboard statistics
 *     description: Get dashboard statistics for authenticated user.
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 skillsCount:
 *                   type: integer
 *                   example: 1256
 *                 totalApps:
 *                   type: integer
 *                   example: 24
 *                 totalAgents:
 *                   type: integer
 *                   example: 18
 *                 activeProjects:
 *                   type: integer
 *                   example: 7
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "500":
 *         $ref: '#/components/responses/InternalError'
 *
 *   put:
 *     summary: Create or update dashboard statistics
 *     description: Create or update dashboard statistics for authenticated user.
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               skillsCount:
 *                 type: integer
 *                 minimum: 0
 *               totalApps:
 *                 type: integer
 *                 minimum: 0
 *               totalAgents:
 *                 type: integer
 *                 minimum: 0
 *               activeProjects:
 *                 type: integer
 *                 minimum: 0
 *             example:
 *               skillsCount: 1256
 *               totalApps: 24
 *               totalAgents: 18
 *               activeProjects: 7
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DashboardStats'
 *       "400":
 *         $ref: '#/components/responses/ValidationError'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "500":
 *         $ref: '#/components/responses/InternalError'
 */
/**
 * @swagger
 * /api/dashboard/recent-items:
 *   get:
 *     summary: Get recent items
 *     description: Get recent items for authenticated user.
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *         default: 10
 *         description: Maximum number of recent items to return
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   type:
 *                     type: string
 *                   name:
 *                     type: string
 *                   description:
 *                     type: string
 *                     nullable: true
 *                   lastUpdated:
 *                     type: string
 *                     format: date-time
 *                   status:
 *                     type: string
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "500":
 *         $ref: '#/components/responses/InternalError'
 *
 *   post:
 *     summary: Create recent item
 *     description: Create a new recent item for authenticated user.
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - type
 *               - name
 *             properties:
 *               type:
 *                 type: string
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [draft, active, inactive, completed]
 *             example:
 *               type: agent
 *               name: X Data Analyzer Agent
 *               description: Analyze and process data from X platform
 *               status: active
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RecentItem'
 *       "400":
 *         $ref: '#/components/responses/ValidationError'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "500":
 *         $ref: '#/components/responses/InternalError'
 */
/**
 * @swagger
 * /api/dashboard/skills-count:
 *   get:
 *     summary: Get skills count
 *     description: Get skills count for authenticated user.
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 skillsCount:
 *                   type: integer
 *                   example: 1256
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "500":
 *         $ref: '#/components/responses/InternalError'
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     DashboardStats:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         skillsCount:
 *           type: integer
 *         totalApps:
 *           type: integer
 *         totalAgents:
 *           type: integer
 *         activeProjects:
 *           type: integer
 *         userId:
 *           type: integer
 *     RecentItem:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         type:
 *           type: string
 *         name:
 *           type: string
 *         description:
 *           type: string
 *           nullable: true
 *         lastUpdated:
 *           type: string
 *           format: date-time
 *         status:
 *           type: string
 *         userId:
 *           type: integer
 */
