
import RecommendMail from "../../lib/aggregates/recommend_mail.js";

import Article from "../../lib/aggregates/article.js";

import Company from "../../lib/aggregates/company.js";

import Recruitment from "../../lib/aggregates/recruitment.js";

import MailTemplate from "../../lib/aggregates/mail_template.js";

import HfMember from "../../lib/aggregates/hf_member.js";

import User from "../../lib/aggregates/user.js";

import Event from "../../lib/aggregates/event.js";

import Application from "../../lib/aggregates/application.js";

const Aggregates = {}

Aggregates.RecommendMail = RecommendMail

Aggregates.Article = Article

Aggregates.Company = Company

Aggregates.Recruitment = Recruitment

Aggregates.MailTemplate = MailTemplate

Aggregates.HfMember = HfMember

Aggregates.User = User

Aggregates.Event = Event

Aggregates.Application = Application

export default Aggregates