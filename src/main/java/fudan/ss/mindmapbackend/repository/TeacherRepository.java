package fudan.ss.mindmapbackend.repository;

import fudan.ss.mindmapbackend.model.Course;
import fudan.ss.mindmapbackend.model.Teacher;
import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Component;

@Component
public interface TeacherRepository extends Neo4jRepository<Teacher, Long> {
    @Query("MATCH (n:Teacher) WHERE n.name = ({name}) RETURN n")
    Teacher findByName(@Param("name") String name);

    @Query("start teacher = node({teacher_id}) match (teacher)-[:TEACH_IN]->(courses) return courses")
    Course[] findCourses(@Param("teacher_id") long teacher_id);

}
