package fudan.ss.mindmapbackend.repository;

import fudan.ss.mindmapbackend.model.StudentAnswer;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface StudentAnswerRepository extends CrudRepository<StudentAnswer, Long> {

    StudentAnswer findByStudentNameAndAndAssignmentId(String name, String id);

    List<StudentAnswer> findByAssignmentId(String id);
}
