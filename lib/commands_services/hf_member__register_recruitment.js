import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"recruitment":{"id":null,"company_id":null,"title":{"ja":null,"en":null},"required_jlpt":null,"is_available_from_overseas":null,"peculiar_apply_url":null,"is_released":null,"target_study_department_category_ids":null,"job_category_ids":null,"recruitment_detail":{"id":null,"salary_unit":null,"is_salary_decided_by_interview":null,"salary_min_for_professional_school_students":null,"salary_min_for_bachelor_students":null,"salary_min_for_master_students":null,"salary_min_for_doctor_students":null,"salary_min_for_mid_career":null,"salary_max_for_professional_school_students":null,"salary_max_for_bachelor_students":null,"salary_max_for_master_students":null,"salary_max_for_doctor_students":null,"salary_max_for_mid_career":null,"model_salary_allowance_value":null,"model_salary_allowance_value_description":{"ja":null,"en":null},"has_bonus":null,"is_adopting_flextime":null,"work_start_at":null,"work_end_at":null,"work_break_time":{"ja":null,"en":null},"work_hours":null,"work_time_description":{"ja":null,"en":null},"has_training":null,"job_category_name_of_company":{"ja":null,"en":null},"job_description":{"ja":null,"en":null},"required_skills_description":{"ja":null,"en":null},"ideal_statue":{"ja":null,"en":null},"training_description":{"ja":null,"en":null},"_destroy":null},"required_japanese_level":{"id":null,"speaking_level_id":null,"listening_level_id":null,"writing_level_id":null,"reading_level_id":null,"_destroy":null},"required_english_level":{"id":null,"general_level_id":null,"_destroy":null},"required_other_language_levels":[{"id":null,"language_id":null,"general_level_id":null,"speaking_level_id":null,"listening_level_id":null,"writing_level_id":null,"reading_level_id":null,"_destroy":null}],"recruitment_careers":[{"id":null,"first_living_country_id":null,"last_living_country_id":null,"is_work_globaly":null,"years_in_first_country":null,"description":{"ja":null,"en":null},"_destroy":null}],"recruitment_company_offices":[{"id":null,"company_office_id":null,"description":{"ja":null,"en":null},"_destroy":null}],"recruitment_selections":[{"id":null,"selection_type_id":null,"is_online":null,"place":{"ja":null,"en":null},"step_num":null,"selection_language_ids":null,"_destroy":null}],"recruitment_required_skills":[{"id":null,"skill_id":null,"description":{"ja":null,"en":null},"_destroy":null}]}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.patch("/jtj/commands/hf_member__register_recruitment", {params: params});
  }
}