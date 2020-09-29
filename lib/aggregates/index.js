
import Application from "../../lib/aggregates/application.js";

import RecommendMail from "../../lib/aggregates/recommend_mail.js";

import User from "../../lib/aggregates/user.js";

import Recruitment from "../../lib/aggregates/recruitment.js";

import MailTemplate from "../../lib/aggregates/mail_template.js";

import Company from "../../lib/aggregates/company.js";

const Aggregates = {}

Aggregates.Application = Application

Aggregates.RecommendMail = RecommendMail

Aggregates.User = User

Aggregates.Recruitment = Recruitment

Aggregates.MailTemplate = MailTemplate

Aggregates.Company = Company

export default Aggregates