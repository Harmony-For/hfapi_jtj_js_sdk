import axios from "../axios.js"
import BaseParams from "../base_params.js"

class Params extends BaseParams {

  container_hash(){
    return {"company":{"id":null,"official_name_ja":null,"official_name_en":null,"appeal_point":{"ja":null,"en":null},"business_description":{"ja":null,"en":null},"hf_recommend_sentence":{"ja":null,"en":null},"establishment_nendo_year":null,"contract_num":null,"company_channel_id":null,"admin_update_at":null,"holiday_description":{"ja":null,"en":null},"paid_leave_description":{"ja":null,"en":null},"employee_welfare_description":{"ja":null,"en":null},"bonus_paid_months":null,"bonus_months_worth":null,"is_admit_to_use_sended_company_images":null,"is_admit_to_use_all_company_images":null,"is_interested_in_internship":null,"company_internal_datum":{"id":null,"memo":null,"gijiroku_url":null,"resume_submit_alert":null,"_destroy":null},"company_employees":[{"id":null,"first_name":null,"last_name":null,"first_name_kana":null,"last_name_kana":null,"position":null,"phone_num":null,"email":null,"is_main_person":null,"_destroy":null}],"company_cc_emails":[{"id":null,"email":null,"_destroy":null}],"company_offices":[{"id":null,"prefecture_id":null,"name":null,"postal_code":null,"address_ja":null,"address_en":null,"is_main_office":null,"_destroy":null,"company_office_transport_means":[{"id":null,"transport_mean_id":null,"closest_stop_name_ja":null,"closest_stop_name_en":null,"walking_minutes_from_closest_stop":null,"description":{"ja":null,"en":null},"_destroy":null}]}],"company_annually_data":[{"id":null,"nendo_year":null,"sales_in_last_year":null,"capital":null,"num_of_employees":null,"num_of_employees_with_consolidated_companies":null,"_destroy":null}],"company_annually_foreigner_data":[{"id":null,"country_id":null,"nendo_year":null,"num_of_technical_trainee":null,"num_of_full_time":null,"have_employed_intl_student":null,"num_of_former_intl_students":null,"_destroy":null}],"company_appliable_terms":[{"id":null,"joining_nendo":null,"joining_season":null,"start_at":null,"_destroy":null}],"company_joinable_months":[{"id":null,"nendo":null,"month":null,"_destroy":null}],"company_country_relations":[{"id":null,"country_id":null,"company_country_relation_type_id":null,"_destroy":null}],"company_industry_sectors":[{"id":null,"industry_sector_id":null,"_destroy":null}],"company_allowances":[{"id":null,"allowance_id":null,"_destroy":null}],"company_insurances":[{"id":null,"insurance_id":null,"_destroy":null}],"company_housing_supports":[{"id":null,"housing_support_id":null,"_destroy":null}],"company_company_cultures":[{"id":null,"company_culture_id":null,"_destroy":null}],"company_religious_considerations":[{"id":null,"religious_consideration_id":null,"_destroy":null}],"company_hf_members":[{"id":null,"hf_member_id":null,"_destroy":null}]}}
  }
}

export default {
  Params: Params,
  execute: function(params){
    return axios.patch("/jtj/commands/hf_member__register_company", {params: params});
  }
}