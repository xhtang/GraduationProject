package fudan.ss.mindmapbackend.service;

import fudan.ss.mindmapbackend.model.Course;
import fudan.ss.mindmapbackend.model.Mindmap;
import fudan.ss.mindmapbackend.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CourseService {
    @Autowired
    private CourseRepository courseRepository;

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
