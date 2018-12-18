package fudan.ss.mindmapbackend.controller;

import fudan.ss.mindmapbackend.controller.json_model.Success;
import fudan.ss.mindmapbackend.controller.json_model.User;
import fudan.ss.mindmapbackend.model.*;
import fudan.ss.mindmapbackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@CrossOrigin
public class MainController {
    @Autowired
    private UserService userService;

    @Autowired
    private fudan.ss.mindmapbackend.service.MailService MailService;

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public Success login(@RequestBody User user) {

        Success s = new Success();
        s.setSuccess(false);

        String name = user.getUser_name();
        String password = user.getUser_pwd();
        String identity = user.getIdentity();

        //首先判断user_name是否已经存在
        if (identity.equals("teacher")) {
            Teacher tea = userService.findTeacherByName(name);
            //再判断密码是否一致
            if (tea != null) {
                if (tea.getPassword().equals(password))
                    s.setSuccess(true);
            }
        } else if (identity.equals("student")) {
            Student stu = userService.findStudentByName(name);
            //再判断密码是否一致
            if (stu != null) {
                if (stu.getPassword().equals(password))
                    s.setSuccess(true);
            }
        }

        return s;
    }

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public Success register(@RequestBody UserTemp user) {
        String name = user.getUser_name();
        String identity = user.getIdentity();
        String password = user.getUser_pwd();

        Success success = new Success();
        success.setSuccess(false);

        //首先判断user_name是否已经存在
        boolean if_exist = (userService.findUser(name));
        if (!if_exist) {
            if (identity.equalsIgnoreCase("teacher")) {
                Teacher teacher = new Teacher();
                teacher.setName(name);
                teacher.setPassword(password);
                teacher = userService.saveTeacher(teacher);
                System.out.println("      老师id:    "+ teacher.getId() + "!!!!!!!!!!!");
                success.setSuccess(true);

            } else {
                Student student = new Student();
                //student.setId(id);
                student.setName(name);
                student.setPassword(password);
                student = userService.saveStudent(student);
                System.out.println("      学生id:    "+ student.getId() + "!!!!!!!!!!!");
                success.setSuccess(true);
            }
            return success;
        }
        else {
            return success;
        }
    }

    @RequestMapping(value = "/modify_password", method = RequestMethod.POST)
    public Success modifyPassword(@RequestBody UserTemp user) {

        String name = user.getUser_name();
        String password = user.getUser_pwd();

        //首先判断user_name是否已经存在
        boolean if_exist = userService.findUser(name);

        Student stu = userService.findStudentByName(name);
        Teacher tea = userService.findTeacherByName(name);

        if (stu != null) {
            stu.setPassword(password);
            userService.saveStudent(stu);
        }

        if (tea != null) {
            tea.setPassword(password);
            userService.saveTeacher(tea);
        }

        Success s = new Success();
        s.setSuccess(if_exist);
        return s;
    }
}
