
import HfMember from "../../lib/aggregates/hf_member.js";

import Article from "../../lib/aggregates/article.js";

import Application from "../../lib/aggregates/application.js";

import RecommendMail from "../../lib/aggregates/recommend_mail.js";

import User from "../../lib/aggregates/user.js";

import Recruitment from "../../lib/aggregates/recruitment.js";

import MailTemplate from "../../lib/aggregates/mail_template.js";

import Company from "../../lib/aggregates/company.js";

const Aggregates = {}

Aggregates.HfMember = HfMember

Aggregates.Article = Article

Aggregates.Application = Application

Aggregates.RecommendMail = RecommendMail

Aggregates.User = User

Aggregates.Recruitment = Recruitment

Aggregates.MailTemplate = MailTemplate

Aggregates.Company = Company

export default Aggregates