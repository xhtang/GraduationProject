package application.controller.json_model;

/**
 * Creator: DreamBoy
 * Date: 2018/12/25.
 */
public class AssignmentShortStudent {
    private Long assignmentLongId;
    private String title;
    private String answer;

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Long getAssignmentLongId() {
        return assignmentLongId;
    }

    public void setAssignmentLongId(Long assignmentLongId) {
        this.assignmentLongId = assignmentLongId;
    }
}
