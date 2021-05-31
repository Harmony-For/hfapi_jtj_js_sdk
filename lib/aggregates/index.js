
import User from "../../lib/aggregates/user.js";

import Article from "../../lib/aggregates/article.js";

import Course from "../../lib/aggregates/course.js";

import Application from "../../lib/aggregates/application.js";

import RecommendMail from "../../lib/aggregates/recommend_mail.js";

import MailTemplate from "../../lib/aggregates/mail_template.js";

import Event from "../../lib/aggregates/event.js";

import Lesson from "../../lib/aggregates/lesson.js";

import Company from "../../lib/aggregates/company.js";

import HfMember from "../../lib/aggregates/hf_member.js";

import Recruitment from "../../lib/aggregates/recruitment.js";

const Aggregates = {}

Aggregates.User = User

Aggregates.Article = Article

Aggregates.Course = Course

Aggregates.Application = Application

Aggregates.RecommendMail = RecommendMail

Aggregates.MailTemplate = MailTemplate

Aggregates.Event = Event

Aggregates.Lesson = Lesson

Aggregates.Company = Company

Aggregates.HfMember = HfMember

Aggregates.Recruitment = Recruitment

export default Aggregates