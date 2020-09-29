import Query from "../../lib/queries_services/aggregates__application.js"
import BaseAggregate from "../base_aggregate.js"

class Application extends BaseAggregate {

  container_hash(){
    return {"is_admitted_edit_resume_by_hf":null,"have_submitted_resume_by_user_at":null,"sent_resume_to_company_at":null,"get_resume_result_at":null,"is_resume_passed":null,"selection_finished_at":null,"is_passed":null,"result_reason":null,"is_declined_by_hf":null,"is_quit_by_student":null,"reason_of_quit_by_student":null,"is_student_accept_offer":null,"memo":null,"reason_of_result":null,"reason_of_result_category":null,"resume":{"hf_remark":null,"self_pr":null,"skill_pr":null,"why_select_company":null,"why_select_career":null,"why_good_at_job":null,"about_special_skill":null,"self_pr_jt":null,"skill_pr_jt":null,"why_select_company_jt":null,"why_select_career_jt":null,"why_good_at_job_jt":null,"about_special_skill_jt":null},"application_hf_members":[{"hf_member":{"id":null,"email":null,"phone_num":null,"first_name_ja":null,"last_name_ja":null,"first_name_en":null,"last_name_en":null,"nick_name_ja":null,"nick_name_en":null}}],"state":null,"user_id":null,"recruitment_id":null,"id":null,"latest_interview":{"id":null,"application_id":null,"interview_number":null,"fixed_schedule_at":null,"conduct_at":null,"is_online":null,"place":null,"google_map_url":null,"get_result_at":null,"is_passed":null,"online_link":null}}
  }

  query(){
    return Query
  }

}

export default Application