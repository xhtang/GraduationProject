package fudan.ss.mindmapbackend.controller.json_model;

/**
 * Creator: DreamBoy
 * Date: 2018/12/11.
 */
public class NodeValue {
    private String node_id;
    private String node_topic;
    private int score;
    private int studentScore;
    private double value;


    public String getNode_id() {
        return node_id;
    }

    public void setNode_id(String node_id) {
        this.node_id = node_id;
    }

    public String getNode_topic() {
        return node_topic;
    }

    public void setNode_topic(String node_topic) {
        this.node_topic = node_topic;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public int getStudentScore() {
        return studentScore;
    }

    public void setStudentScore(int studentScore) {
        this.studentScore = studentScore;
    }

    public double getValue() {
        return value;
    }

    public void setValue(double value) {
        this.value = value;
    }
}
