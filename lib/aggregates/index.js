
import Company from "../../lib/aggregates/company.js";

import Application from "../../lib/aggregates/application.js";

import Article from "../../lib/aggregates/article.js";

import HfMember from "../../lib/aggregates/hf_member.js";

import Recruitment from "../../lib/aggregates/recruitment.js";

import RecommendMail from "../../lib/aggregates/recommend_mail.js";

import Event from "../../lib/aggregates/event.js";

import MailTemplate from "../../lib/aggregates/mail_template.js";

import User from "../../lib/aggregates/user.js";

const Aggregates = {}

Aggregates.Company = Company

Aggregates.Application = Application

Aggregates.Article = Article

Aggregates.HfMember = HfMember

Aggregates.Recruitment = Recruitment

Aggregates.RecommendMail = RecommendMail

Aggregates.Event = Event

Aggregates.MailTemplate = MailTemplate

Aggregates.User = User

export default Aggregates