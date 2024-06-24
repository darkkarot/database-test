'use strict';

/**
 * announcement-new service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::announcement-new.announcement-new');
