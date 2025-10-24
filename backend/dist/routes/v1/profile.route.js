import auth from "../../middlewares/auth.js";
import catchAsyncWithAuth from "../../utils/catchAsyncWithAuth.js";
import express from 'express';
const router = express.Router();
const getProfile = catchAsyncWithAuth((req, res) => {
    const { id, name, email } = req.user;
    const userProfile = {
        id: id.toString(),
        name: name || '',
        email: email,
        avatar: null,
        initials: name
            ? name
                .split(' ')
                .map(n => n[0])
                .join('')
                .toUpperCase()
            : email[0].toUpperCase()
    };
    res.send(userProfile);
});
const updateProfile = catchAsyncWithAuth((req, res) => {
    // This would typically use userService to update the profile
    // For now, just return the current user info with any updates applied
    const { name, email, avatar } = req.body;
    const user = req.user;
    const updatedProfile = {
        id: user.id.toString(),
        name: name || user.name || '',
        email: email || user.email,
        avatar: avatar || null,
        initials: name || user.name
            ? (name || user.name)
                .split(' ')
                .map((n) => n[0])
                .join('')
                .toUpperCase()
            : (email || user.email)[0].toUpperCase()
    };
    res.send(updatedProfile);
});
router.route('/').get(auth('getDashboard'), getProfile).put(auth('manageDashboard'), updateProfile);
export default router;
/**
 * @swagger
 * tags:
 *   name: Profile
 *   description: User profile management
 */
/**
 * @swagger
 * /api/user/profile:
 *   get:
 *     summary: Get current user profile
 *     description: Get profile information for the authenticated user.
 *     tags: [Profile]
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
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 avatar:
 *                   type: string
 *                   nullable: true
 *                 initials:
 *                   type: string
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "500":
 *         $ref: '#/components/responses/InternalError'
 *
 *   put:
 *     summary: Update user profile
 *     description: Update profile information for the authenticated user.
 *     tags: [Profile]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               avatar:
 *                 type: string
 *             example:
 *               name: John Updated
 *               email: john.updated@example.com
 *               avatar: null
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 avatar:
 *                   type: string
 *                   nullable: true
 *                 initials:
 *                   type: string
 *       "400":
 *         $ref: '#/components/responses/ValidationError'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "500":
 *         $ref: '#/components/responses/InternalError'
 */
