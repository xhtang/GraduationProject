package application.service;

import application.model.*;
import application.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class UserService {
    @Autowired
    private StudentRepository studentRepository;
    @Autowired
    private TeacherRepository teacherRepository;
    @Autowired
    private UserTempRepository userTempRepository;

    public boolean findUser(String name) {
        Student stu = studentRepository.findByName(name);
        Teacher tea = teacherRepository.findByName(name);

        return (stu != null || tea != null);
    }

    public boolean findTemp(String name) {
        UserTemp userTemp = userTempRepository.findByUser_name(name);
        return (userTemp != null);
    }

    public Teacher findTeacherByName(String name) {
        return teacherRepository.findByName(name);
    }

    public Student findStudentByName(String name) {
        return studentRepository.findByName(name);
    }

    public Teacher saveTeacher(Teacher teacher) {
        return teacherRepository.save(teacher);
    }

    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

    public void saveUserTemp(UserTemp userTemp) {
        userTempRepository.save(userTemp);
    }

    public UserTemp findUserByName(String name) {
        return userTempRepository.findByUser_name(name);
    }

    public void deleteUser(UserTemp userTemp) {
        userTempRepository.delete(userTemp);
    }

    public Course[] getStudentCourses(long id) {
        return studentRepository.findCourses(id);
    }

    public Course[] getTeacherCourses(long id) {
        return teacherRepository.findCourses(id);
    }

    public Note[] getStudentNotes(long id){return studentRepository.findNotes(id);}

    public Iterable<Map<String, Object>> getStudentsByCourseId(String course_id) {
        return studentRepository.findStudentsToCourse(course_id);
    }
}
