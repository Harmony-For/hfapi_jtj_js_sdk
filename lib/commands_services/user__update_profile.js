import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"user":{"id":null,"email":null,"first_name":null,"last_name":null,"home_country_id":null,"living_country_id":null,"hope_first_work_country_id":null,"living_prefecture_id":null,"birth_day":null,"phone_num":null,"is_hope_phone_consulting":null,"jlpt":null,"gender":null,"skill_description":null,"agree_policy_at":null,"first_name_kana":null,"last_name_kana":null,"address":null,"resume_face_image":null,"research_description":null,"has_driver_license":null,"user_survey_answers":[{"id":null,"survey_id":null,"value":null}],"user_hope_working_prefectures":[{"id":null,"prefecture_id":null,"_destroy":null}],"user_interesting_job_categories":[{"id":null,"job_category_id":null,"_destroy":null}],"user_language_skills":[{"id":null,"language_id":null,"speaking_level_id":null,"listening_level_id":null,"writing_level_id":null,"reading_level_id":null,"_destroy":null}],"user_skills":[{"id":null,"skill_id":null,"description":null,"_destroy":null}],"user_universities":[{"id":null,"university_id":null,"university_academic_degree_id":null,"university_student_category_id":null,"study_department_category_id":null,"graduate_at":null,"enroll_at":null,"_destroy":null}],"user_schools":[{"id":null,"school_category_id":null,"school_name":null,"country_id":null,"graduate_at":null,"enroll_at":null,"_destroy":null}],"user_job_histories":[{"id":null,"company_name":null,"job_category_id":null,"job_category_other":null,"job_description":null,"quit_reason_other":null,"enter_date":null,"leave_date":null,"_destroy":null,"user_job_history_quit_reasons":[{"id":null,"job_history_quit_reason_id":null}]}],"user_language_examinations":[{"id":null,"language_examination_id":null,"result":null,"_destroy":null}]}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.patch("/jtj/commands/user__update_profile", {params: params});
  }
}