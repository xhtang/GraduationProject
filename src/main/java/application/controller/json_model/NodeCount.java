package application.controller.json_model;

public class NodeCount {
    private String nodeId;
    private String nodeTopic;
    private int homeworkNum;
    private int resourceNum;
    private int coursewareNum;

    public String getNodeId() {
        return nodeId;
    }

    public void setNodeId(String nodeId) {
        this.nodeId = nodeId;
    }

    public String getNodeTopic() {
        return nodeTopic;
    }

    public void setNodeTopic(String nodeTopic) {
        this.nodeTopic = nodeTopic;
    }

    public int getHomeworkNum() {
        return homeworkNum;
    }

    public void setHomeworkNum(int homeworkNum) {
        this.homeworkNum = homeworkNum;
    }

    public int getResourceNum() {
        return resourceNum;
    }

    public void setResourceNum(int resourceNum) {
        this.resourceNum = resourceNum;
    }

    public int getCoursewareNum() {
        return coursewareNum;
    }

    public void setCoursewareNum(int coursewareNum) {
        this.coursewareNum = coursewareNum;
    }
}
