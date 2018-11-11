package fudan.ss.mindmapbackend.repository;

import fudan.ss.mindmapbackend.model.StudentAnswer;
import org.springframework.data.repository.CrudRepository;

public interface StudentAnswerRepository extends CrudRepository<StudentAnswer, Long> {

    StudentAnswer findByStudentNameAndAndAssignmentId(String name, String id);
}
