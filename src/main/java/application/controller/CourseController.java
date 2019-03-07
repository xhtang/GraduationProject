package application.controller;

import application.controller.json_model.Course_json;
import application.controller.json_model.Success;
import application.model.*;
import application.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin
public class CourseController {
    @Autowired
    private CourseService courseService;
    @Autowired
    private UserService userService;

    @RequestMapping(value = "/add_course_student/{user_name}/{selectCode}", method = RequestMethod.POST)
    public Success add_course_student(@PathVariable String user_name,@PathVariable String selectCode, @RequestBody Course course_json) {
        Success s = new Success();
        s.setSuccess(courseService.selectCourse(user_name, selectCode, course_json));
        return s;
    }

    @RequestMapping(value = "/add_course_teacher/{user_name}", method = RequestMethod.POST)
    public Success add_course_teacher(@PathVariable String user_name, @RequestBody Course course) {
        Success s = new Success();
        s.setSuccess(courseService.openCourse(user_name, course));

        return s;
    }

    @RequestMapping(value = "/delete_course_teacher/{user_name}/{course_id}/{course_name}", method = RequestMethod.DELETE)
    public Success delete_course_teacher(@PathVariable String user_name, @PathVariable String course_id, @PathVariable String course_name) {
        Success s = new Success();
        s.setSuccess(courseService.deleteCourse(user_name, course_id, course_name));
        return s;
    }

    @RequestMapping(value = "/search_course", method = RequestMethod.GET)
    public Course_json[] search_course() {
        Course[] courses= courseService.findCourses();

        return getJsonModel(courses);
    }

    @RequestMapping(value = "/student_courses/{user_name}", method = RequestMethod.GET)
    public Course_json[] student_courses(@PathVariable String user_name) {
        //得到课程列表
        Course[] courses = courseService.student_courses(user_name);
        return getJsonModel(courses);
    }

    @RequestMapping(value = "/teacher_courses/{user_name}", method = RequestMethod.GET)
    public Course_json[] teacher_courses(@PathVariable String user_name) {

        Teacher teacher = userService.findTeacherByName(user_name);
        if (teacher == null) {
            return null;
        }

        //得到数据库的课程列表
        Course[] courses = userService.getTeacherCourses(teacher.getId());

        return getJsonModel(courses);
    }

    @RequestMapping(value = "/course_students/{courseId}", method = RequestMethod.GET)
    public Iterable<Map<String, Object>> course_students(@PathVariable String courseId) {
        return userService.getStudentsByCourseId(courseId);
    }

    private static Course_json[] getJsonModel(Course[] courses){
        //只提取我们需要的信息，转换为json
        Course_json[] course_jsons = new Course_json[courses.length];
        if (courses.length > 0) {
            for (int i = 0; i < courses.length; i++) {
                course_jsons[i] = new Course_json();
                course_jsons[i].setCourse_id(courses[i].getCourse_id());
                course_jsons[i].setCourse_name(courses[i].getCourse_name());
                course_jsons[i].setCourse_number(courses[i].getCourse_number());
                course_jsons[i].setSelectCode(courses[i].getSelectCode());
            }
        }
        return course_jsons;
    }
}
