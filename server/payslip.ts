import * as express from 'express';
export const payslip = express.Router();

payslip.get('/', (req, res) => res.send({id: "1", name: "Joanna", salary: "30000"}));
