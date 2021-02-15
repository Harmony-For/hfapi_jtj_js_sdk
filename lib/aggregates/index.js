
import Application from "../../lib/aggregates/application.js";

import Article from "../../lib/aggregates/article.js";

import Company from "../../lib/aggregates/company.js";

import Event from "../../lib/aggregates/event.js";

import HfMember from "../../lib/aggregates/hf_member.js";

import MailTemplate from "../../lib/aggregates/mail_template.js";

import RecommendMail from "../../lib/aggregates/recommend_mail.js";

import Recruitment from "../../lib/aggregates/recruitment.js";

import User from "../../lib/aggregates/user.js";

const Aggregates = {}

Aggregates.Application = Application

Aggregates.Article = Article

Aggregates.Company = Company

Aggregates.Event = Event

Aggregates.HfMember = HfMember

Aggregates.MailTemplate = MailTemplate

Aggregates.RecommendMail = RecommendMail

Aggregates.Recruitment = Recruitment

Aggregates.User = User

export default Aggregates