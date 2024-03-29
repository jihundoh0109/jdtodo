from backend.validators.common import Validator

class ProjectValidator(Validator):
    def is_project_json_valid(self, project_json):
        if self.has_missing_body_or_empty_fields(project_json, 'name'):
            return False 
        project_name = project_json['name']
        if len(project_name) > 25:
            self.error = 'Project name must be less than 25 characters'
            return False 
        return True 
        