import Joi from 'joi';

const getDashboard = {
    // No parameters needed for main dashboard endpoint
};

const getStats = {
    // No parameters needed for stats endpoint
};

const getRecentItems = {
    query: Joi.object().keys({
        limit: Joi.number().integer().min(1).max(100).default(10)
    })
};

const getSkillsCount = {
    // No parameters needed for skills count endpoint
};

const createOrUpdateStats = {
    body: Joi.object()
        .keys({
            skillsCount: Joi.number().integer().min(0),
            totalApps: Joi.number().integer().min(0),
            totalAgents: Joi.number().integer().min(0),
            activeProjects: Joi.number().integer().min(0)
        })
        .min(1)
};

const createRecentItem = {
    body: Joi.object().keys({
        type: Joi.string().required(),
        name: Joi.string().required(),
        description: Joi.string(),
        status: Joi.string().valid('draft', 'active', 'inactive', 'completed')
    })
};

export default {
    getDashboard,
    getStats,
    getRecentItems,
    getSkillsCount,
    createOrUpdateStats,
    createRecentItem
};
