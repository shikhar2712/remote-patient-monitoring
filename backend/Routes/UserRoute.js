import express from 'express';
import { Appointmentreq, GetAllNotifiaction, LoginUser, MarkAllread, RegisterUser, SendDoctorReq, UserProfile, getMatchedAppointments } from '../controllers/User/UserControllers.js';
import IsAuthenticated from '../Middlewares/Isauthenticated.js';
import signupValidators from '../validators/RegisterValidator.js';

const UserRoute = express.Router();

UserRoute.post('/register',signupValidators,RegisterUser);
UserRoute.post('/login',LoginUser);
UserRoute.get('/profile',IsAuthenticated,UserProfile);
UserRoute.get('/allRead',IsAuthenticated,MarkAllread);
UserRoute.post('/sendreq',IsAuthenticated,SendDoctorReq);
UserRoute.get('/notification',IsAuthenticated,GetAllNotifiaction);
UserRoute.get('/matched',IsAuthenticated,getMatchedAppointments);
UserRoute.post('/appointmentReq/:id',IsAuthenticated,Appointmentreq);

export default UserRoute;
