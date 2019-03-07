package application.controller.json_model;

public class NodesAccuracy {
    private String node_id;
    private String node_topic;
    private String number;
    private String correct_number;
    private String accuracy;

    public String getNode_topic() {
        return node_topic;
    }

    public void setNode_topic(String node_topic) {
        this.node_topic = node_topic;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getCorrect_number() {
        return correct_number;
    }

    public void setCorrect_number(String correct_number) {
        this.correct_number = correct_number;
    }

    public String getAccuracy() {
        return accuracy;
    }

    public void setAccuracy(String accuracy) {
        this.accuracy = accuracy;
    }

    public String getNode_id() {
        return node_id;
    }

    public void setNode_id(String node_id) {
        this.node_id = node_id;
    }
}

