import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"target":{"countries":false,"study_faculty_categories":false,"study_department_categories":false,"languages":false,"prefectures":false,"job_categories":false,"industries":false,"industry_sectors":false,"university_academic_degrees":false,"university_student_categories":false,"school_categories":false,"general_language_levels":false,"speaking_levels":false,"listening_levels":false,"reading_levels":false,"writing_levels":false,"language_examinations":false,"transport_means":false,"company_country_relation_types":false,"company_cultures":false,"dresses":false,"allowances":false,"insurances":false,"housing_supports":false,"religious_considerations":false,"personalities":false,"selection_types":false,"skill_categories":false,"skills":false,"user_surveys":false,"job_history_quit_reasons":false,"recruit_intl_students_reasons":false,"hf_members":false,"company_channels":false}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.get("/jtj/queries/get_master_data", {params: params});
  }
}