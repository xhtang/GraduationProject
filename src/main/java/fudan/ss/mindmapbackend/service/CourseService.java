package fudan.ss.mindmapbackend.service;

import fudan.ss.mindmapbackend.controller.json_model.NodeValue;
import fudan.ss.mindmapbackend.model.*;
import fudan.ss.mindmapbackend.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class CourseService {
    @Autowired
    private CourseRepository courseRepository;
    @Autowired
    private StudentAnswerRepository studentAnswerRepository;
    @Autowired
    private MindmapRepository mindmapRepository;
    @Autowired
    private NodeRepository nodeRepository;
    @Autowired
    private TeacherRepository teacherRepository;

    public boolean deleteCourse(String user_name, String course_id) {
        // 首先检查该用户有无权限
        Teacher teacher = teacherRepository.findByName(user_name);
        Set<Course> courses = teacher.getCourses();
        boolean flag = false;
        for (Course course: courses) {
            if (course.getCourse_id().equals(course_id)) {
                flag = true;
                break;
            }
        }
        if (!flag) //flag 是false表示这个用户没有开这门课
            return false;

        Course target = courseRepository.findByCourseId(course_id);
        courseRepository.quitCourse(target.getId());
        courseRepository.deleteCourse(target.getId());

        return true;
    }

    public void deleteStudentAnsByCourseId(String course_id) {
        Course course = courseRepository.findByCourseId(course_id);
        Mindmap[] mindmaps = courseRepository.findMindmaps(course.getId());

        for (Mindmap mindmap: mindmaps) {
            deleteStudentAnsByMindmapId(mindmap.getMindmap_id());
        }
    }

    public void deleteStudentAnsByMindmapId(String mindmap_id) {
        //获得mindmap
        Mindmap tempMindmap = mindmapRepository.findByMindmap_id(mindmap_id);
        Node root_node = mindmapRepository.findRootNode(tempMindmap.getId());

        //深度遍历
        Queue<Node> nodes = new LinkedList<>();
        Queue<Node> nodesChildren = new LinkedList<>();
        nodes.add(root_node);

        while (!nodes.isEmpty() || !nodesChildren.isEmpty()) {

            if (nodes.isEmpty()) {
                nodes = nodesChildren;
                nodesChildren = new LinkedList<>();
            }
            Node thisNode = nodes.peek();

            // 选择题删除答案
            AssignmentMultiple[] multiples = nodeRepository.findAssignmentMultiple(thisNode.getLong_id());
            for (AssignmentMultiple mul : multiples) {
                String mul_id =mul.getMulti_id() + mul.getId();
                deleteStudentAns(mul_id);
            }

            // 判断题删除答案
            AssignmentJudgment[] judgments = nodeRepository.findAssignmentJudgments(thisNode.getLong_id());
            for (AssignmentJudgment judgment : judgments) {
                String jud_id =judgment.getJudge_id() + judgment.getId();
                deleteStudentAns(jud_id);
            }

            // 简答题删除答案
            AssignmentShort[] shorts = nodeRepository.findAssignmentShort(thisNode.getLong_id());
            for (AssignmentShort assignmentShort: shorts) {
                String sho_id = assignmentShort.getShort_id() + assignmentShort.getId();
                deleteStudentAns(sho_id);
            }

            Collections.addAll(nodesChildren, nodeRepository.findChildren(thisNode.getLong_id()));
            nodes.remove();
        }
    }

    public void deleteStudentAns(String assignmentId) {
        List<StudentAnswer> studentAnswerList = studentAnswerRepository.findByAssignmentId(assignmentId);
       studentAnswerRepository.deleteAll(studentAnswerList);
    }

    public Course findByCourseId(String courseId) {
        return courseRepository.findByCourseId(courseId);
    }

    public void saveCourse(Course course) {
        courseRepository.save(course);
    }

    public Course[] findCourses() {
        return courseRepository.findAllCourses();
    }

    public Mindmap[] findMindmaps(long id) {
        return courseRepository.findMindmaps(id);
    }

    public void save(Course course) {
        courseRepository.save(course);
    }

}
