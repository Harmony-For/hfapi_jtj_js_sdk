import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"target":{"countries":null,"study_faculty_categories":null,"study_department_categories":null,"languages":null,"prefectures":null,"job_categories":null,"industries":null,"industry_sectors":null,"university_academic_degrees":null,"university_student_categories":null,"school_categories":null,"speaking_levels":null,"listening_levels":null,"reading_levels":null,"writing_levels":null,"language_examinations":null,"transport_means":null,"company_country_relation_types":null,"company_cultures":null,"dresses":null,"allowances":null,"insurances":null,"housing_supports":null,"religious_considerations":null,"personalities":null,"selection_types":null,"skill_categories":null,"skills":null,"user_surveys":null,"job_history_quit_reasons":null,"recruit_intl_students_reasons":null,"hf_members":null,"company_channels":null}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.get("/jtj/queries/get_master_data", {params: params});
  }
}