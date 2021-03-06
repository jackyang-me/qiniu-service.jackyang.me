/**
 * uploadRouter is a nested router of apiRouter
 * so the path prefix is /api/upload
 *
 * for exmaple: /token => /api/upload/token
 */

'use strict'

const uploadRouter = require('koa-router')()
const uploadService = require('../../services/upload')

uploadRouter.get('/', uploadService.upload)
uploadRouter.get('/token/:bucket', uploadService.generateUptoken)

module.exports = uploadRouter
