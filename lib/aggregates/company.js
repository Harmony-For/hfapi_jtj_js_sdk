import Query from "../../lib/queries_services/aggregates__company.js"
import BaseAggregate from "../base_aggregate.js"

class Company extends BaseAggregate {

  container_hash(){
    return {"company_cc_emails":[{"email":null}],"company_employees":[{"first_name":null,"last_name":null,"first_name_kana":null,"last_name_kana":null,"position":null,"phone_num":null,"email":null,"is_main_person":null}],"company_hf_members":[{"hf_member_id":null}],"company_internal_datum":{"memo":null,"gijiroku_url":null,"resume_submit_alert":null},"official_name_ja":null,"official_name_en":null,"appeal_point":null,"business_description":null,"hf_recommend_sentence":null,"establishment_nendo_year":null,"contract_num":null,"admin_update_at":null,"holiday_description":null,"paid_leave_description":null,"employee_welfare_description":null,"logo_url":null,"bonus_paid_months":null,"bonus_months_worth":null,"company_offices":[{"prefecture_id":null,"name":null,"postal_code":null,"address_ja":null,"address_en":null,"is_main_office":null,"company_office_transport_means":[{"transport_mean_id":null,"closest_stop_name_ja":null,"closest_stop_name_en":null,"walking_minutes_from_closest_stop":null,"description":null}]}],"company_annually_data":[{"nendo_year":null,"sales_in_last_year":null,"capital":null,"num_of_employees":null,"num_of_employees_with_consolidated_companies":null}],"company_annually_foreigner_data":[{"country_id":null,"nendo_year":null,"num_of_technical_trainee":null,"num_of_full_time":null,"have_employed_intl_student":null,"num_of_former_intl_students":null}],"company_appliable_terms":[{"joining_nendo":null,"joining_season":null,"start_at":null}],"company_joinable_months":[{"nendo":null,"month":null}],"company_country_relations":[{"country_id":null,"company_country_relation_type_id":null}],"company_industry_sectors":[{"industry_sector_id":null}],"company_allowances":[{"allowance_id":null}],"company_insurances":[{"insurance_id":null}],"company_housing_supports":[{"housing_support_id":null}],"company_company_cultures":[{"company_culture_id":null}],"company_religious_considerations":[{"religious_consideration_id":null}]}
  }

  query(){
    return Query
  }

}

export default Company