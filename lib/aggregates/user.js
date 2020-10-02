import Query from "../../lib/queries_services/aggregates__user.js"
import BaseAggregate from "../base_aggregate.js"

class User extends BaseAggregate {

  container_hash(){
    return {"user_appraisal":{"memo":null},"user_hf_members":[{"hf_member":{"id":null,"last_name_ja":null}}],"id":null,"email":null,"first_name":null,"last_name":null,"page_language_id":null,"jlpt":null,"is_hope_phone_consulting":null,"agree_policy_at":null,"skill_description":null,"graduate_latest_school_at":null,"full_name":null,"gender":null,"phone_num":null,"birth_day":null,"has_driver_license":null,"living_prefecture_id":null,"hope_first_work_country_id":null,"is_hope_work_globaly":null,"research_description":null,"age":null,"is_mid_career?":null,"study_department_category_ids":null,"hope_first_work_country":{"id":null,"name":null,"name_ja":null,"name_en":null},"hope_last_work_country":{"id":null,"name":null,"name_ja":null,"name_en":null},"home_country":{"id":null,"name":null,"name_ja":null,"name_en":null},"living_country":{"id":null,"name":null,"name_ja":null,"name_en":null},"living_prefecture":{"id":null,"name":null,"name_ja":null,"name_en":null},"user_survey_answers":[{"survey_id":null,"value":null}],"user_hope_working_prefectures":[{"prefecture":{"id":null,"name":null,"name_ja":null,"name_en":null}}],"user_interesting_job_categories":[{"job_category":{"id":null,"name":null,"name_ja":null,"name_en":null}}],"user_interesting_industries":[{"industry":{"id":null,"name":null,"name_ja":null,"name_en":null}}],"user_language_skills":[{"language":{"name":null,"name_ja":null,"name_en":null,"symbol":null},"speaking_level":{"name":null,"name_ja":null,"name_en":null,"level":null},"listening_level":{"name":null,"name_ja":null,"name_en":null,"level":null},"writing_level":{"name":null,"name_ja":null,"name_en":null,"level":null},"reading_level":{"name":null,"name_ja":null,"name_en":null,"level":null}}],"user_skills":[{"description":null,"skill":{"id":null,"name":null,"name_ja":null,"name_en":null,"skill_category":{"id":null,"name":null,"name_ja":null,"name_en":null}}}],"user_universities":[{"graduate_at":null,"university":{"id":null,"local_name":null},"university_academic_degree":{"id":null,"name":null,"name_ja":null,"name_en":null},"university_student_category":{"id":null,"name":null,"name_ja":null,"name_en":null},"study_department_category":{"id":null,"name":null,"name_ja":null,"name_en":null}}],"user_schools":[{"id":null,"school_name":null,"graduate_at":null,"enroll_at":null,"school_category":{"id":null,"name":null,"name_ja":null,"name_en":null},"country":{"id":null,"name":null,"name_ja":null,"name_en":null}}],"user_job_histories":[{"company_name":null,"job_category_other":null,"job_description":null,"quit_reason_other":null,"job_category":{"id":null,"name":null,"name_ja":null,"name_en":null},"user_job_history_quit_reasons":[{"job_history_quit_reason":{"id":null,"sentence_ja":null}}]}]}
  }

  query(){
    return Query
  }

}

export default User