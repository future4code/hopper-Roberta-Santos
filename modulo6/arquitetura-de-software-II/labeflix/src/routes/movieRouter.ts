import { MovieController } from './../controller/MovieController';
import express from 'express'
import { UserController } from '../controller/UserController'

export const movieRouter = express.Router()

const MovieController = new MovieController()

movieRouter.post("/create", MovieController.create)