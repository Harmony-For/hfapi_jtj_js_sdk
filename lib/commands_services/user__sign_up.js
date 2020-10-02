import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"user":{"email":null,"first_name":null,"last_name":null,"living_prefecture_id":null,"page_language_id":null,"jlpt":null,"is_hope_phone_consulting":null,"agree_policy_at":null,"skill_description":null,"hope_first_work_country_id":null,"hope_last_work_country_id":null,"graduate_latest_school_at":null,"gender":null,"phone_num":null,"birth_day":null,"has_driver_license":null,"home_country_id":null,"living_country_id":null,"is_hope_work_globaly":null,"research_description":null,"user_survey_answers":[{"survey_id":null,"value":null}],"user_hope_working_prefectures":[{"prefecture_id":null}],"user_interesting_job_categories":[{"job_category_id":null}],"user_language_skills":[{"language_id":null,"speaking_level_id":null,"listening_level_id":null,"writing_level_id":null,"reading_level_id":null}],"user_skills":[{"skill_id":null,"description":null}],"user_universities":[{"university_id":null,"university_academic_degree_id":null,"university_student_category_id":null,"study_department_category_id":null,"graduate_at":null}],"user_schools":[{"school_category_id":null,"country_id":null,"school_name":null,"graduate_at":null}],"user_job_histories":[{"company_name":null,"job_category_id":null,"job_category_other":null,"job_description":null,"quit_reason_other":null,"user_job_history_quit_reasons":[{"job_history_quit_reason_id":null}]}]},"password":null}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.patch("/jtj/commands/user__sign_up", {params: params});
  }
}